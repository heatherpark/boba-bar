export const initialState = {
  drinkOptions: null,
  drinkOrder: null,
  price: 0,
  isCustomizing: false
};

export const setIsCustomizing = (state, action) => ({
  ...state,
  isCustomizing: action.isCustomizing
});

export function addOption(state, action) {
  return {
    ...state,
    drinkOptions: action.drinkOptions
  };
}

export function chooseBase(state, action) {
  let updatedDrinkPrice = state.price;
  let currentBasePrice = 0;
  let currentBaseType = state.drinkOrder.base.type;

  // get price of chosen base
  if (currentBaseType) {
    currentBasePrice = state.drinkOptions.bases[currentBaseType].price;
  }

  // if current base type is null OR 
  // current base type is different from last chosen base type
  if (!currentBaseType || currentBaseType !== action.baseType) {
    // update order price
    updatedDrinkPrice = updatedDrinkPrice - currentBasePrice + action.price;
  }

  return {
    ...state,
    drinkOrder: {
      ...state.drinkOrder,
      base: {
        type: action.baseType,
        flavor: action.flavor
      },
    },
    price: updatedDrinkPrice,
    isCustomizing: true
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
    price: state.price + action.price,
    isCustomizing: true
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
    price: state.price - action.price,
    isCustomizing: true
  };
}

export function chooseIceOrSugarLevel(state, action) {
  return {
    ...state,
    drinkOrder: {
      ...state.drinkOrder,
      [action.item]: action.level,
    },
    isCustomizing: true
  };
}

export function setDrinkOrderDefault(state, action) {
  return {
    ...state,
    drinkOrder: action.drinkOrder
  };
}