setTimeout(() => {
  console.log(111111111111111111111111111)
}, 0);

console.time('test')
for (let index = 0; index < 1000000; index++) {
  index === (1000000- 1)
}
console.timeEnd('test')


console.log(2222222)

// 1. js引擎线程  
// 2. GUI线程  
// 3. HTTP网络请求线程（处理用户的 GET 或者 POST 等请求， 等到返回结果后将回调函数推入到任务队列当中）
// 4. 定时触发器线程， 等待执行时间结束后， 将执行函数推入到任务队列当中 （任务队列和事件队列的执行顺序？）
// 5. 浏览器事件处理线程， 

function test1() {
  test2()
  console.log("hello, I'am test1")
}

function test2() {
  console.log("hello, I'am test2")
}

function main() {
  console.log("hello, I'am main")
  setTimeout(() => {
    console.log("hello, I'am setTimeout")
  }, 0);
  test1()
}

main()

// step1: main() 先执行，进入线程，进入执行打印"hello, I'am main"
// step2: 遇见setTimeout, 将回调函数放入任务队列
// step3: main 调用 test1, test1 被放入stack中被执行
// step4: test1 执行， 调用 test2
// step5: test2 执行， 打印"hello, I'am test2"
// step6: 允许完 test2， 再执行 test1 打印"hello, I'am test1"
// step7: 主线程执行完毕，进入任务队列当中执行
// 