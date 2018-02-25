let mockRequest = require('mock-request');

exports.get = mockRequest.mock()
                          .get('/v1/products/:id/images')
                          .respond(200, 
                            {
                              "id": 88,
                              "imageUrl": "https://i.imgur.com/jpc5JTA.jpg",
                              "productId": 161,
                              "createdAt": "2018-02-23T20:08:18.301Z",
                              "updatedAt": "2018-02-23T20:08:18.301Z"
                          })
                          .run();



// var resp = {
//   "id": 28,
//   "imageUrl": "https://i.imgur.com/jpc5JTA.jpg",
//   "productId": 161,
//   "createdAt": "2018-02-23T20:08:18.301Z",
//   "updatedAt": "2018-02-23T20:08:18.301Z"
// }

// const mockRequest = httpMocks.createRequest({
//   method: 'GET',
//   url: '/v1/products/'
// });

// exports.routeGet = get;