const express = require('express');
const morgan = require('morgan');

const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../postgresdb/models');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/users/:userId/cart', (req, res) => {
  const { userId } = req.params;
  db.getCart(userId, (err, results) => {
    if (err) {
      return res.send(err);
    }
    res.send(results);
  });
});

app.use('/checkout/:id', express.static(path.join(__dirname, '/../client/dist')));

app.get('/items/:itemId', (req, res) => {
  const { itemId } = req.params;
  db.getItemInfo(itemId, (err, results) => {
    if (err) {
      return res.send(err);
    }
    res.send(results);
  });
});
// add a route to get just the review rating

// app.get('/items/:id/related', (req, res) => {
//   db.connection.query(`SELECT relatedItems FROM items where item_id = ${req.params.id}`, (err, results) => {
//     if (err) {
//       return res.send(err);
//     }
//     let related = JSON.parse(results[0].relatedItems);
    
//     db.connection.query(`SELECT item_id, name, price, rating, numOfRatings, imgUrl FROM items WHERE item_id = ${related[0]} OR item_id = ${related[1]} OR item_id = ${related[2]}`, (err, results) => {
//       if (err) {
//         return res.send(err);
//       }
//       res.send(results);
//     });
//   });
// });

app.post('/users/:userId/cart/:itemId', (req, res) => {
  const { userId, itemId } = req.params;
  const { quantity } = req.body;
  console.log(req.body)
  db.addItem(userId, itemId, quantity, (err, result) => {
    if (err) {
      return res.send(err);
    }
    res.send(result);
  });
});

app.patch('/users/:userId/cart/:itemId', (req, res) => {
  const { userId, itemId } = req.params;
  const { quantity } = req.body;

  db.incrementItemQuantity(userId, itemId, quantity, (err, result) => {
    if (err) {
      return res.send(err);
    }
    res.send(result);
  });
});

module.exports = app;
