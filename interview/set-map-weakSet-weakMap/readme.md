## Set 和 WeakSet 区别
1. WeaSet 只能存放对象
2. WeakSet 不支持遍历,没有size
3. WeakSet 存放的对象不会记入到对象的引用技术，因此不会影响GC的垃圾的回收
4. WeakSet 存放的对象如果在外界消失了，那么WeakSet里面也不会存在
## Map 和 WeakMap 区别
1. WeakMap 只能接受对象作为键名 (null除外)
2. WeakMap 键名指向对象不会记入到对象的引用数当中