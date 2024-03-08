const express = require('express')

const app = express()

app.all('/joke',(request,response) =>{
    response.setHeader('Access-Control-Allow-Origin','*')
    const data = {name:'足够是覅'}
    response.send(JSON.stringify(data))
})

//.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动, 8000端口监听中....");
})