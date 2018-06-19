import React from 'react';

import { Label, Icon, Button } from 'semantic-ui-react';

const AddOn = props => (
  <div>
    <Label size="medium">
      {props.displayName} (${props.price})
  
      <Label.Detail
        as="a"
        size="mini"
        onClick={() => props.onRemoveAddOn(props.value, props.price)}
        className="remove">
        <Icon name="minus" />
      </Label.Detail>
      <Label.Detail
        as="a"
        size="mini"
        onClick={() => props.onAddAddOn(props.value, props.price)}
        className="add">
        <Icon name="plus" />
      </Label.Detail>
    </Label>
  </div>
);

export default AddOn;