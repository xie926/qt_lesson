# 浏览器渲染的过程
1. 解析 html 生产一个DOM树，生产 cssom 树
2. 将 html 树和 cssom 树 进行融合， 生产渲染树 (render tree)
3. 回流， 根据生产的渲染树， 进行回流， 得到节点的几何信息（包含 位置和大小）
4. 重塑， 根据渲染树和节点的几何信息， 得到节点的绝对像素
5. 将像素发给GPU, 展示在页面上

# 何时执行回流和重塑
1. 比如说添加删除可见 DOM 结构的时候
2. 元素的位置和大小发生变化的时候（内容改变造成容器变化）
3. 浏览器窗口大小发生改变的时候
4. 页面初次渲染

# 回流一定会触发重塑， 重塑不一定会触发回流 
  bfc 模式 脱离文档流

# 强制队列刷新  （event loop 任务队列）
  offsetTop、offsetLeft、offsetWidth、offsetHeight
  scrollTop、scrollLeft、scrollWidth、scrollHeight
  clientTop、clientLeft、clientWidth、clientHeight
  getComputedStyle()
  getBoundingClientRect

# 如何减少回流和重塑的次数
1. 使元素脱离文档流
2. 对其进行多次修改
3. 将元素带回文档流当中 （如何脱离文档流 脱离文档流后如何进行类似重塑和回流的问题 => 不需要，只需要添加各类样式 脱离文档流后如何被带回 带回后对DOM树的影响）

# 让 Dom 脱离文档流 3 种方式
1. 隐藏该元素
2. 使用文档片段（document fragment）在当前的 Dom 之外构建一个子树， 再把它拷贝进文档
3. 将原始元素拷贝到一个脱离文档的节点中， 修改节点后再替换原始元素