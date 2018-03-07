# BLUE-ORANGE - etsy-product-images
Product image carousel for etsy product details page
## Related Projects
  - https://github.com/BLUE-ORANGE/etsy-seller-bar
  - https://github.com/BLUE-ORANGE/etsy-product-reviews
  - https://github.com/BLUE-ORANGE/etsy-product-summary

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
- Install dependencies:
```
yarn install
```
- Build bundle.js
```sh
yarn run webpack-watch
```
- Run server
```sh
yarn run mon
```


running locally on port 3002


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

-     Node 6.13.0
```sh 
"dependencies": {
    "body-parser": "^1.18.2",
    "express": "4.x",
    "express-promise-router": "^3.0.1",
    "jquery": "^3.3.1",
    "morgan": "^1.9.0",
    "pg": "^7.4.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-slick": "^0.19.0",
    "request": "^2.83.0",
    "request-promise": "^4.2.2",
    "sequelize": "^4.33.4",
    "webpack-dev-server": "^2.11.1"
  }
  ```

## Development Dependencies
```sh
"devDependencies": {
    "babel-core": "^6.26.0",
    "babel-eslint": "^8.2.2",
    "babel-loader": "^7.1.2",
    "babel-preset-airbnb": "^2.4.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "bluebird": "^3.5.1",
    "eslint": "^4.9.0",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-config-hackreactor": "git://github.com/reactorcore/eslint-config-hackreactor",
    "eslint-loader": "^1.9.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-jsx-a11y": "^6.0.2",
    "eslint-plugin-react": "^7.7.0",
    "webpack": "^3.11.0"
  }
```
### Installing Dependencies

From within the root directory:

```sh
yarn install
```


### Seeding Database

Requirements:
- [postgres](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)
  - create a db user student / student

- Create DB:
  ### etsy-trevor
- Install dependencies(if haven't already)
```
yarn install
```
- Seed database:
```
 node seedDatabase.js
```


