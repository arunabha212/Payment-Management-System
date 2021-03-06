const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 7000;
const cors = require('cors');
app.use(cors({
    orgin: "*",
}))
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("Server is running...!"))
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})
app.get('/add', (req, res) => {
    res.sendFile(__dirname + '/jsonadd.html');
})
app.post('/submit', (req, res) => {
    console.log(JSON.stringify(req.body))
    const fs = require("fs")
    var data = fs.readFileSync("bill.json");
    
    var myObj = JSON.parse(data);
    console.log(myObj)
    var item =req.body
    myObj['billitems'].push(item);
    var newData2 = JSON.stringify(myObj);
    fs.writeFile("bill.json", newData2, (err) => {

        if (err) throw err;
        console.log("New data added");
    });
    res.send('Data updated!!');
})
