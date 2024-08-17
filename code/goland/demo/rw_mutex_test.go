package demo

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

var rwmu sync.RWMutex
var count int

func TestRWMutex(t *testing.T) {
	go RWA()
	time.Sleep(2 * time.Second)
	rwmu.Lock()
	defer rwmu.Unlock()
	count++
	fmt.Println(count)

}

func RWA() {
	rwmu.RLock()
	defer rwmu.RUnlock()
	RWB()
}
func RWB() {
	time.Sleep(5 * time.Second)
	RWC()
}
func RWC() {
	rwmu.RLock()
	defer rwmu.RUnlock()
}
