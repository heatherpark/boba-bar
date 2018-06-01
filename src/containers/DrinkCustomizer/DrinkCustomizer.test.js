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

  it('should render more and less buttons for each topping', () => {
    const moreButtons = wrapper.find('.more');
    const lessButtons = wrapper.find('.more');
    const toppings = drinkOptions.toppings;

    expect(moreButtons.length).toEqual(toppings.length);
    expect(lessButtons.length).toEqual(toppings.length);
  });

  describe('clicking a base', () => {
    let baseOption;

    beforeEach(() => {
      baseOption = wrapper.find('.base-option').first();
      baseOption.simulate('click');
    });

    it(' should update base in drink order', () => {
      const chosenBase = wrapper.state().drinkOrder.base;
      const expectedBase = 'green';

      expect(chosenBase).toEqual(expectedBase);
    });

    it('should update total price', () => {
      const updatedPrice = wrapper.state().price;
      const expectedPrice = 2;

      expect(updatedPrice).toEqual(expectedPrice);
    });
  });

  describe('clicking toppings', () => {
    let moreButton
    let lessButton;
    let chosenTopping;
    let currentState;

    beforeEach(() => {
      chosenTopping = 'boba';

      moreButton = wrapper.find('.more').first();
      lessButton = wrapper.find('.less').first();

      const toppings = {
        boba: 1,
        eggPudding: 0,
        grassJelly: 0
      };

      currentState = wrapper.setState({
        ...wrapper.state(),
        drinkOrder: {
          ...wrapper.state().drinkOrder,
          toppings
        },
        price: 0.5
      });
    });

    it('clicking more of a topping should increment topping quantity in drink order', () => {
      const expectedQuantity = 2;

      moreButton.simulate('click');
      const actualQuantity = wrapper.update().state().drinkOrder.toppings[chosenTopping];

      expect(actualQuantity).toEqual(expectedQuantity);
    });

    it('clicking less of a topping should decrement topping quantity in drink order', () => {
      const expectedQuantity = 0

      lessButton.simulate('click');
      const actualQuantity = wrapper.update().state().drinkOrder.toppings[chosenTopping];

      expect(actualQuantity).toEqual(expectedQuantity);
    });

    it('adjusting topping quantity should adjust total price accordingly', () => {
      let expectedPrice = 1;
      moreButton.simulate('click');
      let updatedPrice = wrapper.update().state().price;

      expect(updatedPrice).toEqual(expectedPrice);

      expectedPrice = 0.5;
      lessButton.simulate('click');
      updatedPrice = wrapper.update().state().price;

      expect(updatedPrice).toEqual(expectedPrice);
    });

    it('topping quantities should never fall below zero', () => {
      const updatedDrinkOrder = wrapper.state().drinkOrder;
      updatedDrinkOrder.toppings[chosenTopping] = 0;

      wrapper.setState({
        drinkOrder: updatedDrinkOrder
      });

      const expectedQuantity = 0
      lessButton.simulate('click');
      const actualQuantity = wrapper.update().state().drinkOrder.toppings[chosenTopping];

      expect(actualQuantity).toEqual(expectedQuantity);
    });

    it('price should not be decreased if topping quantity is zero', () => {
      const updatedDrinkOrder = wrapper.state().drinkOrder;

      const expectedPrice = 0.5

      let lessButton = wrapper.find('.less').at(1);
      lessButton.simulate('click');

      const actualPrice = wrapper.update().state().price;

      expect(actualPrice).toEqual(expectedPrice);
    });
  });

  describe('adjusting sugar and ice levels', () => {
    beforeEach(() => {

    });

    it('clicking ice option should update ice quantity in drink order', () => {
      const iceOption = wrapper.find('.ice-option').at(1);
      const expectedValue = '25%';

      iceOption.simulate('click');
      const actualValue = wrapper.update().state().drinkOrder.ice

      expect(actualValue).toEqual(expectedValue);
    });
  
    it('clicking sugar option should update sugar quantity in drink order', () => {
      const sugarOption = wrapper.find('.sugar-option').at(1);
      const expectedValue = '25%';

      sugarOption.simulate('click');
      const actualValue = wrapper.update().state().drinkOrder.sugar

      expect(actualValue).toEqual(expectedValue);
    });
  });
});