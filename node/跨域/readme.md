# 跨域
  1. 浏览器的安全策略
    a.com 请求b.com的时候，不允许
  2. npm init -y   server; cnpm i koa-router koa-static --save
  3. cros origin resource share  跨域资源共享
    规定了一些http的首部字段  允许服务器声明哪些站点有资源的访问权限
  4. 简单请求和非简单请求
    简单请求：html原生form表单可以发出去的请求
    非简单的：分两步：1. 预检请求，试存一下是否支持跨域； 2. 真实请求。