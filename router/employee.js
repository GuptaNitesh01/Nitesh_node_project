

  module.exports=function(app){
    app.get('/employee',(req,res)=>{
    let x= require("../src/employee/get_employee");
    console.log("X",x)
    x.main(req,res);
    })
    
  }
//   app.get('/employee/:id',function (req,res){
//     res.send(req.params.id)
//     console.log(req.params.id)
//   })
  
//   app.post('/employee/',function(req,res){
//     let input = req.query
//     console.log(input)    
//     res.send(input)
//   })
  
//   app.post('/empl',function (req,res){
//     console.log(req.body)
//     res.send(req.body)
//   })
  