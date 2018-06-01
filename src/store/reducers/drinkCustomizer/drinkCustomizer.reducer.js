import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  drinkOptions: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_OPTIONS:
      return {
        drinkOptions: action.options
      };
    
    default: return state;
  }
};

export default reducer;