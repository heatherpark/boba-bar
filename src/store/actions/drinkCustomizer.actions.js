import * as actionTypes from './actionTypes';

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