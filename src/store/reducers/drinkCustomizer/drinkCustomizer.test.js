import reducer from './drinkCustomizer.reducer';

const DRINK_OPTIONS = {
  bases: {
    milkTea: [
      {
        flavor: 'green',
        price: 2
      },
      {
        flavor: 'black',
        price: 2
      },
      {
        flavor: 'oolong',
        price: 2
      }
    ],
    slush: [  
      {
        flavor: 'passion fruit',
        price: 3
      },
      {
        flavor: 'green apple',
        price: 3
      }
    ]
  },
  toppings: [
    {
      displayName: 'boba',
      value: 'boba',
      price: 0.5
    },
    {
      displayName: 'egg pudding',
      value: 'eggPudding',
      price: 0.75
    },
    {
      displayName: 'grass jelly',
      value: 'grassJelly',
      price: 0.8
    },
  ],
  ice: ['0%', '25%', '50%', '75%', '100%'],
  sugar: ['0%', '25%', '50%', '75%', '100%']
};

const DRINK_ORDER_DEFAULT = {
  base: '',
  toppings: {
    boba: 0,
    eggPudding: 0,
    grassJelly: 0
  },
  ice: '0%',
  sugar: '0%'
};

describe('drinkCustomizer reducer', () => {
  let initialState;
  let stateWithDrinkOrder;

  beforeEach(() => {
    initialState = {
      drinkOptions: {},
      drinkOrder: {},
      price: 0
    };

    stateWithDrinkOrder = {
      ...initialState,
      drinkOrder: DRINK_ORDER_DEFAULT
    }
  });

  it('handles SET_OPTIONS', () => {
    const action = {
      type: 'SET_OPTIONS',
      drinkOptions: DRINK_OPTIONS
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOptions: DRINK_OPTIONS
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles SET_DRINK_ORDER_DEFAULT', () => {
    const action = {
      type: 'SET_DRINK_ORDER_DEFAULT',
      drinkOrder: DRINK_ORDER_DEFAULT
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOrder: DRINK_ORDER_DEFAULT
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles CHOOSE_BASE', () => {
    const action = {
      type: 'CHOOSE_BASE',
      base: 'green milk tea',
      price: 2
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOrder: {
        ...initialState.drinkOrder,
        base: action.base
      },
      price: action.price
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles ADD_TOPPING', () => {
    const action = {
      type: 'ADD_TOPPING',
      topping: 'eggPudding',
      price: 0.75
    };
    const nextState = reducer(stateWithDrinkOrder, action);

    const expectedState = {
      ...stateWithDrinkOrder,
      drinkOrder: {
        ...stateWithDrinkOrder.drinkOrder,
        toppings: {
          ...stateWithDrinkOrder.drinkOrder.toppings,
          [action.topping]: stateWithDrinkOrder.drinkOrder.toppings[action.topping] + 1
        }
      },
      price: initialState.price + action.price
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles REMOVE_TOPPING', () => {
    const action = {
      type: 'REMOVE_TOPPING',
      topping: 'eggPudding',
      price: 0.75
    };
    const nextState = reducer(stateWithDrinkOrder, action);

    const expectedState = {
      ...stateWithDrinkOrder,
      drinkOrder: {
        ...stateWithDrinkOrder.drinkOrder,
        toppings: {
          ...stateWithDrinkOrder.drinkOrder.toppings,
          [action.topping]: stateWithDrinkOrder.drinkOrder.toppings[action.topping] - 1
        }
      },
      price: stateWithDrinkOrder.price - action.price
    };
  });

  it('handles CHOOSE_ICE_OR_SUGAR_LEVEL', () => {
    const action = {
      type: 'CHOOSE_ICE_OR_SUGAR_LEVEL',
      item: 'ice',
      level: '25%'
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOrder: {
        ...initialState.drinkOrder,
        [action.item]: action.level
      }
    };

    expect(nextState).toEqual(expectedState);
  });
});


