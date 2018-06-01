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

describe('drinkCustomizer reducer', () => {
  it('handles SET_OPTIONS', () => {
    const initialState = {};
    const action = {
      type: 'SET_OPTIONS',
      options: DRINK_OPTIONS
    };
    const nextState = reducer(initialState, action);

    const expectedState = {
      drinkOptions: DRINK_OPTIONS
    };

    expect(nextState).toEqual(expectedState);
  });
});


