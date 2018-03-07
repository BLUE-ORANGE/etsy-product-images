const Sequelize = require('sequelize');

const sqlz = new Sequelize('etsy-trevor', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

const ProductImageUrl = sqlz.define('productimageurl', {
  imageUrl: Sequelize.STRING,
  productId: Sequelize.INTEGER,
}, {
  schema: 'public',
});

const getImageById = (id, cb) => {
  ProductImageUrl.findById(id)
    .then((image) => {
      cb(null, image);
    })
    .catch((err) => {
      cb(err, null);
    });
};

const getImagesForProduct = id => ProductImageUrl.findAll({
  where: {
    productId: id,
  },
}).then(data => data).catch(error => error);

const getFiveImages = (cb) => {
  ProductImageUrl.findAll({
    where: {
      id: {
        gt: 200,
      },
    },
  })
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err, null);
    });
};

module.exports.getFive = getFiveImages;
module.exports.getImageById = getImageById;
module.exports.getImagesForProduct = getImagesForProduct;
