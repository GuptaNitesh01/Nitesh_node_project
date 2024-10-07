const fs = require('fs');
function main (req,res){
    const file_name = req.query.file_name;
    const data = req.body;
    console.log(data,"data");
    fs.appendFileSync(file_name, JSON.stringify(data))
    res.send("ok");
      }
module.exports={
    main
}

