import reducer from './drinkCustomizer';
import { initialState } from './helper';
import { drinkOptions } from '../../../mock-data';
import { defaultDrinkOrder } from '../../../mock-data';
import * as actionTypes from '../../actions/actionTypes';

describe('drinkCustomizer reducer', () => {
  it('handles SET_OPTIONS', () => {
    const action = {
      type: actionTypes.SET_OPTIONS,
      drinkOptions: drinkOptions
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOptions: drinkOptions
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles SET_DRINK_ORDER_DEFAULT', () => {
    const action = {
      type: actionTypes.SET_DRINK_ORDER_DEFAULT,
      drinkOrder: defaultDrinkOrder
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOrder: defaultDrinkOrder
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles CHOOSE_BASE', () => {
    const action = {
      type: actionTypes.CHOOSE_BASE,
      baseType: 'milkTea',
      flavor: 'green',
      price: 2
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
      drinkOrder: {
        ...initialState.drinkOrder,
        base: {
          flavor: action.flavor,
          type: action.baseType
        }
      },
      price: action.price
    };

    expect(nextState).toEqual(expectedState);
  });

  describe('toppings', () => {
    let stateWithDrinkOrder;

    beforeEach(() => {
      stateWithDrinkOrder = {
        ...initialState,
        drinkOrder: defaultDrinkOrder
      }
    });

    it('handles ADD_ADD_ON', () => {
      const action = {
        type: actionTypes.ADD_ADD_ON,
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
        type: actionTypes.REMOVE_ADD_ON,
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
  });

  it('handles CHOOSE_ICE_OR_SUGAR_LEVEL', () => {
    const action = {
      type: actionTypes.CHOOSE_ICE_OR_SUGAR_LEVEL,
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


