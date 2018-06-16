import * as actionTypes from '../../actions/actionTypes';
import * as helpers from './helper';

const reducer = (state = helpers.initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT_START:
      return helpers.checkoutStart(state, action);

    case actionTypes.CHECKOUT_SUCCESS:
      return helpers.checkoutSuccess(state, action);

    case actionTypes.CHECKOUT_FAIL:
      return helpers.checkoutFailed(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return helpers.fetchOrdersStart(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return helpers.fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return helpers.fetchOrdersFailed(state, action);

    default: return state;
  }
};

export default reducer;