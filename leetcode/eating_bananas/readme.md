- H 时间
- K 速度 K*H
- K min 例如K=1，KOKO可能在H小时内吃不完
- K max 例如K=20，KOKO可能不到H小时就吃完了
- 1->n(尝试) 20(max)
1. 把香蕉表达一下 数据结构
处理的数据 .length H
[3, 6, 7, 11]    H=8
max=11 min=4
2. Max 规则 Max(array)
3. Max-- 正好在H小时内吃完
>H 然后找到K的最小值
4. 怎么可以高效一点

- JS数据类型
    基础数据类型 整型 Number String Boolean Undefined Null Symbol
    复杂数据类型 Object
    [Array, Function, Math, Regexp, Date]
    Math.max()
- ... spread 展开一个数组
    ... reset 收起

- koko
    while(1->math.max(...piles))
    每把香蕉花的小时数加起来
    piles->pile->Math.ceil(pile/low)
- 减少尝试
    1-> Max 二分查找