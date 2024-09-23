const fs = require('fs');
const main=(req,res)=>{
    let x = fs.readFileSync('test')
        console.log(x);
    res.send(x);  
    }
module.exports={
    main:main
}
