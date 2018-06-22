export const initialState = {
  checkingOut: false,
  checkedOut: false,
  fetchingOrders: false,
  orders: [],
  checkoutError: null
};

export const checkoutStart = state => ({
  ...state,
  checkedOut: true,
  checkingOut: true,
  error: null
});

export const checkoutSuccess = state => ({
  ...state,
  checkedOut: true,
  checkingOut: false
});

export const checkoutFail = (state, action) => ({
  ...state,
  checkedOut: true,
  checkingOut: false,
  checkoutError: action.error
});

export const fetchOrdersStart = state => ({
  ...state,
  fetchingOrders: true
});

export const fetchOrdersSuccess = (state, action) => ({
  ...state,
  fetchingOrders: false,
  orders: action.orders
});

export const fetchOrdersFail = state => ({
  ...state,
  fetchingOrders: false
})