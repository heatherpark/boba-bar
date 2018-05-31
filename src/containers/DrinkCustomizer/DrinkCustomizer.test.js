import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DrinkCustomizer from './DrinkCustomizer';

Enzyme.configure({ adapter: new Adapter() });

describe('<DrinkCustomizer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DrinkCustomizer />);
  });

  describe('rendering', () => {
    it('should render all options as unordered lists', () => {
      const drinkOptions= {
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
              flavor: 'passionfruit',
              price: 2
            },
            {
              flavor: 'green apple',
              price: 2
            }
          ]
        },
        toppings: [
          {
            name: 'boba',
            price: 0.5
          },
          {
            name: 'egg pudding',
            price: 0.75
          },
          {
            name: 'grass jelly',
            price: 0.8
          },
        ],
        ice: [0, 0.25, .5, .75, 1],
        sugar: [0, 0.25, .5, .75, 1]
      };
      const countBases = (baseTypes) => {
        let total = 0;

        for (let type in baseTypes) {
          total += baseTypes[type].length;
        }
        return total;
      };
      
      const baseTypeCount = Object.keys(drinkOptions.bases).length;
      const baseCount = countBases(drinkOptions.bases);
      const toppings = drinkOptions.toppings;
      const iceLevels = drinkOptions.ice;
      const sugarLevels = drinkOptions.sugar;

      const listLength = wrapper.find('li').length;
      const expectedListLength = baseTypeCount
        + baseCount
        + Object.keys(toppings).length
        + Object.keys(iceLevels).length
        + Object.keys(sugarLevels).length;
  
      expect(listLength).toEqual(expectedListLength);
    });
  });

  describe('customizing', () => {
    it('clicking base option should update base in drink order', () => {

    });

    it('clicking "more" or "less" buttons for topping should increment topping quantity in drink order', () => {

    });

    it('topping quantities should never fall below zero', () => {

    });

    it('choosing ice dropdown option should update ice quantity in drink order', () => {

    });

    it('choosing sugar dropdown option should update sugar quantity in drink order', () => {

    });
  });
});