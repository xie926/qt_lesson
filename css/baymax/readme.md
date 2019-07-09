- 伪元素
    不用标签，在css中使用:before :after 来申明，可以像真正的标签一样用。
    在做分割线， >箭头，不用标签很方便
    - :before
    元素内容开始之前
    - :after
    元素内容结束之后
    两者都需要设置content属性
- css3 带来炫酷
    radial(环形)linear(线性)-gradient(渐变):(渐变的开始位置 cirle at center, color stops... #fff 50%)
- 相对单位
    em 相对单位 自身的字体大小
- 伪元素 天生是行内元素，行内元素不可以设置width*height，设置了也没用
    但是它可以被改变，使用display:block; position:absolute