import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const isProduction = process.env.NODE_ENV === "production" // checking Environment

//connenction string
const connectionString = `postgresql://${process.env.process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`


const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: '',
  port: process.env.port,
})

export default pool;
