var express = require('express');
var app = express();
var port = 3002;

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`${port} we hear you!`);
  }
})