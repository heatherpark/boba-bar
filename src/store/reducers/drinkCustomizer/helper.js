export const initialState = {
  drinkOptions: null,
  drinkOrder: null,
  price: 0
};

export function addOption(state, action) {
  return {
    ...state,
    drinkOptions: action.drinkOptions
  };
}

export function chooseBase(state, action) {
  return {
    ...state,
    drinkOrder: {
      ...state.drinkOrder,
      base: action.base,
    },
    price: state.price + action.price
  };
}

export function addAddOn(state, action) {
  const { addOns } = state.drinkOrder;

  return {
    ...state,
    drinkOrder: {
      ...state.drinkOrder,
      addOns: {
        ...addOns,
        [action.addOn]: addOns[action.addOn] + 1
      },
    },
    price: state.price + action.price
  };
}

export function removeAddOn(state, action) {
  const { addOns } = state.drinkOrder;

  return {
    ...state,
    drinkOrder: {
      ...state.drinkOrder,
      addOns: {
        ...addOns,
        [action.addOn]: addOns[action.addOn] - 1
      }
    },
    price: state.price - action.price
  };
}

export function chooseIceOrSugarLevel(state, action) {
  return {
    ...state,
    drinkOrder: {
      ...state.drinkOrder,
      [action.item]: action.level
    }
  };
}

export function setDrinkOrderDefault(state, action) {
  return {
    ...state,
    drinkOrder: action.drinkOrder
  };
}