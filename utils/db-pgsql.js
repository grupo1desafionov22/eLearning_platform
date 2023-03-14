require('dotenv').config();
const {DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD} = process.env
const { Pool } = require('pg');

const pool = new Pool({
    host: DB_HOST, 
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD
  })
  
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
      release();
      console.log("Super conectados a elephantSQL")
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      console.log(result.rows);
    })
});

module.exports = pool;