// <div v-debounce="open">立即购买</div>  自定义指令
Vue.directive('debounce',{
  inserted:(el, binding) => {
    console.log(el, binding);
  }
})