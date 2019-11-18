- callback 
    回头一笑 
    addEventListener:(event_type, callback)
定义时是不执行的,可以说是注册了一下，注册到js事件系统中去了
事件发生时，将注册的回调函数拿回来调用一下，属于异步问题

- fs 文件模块
    异步是需要花时间的，注册行为，callback
    err
- 操作系统
    addEventListener 事件监听 I/O操作
    Input/Output CPU(运算和指令集) 内存，长期运行要从内存退出放到外部存储设备(例如硬盘) 典型的慢操作
    fs.readFile(path,'utf8',callback)
（尝试解决问题）这个可以忽略