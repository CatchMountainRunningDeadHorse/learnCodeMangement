
/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数：path 文件路径
 * 返回：promise 对象
 */

function mineReadFile(path){
    return new Promise((resolve,reject)=>{
        // 读取文件
        require('fs').readFile(path,(err,data) => {
            if(err) reject(err);
            resolve(data)
        })
    })
}

function mineRead(){
    // return new Promise((resolve,reject)=>{
        // 读取文件
        var fs = require("fs");
        var buf = new Buffer.alloc(1024);
        fs.open('../../SOCR-HeightWeight.csv','r+',function(err,fd){
            if (err) {
                return console.error(err);
            }
            fs.read(fd,buf,0,buf.length,0,function(err,bytes){
                if(err) console.log('函数的不加还不能1',err);
                console.log(buf.slice(0, bytes).toString());
                var list = buf.slice(0, bytes).toString()
            })
        })
    // })
}


/**
 * util.promisify 方法
 */
//引入 util 模块
const util = require('util')
// 引入 fs 模块
const fs = require('fs');
const { log } = require('console');
//返回一个新的函数
// let mineReadFile = util.promisify(fs.readFile)



// mineReadFile('../../SOCR-HeightWeight.csv').then(val => {
//     console.log('成功',val.toString());
// },err => {
//     console.log('失败',err);
// })
mineRead()
