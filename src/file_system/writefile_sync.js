const fs =require("fs");
const main=(req,res)=>{
    const file_name = req.query.file_name;
    const data = req.body;
    console.log(data,"data");
    fs.writeFileSync(file_name,JSON.stringify(data))
    fs.writeFileSync(file_name,JSON.stringify(data))
    fs.writeFileSync(file_name,JSON.stringify(data))
    res.send("successfull verified");
}
module.exports={
    main:main
}