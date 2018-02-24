let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsy-scratch', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

const ProductImageUrl = sqlz.define('productimageurl', {
  imageUrl: Sequelize.STRING,
  productId: Sequelize.INTEGER
}, {
  schema: 'public'
});

let getImageById = (id, cb) => {
  return ProductImageUrl.findById(id)
  .then((image) => {
    cb(null, image);
  })
  .catch((err) => {
   cb(err, null);
  });
}
let getImageByIdAsync = (id) => {
 return new Promise((resolve, reject) => {
  return ProductImageUrl.findById(id)
  .then((image) => {
    resolve(image);
  })
  .catch((err) => {
    reject(err);
   });
 })
 
}
let getFiveImages = (cb) => {
  ProductImageUrl.findAll({
    where: {
      id: {
        gt: 200
      }
    }
  })
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err, null);
  });
}

module.exports.getFive = getFiveImages;
module.exports.getImageById = getImageById;
module.exports.getImageByIdAsync = getImageByIdAsync;