- api    后端接口
- utils  js逻辑复用
- pages  20+页面  路由级别的组件
- store  vuex

- 项目架构(整个vue的工作目录)
  1. api 前后端分离
    vue 前端
    通过ajax 连接后端 axios
    /api/v2/products/:1
  2. pages compoments
  3. vuex store 设置？
  4. utils js公共方法
  5. css/stylus  stylus用的多   牛逼
  20+ 页面的架构
- 路由
  懒加载
- page 组件化
- 页面由组件构成
  页面级组件 /pages
  可复用的组件 /components
    - 全站常用的公共组件，跟业务无关， iview /components/common/
  容器组件
    PC 页面量 切页面交给组件化 HTML section概念来做
- App.vue 根组件，reset  工作通用样式
- 界面+状态 == 完成开发