const mysql = require("mysql");
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rahul1234",
    database:"feedback"
});
// connect to the database
connection.connect(function(error){
    if(error)throw error
    else console.log("connected to the database successfully!")
})

module.exports = connection;