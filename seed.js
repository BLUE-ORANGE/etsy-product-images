
let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsy', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});


const User = sqlz.define('user', {
  name: Sequelize.TEXT,
  avatarurl: Sequelize.TEXT
},{
  schema: 'public'
});

const Review = sqlz.define('review', {
  description: Sequelize.TEXT,
  rating: Sequelize.INTEGER
},{
  schema: 'public'
});

const Product = sqlz.define('product', {
  name: Sequelize.TEXT,
  description: Sequelize.TEXT,
  price: Sequelize["DOUBLE PRECISION"],
  imageUrl: Sequelize.TEXT
},{
  schema: 'public'
})

const Shop = sqlz.define('shop', {
  avatarurl: Sequelize.TEXT,
  name: Sequelize.STRING
},{
  schema: 'public'
});

const UsersProductsFavorite = sqlz.define('usersproductsfavorite', {

},{
  schema: 'public'
});

const UsersShopsFavorite = sqlz.define('usersshopsfavorite',{

},{
  schema: 'public'
})

sqlz
  .authenticate()
  .then(() => {
    console.log(`connected`)
  })
  .catch(err => {
    console.error(`unable to connect: ${err}`)
  })
  
  User.sync({force: true}).then(() => {
    return User.create({
      name: 'trevor',
      avatarurl: 'image.jpg'
    })
  })
  Shop.sync({force: true}).then(() => {
    return Shop.create({
      avatarurl: 'image.jpg',
      name: 'trevors-shop'
    })
  })
  Product.sync({force: true});
  Review.sync({force: true});
  UsersProductsFavorite.sync({force:true});
  UsersShopsFavorite.sync({force:true});
  Review.belongsTo(User);
  Review.belongsTo(Product);
  UsersProductsFavorite.belongsTo(User);
  UsersProductsFavorite.belongsTo(Product);
  UsersShopsFavorite.belongsTo(User);
  UsersShopsFavorite.belongsTo(Shop)
  Product.belongsTo(Shop);
  