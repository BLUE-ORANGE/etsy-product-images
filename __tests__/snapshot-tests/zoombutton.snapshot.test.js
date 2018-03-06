import React from 'react';
import renderer from 'react-test-renderer';
import ZoomButton from '../../client/src/components/ZoomButton';
import testData from '../../testData/apiMock';

it('renders the zoom button with reference to imageUrl', () => {
  const tree = renderer
    .create(<ZoomButton
      medium={testData.testData[0].imageUrl}
      large={testData.testData[0].imageUrl}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

