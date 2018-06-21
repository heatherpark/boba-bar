import axios from '../../axios/auth';
import * as actionTypes from './actionTypes';

const setAuthData = (token, userId, expiresIn) => {
  const expirationDate = new Date(
    new Date().getTime() + expiresIn * 1000
  );

  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('expirationDate', expirationDate);
};

export const authStart = () => ({ type: actionTypes.AUTH_START });

export const authSuccess = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  token,
  userId
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const setAuthRedirectPath = path => ({
  type: actionTypes.SET_AUTH_REDIRECT_PATH,
  path
});

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');

  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return async dispatch => {
    dispatch(authStart());

    const authData = {
      email,
      password,
      returnSecureToken: true
    };

    try {
      const response = isSignup
        ? await axios.post('/signupNewUser', authData)
        : await axios.post('/verifyPassword', authData);
      const {
        expiresIn,
        idToken: token,
        localId: userId,
      } = response.data;

      setAuthData(token, userId, expiresIn);

      dispatch(authSuccess(token, userId));
      dispatch(checkAuthTimeout(expiresIn));
    } catch (error) {
      console.error(error.response.data.error.message);
      dispatch(authFail(error.response.data.error.message));
    }
  }
};