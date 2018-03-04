import React from 'react';

const ImageCarousel = (props) => {
  let image = props.images.filter(img => img.focused === true);
  image = image[0].imageUrl;
  return (
    <div>
      <img
        alt="cat"
        style={{
          objectFit: 'scale-down',
          height: '610px',
          width: '560px',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#F2F1F1',
        }}
        src={image}
      />
    </div>
  );
};


export default ImageCarousel;
