let proto = {} 

function defineGetter(prop,name){ //参数分别是代理的对象和对象上的属性
    proto.__defineGetter__(name,function(){ //每个对象都有一个__defineGetter__方法实现代理
        return this[prop][name] //this ===> ctx ctx.url就相当于ctx.request.url
    })
}

function defineSetter(prop,name){
    proto.__defineSetter__(name,function(val){
        this[prop][name] = val
})
}
defineGetter('request','url')
defineGetter('request','path')
defineGetter('response','body')  // ctx.body 代理 response的body
defineSetter('response','body')
module.exports = proto