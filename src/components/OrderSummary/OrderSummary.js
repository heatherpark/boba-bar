<<<<<<< HEAD
import React from 'react';

import Drink from '../Drink/Drink';

const OrderSummary = props => {
  return (
    <div>
      <h3>Your Order</h3>
      <Drink />

      <p>Continue to checkout?</p>
      <button onClick={props.onPlaceOrderCanceled}>Cancel</button>
      <button onClick={props.onPlaceOrderContinued}>Continue</button>
    </div>
  );
};

export default OrderSummary;
||||||| merged common ancestors
=======
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
>>>>>>> 4b660446de26d93fa80c9791a7705cecde7d5f60
