export const initialState = {
  token: null,
  userId: null,
  loggingIn: false,
  error: null
};

export const authStart = (state, action) => ({
  ...state,
  error: null,
  loggingIn: true
});

export const authSuccess = (state, action) => ({
  ...state,
  token: action.token,
  userId: action.userId,
  error: null,
  loggingIn: false
});

export const authFailed = (state, action) => ({
  ...state,
  error: action.error,
  loggingIn: false
});

export const authLogout = (state, action) => ({
  ...state,
  token: null,
  userId: null
});