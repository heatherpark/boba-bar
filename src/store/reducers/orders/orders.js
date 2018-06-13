import * as actionTypes from '../../actions/actionTypes';
import * as helpers from './helper';

const reducer = (state = helpers.initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT_START:
      return helpers.checkoutStart(state, action);

    case actionTypes.CHECKOUT_SUCCESS:
      return helpers.checkoutSuccess(state, action);

    case actionTypes.CHECKOUT_FAILED:
      return helpers.checkoutFailed(state, action);

    default: return state;
  }
};

export default reducer;