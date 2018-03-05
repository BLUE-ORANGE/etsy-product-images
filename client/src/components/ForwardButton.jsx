import React from 'react';

const ForwardButton = props => (
  <div {...props} id="image-right-arrow-container" className="image-arrow-box-container slick-next">
    <button id="image-right-arrow" className="image-arrow-box">
      <div className="arrow">▻</div>
    </button>
  </div>
  // ▻
);

export default ForwardButton;
