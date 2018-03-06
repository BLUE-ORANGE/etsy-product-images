import React from 'react';
import { shallow } from 'enzyme';

import { Lightbox } from 'react-modal-image';
import ZoomButton from '../client/src/components/ZoomButton';
import testData from '../testData/apiMock';


describe('ZoomButtonComponent', () => {
  it('Renders zoom by default', () => {
    const zoomButton = shallow(<ZoomButton
      image={testData.testData[0]}
    />);

    const medium = testData.testData[0];
    const large = testData.testData[0];
    // Now you can spy on instance methods
    const link = zoomButton.find('a');
    const modal = zoomButton.childAt(0);

    link.simulate('click');
    expect(zoomButton.state('displayZoom')).toEqual(true);
    // modal.simulate('click');
    zoomButton.find(Lightbox).simulate('close');
    expect(zoomButton.state('displayZoom')).toEqual(false);

    // Now render the instance to execute the expected code path


    // Assert that getBar was called as expected
  });
});
