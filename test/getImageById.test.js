// Mock out the filesystem.
jest.mock('fs', () => require('jest-plugin-fs/mock'));
jest.mock('../database');

import * as db from '../database';

// title: "You gotta be kitten me",   imageUrl:
// "https://i.imgur.com/rY2aTMY.jpg",   productId: 30
describe('getImageByIdAsync', () => {

  test('works with promises', () => {

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