const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

const connect = require('./models/model');

const db1 = connect(require('./config'));
const db2 = connect(require('./config2'));
//config structure:
// module.exports = {
//     user: 'power_user',
//     database: 'checkout',
//     password: 'password',
//     host: 'ec2-3-83-235-68.compute-1.amazonaws.com',
//     max: 200, //pool connections
//   };
//add datbases connections when you add instances here
const SHARDS = [db1, db2];

function getShard (itemId) {
  return SHARDS[itemId % SHARDS.length];
}

app.get('/items/:itemId', (req, res) => {
  const { itemId } = req.params;
  const dbShard = getShard(itemId);
  dbShard.getItemInfo( itemId, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
});

app.post('/update', (req, res) => {
  const { purchaseTuples, userId } = req.body;
  let promises = [];
  for (let i = 0; i < SHARDS.length; i++) {
    let dbShard = SHARDS[i];
    let filteredTuple = purchaseTuples.filter(tuple => getShard(tuple[0]) === dbShard);
    if (!filteredTuple.length) {
      continue;
    }
    let [items, quantities] = filteredTuple.reduce((s, t) => {s[0].push(t[0]); s[1].push(t[1]); return s; }, [[], []]);
    console.log(items, quantities);

    let promise = new Promise((resolve, reject) => {
      dbShard.decrementFromStock(items, quantities, (err) => {
        if (err) {
          console.log(err);
          return reject( {warning:'items out of stock for user' + userId });
        }
        resolve({ success: 'all items were purchased' });
      });
    });
    promises.push(promise);
  }
  Promise.all(promises)
    .then(messages => res.status(201).send(messages))
    .catch(() => res.status(200).send({warning:'items out of stock for user' + userId }));
});


const PORT = 80;
app.listen(80, () => console.log('Load balancer running on port ' + PORT));
