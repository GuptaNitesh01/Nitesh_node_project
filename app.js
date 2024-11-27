const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);  // .use is a middleware 


require("./router")(app);




// app.get('/', function (req, res) {
//   res.send('Hello World')
//   console.log("req.params.id")
// })

// app.get('/employee/:id',function (req,res){
//   res.send(req.params.id)
//   console.log(req.params.id)
// })

// app.post('/employee/',function(req,res){
//   let input = req.query
//   console.log(input)    
//   res.send(input)
// })

// app.post('/empl',function (req,res){
//   console.log(req.body)
//   res.send(req.body)
// })

























app.listen(9998,function(){
    console.log("Server is Running on Portno : 9998");
})