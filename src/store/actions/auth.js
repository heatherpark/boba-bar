import axios from '../../axios/auth';
import * as utils from './utilities';

import * as actionTypes from './actionTypes';

export const auth = (email, password, isSignup) => {
  return async function (dispatch) {
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

      utils.setAuthData(token, userId, expiresIn);

      dispatch(authSuccess(token, userId));
      dispatch(checkAuthTimeout(expiresIn));
    } catch (error) {
      console.error(error.response.data.error.message);
      dispatch(authFailed(error.response.data.error.message));
    }
  }
};

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  token,
  userId
});

export const authFailed = error => ({
  type: actionTypes.AUTH_FAILED,
  error
});

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => ({
  type: actionTypes.AUTH_LOGOUT
});