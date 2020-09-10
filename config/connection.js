var mysql = require("mysql");

// if(process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// var connection = mysql.createConnection({
//   host: "	w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "	o39vv6r19zwtdxw4",
//   password: "	ogrk7k116i2nqs6k",
//   database: "	ck81wab3hs0torx8"
// });
// }
var connection = mysql.createConnection({
  
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lucadenby23$",
  database: "burgers_db"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
