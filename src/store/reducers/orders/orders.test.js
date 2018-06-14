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
      ...initialState,
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
      ...initialState,
      checkedOut: false,
      checkingOut: false
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle FETCH_ORDERS_START', () => {
    const action = {
      type: actionTypes.FETCH_ORDERS_START
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      fetchingOrders: true
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle FETCH_ORDERS_SUCCESS', () => {
    const orders = [{}, {}];
    const action = {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      orders
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      fetchingOrders: false,
      orders
    };

    expect(nextState).toEqual(expectedState);
  });

  it('should handle FETCH_ORDERS_FAILED', () => {
    const action = {
      type: actionTypes.FETCH_ORDERS_FAILED
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      fetchingOrders: false,
    };

    expect(nextState).toEqual(expectedState);
  });
});