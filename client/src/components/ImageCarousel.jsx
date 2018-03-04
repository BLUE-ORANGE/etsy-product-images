import React from 'react';

const ImageCarousel = (props) => {
  const image = props.images.filter(img => img.focused === true);

  console.log(image);
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
        src={image[0].imageUrl}
      />
    </div>
  );
};


export default ImageCarousel;
