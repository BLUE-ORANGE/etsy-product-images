import React from 'react';

import { shallow } from 'enzyme';
import { App } from '../client/src/index';
import BackButton from '../client/src/components/BackButton';
import ForwardButton from '../client/src/components/ForwardButton';
import ImageCarousel from '../client/src/components/ImageCarousel';
import CarouselNavigation from '../client/src/components/CarouselNavigation';
import ZoomButton from '../client/src/components/ZoomButton';
import testData from '../testData/apiMock';


test('should have ImageCarousel component', () => {
  const carousel = shallow(<ImageCarousel images={testData.testData} />);

  expect(carousel.exists()).toEqual(true);
});

test('should have CarouselNavigation component', () => {
  const carouselNav = shallow(<CarouselNavigation images={testData.testData} />);

  expect(carouselNav.exists()).toEqual(true);
});

test('should have ZoomButton component', () => {
  const zoomButton = shallow(<ZoomButton
    medium={testData.testData[0].imageUrl}
    large={testData.testData[0].imageUrl}
  />);

  expect(zoomButton.exists()).toEqual(true);
});

test('Should have a forward button', () => {
  const main = shallow(<ForwardButton />);

  expect(main.exists()).toEqual(true);
});

test('Should have a back button', () => {
  const main = shallow(<BackButton />);

  expect(main.exists()).toEqual(true);
});
