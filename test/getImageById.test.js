// Mock out the filesystem.
jest.mock('fs', () => require('jest-plugin-fs/mock'));
jest.mock('../database');
jest.mock('../server/routes');
let nock = require('nock');
let rp = require('request-promise');
import * as rts from '../server/routes';
import * as db from '../database';
// import * as route from '../server/routes'; title: "You gotta be kitten me",
// imageUrl: "https://i.imgur.com/rY2aTMY.jpg",   productId: 30
describe('getImageByIdAsync', () => {

  test('returns db record for image', () => {

    let id = 1;
    expect.assertions(4);
    return db.getImageByIdAsync(id, () => {}).then((data) => {
      expect(data.id).toEqual(id)
      expect(data.title).toEqual('You gotta be kitten me');
      expect(data.imageUrl).toEqual('https://i.imgur.com/rY2aTMY.jpg');
      expect(data.productId).toEqual(30);

    })
  })
})

describe('GET /v1/product/:id/images', () => {
  var rData;
  beforeEach(() => {
    nock.cleanAll();
    let payload = {
      "id": 88,
      "imageUrl": "https://i.imgur.com/jpc5JTA.jpg",
      "productId": 161,
      "createdAt": "2018-02-23T20:08:18.301Z",
      "updatedAt": "2018-02-23T20:08:18.301Z"
    };
    payload = JSON.stringify(payload);
    nock('http://localhost:8080')
      .get('/v1/products/:id/images')
      .reply(200, payload)

  })
  afterEach(() => {
    nock.cleanAll();
  })
  test('GET returns image from db', () => {
    return rp('http://localhost:8080/v1/products/:id/images').then(function (data) {
      data = JSON.parse(data);
      console.log(data);

      expect(data.id).toEqual(88);
    })
    let id = 88;

  });
  test('it should make a db call on get product', () => {
    beforeEach(() => {
      nock.cleanAll();
      nock('http://localhost:8081')
        .get('/v1/products/:id/images')
        .reply(200, () => {
          console.log('helo')
          return db.getImageByIdAsync(id, () => {})
        })
    })
    afterEach(() => {
      nock.cleanAll();
    })
    nock('http://localhost:8081')
      .get('/v1/products/:id/images')
      .reply(200, db.getImageByIdAsync.bind(this))
    let id = 1;
    return rp('http://localhost:8081/v1/products/:id/images',() => 
    { return db.getImageByIdAsync(id, () => {}).then((data) => {

       var x = () => {expect.assertions(4);

      expect(data.id).toEqual(id);
      expect(data.title).toEqual('You gotta be kitten me');
      expect(data.imageUrl).toEqual('https://i.imgur.com/rY2aTMY.jpg');
      expect(data.productId).toEqual(31);
      }
      return x();

    }).then((data) => data).catch((err) => {
    
      console.log(err)
      return err.matcherResult

    }).then(data => data)
    });

    // .then((function(data) {   console.log(data);   data.then((item) => {
    // expect(item.id).toEqual(id);   }) })) expect.assertions(4); return
    // db.getImageByIdAsync(id, () => {})   expect(data.id).toEqual(id)
    // expect(data.title).toEqual('You gotta be kitten me');
    // expect(data.imageUrl).toEqual('https://i.imgur.com/rY2aTMY.jpg');
    // expect(data.productId).toEqual(30);

  })
});
