package demo

import (
	"fmt"
	"sync"
	"testing"
)

var mu sync.Mutex
var chain string

func TestMutex(t *testing.T) {
	chain = "main"
	A()
	fmt.Println(chain)

}
func A() {
	mu.Lock()
	defer mu.Unlock()
	chain = chain + " --> A"
	B()
}
func B() {
	chain = chain + " --> B"
	C()
}
func C() {
	mu.Lock()
	defer mu.Unlock()
	chain = chain + " --> C"
}

// 死锁了！为什么defer是退出后才进行解锁，嵌套调用一直defer不了，另一个又一直等待lock
