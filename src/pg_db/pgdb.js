const pg = require('pg');
// import pg from 'pg'
const { Client } = pg
async function main() {
const client = new Client({
  user: 'database-user',
  password: 'secretpassword!!',
  host: 'my.database-server.com',
  port: 5334,
  database: 'database-name',
})
 
await client.connect()
 
    const result = await client.query('SELECT $1::text as name', ['brianc'])
    console.log(result)
     
    await client.end() 
}
