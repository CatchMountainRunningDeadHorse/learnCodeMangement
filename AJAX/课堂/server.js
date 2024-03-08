// 1. 引入express
const express = require('express')

//2.创建应用对象
const app = express()

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('HELLO AJAX')
});
app.all('/server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    response.send('HELLO AJAX')
});

app.post('/server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('HELLO AJAX POST')
});

app.all('/json-server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    const data = {
        name:'atguigu'
    }
    let str = JSON.stringify(data)
    response.send(str)
});
//针对 IE 缓存问题
app.get('/ie',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('HELLO IE - 2')
});

//延时响应
app.get('/delay',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    setTimeout(() => {
        response.send('延时响应')
    }, 0);
});

//jQuery 服务
app.all('/jquery-server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});
//jQuery 延时服务
app.all('/jquery-delay-server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    const data = {name:'尚硅谷'}
    setTimeout(() => {
        response.send(JSON.stringify(data))
    }, 1000);
});

//axios 服务
app.all('/axios-server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});
//fetch 服务
app.all('/fetch-server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});

//jsonp 服务
app.all('/jsonp-server',(request, response)=>{
    // response.send("console.log('HELLO jsonp-server')")
    const data = {name:'尚硅谷'}
    let str = JSON.stringify(data)
    response.send(`handle(${str})`)
});
//用户名检测是否存在
app.all('/check-username',(request, response)=>{
    const data = {
        exist:1,
        msg:'用户名已存在'
    }
    let str = JSON.stringify(data)
    response.send(`handle(${str})`)
});

//jquery-jsonp
app.all('/jquery-jsonp-server',(request, response)=>{
    const data = {
        name:'张三',
        city:['北京','上海','深圳']
    }
    let str = JSON.stringify(data)
    //接收callback参数
    let cb = request.query.callback
    response.send(`${cb}(${str})`)
});

//cors-jsonp
app.all('/cors-server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.setHeader('Access-Control-Allow-Method','*')
    response.send('hello cors')
});
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动, 8000端口监听中....");
})