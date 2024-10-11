
async function main (req,res){
   
    const id = req.query.id;
    const name = req.query.name;
    const city = req.query.city;
       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
       
          await client.query(`SELECT * FROM nitesh_table where city ilike $1`, [`%${city}%`],async function(err,data){
              if(data){
                  res.send(data.rows);
              }
              else{
                  res.send(err);
                  console.log(err);
              }
              await client.end() 
          })
    
}
module.exports={
    main
}