import React from 'react';
import { shallow } from 'enzyme';
import CarouselNavigation from '../client/src/components/CarouselNavigation';
import testData from '../testData/apiMock';

describe('carousel navigation', () => {
  const nav = shallow(React.createElement(CarouselNavigation, {
    images: testData.testData,
    clickHandler: jest.fn(() => {
      nav.setProps({
        images: [
          {
            id: 108,
            imageUrl: 'https://i.imgur.com/zmTGRu1.jpg',
            focused: false,
            productId: 108,
            createdAt: '2018-02-26T00:17:52.802Z',
            updatedAt: '2018-02-26T00:17:52.802Z',
          }, {
            id: 247,
            imageUrl: 'https://i.imgur.com/V1XNLjNEWNEWNWE.jpg',
            focused: true,
            productId: 108,
            createdAt: '2018-02-26T00:17:52.802Z',
            updatedAt: '2018-02-26T00:17:52.802Z',
          }, {
            id: 731,
            imageUrl: 'https://i.imgur.com/jpc5JTA.jpg',
            focused: false,
            productId: 108,
            createdAt: '2018-02-26T00:17:52.802Z',
            updatedAt: '2018-02-26T00:17:52.802Z',
          },
        ],
      });
    }),
  }));
  it('displays thumbnails of loaded images', () => {
    const first = nav.find('li').at(0);
    const second = nav.find('li').at(1);


    second.simulate('click');
    first.simulate('click');

    expect(second.find('img').at(0).hasClass('thumb-default')).toBe(true);
    expect(first.find('img').at(0).hasClass('thumb-default')).toBe(false);
  });
});
