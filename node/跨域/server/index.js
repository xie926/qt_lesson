const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()
// 静态资源访问
app.use(KoaStatic(path.join(__dirname,'./static')));

var router = new KoaRouter();
app.use(async(ctx, next) => {
  // 在后端设置允许跨域访问
  // 当cookie中的credentials为include时，Origin需要设置为具体的值
  ctx.set('Access-Control-Allow-Origin','http://localhost:8080')//前端URL也需要为localhost:8080去访问，域名而不是ip
  // x-custom
  ctx.set('Access-Control-Allow-Headers','X-custom,Content-Type');
  ctx.set('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS');
  // 是否允许接收cookie
  ctx.set('Access-Control-Allow-Credentials',true);
  await next();
})
 
router.post('/api/books', (ctx, next) => {
  // ctx.router available
  console.log(ctx.cookies.get('hello'));
  ctx.body = [
    {bookName:'php 入门到精通'},
    {bookName:'node 入门到精通'},
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001,()=>{
  console.log('server is running on port 3001')
})