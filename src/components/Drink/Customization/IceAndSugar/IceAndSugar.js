import React from 'react';

const IceAndSugar = props => (
  <span
    style={{ cursor: 'pointer' }}
    onClick={() => props.onChooseIceOrSugarLevel(
      props.item,
      props.level)}>
    {props.level}
  </span>
);

export default IceAndSugar;