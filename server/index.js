const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.get('/items/:id', (req, res) => {
  db.connection.query(`SELECT * FROM items WHERE item_id = ${req.params.id}`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});
// add a route to get just the review rating
app.get('/cart', (req, res) => {
  db.connection.query('SELECT items.item_id, name, price, rating, numOfRatings, imgUrl FROM items INNER JOIN cartItems ON items.item_id = cartItems.item_id', (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

app.get('/items/:id/related', (req, res) => {
  db.connection.query(`SELECT relatedItems FROM items where item_id = ${req.params.id}`, (err, results) => {
    if (err) {
      console.log(err);
    }
    let related = JSON.parse(results[0].relatedItems);

    db.connection.query(`SELECT item_id, name, price, rating, numOfRatings, imgUrl FROM items WHERE item_id = ${related[0]} OR item_id = ${related[1]} OR item_id = ${related[2]}`, (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    });
  });
});

app.post('/cart/:id', (req, res) => {
  db.connection.query(`INSERT INTO cartItems (item_id, quantity) values (${req.params.id}, ${req.body.quantity})`, (err) => {
    if (err) {
      console.log(err);
    }
    res.send('added to cart');
  });
});

app.patch('/items/:id/list', (req, res) => {
  db.connection.query(`UPDATE items SET onList = true WHERE item_id = ${req.params.id}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send('updated');
    }
  });
});

module.exports = app;
