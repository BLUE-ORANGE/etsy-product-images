import React from 'react';

const BackButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div id="image-left-arrow-container" className="image-arrow-box-container">
      <button onClick={onClick} id="image-left-arrow" className="image-arrow-box" aria-label="Previous image">
        <div className="arrow">◅</div>
      </button>
    </div>
  );
};

export default BackButton;
