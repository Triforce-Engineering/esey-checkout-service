const { Pool } = require('pg');
const axios = require('axios');
const config = require('./config');

const pool = new Pool({
  user: 'power_user',
  database: 'checkout',
  password: config.password,
  host: config.host,
  max: 200,
});
const DATABASE_LB_HOST = 'localhost';

//  Get cart information for a single user
function getCart(userId, callback) {
  pool.connect((err, client, done) => {
      const query = {
      text: 'SELECT item_id, quantity FROM carts  WHERE user_id = $1',
      values: [userId],
      rowMode: 'array',
    };
    client.query(query, (err, res) => {
      if (err) {
        done();
        return callback(err);
      }
      callback(null, {
        user_id: userId,
        cart: res.rows,
      });
      done();
    });
  });
}
  

// Add an item to a single user's cart
function addItem(userId, itemId, quantity, callback) {
  pool.connect((err, client, done) => {
    const query = {
      text: 'INSERT INTO carts(user_id, item_id, quantity) VALUES($1, $2, $3)',
      values: [userId, itemId, quantity],
      rowMode: 'array',
    };
    client.query(query, (err, res) => {
      if (err) {
        done();
        return callback(err);
      }
      callback(null, {
        success: 'Item added to cart!',
      });
      done();
    });
  });
}

// Update an item's quantity in a user's cart 
function incrementItemQuantity(userId, itemId, quantity, callback) {
  pool.connect((err, client, done) => {
    const query = {
      text: 'UPDATE carts SET quantity=quantity + $3 WHERE user_id = $1 AND item_id = $2 ',
      values: [userId, itemId, quantity],
      rowMode: 'array',
    };
    client.query(query, (err, res) => {
      if (err) {
        done();
        return callback(err);
      }
      if (res.rowCount === 0) {
        done();
        return callback(null, { warning: 'Item not found in cart' });
      }
      callback(null, { success: 'Item quantity updated!' });
      done();
    });
  });
}

//  Remove item from a single user's cart
function deleteItem(userId, itemId, callback) {
  pool.connect((err, client, done) => {
    const query = {
      text: 'DELETE FROM carts WHERE user_id = $1 AND item_id = $2',
      values: [userId, itemId],
      rowMode: 'array',
    };
    client.query(query, (err, res) => {
      if (err) {
        done();
        return callback(err);
      }
      if (res.rowCount === 0) {
        done();
        return callback(null, { warning: 'Item not found in cart' });
      }
      callback(null, {
        success: 'Item deleted from cart!',
      });
      done();
    });
  });
}

// Get checkout relevant information(name, price, vendor and stock) for a single item
function getItemInfo(itemId, callback) {
  axios.get('http://' + DATABASE_LB_HOST + '/items/' + itemId)
    .then(response => callback(null, response.data))
    .catch(err => callback(err));
}

// Gets cart relevant item information by item name
function getItemInfoByName(itemName, callback) {
  pool.connect((err, client, done) => {
    const query = {
      text: 'SELECT * FROM items WHERE name = $1',
      values: [itemName],
    };
    client.query(query, (err, res) => {
      if (err) {
        done();
        return callback(err);
      }
      callback(null, res.rows[0]);
      done();
    });
  });
}

// Purchase all items in a single user's cart
function purchaseAllItems(userId, callback) {
  getCart(userId, (err, results) => {
    if (err) {
      return callback(err);
    }

    const purchaseTuples = results.cart;
    axios.post('http://' + DATABASE_LB_HOST + '/update', { purchaseTuples, userId })
      .then(response => callback(null, response.data))
      .catch(err => callback(err))
      .then(() => pool.query('DELETE from carts WHERE user_id =' + userId));
  });
}
    
module.exports = {
  pool,
  getCart,
  addItem,
  incrementItemQuantity,
  deleteItem,
  getItemInfo,
  getItemInfoByName,
  purchaseAllItems,
};
