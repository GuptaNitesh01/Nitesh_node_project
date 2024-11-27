const fs = require('fs');

const main=(req,res)=>{
    fs.readFile("/../dummy_txt_file_100.txt", (err, data) => {
        if (err) res.send(err);
        console.log(data);
    res.send(data);  
    }); 
}
module.exports={
    main:main
}

