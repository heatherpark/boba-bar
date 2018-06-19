import React from 'react';

const Order = ({ order }) => {
  return (
    <div>
      {order ? order.drinkOrder.base.flavor : null}
    </div>
  );
};

export default Order;