const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host : '34.101.176.147',
    user : 'root',
    password : '',
    database : 'pendaki'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log("Database Connected");
});
module.exports = dbConn;