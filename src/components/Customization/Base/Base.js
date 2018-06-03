import React from 'react';

const Base = props => {
  return (
    <span 
      className="base-option"
      onClick={() => props.chooseBase(props.flavor, props.price)}>
      {props.flavor}
    </span>
  );
};

export default Base;