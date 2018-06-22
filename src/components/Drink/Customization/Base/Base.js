import React from 'react';

const Base = props => (
  <span
    style={{ cursor: 'pointer' }}
    onClick={() => props.onChooseBase(
      props.type, 
      props.children, 
      props.price)}>
    {props.children}
  </span>
);

export default Base;