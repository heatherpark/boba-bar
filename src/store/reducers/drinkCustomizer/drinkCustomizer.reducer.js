import * as actionTypes from '../../actions/actionTypes';

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

const initialState = {
  drinkOptions: DRINK_OPTIONS,
  drinkOrder: {
    base: '',
    toppings: {
      boba: 0,
      eggPudding: 1,
      grassJelly: 0
    },
    ice: '0%',
    sugar: '0%'
  },
  price: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_OPTIONS:
      return {
        ...state,
        drinkOptions: action.options
      };

    case actionTypes.CHOOSE_BASE:
      return {
        ...state,
        drinkOrder: {
          ...state.drinkOrder,
          base: action.base,
        },
        price: state.price + action.price
      };

    case actionTypes.ADD_TOPPING:
      return {
        ...state,
        drinkOrder: {
          ...state.drinkOrder,
          toppings: {
            ...state.drinkOrder.toppings,
            [action.topping]: state.drinkOrder.toppings[action.topping] + 1
          },
        },
        price: state.price + action.price
      };

    case actionTypes.REMOVE_TOPPING:
      return {
        ...state,
        drinkOrder: {
          ...state.drinkOrder,
          toppings: {
            ...state.drinkOrder.toppings,
            [action.topping]: state.drinkOrder.toppings[action.topping] - 1
          }
        },
        price: state.price - action.price
      };

    case actionTypes.CHOOSE_ICE_OR_SUGAR_LEVEL:
      return {
        ...state,
        drinkOrder: {
          ...state.drinkOrder,
          [action.item]: action.level
        }
      };

    default: return state;
  }
};

export default reducer;