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
  
  To seed the database: 
    - fill create config.js file inside the database directory with the following format:
        module.exports = {
          host: 'localhost',
          database: 'sunchamps_dev',
          user: *USER*
          password: *PASSWORD*,
        };
    - run schema.sql to create database
    - npm run seed (node database/seed.js),
  To start the server: npm start (nodemon server/server.js),
  To compile with webpack: npm run react-dev (webpack -d --watch),

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

