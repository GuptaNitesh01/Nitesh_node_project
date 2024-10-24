const { MongoClient } = require('mongodb');
const { getmongodbConnection } = require('../base/mongo_connector');

// const fs = require('fs');
function main (req,res){
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'nitesh_db';

    async function main() {
        // Use connect method to connect to the server
        // await client.connect();
        // console.log('Connected successfully to server');
        const db = await getmongodbConnection();
        const rec = await  db.collection('col_1').find(req.body).toArray();
        console.log(rec) 
        res.send(rec); 
    //     const collection = db.collection('col_1');
    //     db.collection('col_1').deleteMany({
    //         name:"ajay"
    //     })
    //     console.log('deleted') 
    //     res.send();       
    //     return 'done.';
    }
      main();
    }
module.exports={
    main
}

