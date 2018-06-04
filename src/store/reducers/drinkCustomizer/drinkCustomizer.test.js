import reducer from './drinkCustomizer';

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
  addOns: [
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
  addOns: {
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
      baseType: 'milkTea',
      flavor: 'green',
      price: 2
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOrder: {
        ...initialState.drinkOrder,
        base: action.flavor
      },
      price: action.price
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles ADD_ADD_ON', () => {
    const action = {
      type: 'ADD_ADD_ON',
      addOn: 'eggPudding',
      price: 0.75
    };
    const nextState = reducer(stateWithDrinkOrder, action);

    const expectedState = {
      ...stateWithDrinkOrder,
      drinkOrder: {
        ...stateWithDrinkOrder.drinkOrder,
        addOns: {
          ...stateWithDrinkOrder.drinkOrder.addOns,
          [action.addOn]: stateWithDrinkOrder.drinkOrder.addOns[action.addOn] + 1
        }
      },
      price: initialState.price + action.price
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles REMOVE_ADD_ON', () => {
    const action = {
      type: 'REMOVE_ADD_ON',
      addOn: 'eggPudding',
      price: 0.75
    };
    const nextState = reducer(stateWithDrinkOrder, action);

    const expectedState = {
      ...stateWithDrinkOrder,
      drinkOrder: {
        ...stateWithDrinkOrder.drinkOrder,
        addOns: {
          ...stateWithDrinkOrder.drinkOrder.addOns,
          [action.addOn]: stateWithDrinkOrder.drinkOrder.addOns[action.addOn] - 1
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


