import * as actionTypes from '../../actions/actionTypes';
import * as helpers from './helper';

const reducer = (state = helpers.initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_OPTIONS: 
      return helpers.addOption(state, action);

    case actionTypes.CHOOSE_BASE:
      return helpers.chooseBase(state, action);

    case actionTypes.ADD_ADD_ON:
      return helpers.addAddOn(state, action);

    case actionTypes.REMOVE_ADD_ON:
      return helpers.removeAddOn(state, action);

    case actionTypes.CHOOSE_ICE_OR_SUGAR_LEVEL:
      return helpers.chooseIceOrSugarLevel(state, action);

    case actionTypes.SET_DRINK_ORDER_DEFAULT:
      return helpers.setDrinkOrderDefault(state, action);

    default: return state;
  }
};

export default reducer;