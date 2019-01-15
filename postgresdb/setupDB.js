const { exec } = require('child_process');
const postgressPassword = require('./config').password;

if (postgressPassword === undefined) {
    return console.error("please set password for postgres in config.js");
}


exec(`psql -c "ALTER USER ${process.env.USER} PASSWORD '${postgressPassword}'";`, (err, stdout, stderr) => {
  if (err) {
    console.log("error setting postgres password for user: " + process.env.USER);
    console.log(stderr);
    return;
  }

  console.log(`successfully set postgres password for user ` + process.env.USER);
  console.log(`stdout: ${stdout}`);
});

exec(`psql -c "CREATE DATABASE checkout";`, (err, stdout, stderr) => {
  if (err) {
    console.log("Skip creating database: 'checkout' already exists no need to create it again");
    return;
  }

  console.log(`successfully created database checkout: checkout`);
  console.log(`stdout: ${stdout}`);
});