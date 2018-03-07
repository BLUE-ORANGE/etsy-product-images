import React from 'react';
import ForwardButton from './ForwardButton';

const ImageCarousel = (props) => {
  let image = props.images.filter(img => img.focused === true);
  image = image[0].imageUrl;
  const componentClasses = ['carousel-image'];
  componentClasses.push('show');
  return (
    <div>
      <img
        alt="cat"
        style={{
          objectFit: 'scale-down',
          height: '456px',
          width: '570px',
          backgroundColor: '#f5f5f1',
          borderRadius: '3px',
        }}
        className={componentClasses.join(' ')}
        src={image}
      />
    </div>
  );
};


export default ImageCarousel;
