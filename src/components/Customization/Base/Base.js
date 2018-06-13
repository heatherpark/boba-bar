import React from 'react';

const Base = props => (
  <span
    className="base-option"
    onClick={() => props.onChooseBase(props.type, props.children, props.price)}>
    {props.children}
  </span>
);

export default Base;