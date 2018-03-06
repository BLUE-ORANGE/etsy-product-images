import React from 'react';
import renderer from 'react-test-renderer';
import CarouselNavigation from '../../client/src/components/CarouselNavigation';
import testData from '../../testData/apiMock';


it('carousel navigation renders correctly', () => {
  const tree = renderer
    .create(<CarouselNavigation images={testData.testData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


