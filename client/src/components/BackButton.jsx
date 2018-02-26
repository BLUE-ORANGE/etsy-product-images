import React from 'react';

const BackButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ maxWidth:'100px', maxHeight:'100px'}}
      onClick={onClick}
    >Back
    </div>

  );
};

export default BackButton;
