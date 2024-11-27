const { JWT_SECRET } = require("../../env_config");

const main=(req,res)=>{
    const {token} = req.body;
   try {
    const jwt=require("jsonwebtoken");
    const verify=jwt.verify(token,JWT_SECRET);
    console.log("Nitesh",verify);
    res.send(verify);

   } catch (error) {
    console.log("Nitesh",error);
    
    res.send(error);
   }
    
}
module.exports={
    main:main
}



// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ data: 'nitesh' }, 'shhhhh');

// function main(req, res) {
    


//     var decoded = jwt.verify(token, 'shhhhh');
//     console.log(decoded.data) // bar


//     // jwt.sign({
//     //     exp: Math.floor(Date.now() / 1000) + (60 * 60),
//     //     data: 'foobar'
//     //   }, 'secret');
//     // console.log('hi');
//     res.send('hi');
// }
// module.exports = {
//         main
// }
