// const {} = require('util')
const fs = require('fs')
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      // fn === fs.readFile
      fn(...args, (err, data) => {
        if(err) {
          reject(err);
        }else{
          resolve(data);  
        }
      })
    })
  }
}
const myReadFile = promisify(fs.readFile);
myReadFile('./a.txt', 'utf8').then(res => console.log(res));