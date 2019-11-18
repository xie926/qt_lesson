// 使用hash
class HashRouter{
  constructor(){
    // Key(/page1) => val(func由外界传递)
    this.routers = {};
    // window.addEventListener('hashchange',(event)=>{
    //   console.log(location)
    //   console.log(location.hash.slice(1))
    //   // console.log(event.newURL)
    //   // console.log('has click');
    // })
    window.addEventListener('hashchange',this.load.bind(this))
  }
  register(hash,callback = function(){}){
    this.routers[hash] = callback;
  }
  registerNotFound(callback = function(){}){
    this.routers['404'] = callback;
  }
  registerError(callback = function(){}){
    this.routers['error'] = callback;
  }
  load(){
    console.log(this)
    let hash = location.hash.slice(1),
    handler;//处理函数
    console.log(hash)
    // container  显示相应的page内容，， 由外界决定
    handler = this.routers[hash];
    // handler();
    // 仅限于对象自身的属性，而不会去原型链上查找
    if(!this.routers.hasOwnProperty(hash)){
      handler = this.routers['404'];
    }else{
      handler = this.routers[hash];
    }
    try {
      handler.apply(this);
    } catch (e) {
      console.error(e);
      (this.routers['error']||function(){}).call(this,e)
    }
    // handler.apply(this);
  }
}