import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

// const isProduction = process.env.NODE_ENV === "production" // checking Environment

//connenction string
// const connectionString = `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`

const pool = new Pool({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
  port: 5432,
  ssl: true,
})

export default pool;
