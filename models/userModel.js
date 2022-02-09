const dotenv = require('dotenv');
const Pool = require('pg').Pool;

dotenv.config();

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: '',
  port: process.env.port,
})

module.exports = pool;