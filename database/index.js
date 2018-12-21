const mysql = require('mysql');
const mysqlconfig = require('./config.js');

module.exports.connection = mysql.createConnection(mysqlconfig);

module.exports.connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected!');
  }
});
