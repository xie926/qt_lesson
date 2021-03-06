// const s = new Set();
// [1,2,3,4,5,4,3,2,1].forEach(x => s.add(x));
// console.log(s)

// let set = new Set([1,2,3,2,1])
// console.log(set.length)  // undefined
// console.log(set.size)  // undefined

let set = new Set()
set.add(1).add(2).add(3)
set.delete(1)
console.log(set)
console.log(set.has(1))


// 去重
// const s = new Set();
// [1, 2, 3, 4, 5, 3, 2, '1'].forEach(x => s.add(x))
// console.log(s)

let set = new Set([1, 2, 3, 2, 3])
console.log(set.size) // 3 Set()没有length属性

let set2 = new Set()
set2.add(1).add(2).add(3)
console.log(set2)
set2.delete(1)
console.log(set2.has(1))

const item = new Set([1, 2, 3])
const array = Array.from(item) // 转化为数组
console.log(array)


// Set的遍历顺序是根据插入顺序来定的
// keys() 包含集合中所有的键的迭代器
// values() 包含集合中所有的值的迭代器
// entries() 包含Set对像中所有的键值的迭代器
// forEach(callbackFn, thisArg)
let set3 = new Set([1 , 2, 3])
console.log(set3.keys()) // 没有键
console.log(set3.values())
console.log(set3.entries())
for (let item of set.entries()) {
  console.log(item)
}

set3.forEach((key, value) => {
  console.log(key, value)
})


let set4 = new Set([1, 2, 3, 2, 3])
set4 = new Set([...set4].filter(item => item > 2)) // filter过滤
console.log(set4)
// weakSet 对象允许你将弱引用对象存储在一个集合中