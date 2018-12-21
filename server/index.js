const express = require('express');

const app = express();
const port = 3002;
const path = require('path');

app.use(express.static(path.join(__dirname, '/../client/dist')));


app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${port} we hear you!`);
  }
});
