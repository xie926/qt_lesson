- css 处理
  - 某个盒子里的所有子元素占据一页
  - 滚屏-> 事件 onscroll 会触发很多次，使用节流
  - transform 再给他一个transition
  - 面向对象
- jquery API $()怎么实现的？
  $(fn) 原生js也是有生命周期(vue)的，只不过我们叫他事件
  JS是基于事件的脚本语言 找对的生命周期
  $('.container') querySelector方法
  typeof 参数  是function就走分支
  .find()查找 querySelector
  .css(cssname, val) .height()

  VUE 统统没有
  VUE MVVM 尽量减少DOM编程，querySelector ....
  css DOM的查打， 执行， 都是要花很多内存的，VUE可以优化它

  VUE 生命周期  js 事件
  .innerHTML css width()
  <template>
    <div :width="width">
    {{content}}
    </div>
  </template>
  可以减少DOM操作