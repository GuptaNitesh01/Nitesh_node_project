
async function main (req,res){
    // const pg = require('pg');
    // // import pg from 'pg'
    // const { Client } = pg
    // const client = new Client({
    //     user: 'postgres',
    //     password: 'root',
    //     host: '127.0.0.1',
    //     port: 5432,
    //     database: 'Nitesh_db',
    //   })
       
    //   await client.connect()
    const id = req.query.id;
    const name = req.query.name;
    const city = req.query.city;
    const misc = req.body;

       const {getPGConnection} = require("../base/pg_connector")
       const client =await getPGConnection();
       console.log("CLIENT",client)
          await client.query('INSERT INTO nitesh_table (name,id, city,misc) VALUES ($1,$2,$3,$4)', [name,id,city,misc],async function(err,data){
              if(data){
                  res.send('data');
              }
              else{
                  res.send(err);
                  console.log(err);
              }
              await client.end() 
          })
    
}
module.exports={
    main
}


// const fs = require('fs');
// const path = require('path');

// async function createFiles() {
//   const baseCode = `
//     async function main (req,res){
//         const id = req.query.id;
//         const name = req.query.name;
//         const city = req.query.city;
//         const misc = req.body;

//         const {getPGConnection} = require("../base/pg_connector");
//         const client = await getPGConnection();
//         console.log("CLIENT",client);
//         await client.query('INSERT INTO nitesh_table (name,id, city,misc) VALUES ($1,$2,$3,$4)', [name,id,city,misc], async function(err,data){
//             if(data){
//                 res.send('data');
//             } else {
//                 res.send(err);
//                 console.log(err);
//             }
//             await client.end();
//         });
//     }
//     module.exports = {
//         main
//     };
//   `;

//   const outputDir = path.join(__dirname, 'output-files');

//   // Ensure the output directory exists
//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir);
//   }

//   for (let i = 1; i <= 500; i++) {
//     const fileName = `file${i}.js`;
//     const filePath = path.join(outputDir, fileName);

//     // Optionally, customize the code (e.g., add file-specific variables)
//     const customizedCode = baseCode.replace(
//       `'data'`,
//       `'data from file${i}'`
//     );

//     // Write the file
//     fs.writeFileSync(filePath, customizedCode, 'utf8');
//     console.log(`Created: ${fileName}`);
//   }

//   console.log('All 500 files have been created.');
// }

// // Execute the function
// createFiles().catch(err => console.error(err));
