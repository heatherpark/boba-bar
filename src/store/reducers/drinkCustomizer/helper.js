export const initialState = {
  drinkOptions: null,
  drinkOrder: {},
  price: 0
};

export function addOption(state, action) {
  return {
    ...state,
    drinkOptions: action.drinkOptions
  };
}

export function chooseBase(state, action) {
  let updatedDrinkPrice = state.price;
  let currentBasePrice = 0;

  if (state.drinkOrder.baseType) {
    currentBasePrice = state.drinkOptions.bases[state.drinkOrder.baseType].price;
  }

  if (!state.drinkOrder.baseType || state.drinkOrder.baseType !== action.baseType) {
    updatedDrinkPrice = updatedDrinkPrice - currentBasePrice + action.price;
    state.drinkOrder.baseType = action.baseType;
  }

  return {
    ...state,
    drinkOrder: {
      baseType: action.baseType,
      ...state.drinkOrder,
      base: action.flavor,
    },
    price: updatedDrinkPrice
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