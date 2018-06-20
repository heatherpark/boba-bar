import * as actionTypes from '../../actions/actionTypes';
import * as helpers from './helper';

const reducer = (state = helpers.initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT_START:
      return helpers.checkoutStart(state);

    case actionTypes.CHECKOUT_SUCCESS:
      return helpers.checkoutSuccess(state);

    case actionTypes.CHECKOUT_FAIL:
      return helpers.checkoutFail(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return helpers.fetchOrdersStart(state);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return helpers.fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return helpers.fetchOrdersFail(state);

    default: return state;
  }
};

export default reducer;