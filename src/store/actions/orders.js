import * as actionTypes from './actionTypes';
import axios from '../../axios/orders';

export const checkOut = drinkOrder => {
  return async function (dispatch) {
    try {
      const response = await axios.post('/orders.json', drinkOrder);
      dispatch(checkoutSuccess());
    } catch (error) {
      console.error(error);
      dispatch(checkoutFailed());
    }
  };
};

export const checkoutStart = () => ({
  type: actionTypes.CHECKOUT_START
});

export const checkoutSuccess = () => ({
  type: actionTypes.CHECKOUT_SUCCESS
});

export const checkoutFailed = () => ({
  type: actionTypes.CHECKOUT_FAILED
});