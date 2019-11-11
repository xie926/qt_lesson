// weakSet 对象允许你将弱引用对象存储在一个集合中  --- 弱应用版本的 Set

// var s = new Set()
// s.add(a)
// console.log(s)  //  Set { { foot: 'bar' } }

// var gan = new WeakSet()
// var a = {foot: 'bar'}
// gan.add(a)
// gan.delete(a)
// console.log(gan)  // WeakSet { [items unknown] }

var test = {
  name: 'test',
  content: {
    name: 'gan',
    age: '18'
  }
}
var ws = new WeakSet()   // 不用，马上被回收
ws.add(test.content)
test.content.age = '19'
console.log(ws)
delete test.content
console.log(ws)
console.log(test)

class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if(!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo实例上调用')
    }
  }
}