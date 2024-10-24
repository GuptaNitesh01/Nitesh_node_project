const { MongoClient } = require('mongodb');
// const fs = require('fs');
function main (req,res){
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'nitesh_db';

    async function main() {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
         const collection = db.collection('col_1');
        db.collection('col_1').updateOne({
            // name:"ajay"
        })
        console.log('nitesh') 
        res.send();       
        return 'done.';
      }
      main();
    }
module.exports={
    main
}

