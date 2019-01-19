require('newrelic');
const app = require('./index.js');
const port = 3002;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${port} we hear you!`);
  }
});
