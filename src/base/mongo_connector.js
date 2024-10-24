const getmongodbConnection =async ()=>{
    const { MongoClient } = require('mongodb');
    // const url = 'mongodb://username:passwordlocalhost:27017'; 
    const url = 'mongodb://localhost:27017'; 
    const client = new MongoClient(url);
    const dbName = 'nitesh_db'; 
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
  return db;
}
  module.exports={
    getmongodbConnection:getmongodbConnection
  }