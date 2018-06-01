import React from 'react';
import Provider from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { DrinkCustomizer} from './DrinkCustomizer';
import Drink from '../../components/Drink/Drink';
import { drinkOptions } from './DrinkCustomizer';

Enzyme.configure({ adapter: new Adapter() });

describe('<DrinkCustomizer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DrinkCustomizer
      drinkOptions={drinkOptions} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render one <Drink /> component', () => {
    const drinkComponents = wrapper.find(Drink);
    expect(drinkComponents.length).toEqual(1);
  });

  it('should render all options as unordered lists', () => {
    const countBases = (baseTypes) => {
      let total = 0;

      for (let type in baseTypes) {
        total += baseTypes[type].length;
      }

      return total;
    };

    const baseTypes = drinkOptions.bases;
    const baseCount = countBases(drinkOptions.bases);
    const toppings = drinkOptions.toppings;
    const iceLevels = drinkOptions.ice;
    const sugarLevels = drinkOptions.sugar;

    const listLength = wrapper.find('li').length;
    const expectedListLength = Object.keys(baseTypes).length
      + baseCount
      + Object.keys(toppings).length
      + Object.keys(iceLevels).length
      + Object.keys(sugarLevels).length;

    expect(listLength).toEqual(expectedListLength);
  });

  it('should render more and less buttons for each topping', () => {
    const moreButtons = wrapper.find('.add');
    const lessButtons = wrapper.find('.remove');
    const toppings = drinkOptions.toppings;

    expect(moreButtons.length).toEqual(toppings.length);
    expect(lessButtons.length).toEqual(toppings.length);
  });

  describe('clicking a base', () => {
    it('should call `handleBaseClick`', () => {
      wrapper.instance().handleBaseClick = jest.fn();

      let handleBaseClick = wrapper.instance().handleBaseClick;
      let baseOption = wrapper.find('.base-option').first();
      let expectedCalls = 1;

      baseOption.simulate('click');
      let actualCalls = handleBaseClick.mock.calls.length;

      expect(actualCalls).toBe(expectedCalls);
    });
  });

  describe('clicking a button next to a topping', () => {
    it('should call `handleAddTopping` if add button', () => {
      wrapper.instance().handleAddTopping = jest.fn();

      let handleAddTopping = wrapper.instance().handleAddTopping;
      let addButton = wrapper.find('.add').first();
      let expectedCalls = 1;

      addButton.simulate('click');
      let actualCalls = handleAddTopping.mock.calls.length;

      expect(actualCalls).toBe(expectedCalls);
    });

    it('should call `handleRemoveTopping` if remove button', () => {
      wrapper.instance().handleRemoveTopping = jest.fn();

      let handleRemoveTopping = wrapper.instance().handleRemoveTopping;
      let addButton = wrapper.find('.remove').first();
      let expectedCalls = 1;

      addButton.simulate('click');
      let actualCalls = handleRemoveTopping.mock.calls.length;

      expect(actualCalls).toBe(expectedCalls);
    });

    
    // let chosenTopping;
    // let moreButton
    // let lessButton;
    // let currentState;

    // beforeEach(() => {
    //   chosenTopping = 'boba';

    //   moreButton = wrapper.find('.more').first();
    //   lessButton = wrapper.find('.less').first();

    //   const toppings = {
    //     boba: 1,
    //     eggPudding: 0,
    //     grassJelly: 0
    //   };

    //   currentState = wrapper.setState({
    //     ...wrapper.state(),
    //     drinkOrder: {
    //       ...wrapper.state().drinkOrder,
    //       toppings
    //     },
    //     price: 0.5
    //   });
    // });

    // it('clicking more of a topping should increment topping quantity in drink order', () => {
    //   const expectedQuantity = 2;

    //   moreButton.simulate('click');
    //   const actualQuantity = wrapper.update().state().drinkOrder.toppings[chosenTopping];

    //   expect(actualQuantity).toEqual(expectedQuantity);
    // });

    // it('clicking less of a topping should decrement topping quantity in drink order', () => {
    //   const expectedQuantity = 0

    //   lessButton.simulate('click');
    //   const actualQuantity = wrapper.update().state().drinkOrder.toppings[chosenTopping];

    //   expect(actualQuantity).toEqual(expectedQuantity);
    // });

    // it('adjusting topping quantity should adjust total price accordingly', () => {
    //   let expectedPrice = 1;

    //   moreButton.simulate('click');
    //   let updatedPrice = wrapper.update().state().price;

    //   expect(updatedPrice).toEqual(expectedPrice);

    //   expectedPrice = 0.5;

    //   lessButton.simulate('click');
    //   updatedPrice = wrapper.update().state().price;

    //   expect(updatedPrice).toEqual(expectedPrice);
    // });

    // it('topping quantities should never fall below zero', () => {
    //   chosenTopping = 'eggPudding';
    //   let secondLessButton = wrapper.find('.less').at(1);
    //   const expectedQuantity = 0;

    //   secondLessButton.simulate('click');
    //   const actualQuantity = wrapper.update().state().drinkOrder.toppings[chosenTopping];

    //   expect(actualQuantity).toEqual(expectedQuantity);
    // });

    // it('price should not be decreased if topping quantity is zero', () => {
    //   const expectedPrice = 0.5

    //   let secondLessButton = wrapper.find('.less').at(1);
    //   secondLessButton.simulate('click');

    //   const actualPrice = wrapper.update().state().price;

    //   expect(actualPrice).toEqual(expectedPrice);
    // });
  });

  // describe('adjusting sugar and ice levels', () => {
  //   it('clicking ice option should update ice quantity in drink order', () => {
  //     const iceOption = wrapper.find('.ice-option').at(1);
  //     const expectedValue = '25%';

  //     iceOption.simulate('click');
  //     const actualValue = wrapper.update().state().drinkOrder.ice;

  //     expect(actualValue).toEqual(expectedValue);
  //   });

  //   it('clicking sugar option should update sugar quantity in drink order', () => {
  //     const sugarOption = wrapper.find('.sugar-option').at(1);
  //     const expectedValue = '25%';

  //     sugarOption.simulate('click');
  //     const actualValue = wrapper.update().state().drinkOrder.sugar;

  //     expect(actualValue).toEqual(expectedValue);
  //   });
  // });
});