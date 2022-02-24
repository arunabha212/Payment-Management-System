const mysql=require('mysql2')
const express=require('express')
const port =7000;
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors({
    orgin: "*",
}))

app.use(bodyParser.urlencoded({extended:true}));

const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'12345@Don',
        database:'CUCS'
    }
)
connection.connect((err)=>
{
    if(!err)
    console.log('Database connection eshtablished....!')
    else
    console.log('Error')
})
app.listen(port,()=>
{
    console.log('Connection Eshtablished successfully....!!!')
}
)
app.get('/getjson',(req,res)=>
{
    connection.query("SELECT * from blossoms",(err,rows,fields)=>
    {
        if(!err)
        res.send(rows);
        else
        console.log('Error in Displaying')
    })
})
app.get('/',(req,res)=>
{
    res.sendFile(__dirname +"/wsdform.html");
})
app.post('/add',(req,res)=>
{
   
    var sql="INSERT INTO blossoms VALUES("+parseInt(req.body.regno)+",'"+req.body.name+"','"+req.body.class+"','"+req.body.event+"','"+req.body.team+"');"
    console.log(sql)
    connection.query(sql,(err,rows,fields)=>
    {
        if(!err)
        console.log('Data has been inserted successfully...!')
    })
    res.send('Data has been inserted successfully...!')
})

app.post('/update',(req,res)=>
{
    
    var sql="UPDATE blossoms SET sevent='"+req.body.event+"' WHERE sregno="+parseInt(req.body.regno)+";"
    //console.log(sql)
    connection.query(sql,(err,rows,fields)=>
    {
        if(!err)
        console.log('Data has been updated successfully...!')
    })
    res.send('Data has been updated successfully...!')
})
app.post('/delete',(req,res)=>
{
    //console.log(req.body)
    var sql="DELETE FROM blossoms WHERE sregno="+parseInt(req.body.regno)+";"
    console.log(sql)
    connection.query(sql,(err,rows,fields)=>
    {
        if(!err)
        console.log('Data has been deleted successfully...!')
    })
    res.send('Record has been deleted successfully...!')
})