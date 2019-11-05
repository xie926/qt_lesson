// const s = new Set();
// [1,2,3,4,5,3,2,1].forEach(x => s.add(x)); //push方法和add方法的区别？
// console.log(s)


// let set = new Set([1,2,3,2,1])
// // console.log(set.length)
// console.log(set.size)


// let set = new Set()
// set.add(1).add(2).add(3)
// console.log(set)
// console.log(set.has(1))
// set.delete(1)
// console.log(set.has(1))


// Array.from 可以将set的数据转化为数组
// const item = new Set([1,2,3,2])
// const array = Array.from(item)
// console.log(array)


// Set的遍历顺序是根据插入顺序来定的
// keys()       包含集合中所有的键的迭代器
// values()     包含集合中所有的键的值的迭代器
// entries()    包含Set对象中所有的键值的迭代器
// forEach(callbackFn, thisArg)

let set = new Set([1,2,3])
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())
// for (let item of set.entries()) {
//   console.log(item)
// }
// set.forEach((key, value) => {
//   console.log(key+':'+value)
// })
// console.log(set) == console.log(set.values())

set = new Set([...set].map(item => item * 2))
set = new Set([...set].filter(item => item >= 4))
console.log(...set)