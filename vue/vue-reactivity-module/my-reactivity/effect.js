let effectStack = [];
let targetMap = new Map();
export function effect(fn) {
  if(effectStack.indexOf(fn) === -1) {
    try{
      effectStack.push(fn)
      fn()
      // get -> track
    }finally{
      effectStack.pop()
    }
  }
}
export function track(target, type, key) {
 
  let effect = effectStack[effectStack.length - 1];
  let dep = targetMap[target];
  if(dep === undefined) {
    dep = new Map();
    targetMap.set(target, dep)
  }
  let depsMap = dep.get(key);
  console.log('key', key, depsMap)
  if(!depsMap) {
    depsMap = new Set();
    dep.set(key, depsMap);
  }
  depsMap.add(effect);
  console.log(targetMap)
}
export function trigger(target, key) {
  const keyDeps = targetMap.get(target);
  if(keyDeps) {
    let res = keyDeps.get(key) && keyDeps.get(key);
    console.log('res', res);
    for(let fn in res) {
      fn && fn()
    }
  }
}