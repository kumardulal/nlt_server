const mysql = require('mysql')

const dbConnection = mysql.createPool({
    host: "aamgrko7373xg.cphznuprlsbn.us-east-2.rds.amazonaws.com",
    user: "nltserveruser",
    password: "nltserver",
    database: "newleaderstechwebsite",
    connectTimeout: 20000
});
module.exports = dbConnection;
