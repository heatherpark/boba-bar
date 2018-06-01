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

export const defaultDrinkOrder = drinkOptions => {
  const toppings = {};

  drinkOptions.toppings.forEach(topping => {
    toppings[topping.value] = 0;
  });

  return {
    base: '',
    toppings,
    ice: drinkOptions.ice[0],
    sugar: drinkOptions.sugar[0],
  };
};

export const setDrinkOrderDefault = drinkOptions => {
  return {
    type: actionTypes.SET_DRINK_ORDER_DEFAULT,
    drinkOrder: defaultDrinkOrder(drinkOptions)
  }
};

export const initDrinkCustomizer = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('/drink-options.json');
      const drinkOptions = response.data;

      dispatch(setDrinkOptions(drinkOptions));
      dispatch(setDrinkOrderDefault(drinkOptions));
    } catch (error) {
      // TODO:  Set up error handling
    }
  };

};