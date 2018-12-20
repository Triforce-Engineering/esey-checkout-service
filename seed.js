var faker = require('faker');
var mysql = require('mysql');
var mysqlconfig = require('./config.js')

var connection = mysql.createConnection(mysqlconfig);

connection.connect((err) => {
  if (err) {
    console.error(err)
  } else {
    console.log("Connected!")
  }
})

for (var i = 0; i < 100; i++) {
  var name = faker.commerce.productName();
  var price = faker.commerce.price(3, 10000, 2);
  var stock = faker.random.number({'min': 0, 'max': 30});
  var onList = faker.random.boolean();
  var rating = faker.random.number({'min': 0, 'max': 5});
  var numOfRatings = faker.random.number({'min': 0, 'max': 1000});
  var relatedItems = JSON.stringify([faker.random.number({'min': 1, 'max': 100}),faker.random.number({'min': 1, 'max': 100}),faker.random.number({'min': 1, 'max': 100})]);
  var img_url = faker.image.fashion(200, 200, true);

  connection.query(`INSERT INTO items (name, price, stock, onList, rating, numOfRatings, relatedItems, img_url) values ('${name}', ${price}, ${stock}, ${onList}, ${rating}, ${numOfRatings}, '${relatedItems}', '${img_url}')`, (err) => {
    if (err) {
      console.error(err);
    } 
  });
}