import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DrinkCustomizer from './DrinkCustomizer';
import { drinkOptions } from './DrinkCustomizer';

Enzyme.configure({ adapter: new Adapter() });

describe('<DrinkCustomizer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DrinkCustomizer />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render all options as unordered lists', () => {
    const countBases = (baseTypes) => {
      let total = 0;

      for (let type in baseTypes) {
        total += baseTypes[type].length;
      }
      return total;
    };
    // TODO: refactor so all below variables contain lengths
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

  describe('clicking base option', () => {
    let baseOption;

    beforeEach(() => {
      baseOption = wrapper.find('.base-option').first();
      baseOption.simulate('click');
    });
    
    it(' should update base in drink order', () => {
      const chosenBase = wrapper.state().drinkOrder.base;
      const expectedBase = 'green';
      console.log(wrapper.state());
  
      expect(chosenBase).toEqual(expectedBase);
    });

    it('should update total price', () => {
      const updatedPrice = wrapper.state().price;
      const expectedPrice = 2;
      console.log(wrapper.state());
      expect(updatedPrice).toEqual(expectedPrice);
    });
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