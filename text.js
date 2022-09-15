const http=require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer();
server.on('request',(req,res)=>{
    const url=req.url;

    // console.log(__dirname);
    // let content= '<h1>404 Not Found！</h1>';
    let fpath = '';
    if(url==='/'){
        fpath = path.join(__dirname, './index.html');
    }else {
        //     /index.html
        //     /index.css
        //     /index.js
        fpath = path.join(__dirname,  url);
    }

    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 4.2 读取失败，向客户端响应固定的“错误消息”
        if (err) return res.end('404 Not found.')
        // 4.3 读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })

    console.log('Someone visit our web server');
    // const str=`您请求的url地址是${req.url},请求的method类型是${req.method}`;
    res.setHeader('Content-Type','text/html;charset=utf-8');
    // res.end(str);

    

})
server.listen(8080,()=>{
    console.log('http server running at http://127.0.0.1:8080');
})