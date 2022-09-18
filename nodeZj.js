// 文件系统模块
// 读取文件中的内容
const fs=require('fs')
fs.readFile('./git操作与nod操作汇总.txt','utf8',(err,dataStr)=>{
    console.log(err);
    console.log('======');
    console.log(dataStr);
})