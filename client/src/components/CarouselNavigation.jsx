import React from 'react';
// import PropTypes from 'prop-types';

const CarouselNavigation = props => (
  <ul className="slick-dots">
    {
      props.images.map((image) => {
        return (
          image.focused ?
            <li key={image}>
              <img src={image.imageUrl} alt="random cat" style={{ width: '30px', height: '30px' }} />
            </li> :
            <li key={image}>
              <img src={image.imageUrl} alt="random cat" className="thumb-default " style={{ width: '30px', height: '30px' }} />
            </li>
        );
      })
    }
  </ul>
);


export default CarouselNavigation;
