---
icon: pen-to-square
date: 2024-08-22
category:
  - Golang
tag:
  - Go
---
# go简单优化笔记

### 数组和切片

#### 1、提前为切片分配内存
```go
for i:0;i<100;i++{
    slice = append(slice,i)
}
```
首先有一个前提，当原slice容量小于1024，则新slice容量将扩大为原来的两倍，当原slice容量大于等于1024，则新的slice容量将扩大为原来的1.25倍
那么上面的代码可以理解为slice 从1扩容到2、4、8、16、32、64、128,那可想而知，需要进行多次的扩容，如果是像现在的几次扩容还好，那要是量很大，并且原本slice里面的元素就是个大struct，多次扩容和拷贝的过程会发生内存大规模的开辟，会对程序的性能造成影响。如果我们可以提前为slice设定一个值，那么例如128那么slice在开始时就会先分配好，避免大量的扩容操作影响性能，相比于扩容的内存开辟，直接在一开始就设定一个预分配值所占用的内存相比，适当的预分配内存性能更好且内存占用更少。

#### 2、不要忘记使用copy
如果在原先a的切片容量有1000，在a的基础上进行切片分割b = a[:5],按照字面看b的容量只有5，b的容量比a小很多，但是在底层结构中，b是指向和a同一块内存分配空间，b只是在标识上进行了范围限制，这样其实b还是和a共用一个底层数据结构，即时a没有被引用的话，a的1000切片大小内存也不会被回收，因为b也引用了这块内存。如果调用次数一多的话，内存泄露的问题的明显了。解决该问题的方法是使用copy函数创建新的目标切片b，将元素a复制到目标切片中。
```go
func lastNumsByCopy(origin []int) []int {
	result := make([]int, 2)
	copy(result, origin[len(origin)-2:])de
	return result
}
```

#### 3、正确进行迭代
range 在迭代过程中返回的是迭代值的拷贝，如果每次迭代的元素的内存占用很低，那么 for 和 range 的性能几乎是一样，例如 []int。但是如果迭代的元素内存占用较高，例如一个包含很多属性的 struct 结构体，那么 for 的性能将显著地高于 range，有时候甚至会有上千倍的性能差异。对于这种场景，建议使用 for，如果使用 range，建议只迭代下标，通过下标访问迭代值，这种使用方式和 for 就没有区别了。如果想使用 range 同时迭代下标和值，则需要将切片/数组的元素改为指针，才能不影响性能。

#### 4、因指针类型导致的内存泄露
对于不用的指针要置为nil

### 字符串

#### 1、拼接
如果拼接字符串可以在一个语句中完成，那就使用 + 操作符，如果需要在循环中执行此操作，使用 string.Builder，并使用它的 Grow 方法预先指定 Builder 的大小，减少内存分配次数

#### 2、转换
string 和 []byte 在底层结构上非常相近，有时这两种类型之间可以通过强转换来避免内存分配


### select

#### 1、select没有case会永久阻塞
```go
func main() {
  select {
  }
}
```
对于空的 select 语句，程序会被阻塞，确切的说是当前协程被阻塞，同时 Go 自带死锁检测机制，当发现当前协程再也没有机会被唤醒时，则会发生 panic。
fatal error: all goroutines are asleep - deadlock!

#### 2、select所有case均无法执行且没有default，则阻塞
```go
func main() {
  ch1 := make(chan int, 1)
  ch2 := make(chan int)
  select {
  case <- ch1:
      // 从有缓冲chan中读取数据，由于缓冲区没有数据且没有发送者，该分支会阻塞
      fmt.Println("Received from ch")
  case i := <- ch2:
            // 从无缓冲chan中读取数据，由于没有发送者，该分支会阻塞
      fmt.Printf("i is: %d", i)
  }
}
```
程序会发生因所有case不满足执行条件，且没有default分支，而阻塞，由于 Go 自带死锁检测机制，当发现当前协程再也没有机会被唤醒时，则会发生 panic：fatal error: all goroutines are asleep - deadlock!

#### 3、select多个case同时可以执行，随机选择一个case去执行