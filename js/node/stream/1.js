const fs = require('fs'); // 文件模块  require是模块引入机制
// IO
fs
  // 创建一个可读流
  .createReadStream('./sample.txt')
  // 管道 process.stdout
  .pipe(process.stdout); // 输出设备的一种
