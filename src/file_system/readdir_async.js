const fs = require('fs');
function main (req,res){
    const filesystem = req.filesystem;
    fs.readdir(filesystem, (err,data) => {
        if (err) {
            res.send(err);
        }
        else{
            console.log('delete');
            res.send(data) 
        }
      });   

}
module.exports={
    main:main
}