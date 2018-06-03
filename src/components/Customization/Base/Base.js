import React from 'react';

const Base = props => (
  <span
    className="base-option"
    onClick={() => props.chooseBase(props.flavor, props.price)}>
    {props.flavor}
  </span>
);

export default Base;