const http = require('http')
//const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 7100;
const mysql= require('mysql2')
const cors = require('cors');
app.use(cors({
    orgin: "*",
}))
app.use(bodyParser.urlencoded({ extended: true }));

var connection =mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'12345@Don',
        database:'items'
    }
)
connection.connect((err)=>
{
    if(!err)
    console.log('Database Connection eshtablished....!!')
    else
    console.log('Error!')

})


app.listen(port, () => console.log("Server is running...!"))
app.get('/getjson', (req, res) => {
    
    connection.query('SELECT * FROM billitems', (err,rows,fields)=>
    {
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })

})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dbform.html');
})
app.post('/newentry', (req, res) => {
    //console.log(req.body)
    
    var sql = "INSERT INTO billitems  VALUES('" + req.body.details + "'," + parseInt(req.body.quantity) + "," + parseInt(req.body.price) + ",'" + req.body.paymentstatus+ "', '" + req.body.date +"')";
    console.log(sql)
    var query=connection.query(sql,(err,result)=>
    {
        if(!err)
        res.send("Data has been insert into database!")
        else
        console.log(err)
    })
})
app.post('/edit', (req, res) => {
    //console.log(req.body)
    
    var sql = "UPDATE billitems SET price=" + parseInt(req.body.price) + " WHERE details='"+req.body.details+"'";
    console.log(sql)
    var query=connection.query(sql,(err,result)=>
    {
        if(!err)
        res.send("Data has been updated into database!")
        else
        console.log(err)
    })
})
app.post('/edit', (req, res) => {
    //console.log(req.body)
    
    var sql = "UPDATE billitems SET price=" + parseInt(req.body.price) + " WHERE details='"+req.body.details+"'";
    console.log(sql)
    var query=connection.query(sql,(err,result)=>
    {
        if(!err)
        res.send("Data has been updated into database!")
        else
        console.log(err)
    })
})
app.post('/delete', (req, res) => {
    //console.log(req.body)
    
    var sql = "DELETE FROM billitems WHERE details='"+req.body.details+"'";
    console.log(sql)
    var query=connection.query(sql,(err,result)=>
    {
        if(!err)
        res.send("Record has been deleted from the database!")
        else
        console.log(err)
    })
})