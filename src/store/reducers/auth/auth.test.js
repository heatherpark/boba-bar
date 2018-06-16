import reducer from './auth';
import * as actionTypes from '../../actions/actionTypes';

import { initialState } from './helper';

describe('auth reducer', () => {
  it('should handle AUTH_START', () => {
    const action = { type: actionTypes.AUTH_START };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      loggingIn: true,
      error: null
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle AUTH_SUCCESS', () => {
    const action = {
      type: actionTypes.AUTH_SUCCESS,
      token: 'abcde1234',
      userId: 'user'
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      token: action.token,
      userId: action.userId,
      loggingIn: false,
      error: null
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle AUTH_FAIL', () => {
    const action = {
      type: actionTypes.AUTH_FAIL,
      error: 'Authentication failed'
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      error: action.error,
      loggingIn: false
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle AUTH_LOGOUT', () => {
    const action = {
      type: actionTypes.AUTH_LOGOUT
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      token: null,
      userId: null
    };

    expect(nextState).toEqual(expectedState);
  });
});