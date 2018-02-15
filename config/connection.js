// Set up MySQL connection.
var mysql = require("mysql");
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "root",
  password: "",
  database: "cdmzlhbsfwn7y5wa"
});
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;
