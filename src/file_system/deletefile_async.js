const fs = require('fs');
function main (req,res){
    const file_name = req.query.file_name;
    fs.Deletefile(file_name, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('delete');
        res.send("ok")
      }); 
}
module.exports = {
    main
}