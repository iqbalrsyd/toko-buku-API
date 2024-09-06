const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    database: "bookstore_database",
    password: "iqbal30",
    host: "localhost",
    port: 5432
});

module.exports = pool;