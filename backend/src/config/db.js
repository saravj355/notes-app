const dotenv = require('dotenv');
dotenv.config();

const db = {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST
};

console.log('DB config:');
console.log(db);

module.exports=  { db };
