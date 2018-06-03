import React from 'react';

const AddOn = props => (
  <React.Fragment>
    {props.displayName} {props.price}
    <span
      onClick={() => props.addAddOn(props.value, props.price)}
      className="add">+</span>
    <span
      onClick={() => props.removeAddOn(props.value, props.price)}
      className="remove">-</span>
  </React.Fragment>
);

export default AddOn;