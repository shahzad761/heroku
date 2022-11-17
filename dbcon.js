const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_user,
    host:process.env.DB_host ,
    database: process.env.DB_database,
    password: process.env.DB_password,
    port: 5432,
    ssl:{

        rejectUnauthorized: false
    }
  });

  module.exports= pool;