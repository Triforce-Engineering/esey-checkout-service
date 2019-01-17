# Project Name

> Project description

## Related Projects

  - https://github.com/ChampsOfTheSun/vrtobar-service
  - https://github.com/ChampsOfTheSun/reviews-service
  - https://github.com/ChampsOfTheSun/makardjian-server
  - https://github.com/ChampsOfTheSun/jhods16-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
  
1. To seed the database: 
    - fill create config.js file inside the database directory with the following format:
       ```
       module.exports = {
          password: *PASSWORD*,
        }; 
        ```
    - npm run schema to create and use database 
    - npm run seed (node database/seed.js),
 1. To start the server: npm start (nodemon server/server.js),
 1. To compile with webpack: npm run react-dev (webpack -d --watch),

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```

# API Endpoints
### Get cart information for a single user
#### GET /users/:userId/cart/
This returns a JSON with following structure
```
{
  user_id: (int)
  cart: [
          {
             [item_id]:[number of items in cart]
          }...
        ]
}
```
### Add an item to a single user's cart 
#### POST /users/:userId/cart/:itemId
Body of the request should have a JSON object with following structure
```
{
  item_id:(int)
  quantity:(int) [number of items]
}
```
### Update the quantity of an item in a user's cart
#### PUT /users/:userId/cart/:itemId
Body of the request should have a JSON object with following structure
```
{
  item_id:(int)
  quantity:(int) [number of items]
}
```

### Remove item from a single user's cart
#### DELETE /users/:userId/cart/:itemId

### Purchase all items in a single user's cart
#### POST /users/:userId/purchases

### Get checkout relevant information(name, price, vendor and stock) for a single item 
#### GET /items/:itemId
Gets cart relevant item information by item id
This should return a JSON with the following structure
```
{
  item_id:(int)
  name:(String)
  vendor:(string)
  price:(decimal)
  stock:(int) 
}
```
