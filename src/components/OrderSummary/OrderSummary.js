import React from 'react';

import Drink from '../Drink/Drink';

const OrderSummary = props => {
  return (
    <div>
      <h3>Your Order</h3>
      <Drink />

      <p>Continue to checkout?</p>
      <button onClick={props.onPurchaseCanceled}>Cancel</button>
      <button onClick={props.onPurchaseContinued}>Continue</button>
    </div>
  );
};

export default OrderSummary;