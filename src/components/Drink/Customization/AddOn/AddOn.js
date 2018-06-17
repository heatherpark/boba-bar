import React from 'react';

import { Button } from 'semantic-ui-react';

const AddOn = props => (
  <React.Fragment>
    <Button
      size="mini"
      basic
      compact
      onClick={() => props.onRemoveAddOn(props.value, props.price)}
      className="remove">-</Button>

    {props.displayName} ({props.price})

    <Button
      size="mini"
      basic
      compact
      onClick={() => props.onAddAddOn(props.value, props.price)}
      className="add">+</Button>
  </React.Fragment>
);

export default AddOn;