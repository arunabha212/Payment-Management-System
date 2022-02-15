const {readFileSync}=require('fs')
var loadjson=()=>JSON.parse(readFileSync('bill.json'))
var data=readFileSync('bill.json')
console.log(JSON.parse(data)['billitems'][0])
module.exports={loadjson};