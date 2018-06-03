import React from 'react';

const AddOn = props => {
  return (
    <React.Fragment>
      {props.displayName} {props.price}
      <span
        onClick={() => this.addTopping(props.value, props.price)}
        className="add">+</span>
      <span
        onClick={() => this.removeTopping(props.value, props.price)}
        className="remove">-</span>
    </React.Fragment>
  );
};

export default AddOn;