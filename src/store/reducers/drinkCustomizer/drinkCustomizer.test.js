import reducer from './drinkCustomizer';
import { initialState } from './helper';
import { drinkOptions } from '../../../mock-data';
import { defaultDrinkOrder } from '../../../mock-data';
import * as actionTypes from '../../actions/actionTypes';

describe('drinkCustomizer reducer', () => {
  let mockInitialState;
  let addOnsState;

  beforeEach(() => {
    mockInitialState = {
      ...initialState,
      drinkOrder: defaultDrinkOrder,
      price: 0
    };

    addOnsState = mockInitialState.drinkOrder.addOns;
  });

  it('handles SET_OPTIONS', () => {
    const action = {
      type: actionTypes.SET_OPTIONS,
      drinkOptions
    };
    const nextState = reducer(mockInitialState, action);

    const expectedState = {
      ...mockInitialState,
      drinkOptions
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles SET_DRINK_ORDER_DEFAULT', () => {
    const action = {
      type: actionTypes.SET_DRINK_ORDER_DEFAULT,
      drinkOrder: defaultDrinkOrder
    };
    const nextState = reducer(mockInitialState, action);

    const expectedState = {
      ...mockInitialState,
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
    const nextState = reducer(mockInitialState, action);

    const expectedState = {
      ...mockInitialState,
      drinkOrder: {
        ...mockInitialState.drinkOrder,
        base: {
          flavor: action.flavor,
          type: action.baseType
        }
      },
      price: action.price,
      isCustomizing: true
    };

    expect(nextState).toEqual(expectedState);
  });

    it('handles ADD_ADD_ON', () => {
      const action = {
        type: actionTypes.ADD_ADD_ON,
        addOn: 'eggPudding',
        price: 0.75
      };
      const nextState = reducer(mockInitialState, action);

      const expectedState = {
        ...mockInitialState,
        drinkOrder: {
          ...mockInitialState.drinkOrder,
          addOns: {
            ...addOnsState,
            [action.addOn]: addOnsState[action.addOn] + 1
          }
        },
        price: mockInitialState.price + action.price,
        isCustomizing: true
      };

      expect(nextState).toEqual(expectedState);
    });

    it('handles REMOVE_ADD_ON', () => {
      const action = {
        type: actionTypes.REMOVE_ADD_ON,
        addOn: 'eggPudding',
        price: 0.75
      };
      const nextState = reducer(mockInitialState, action);

      const expectedState = {
        ...mockInitialState,
        drinkOrder: {
          ...mockInitialState.drinkOrder,
          addOns: {
            ...addOnsState,
            [action.addOn]: addOnsState[action.addOn] - 1
          }
        },
        price: mockInitialState.price - action.price,
        isCustomizing: true
      };

      expect(nextState).toEqual(expectedState);
    });

  it('handles CHOOSE_ICE_OR_SUGAR_LEVEL', () => {
    const action = {
      type: actionTypes.CHOOSE_ICE_OR_SUGAR_LEVEL,
      item: 'ice',
      level: '25%'
    };
    const nextState = reducer(mockInitialState, action);

    const expectedState = {
      ...mockInitialState,
      drinkOrder: {
        ...mockInitialState.drinkOrder,
        [action.item]: action.level
      },
      isCustomizing: true
    };

    expect(nextState).toEqual(expectedState);
  });

  it('handles SET_IS_CUSTOMIZING', () => {
    const action = {
      type: actionTypes.SET_IS_CUSTOMIZING,
      isCustomizing: true
    };
    const nextState = reducer(mockInitialState, action);

    const expectedState = {
      ...mockInitialState,
      isCustomizing: true
    };

    expect(nextState).toEqual(expectedState);
  });
});


