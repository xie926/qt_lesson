import vue from 'vue'
import {add, sub} from './util';
import App from './App'
console.log(add(1,2))

// main.js 7:42 10:42
// main.js 10:00 上线了一个新的

new vue ({
  render: h => h(App),
  compnents: {App},
}).$mount('#app')