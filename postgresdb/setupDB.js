const { exec } = require('child_process');
const {password, host} = require('./config');

if (password === undefined) {
    return console.error("please set password for postgres in config.js");
}


exec(`psql -h ${host} -c "ALTER USER ${process.env.USER} PASSWORD '${password}'";`, (err, stdout, stderr) => {
  if (err) {
    console.log("error setting postgres password for user: " + process.env.USER);
    console.log(stderr);
    return;
  }

  console.log(`successfully set postgres password for user ` + process.env.USER);
  console.log(`stdout: ${stdout}`);
});

exec(`psql -h ${host} -c "CREATE DATABASE checkout";`, (err, stdout, stderr) => {
  if (err) {
    console.log("Skip creating database: 'checkout' already exists no need to create it again");
    return;
  }

  console.log(`successfully created database checkout: checkout`);
  console.log(`stdout: ${stdout}`);
});