import React from 'react';
import renderer from 'react-test-renderer';
import ImageCarousel from '../../client/src/components/ImageCarousel';
import testData from '../../testData/apiMock';

it('ImageCarousel renders images', () => {
  const tree = renderer
    .create(<ImageCarousel images={testData.testData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
