---
 
date: 2024-08-22
category:
  - Golang
tag:
  - Go
---
# mutex

### 互斥锁sync.Mutex

`Mutex.lock()`获取锁
`Mutex.Unlock()`释放锁
在 Lock 和 Unlock 方法之间的代码段称为资源的临界区，这一区间的代码是严格被锁保护的，是线程安全的，任何一个时间点最多只能有一个goroutine在执行。

#### sync.Mutex的数据结构

```go
type Mutex struct{
	state int32
	sema uint32
}
```
sync.Mutex由两个字段构成，state用来代表当前互斥锁处于的状态，sema用于控制锁状态的信号量
互斥锁主要记录了如下四种状态：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb72ab82c1a044f2ba460f472af7bf96~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

waiter_num：记录当前等待抢这个锁的goroutine数量
starving：当前锁时候处于饥饿状态，0：正常状态，1：饥饿状态
woken：当前锁是否有goroutine已被唤醒。0：没有goroutine被唤醒，1：有goroutine正在加锁过程
locked：当前锁是否被goroutine持有。0：未被持有，1：已被持有
sema信号量的作用：当持有锁的goroutine释放锁后，会释放sema信号量，这个信号量会被唤醒之前抢锁阻塞的goroutine来获取锁

#### 锁的两种模式：正常模式和饥饿模式

正常模式下，所有阻塞在等待队列中的goroutine会按顺序进行锁获取，当唤醒一个等待队列中的goroutine时，此goroutine并不会直接获取到锁，而是会和新请求锁的goroutine竞争。    通常新请求锁的goroutine更容易获取锁，这是因为新请求锁的goroutine正在占用cpu片执行，大概率可以直接执行到获取到锁的逻辑。
饥饿模式下， 新请求锁的goroutine不会进行锁获取，而是加入到队列尾部阻塞等待获取锁。
饥饿模式的触发条件：当一个goroutine等待锁的时间超过了1ms，互斥锁会切换到饥饿模式
饥饿模式的取消条件：当获取到这个锁的goroutine是等待锁队列中的最后一个goroutine，互斥锁会切换到正常模式；当获取到锁的这个goroutine的等待时间在1ms之内，互斥锁会切换到正常模式。

#### 注意事项：

1、在一个goroutine中执行Lock()加锁成功后，不要再重复进行加锁，否则会panic
2、在Lock()之前执行Unlock()释放锁会panic
3、对于同一把锁，可以在一个goroutine中执行Lock加锁成功后，可以在另一个goroutine中执行Unlock释放锁。

### 读写锁sync.RWMutex

> 读写锁不限制对资源的并发读，但是读写、写写操作无法并行执行

`RLock()`申请读锁
`RUnlock()`解除读锁
`Lock()`申请写锁
`Unlock()`解除写锁

#### sync.RWMutex的数据结构

```go
type RWMutex struct{
	w Mutex //复用互斥锁
	writeSem uint32 //写锁监听读锁释放的信号量
	readerSem uint32 //读锁监听写锁释放的信号量
	readerCount uint32 //当前正在执行读操作的数量
	readerWait int32 //当写操作被阻塞时，需要等待读操作完成的个数
}
```

#### 读操作如何防止并发读写问题？

 - RLock()申请读锁，每次执行该函数都会对readerCount++，此时当有写操作执行Lock()时会判断readerCount > 0，就会被阻塞
 - RUnLock()解除读锁，执行readerCount--，释放信号量唤醒等待写操作的goroutine

#### 写操作如何防止并发读写、并发写写问题？

 - Lock()申请写锁，获取互斥锁，此时会阻塞其他的写操作，并将readerCount置为-1，当有读操作进来时发现readerCount = -1，就知道了有写操作在进行，阻塞。
 - Unlock()解除写锁，会先通知所有阻塞的读操作goroutine，然后才会释放持有的互斥锁。

#### 为什么写操作不会被饿死？

 - 什么事写操作被饿死？这是由于写操作要等待读操作结束后才可以获取锁，而写操作在等待期间可能还有新的读操作持续到来，如果写操作等待所有的读操作结束，很可能会一直阻塞，这种现象叫做写操作被饿死
 - 通过RWMutex结构体中你的readerWait属性可以完美解决这个问题，当写操作到来是，会把RWMutex.readerCount值拷贝到RWMutex.readerWait中，用于标记在写操作面前的读操作个数，前面的读操作结束后，除了会递减RWMutex.readerCount，还会递减RWMutex.readerWait值，当RWMutex.readWait值变为0时唤醒写操作。



### 读写锁和互斥锁的区别

go语言标准库`sync`提供了两种锁，互斥锁`sync.Mutex`和读写锁`sync.RWMutex`

`sync.Mutex`,有两个方法，`Lock`和`Unlock`,我们可以通过在代码前调用 `Lock` 方法，在代码后调用` Unlock `方法来保证一段代码的互斥执行，也可以用 `defer` 语句来保证互斥锁一定会被解锁。在一个 Go 协程调用 `Lock` 方法获得锁后，其他请求锁的协程都会阻塞在 `Lock `方法，直到锁被释放。

`sync.RWMutex`,读写锁分为读锁和写锁，读锁是允许同时执行的，但写锁是互斥的。`sync.RWMutex`提供四个方法，`Lock`加写锁，`Unlock `释放写锁，`RLock `加读锁，`RUnlock`释放读锁

读锁之间不互斥，没有写锁的情况下，读锁是无阻塞的，多个协程可以同时获得读锁。

写锁之间是互斥的，存在写锁，其他写锁阻塞。

写锁与读锁是互斥的，如果存在读锁，写锁阻塞，如果存在写锁，读锁阻塞。

互斥锁如何实现公平

> 互斥锁有两种状态：正常状态和饥饿状态。
>
> 在正常状态下，所有等待锁的` goroutine` 按照FIFO顺序等待。唤醒的` goroutine `不会直接拥有锁，而是会和新请求锁的` goroutine `竞争锁的拥有。新请求锁的 `goroutine` 具有优势：它正在 CPU 上执行，而且可能有好几个，所以刚刚唤醒的`goroutine` 有很大可能在锁竞争中失败。在这种情况下，这个被唤醒 `goroutine`会加入到等待队列的前面。 如果一个等待的 `goroutine` 超过 `1ms `没有获取锁，那么它将会把锁转变为饥饿模式。
>
> 在饥饿模式下，锁的所有权将从 unlock 的 `goroutine` 直接交给交给等待队列中的第一个。新来的 `goroutine` 将不会尝试去获得锁，即使锁看起来是 unlock 状态, 也不会去尝试自旋操作，而是放在等待队列的尾部。
>
> 如果一个等待的 `goroutine` 获取了锁，并且满足一以下其中的任何一个条件：(1)它是队列中的最后一个；(2)它等待的时候小于`1ms`。它会将锁的状态转换为正常状态。
>
> 正常状态有很好的性能表现，饥饿模式也是非常重要的，因为它能阻止尾部延迟的现象。





