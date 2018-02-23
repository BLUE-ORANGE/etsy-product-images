// Import the mock library
var SequelizeMock = require('sequelize-mock');

// Setup the mock database connection
var DBConnectionMock = new SequelizeMock();

// Define our Model
var ImageMock = DBConnectionMock.define('productimageurl', {
  imgurHash: Sequelize.STRING,
  imageTitle: Sequelize.STRING,
  imageUrl: Sequelize.STRING
}, {
  schema: 'public'
});
// let getImageById = (id, cb) => {
//   console.log(id);
//   ProductImageUrl.findById(id)
//   .then((image) => {
//     cb(null, image);
//   })
//   .catch((err) => {
//    cb(err, null);
//   });
// }
// You can also associate mock models as well
exports.getImageById = (id, cb) => {
  ImageMock.findById(id)
    .then((image) => {
      cb(null, image);
    })
    .catch((err) => {
     cb(err, null);
    });
}

