const fs = require('fs');
const faker = require('faker');

function generateProducts() {
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
};

function generateCarts() {
    let fileName = './carts.csv';
    let usersLimit = 1000000;
    let chunk = 10000;

    fs.writeFileSync(fileName, 'user_id~cart' + '\n' );
    let userId = 0;
    do{
        let currChunk = chunk;
        let data = '';
        while(currChunk--) {
             
            data += userId++ + '~' +  generateCart() + '\n';
        }
        fs.appendFileSync(fileName, data);
    }while(usersLimit -= chunk)
    console.log('successfully wrote all carts to csv');
    
}

function generateCart() {
    let cart = '';
    let itemIdLimit = 10000000;
    let maxQuantity = 10;

    let itemCount = faker.random.number({min: 0, max: 5});
    while(itemCount--) {
        cart += faker.random.number({min:0, max: itemIdLimit}) + ':' + faker.random.number({min: 1, max: maxQuantity}) + ',';
    }

    return '{' + cart.slice(0,-1) + '}'; 
    
}


generateProducts();
generateCarts();
