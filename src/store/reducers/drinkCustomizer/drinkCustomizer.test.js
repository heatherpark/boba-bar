import reducer from './drinkCustomizer';
import { initialState } from './helper';
import { drinkOptions } from '../../../mock-data';
import { defaultDrinkOrder } from '../../../mock-data';
import * as actionTypes from '../../actions/actionTypes';

describe('drinkCustomizer reducer', () => {
  it('handles SET_OPTIONS', () => {
    const action = {
<<<<<<< HEAD
      type: actionTypes.SET_OPTIONS,
      drinkOptions
||||||| merged common ancestors
      type: 'SET_OPTIONS',
      drinkOptions: DRINK_OPTIONS
=======
      type: actionTypes.SET_OPTIONS,
      drinkOptions: drinkOptions
>>>>>>> 06a23ef9401e692cde6f768221f9cffec920a7a5
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      ...initialState,
<<<<<<< HEAD
      drinkOptions
||||||| merged common ancestors
      drinkOptions: DRINK_OPTIONS
=======
      drinkOptions: drinkOptions
>>>>>>> 06a23ef9401e692cde6f768221f9cffec920a7a5
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
    let addOnsState;

    beforeEach(() => {
      stateWithDrinkOrder = {
        ...initialState,
        drinkOrder: defaultDrinkOrder
      }

      addOnsState = stateWithDrinkOrder.drinkOrder.addOns;
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
            ...addOnsState,
            [action.addOn]: addOnsState[action.addOn] + 1
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
            ...addOnsState,
            [action.addOn]: addOnsState[action.addOn] - 1
          }
        },
        price: stateWithDrinkOrder.price - action.price
      };

      expect(nextState).toEqual(expectedState);
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


