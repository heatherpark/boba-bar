export const initialState = {
  checkingOut: false,
  checkedOut: false
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