function sum(a, b, c) { // 一次性
    return a+b+c;
}

let _sum = carry(sum);
let A = _sum(1);
let B = A(2);
B(3)
// console.log(B(3))