import React from 'react';

import utilityStyles from '../../../../css/utility.css';

const Base = props => (
  <span
    className={`base-options ${utilityStyles['u-cursor']}`}
    onClick={() => props.onChooseBase(
      props.type, 
      props.children, 
      props.price)}>
    {props.children}
  </span>
);

export default Base;