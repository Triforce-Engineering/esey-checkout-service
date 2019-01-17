const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ 
  contactPoints: ['127.0.0.1'],
  protocolOptions:{ port: 8989 },
  localDataCenter: 'datacenter1',
  keyspace: 'checkout',
});

client.connect((err) => {
  if (err) { return console.error(err); }
  console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
});


function getCart(userId, callback) {
  const query = 'SELECT cart FROM cart_by_userid WHERE user_id = ? ';
  client.execute(query, [userId], { hints:['int'] },  (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, {
      user_id: userId,
      cart: res.rows[0].cart,
    });
});
}

function addItem(userId, itemId, quantity, callback) {
  const query = `INSERT INTO cart_by_userid (user_id, cart)  VALUES ( ${userId}, { ${itemId} : ${quantity} })`;
  client.execute(query, (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, {
      success: 'Item added to cart!',
    });
  });
}

function getItemInfo(itemId, callback) {
  const query = 'SELECT * FROM items WHERE item_id = ? ';
  client.execute(query, [itemId], { hints:['int'] }, (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, res);
  });
};

module.exports = {
  client,
  getCart,
  addItem,
  getItemInfo,
};
