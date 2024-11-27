function main(req,res){
    const fs = require("fs");
    
    console.log("Nitesh")
    const rs = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
    // const ws = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
    // const ws = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
    let i=0;
    rs.on("data",(chunks)=>{
    i++;
    console.log(chunks `length`,chunks.length);
    console.log(chunks` ${i}`,chunks.toString());
    // res.send(chunks);
    })
    rs.on("error",(error)=>{
    console.log("error".error);
    
    })
    rs.on("end",(chunks)=>{
    // console.log("chunks",chunks);
    console.log("done");
    
    res.send("Nitesh");
    })
    
    }
    module.exports={
        main
    }



// async function main (req,res){
//        const {getPGConnection} = require("../base/pg_connector")
//        const client =await getPGConnection();
//        console.log("CLIENT",client)
       
//           await client.query(`SELECT "name", "id", city FROM "nitesh_table";`, [],async function(err,data){
//               if(data){
//                   res.send(data.rows);
//               }
//               else{
//                   res.send(err);
//                   console.log(err);
//               }
//               await client.end() 
//           })
    
// }
// module.exports={
//     main
// }