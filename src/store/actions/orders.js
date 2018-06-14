import * as actionTypes from './actionTypes';
import axios from '../../axios/orders';

export const checkOut = orderData => {
  console.log('order data: ', orderData);
  // return async function (dispatch) {
  //   try {
  //     await axios.post('/orders.json', drinkOrder);
  //     dispatch(checkoutSuccess());
  //   } catch (error) {
  //     console.error(error);
  //     dispatch(checkoutFailed());
  //   }
  // };
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

export const fetchOrders = (token, userId) => {
  return async function (dispatch) {
    dispatch(fetchOrdersStart());

    const params = {
      auth: token,
      orderBy: 'userId',
      equalTo: userId
    };

    try {
      const response = await axios.get('/orders.json', { params });
      const orders = [];

      for (let key in response.data) {
        orders.push({
          ...response.data[key],
          id: key
        });
      }

      dispatch(fetchOrdersSuccess(orders));
    } catch (error) {
      dispatch(fetchOrdersFailed());
    }
  }
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrdersSuccess = (orders) => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  orders
});

export const fetchOrdersFailed = () => ({
  type: actionTypes.FETCH_ORDERS_FAILED
});