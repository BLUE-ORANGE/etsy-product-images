import React from 'react';
import Slider from 'react-slick';
import { shallow } from 'enzyme';
import { App } from '../client/src/index';
import BackButton from '../client/src/components/BackButton';
import ForwardButton from '../client/src/components/ForwardButton';


test('App renders images upon load', () => {
  const carousel = shallow(<Slider />);

  expect(carousel.exists()).toEqual(true);
});

test('Should have a forward button', () => {
  const main = shallow(<ForwardButton />);

  expect(main.exists()).toEqual(true);
});

test('Should have a back button', () => {
  const main = shallow(<BackButton />);

  expect(main.exists()).toEqual(true);
});
