const http=require('http')
const {loadjson}=require('./nodejson')
const express =require('express')
const app=express();
const port=7000;
const cors=require('cors')
app.use(cors({
    orgin:"*",
}))
app.listen(port,()=> console.log("Server is running...!"))
app.get('/getjson', (req,res)=>
{
    res.send(loadjson())
})