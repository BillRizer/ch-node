require('dotenv').config();
const mysql = require('mysql')

const config = {
    connectionLimit:10,
    host:process.env.DATABASE_HOST||"",
    port:process.env.DATABASE_PORT||"",
    user:process.env.DATABASE_USER||'',
    password:process.env.DATABASE_PASS||'',
    database:process.env.DATABASE_NAME||'',
}

const connectionPool = mysql.createPool(config)

module.exports = connectionPool;