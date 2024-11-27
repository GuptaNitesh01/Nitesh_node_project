const fs = require('fs');
function main (req,res){
    const file_name=req.query.file_name;
    const data = req.body;
    fs.appendFile(file_name, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
        res.send("ok")
      }); 
}
module.exports={
    main
}