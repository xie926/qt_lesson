## xss
cross site script  跨站脚本攻击
用不合法途径往 web页面插入可执行的网页

攻击类型：
1. 反射型：
  xss 代码存在url中，服务器解析请求，把xss的代码一并返回，web页面得到响应，执行了xss代码,过程像一次反射一样
2. 存储型：
  唯一区别 xss的代码 有没有永久保留在 服务器 (数据库，文件...)中
## 防护
编码 html  entity 编码，< -> "&lt;"  "" -> "&nbsp;"
<script>alert(1)</script>
过滤 onError  属性 onClick <script>XX</script>
校正