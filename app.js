const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log("req.params.id")
})

app.get('/employee/:id',function (req,res){
  res.send(req.params.id)
  console.log(req.params.id)
})

app.post('/employee/',function(req,res){
  let input = req.query
  console.log(input)    
  res.send(input)
})

app.listen(9998,function(){
    console.log("Server is Running on Portno : 9998");
})