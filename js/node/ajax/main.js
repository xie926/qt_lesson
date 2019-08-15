// live-server 
// index.html  http  访问的支持 webserver

const http = require('http')
const fs = require('fs')
const index = fs.createReadStream('./index.html')
// web server 一直伺服的 3000
// 向req 返回response资源  
const server = http.createServer((req,res)=>{
    // res.end('hello world')
    // indexedDB.html显示出来
    //req 访问网站的代理 访问网站的代理
    // res.end(fs.readFile('./index.html'))
    if(req.url =='/'){
        index.pipe(res)
        // res.end('index page')      
    }else if(req.url == '/userinfo'){
        const info = {
            "name": "徐佳影",
            "desc": "身骑白马"
        }
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'})
        res.end(JSON.stringify(info));
    }
    else{
        res.end('hello world')
    }
})
server.listen(1314)