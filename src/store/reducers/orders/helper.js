export const initialState = {
  checkingOut: false,
  checkedOut: false,
  fetchingOrders: false,
  orders: []
};

export const checkoutStart = (state, action) => {
  return {
    ...state,
    checkingOut: true
  };
};

export const checkoutSuccess = (state, action) => {
  return {
    ...state,
    checkedOut: true,
    checkingOut: false
  };
};

export const checkoutFailed = (state, action) => {
  return {
    ...state,
    checkedOut: false,
    checkingOut: false
  };
};

export const fetchOrdersStart = (state, action) => {
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

export const fetchOrdersFailed = (state, action) => {
  return {
    ...state,
    fetchingOrders: false
  };
};