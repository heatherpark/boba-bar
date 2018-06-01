import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  drinkOptions: {},
  drinkOrder: {
    base: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_OPTIONS:
      return {
        ...state,
        drinkOptions: action.options
      };

    case actionTypes.CHOOSE_BASE:
      return {
        ...state,
        drinkOrder: {
          ...state.drinkOrder,
          base: action.base
        }
      };
    
    default: return state;
  }
};

export default reducer;