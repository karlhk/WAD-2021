const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 password: "lendav12",
 database: "testbase",
 host: "localhost",
 port: "5432"
});
module.exports = pool;
