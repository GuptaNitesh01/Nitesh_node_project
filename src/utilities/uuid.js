// universal unique identifier:

const { v4: uuidv4 } = require('uuid');
uuidv4();

function main(req,res){
    let x = uuidv4();
        console.log('x',x);
    
}
module.exports={
    main
}



// const v4options = {
//     random: Uint8Array.of(
//       0x10,
//       0x91,
//       0x56,
//       0xbe,
//       0xc4,
//       0xfb,
//       0xc1,
//       0xea,
//       0x71,
//       0xb4,
//       0xef,
//       0xe1,
//       0x67,
//       0x1c,
//       0x58,
//       0x36
//     ),
//   };
//   uuidv4(v4options);