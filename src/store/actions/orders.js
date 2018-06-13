import * as actionTypes from './actionTypes';
import axios from '../../axios/orders';

export const checkOut = drinkOrder => {
  return dispatch => {
    dispatch(checkoutStart());

    axios.post('/orders.json', drinkOrder)
      .then(response => {
        dispatch(checkoutSuccess());
      })
      .catch(error => {
        console.error(error);
        dispatch(checkoutFailed());
      });
  };
};

export const checkoutStart = () => {
  return {
    type: actionTypes.CHECKOUT_START
  };
};

export const checkoutSuccess = () => {
  return {
    type: actionTypes.CHECKOUT_SUCCESS
  };
};

export const checkoutFailed = () => {
  return {
    type: actionTypes.CHECKOUT_FAILED
  };
};