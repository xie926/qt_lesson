import { track, trigger } from './effect.js'
var obj = { a: 1}
obj.a = 100;
export function reactive(target) {
  const observer = new Proxy(target, {
    set: (target, key, receiver) => {
      // 恢复它赋值的行为
      const result = Reflect.set(target, key, receiver);
      trigger(target, key)
      return result;
    },
    get: (target, key, receiver) => {
      // mobx  effect 
      // 依赖收集
      console.log('get  依赖收集');
      const res = Reflect.get(target, key, receiver);
      // {
      //   origin: {
      //     count: {
      //       fn1,
      //       fn2
      //     }
      //   }
      // }
      track(target, 'get', key);
      return res;
    }
  });
  return observer;
}

