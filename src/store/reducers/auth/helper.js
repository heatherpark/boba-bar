export const initialState = {
  token: null,
  userId: null,
  loggingIn: false,
  error: null,
  authRedirectPath: '/'
};

export const authStart = state => ({
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

export const authFail = (state, action) => ({
  ...state,
  error: action.error,
  loggingIn: false
});

export const authLogout = state => ({
  ...state,
  authRedirectPath: '/',
  token: null,
  userId: null
});

export const setAuthRedirectPath = (state, action) => ({
  ...state,
  authRedirectPath: action.path  
});