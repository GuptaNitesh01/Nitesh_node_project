function main(req,res){
    const fs = require("fs");
    
    console.log("Nitesh")
    const rs = fs.createReadStream(__dirname+"/../dummy_txt_file.txt");
    const ws = fs.createWriteStream(__dirname+"/../dummy_write_file.txt");

    let i=0;
    rs.on("data",(chunks)=>{
    i++;
    ws.write(chunks);
    // console.log(chunks length,chunks.length);
    // console.log(chunks ${i},chunks.toString());
    })
    rs.on("end",(chunks)=>{
    // console.log("chunks",chunks);
    console.log("done");
    
    // res.send("Nitesh");
    })

    
    }
    module.exports={
        main
    }



// const fs =require("fs");
// const main=(req,res)=>{
//     const file_name = req.query.file_name;
//     const data = req.body;
//     console.log(data,"data");
//     fs.writeFile(file_name,JSON.stringify(data),(error,data)=>{
//         if(error){
//             res.send("Something went wrong");
//         } else {
//             console.log("File writed");
//             res.send("File writed");

//         }
//     })
// }
// module.exports={
//     main:main
// }