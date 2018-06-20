export const initialState = {
  checkingOut: false,
  checkedOut: false,
  fetchingOrders: false,
  orders: [],
  checkoutError: null
};

export const checkoutStart = state => {
  return {
    ...state,
    checkingOut: true,
    error: null
  };
};

export const checkoutSuccess = state => {
  return {
    ...state,
    checkedOut: true,
    checkingOut: false
  };
};

export const checkoutFail = (state, action) => {
  return {
    ...state,
    checkedOut: false,
    checkingOut: false,
    checkoutError: action.error
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