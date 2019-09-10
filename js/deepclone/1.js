// 简单类型的拷贝是拷贝值
let a = 1; //值
let b = a;

b = 2;
console.log(a);
// 复杂数据类型，拷贝是引用式复制
let obj = {
    a: 1,
    b: function () {
        console.log('bbbb');
    }
};
// 二线公司
// 深拷贝
// 返回新的对象
// 数组中有什么操作，返回新数组的
obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 2;
// 浅拷贝
console.log(obj2); // 创业公司