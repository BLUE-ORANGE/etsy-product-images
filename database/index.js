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
  console.log(id);
  ProductImageUrl.findById(id)
  .then((image) => {
    cb(null, image);
  })
  .catch((err) => {
   cb(err, null);
  });
}

let getImagesForProduct = (id) => {
  return ProductImageUrl.findAll({
    where: {
      productId: id
    }
  }).then((data) => {
    return data;
  }).catch((error) => {
    return error;
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
module.exports.getImagesForProduct = getImagesForProduct;