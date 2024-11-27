
// const { MongoClient } = require('mongodb');
var Client = require('node-rest-client').Client;
var client = new Client();

function main(req,res){
   let counter=2;
   let res_data={};
    client.get('http://localhost:9998/filesystem/readfile_sync', function (data, response) {
        // parsed response body as js object
      //   console.log(data.toString());
        res_data.read_file=data;
        counter--;
        if(counter==0){
         console.log(res_data)
         res.send(res_data)
        }
        // raw response
     });
   //   client.get('http://localhost:9998/filesystem/create?name=ajay', function (data, response) {
   //      // parsed response body as js object
   //      console.log(data.toString());
   //      res_data.read_file=data;

   //      // raw response
   //   });
     client.get('http://localhost:9998/api/postgre/read', function (data, response) {
        // parsed response body as js object
      //   console.log(data);
        res_data.postgre=data;
        counter--;
        if(counter==0){
         console.log(res_data)
         res.send(res_data)
        }
        // raw response
     });
     
   //   res.send();
}

module.exports = {
        main 
}

