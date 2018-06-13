import reducer from './orders';
import * as actionTypes from '../../actions/actionTypes';
import { initialState } from './helper';

describe('orders reducer', () => {
  it('should handle CHECKOUT_START', () => {
    const action = {
      type: actionTypes.CHECKOUT_START
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      checkingOut: true
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle CHECKOUT_SUCCESS', () => {
    const action = {
      type: actionTypes.CHECKOUT_SUCCESS
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      checkedOut: true,
      checkingOut: false
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle CHECKOUT_FAILED', () => {
    const initialState = {
      checkingOut: true,
      checkedOut: false
    };

    const action = {
      type: actionTypes.CHECKOUT_FAILED
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      checkedOut: false,
      checkingOut: false
    };

    expect(nextState).toEqual(expectedState);
  });
});