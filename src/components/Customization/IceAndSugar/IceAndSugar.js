import React from 'react';

const IceAndSugar = props => {
  return (
    <span onClick={() => props.chooseIceOrSugarLevel(props.item, props.level)}>
      {props.level}
    </span>
  );
};

export default IceAndSugar;