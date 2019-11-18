- 链接带来了页面的互联
  一切皆资源 链接表示 URL
  重新刷新 坏事 体验有点差
  SPA (Single Page Application)

## 路由的做法  vue-router   框架的实现
- 单页应用的结构
  不再是n个页面，1个页面，分为不动的部分和动的部分
  导航 nav  a   #/page1
  /page1 path  页面切换    
  ## 锚链接 
  URL 改变了的事件，container元素里动态DOM
  大型页面，方便跳转     页面内跳转到指定位置
  锚链接让点击链接，不跳转页面成为可能性    #开头

  路由接管一切？  new HashRouter();
  constructor  订阅hashChange事件

- new frontEnd world has been open
  the new order 管住所有路由#/page hashRouter
  hash => cb()  //container 显示
  class HashRouter
  this.routers = {}
  向外提供register方法，一个hash,一个callback参数    register(hash,callback = function(){})
  load
  window.addEventListener('hashchange',this.load.bind(this))
  call,apply es5 手动指向函数内部this的API
  bind this 一样，返回一个新的函数， 适合事件执行时