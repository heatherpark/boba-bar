import React from 'react';

import utilityStyles from '../../../../css/utility.css';

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