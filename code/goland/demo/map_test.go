package demo

import (
	"sync"
	"testing"
)

func TestMap(t *testing.T) {
	var m sync.Map
	m.LoadOrStore("a", 1)
	m.Delete("a")
}
