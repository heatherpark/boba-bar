import * as actionTypes from '../../actions/actionTypes';
import * as helpers from './helper';

const reducer = (state = helpers.initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return helpers.authStart(state);

    case actionTypes.AUTH_SUCCESS:
      return helpers.authSuccess(state, action);

    case actionTypes.AUTH_FAIL:
      return helpers.authFail(state, action);

    case actionTypes.AUTH_LOGOUT:
      return helpers.authLogout(state);

    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return helpers.setAuthRedirectPath(state, action);

    default:
      return state;
  }
};

export default reducer;