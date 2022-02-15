const {readFileSync}=require('fs')
var loadjson=()=>JSON.parse(readFileSync('bill.json'))
module.exports={loadjson};