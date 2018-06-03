import React from 'react';

const AddOn = props => {
  return (
    <React.Fragment>
      {props.displayName} {props.price}
      <span
        onClick={() => props.addTopping(props.value, props.price)}
        className="add">+</span>
      <span
        onClick={() => props.removeTopping(props.value, props.price)}
        className="remove">-</span>
    </React.Fragment>
  );
};

export default AddOn;