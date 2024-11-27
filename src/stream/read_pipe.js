function main(req,res){
    const fs = require("fs");
    
    console.log("Nitesh")
    const rs = fs.createReadStream(__dirname+"/../dummy_txt_file_100.txt");
    const ws = fs.createWriteStream(__dirname+"/../dummy_write_file.txt");

    rs.pipe(ws);

}
    module.exports={
        main
    }



