import * as actionTypes from './actionTypes';

export const chooseBase = (base, price) => ({
  type: actionTypes.CHOOSE_BASE,
  base,
  price
});