import React from 'react';

import utilityStyles from '../../../../css/utility.css';

const IceAndSugar = props => (
  <span
    className={utilityStyles['u-cursor']}
    onClick={() => props.onChooseIceOrSugarLevel(
      props.item,
      props.level)}>
    {props.level}
  </span>
);

export default IceAndSugar;