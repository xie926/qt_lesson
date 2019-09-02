// 普世
const curry = require('./b.js');
function checkByRegExp (reg, string) {
    return reg.test(string);
}

let CheckCellPhone = curry(checkByRegExp)(/^1[3-9]\d{9}$/);
console.log(CheckCellPhone('18623452345'));
let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
console.log(checkEmail('test@163.com'));

console.log(checkByRegExp(/^1[3-9]\d{9}$/,'18623452345'));
// .com.cn
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'754211506@qq.com'));

checkByRegExp(/^1[3-9]\d{9}$/,'18623452345');
checkByRegExp(/^1[3-9]\d{9}$/,'13312341234');
checkByRegExp(/^1[3-9]\d{9}$/,'13643451212');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@163.com');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@99.com')
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@163.com')
