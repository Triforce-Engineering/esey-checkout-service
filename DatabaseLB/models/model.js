const { Pool } = require('pg');

//this will be connected to different hosts
module.exports = function connect(config) {
    const pool = new Pool(config);
    pool.query('SELECT version()').then(res => console.log('successfully connected to: ' + config.host + res.rows[0].version));

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
    
    function decrementFromStock(items, quantities, callback) {
        pool.connect((err, client, done) => {
            const query = {
                text: `update items 
                set stock = stock - bought_items.quantity
                from 
                  (select unnest(array[${items.join(',')}]::integer[]) as item_id, unnest(array[${quantities.join(',')}]::integer[]) as quantity) as bought_items
                where items.item_id = bought_items.item_id`,
            }
            client.query(query, (err) => {
                if(err) {
                    callback(err);
                    return done();
                }
                callback(null);
                done();
            });
        });
    };
    return {
        pool,
        getItemInfo,
        decrementFromStock
    }
}