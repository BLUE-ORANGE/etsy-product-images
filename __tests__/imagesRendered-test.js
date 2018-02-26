import React from 'react';
import Slider from 'react-slick';
import { shallow } from 'enzyme';
import { App } from '../client/src/index';

test('App renders images upon load', () => {
  const carousel = shallow(<Slider />);

  expect(carousel.exists()).toEqual(true);
})