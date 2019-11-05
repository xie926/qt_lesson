// NO.1
// function Person(name) {
//   this.name = name
// }
// let p = new Person('XY')
// p.__proto__ == Person.prototype
// console.log(p.__proto__)
// console.log(Person.prototype)
// console.log(Person.__proto__)
// console.log(Function.__proto__)
// Function.__proto__ == Object.prototype





// No.2
// var foo = {}
// var foo = new Object()
// var F = function(){}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)
// console.log(foo.b)
// console.log(F.a)
// console.log(F.b)




// No.3
// function Person(name){
//   this.name = name
//   // return
//   // return 666
//   // return {}
//   // return {name}
// }
// let p = new Person('XY')
// console.log(p)



// No.4
// Array.prototype.methods = function () {}
// var myArray = [1,2,3,4,5,6,7]
// myArray.name = '蜗牛'
// for(let index in myArray){
//   console.log(index)
// }
// for...in 能遍历数组，但是存在以下缺陷，不建议拿它来遍历数组
// 1. index是索引为字符串型的数字，不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组的内部顺序进行
// 3. 使用for...in会遍历数组所有的可枚举属性，包括原型   *(!importent)
// 但是for...in 最适合用来遍历对象
// for...of
// 遍历的是数组的元素
// 不包括数组原型和索引

// 数组扁平化
let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
let oArr = [1,2,3,4,5,6,7,3,2,8]
// function flatten(arr) {
//   // 判断参数是否是数组,检测数组元素是否是整数或者数组
//   var result = [];
//   if (!Array.isArray(arr)) {
//       // 不是数组， 判断是否是整数
//       if (arr % 1 == 0) {
//           result.push(arr);
//       } else {
//           throw Error('The parameter contains NaN or contains not Integer!');
//       }
//   } else {
//       // 是数组，遍历
//       for (let i = 0; i < arr.length; i++) {
//            result = result.concat(flatten(arr[i]));
//       }
//   }
//   return result;
// }

// function outputArr(arr){
//   var res = []
//   for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//       res = res.concat(outputArr(arr[i]))
//     }else{
//       res.push(arr[i])
//     }
//   }
//   return res
// }

function outputArr(arr){
  return arr.reduce(function(pre,item){
    return pre.concat(Array.isArray(item)? outputArr(item) : item)
  },[])
}
console.log(outputArr(gArr))