import React from 'react';

const IceAndSugar = props => (
  <span
    onClick={() => props.onChooseIceOrSugarLevel(
      props.item,
      props.level)}>
    {props.level}
  </span>
);

export default IceAndSugar;