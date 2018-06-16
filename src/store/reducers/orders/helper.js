export const initialState = {
  checkingOut: false,
  checkedOut: false,
  fetchingOrders: false,
  orders: []
};

export const checkoutStart = state => {
  return {
    ...state,
    checkingOut: true
  };
};

export const checkoutSuccess = state => {
  return {
    ...state,
    checkedOut: true,
    checkingOut: false
  };
};

export const checkoutFail = state => {
  return {
    ...state,
    checkedOut: false,
    checkingOut: false
  };
};

export const fetchOrdersStart = state => {
  return {
    ...state,
    fetchingOrders: true
  };
};

export const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    fetchingOrders: false,
    orders: action.orders
  };
};

export const fetchOrdersFail = state => {
  return {
    ...state,
    fetchingOrders: false
  };
};