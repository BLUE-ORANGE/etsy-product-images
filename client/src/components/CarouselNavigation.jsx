import React from 'react';
// import PropTypes from 'prop-types';

const CarouselNavigation = props => (
  <ul className="slick-dots">
    {
      props.images.map((image, i) =>
        (
          image.focused ?
            <li key={`a ${image.toString()}`} onClick={() => props.clickHandler(i)}>
              <img src={image.imageUrl} alt="random cat" style={{ width: '30px', height: '30px', borderRadius: '3px' }} />
            </li> :
            <li key={`b ${image.toString()}`} onClick={() => props.clickHandler(i)}>
              <img src={image.imageUrl} alt="random cat" className="thumb-default" style={{ width: '30px', height: '30px', borderRadius: '3px' }} />
            </li>
        ))
    }
  </ul>
);


export default CarouselNavigation;
