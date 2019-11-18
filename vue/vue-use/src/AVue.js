import Vue from 'vue';
function  AVue({methods}) {
  for(let key in methods){
    this[key] = methods[key];
  }
}
AVue.prototype.$alert = ()=>{
  document.write('赝品');
}
Object.defineProperty(AVue.prototype, '$alert',{
  writeable:true,
  value() {
    console.log('我是行货');
    class SingleDog{
      show(){
        console.log('我是一个单列对象')
      }
      static getInstance() {
        if(!SingleDog.instance){
          SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
      }
    }
    // 实例化两次
    const s1 = SingleDog.getInstance();
    const s2 = SingleDog.getInstance();
    console.log(s1==s2);

  }
})
export default AVue