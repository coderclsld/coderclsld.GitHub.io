package demo

import (
	"fmt"
	"sync"
	"testing"
)

type Once struct {
	m    sync.Mutex
	done uint32
}

func TestDoubleCheck(t *testing.T) {
	var mutx sync.Mutex
	once := &Once{m: mutx, done: 0}
	for _, v := range []int64{1, 2, 3, 4} {
		once.Do(func() { fmt.Println(v) })
	}
}

func (o *Once) Do(f func()) {
	if o.done == 1 {
		return
	}
	o.m.Lock()
	defer o.m.Unlock()
	if o.done == 0 {
		o.done = 1
		f()
	}
}
