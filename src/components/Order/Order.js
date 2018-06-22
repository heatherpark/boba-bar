import React from 'react';

import { Label, Segment } from 'semantic-ui-react';

const Order = ({ order }) => {
  const renderAddOns = (addOns) => {
    const elements = [];

    for (let addOn in addOns) {
      const quantity = addOns[addOn];

      if (quantity > 0) {
        elements.push((
          <Label>
            {addOn}
            <Label.Detail>
              {quantity}
            </Label.Detail>
          </Label>
        ));
      }
    }

    return elements;
  };
  
  return (
    <div>
      {order &&
        <Segment>
          <Label>{order.base.flavor + ' ' + order.base.type}</Label>
          {renderAddOns(order.addOns)}
          <Label>ice: <Label.Detail>{order.ice}</Label.Detail></Label>
          <Label>sugar: <Label.Detail>{order.sugar}</Label.Detail></Label>
        </Segment>}
    </div>
  );
};

export default Order;