const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool({
  user: 'power_user',
  database: 'checkout',
  password: config.password,
  host: config.host,
  max: 200,
});


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
  pool.connect((err, client, done) => {
    const query = {
      text: 'SELECT * FROM items WHERE item_id = $1',
      values: [itemId],
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
  pool.connect((err, client, done) => {
    client.query('BEGIN', (err) => {
      if (err) { done(); return callback(err); }
      const purchaseQuery = {
        text: `
      UPDATE items 
      SET stock = user_items.stock - user_items.quantity
      FROM (
        SELECT items.item_id, items.stock, user_cart.quantity FROM (
          SELECT quantity, item_id FROM carts WHERE user_id = $1 
          ) AS user_cart 
          INNER JOIN items ON user_cart.item_id=items.item_id) AS user_items
          WHERE items.item_id = user_items.item_id`,
          values: [userId]
        };
        
        client.query(purchaseQuery, (errPurchase, res) => {
          if (errPurchase) {
            // transaciton did not go through 
            // rollback transaction
            return client.query('ROLLBACK', (errRollback) => {
              if (errRollback) {
                done();
                return callback({error: 'Error Rolling back transaction'});
              }
              done();
              callback({error: 'Error making purchase'});
            });
          }        
          
          const clearCart = {
            text: 'DELETE FROM carts WHERE user_id = $1',
            values: [userId],
          }
          
          client.query(clearCart, (errClearCart, res) => {
            if (errClearCart) {
              return client.query('ROLLBACK', (errRollback, res) => {
                if (errRollback) {
                  done();
                  return callback({error: 'Error Rolling back transaction'});
                }
                callback({ error: 'Error making purchase' });
                done();
              });
            }
            
            // the transaction comp
            client.query('COMMIT', (errCommit) => {
              if (err) {
                done();
                return callback({error: 'Error commiting transaction'});
              }
              callback(null, { success: 'Items Purchased' });
              done();
            });
          });
        });
      });
    })
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
