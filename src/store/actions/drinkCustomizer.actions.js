import * as actionTypes from './actionTypes';
import axios from '../../axios/orders';

export const chooseBase = (base, price) => ({
  type: actionTypes.CHOOSE_BASE,
  base,
  price
});

export const addTopping = (topping, price) => ({
  type: actionTypes.ADD_TOPPING,
  topping,
  price
});

export const removeTopping = (topping, price) => ({
  type: actionTypes.REMOVE_TOPPING,
  topping,
  price
});

export const chooseIceOrSugarLevel = (item, level) => ({
  type: actionTypes.CHOOSE_ICE_OR_SUGAR_LEVEL,
  item,
  level
});

export const setDrinkOptions = drinkOptions => {
  return {
    type: actionTypes.SET_OPTIONS,
    drinkOptions
  }
};  

export const initDrinkOptions = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('/drink-options.json');
      dispatch(setDrinkOptions(response.data));
    } catch (error) {
      // TODO:  Set up error handling
    }
  };

};