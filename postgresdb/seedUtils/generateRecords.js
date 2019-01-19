const fs = require('fs');
const faker = require('faker');

function generateProducts() {
    let start = Date.now();
    let item_id = 0;
    let fileName = './items.csv';

    fs.writeFileSync(fileName, 'item_id,name,vendor,price,stock' + '\n' );
   
    let total = 10000000;
    let chunk = 10000;
    do{
        let currChunk = chunk;
        let data = '';
        while(currChunk--) {
            data += item_id++ + '~' + faker.commerce.productName() + item_id + '~' + faker.company.companyName() + '~' + faker.random.number({min: 0.01, max: 10000, precision:0.01}) + '~' + faker.random.number({min: 0, max: 10000}) + '\n';
        }
        fs.appendFileSync(fileName, data);
        
    }while(total-=chunk)
    console.log('successfully wrote all items to csv');
    console.log('time elapsed: ' + (Date.now() - start) / (1000 * 60) + 'minutes');

};

function generateCart() {
    let start = Date.now();
    let fileName = './carts.csv';
    let cartCount = 1000000;
    let itemCount = 10000000;
    let userCount = 1000000;
    let maxQuantity = 10;
    let chunk = 10000;

    fs.writeFileSync(fileName, 'user_id~item_id~quantity' + '\n' );
    do{
        let currChunk = chunk;
        let data = '';
        while(currChunk--) {
            data += faker.random.number({min:1, max:userCount}) + '~' + faker.random.number({min:0, max:itemCount}) + '~' + faker.random.number({min:0, max:maxQuantity}) + '\n';
        }
        fs.appendFileSync(fileName, data);
    }while(cartCount -= chunk)
    console.log('successfully wrote all carts to csv');
    console.log('time elapsed: ' + (Date.now() - start) / (1000 * 60) + 'minutes');
    
}


generateProducts();
generateCart();
