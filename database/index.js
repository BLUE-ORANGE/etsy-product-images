let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsy-scratch', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

const ProductImageUrl = sqlz.define('productimageurl', {
  imgurHash: Sequelize.STRING,
  imageTitle: Sequelize.STRING,
  imageUrl: Sequelize.STRING
}, {
  schema: 'public'
});

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