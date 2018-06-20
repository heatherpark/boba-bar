import React from 'react';

import { Label, Segment } from 'semantic-ui-react';

const Order = ({ order }) => {
  const renderAddOns = (addOns) => {
    const elements = [];

    for (let addOn in addOns) {
      if (addOns[addOn] > 0) {
        elements.push((
          <Label>
            {addOn}
            <Label.Detail>
              {addOns[addOn]}
            </Label.Detail>
          </Label>
        ));
      }
    }

    return elements;
  };

  const renderOrder = order => {
    return (
      <Segment>
        <Label>{order.base.flavor + ' ' + order.base.type}</Label>
        {renderAddOns(order.addOns)}
        <Label>ice: <Label.Detail>{order.ice}</Label.Detail></Label>
        <Label>sugar: <Label.Detail>{order.sugar}</Label.Detail></Label>
      </Segment>
    );
  };

  return (
    <div>
      {order ? renderOrder(order) : null}
    </div>
  );
};

export default Order;