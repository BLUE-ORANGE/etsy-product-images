import React from 'react';

const ImageCarousel = props => (
  <div style={{  }}>
    <img
      alt="cat"
      style={{
 'object-fit': 'scale-down', height: '610px', width: '560px', marginLeft:'auto', marginRight:'auto', 'background-color': '#F2F1F1' }}
      src={props.activeImage}
    />
  </div>
);


export default ImageCarousel;
