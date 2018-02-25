// Import the mock library
var SequelizeMock = require('sequelize-mock');

// Setup the mock database connection
var DBConnectionMock = new SequelizeMock();

// Define our Model
var ProductImageUrl = DBConnectionMock.define('productimageurl', {
  title: "You gotta be kitten me",
  imageUrl: "https://i.imgur.com/rY2aTMY.jpg",
  productId: 30
}, {
  schema: 'public'
});
 exports.getImageById = (id, cb) => {
  console.log(id);
  ProductImageUrl.findById(id)
  .then((image) => {
    cb(null, image);
  })
  .catch((err) => {
   cb(err, null);
  });
}
// You can also associate mock models as well
exports.getImageByIdAsync = (id) => {
 return ProductImageUrl.findById(id)
   .then((image) => {
     return image;
   })
   .catch((err) => {
     return err;
   })
  };