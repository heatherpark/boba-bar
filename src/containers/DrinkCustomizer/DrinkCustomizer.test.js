import React from 'react';
import Provider from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { DrinkCustomizer } from './DrinkCustomizer';
import Drink from '../../components/Drink/Drink';

Enzyme.configure({ adapter: new Adapter() });

const DRINK_OPTIONS = {
  bases: {
    milkTea: [{ flavor: "green", price: 2 }, { flavor: "black", price: 2 }, { flavor: "oolong", price: 2 }]
  },
  ice: ["0%", "25%", "50%", "75%", "100%"],
  sugar: ["0%", "25%", "50%", "75%", "100%"],
  toppings: [{ displayName: "boba", price: 0.5, value: "boba" }, { displayName: "egg pudding", price: 0.75, value: "eggPudding" }, { displayName: "grass jelly", price: 0.8, value: "grassJelly" }]
};

describe('<DrinkCustomizer />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    wrapper = shallow(<DrinkCustomizer
      drinkOptions={DRINK_OPTIONS}
      initDrinkCustomizer={jest.fn()} />);

    props = wrapper.instance().props;
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

    const baseTypes = props.drinkOptions.bases;
    const baseCount = countBases(props.drinkOptions.bases);
    const toppings = props.drinkOptions.toppings;
    const iceLevels = props.drinkOptions.ice;
    const sugarLevels = props.drinkOptions.sugar;

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
    const toppings = props.drinkOptions.toppings;

    expect(moreButtons.length).toEqual(toppings.length);
    expect(lessButtons.length).toEqual(toppings.length);
  });

  describe('choosing a base', () => {
    it('clicking a base should call `handleBaseClick`', () => {
      wrapper.instance().handleBaseClick = jest.fn();

      let handleBaseClick = wrapper.instance().handleBaseClick;
      let baseOption = wrapper.find('.base-option').first();
      let expectedCalls = 1;

      baseOption.simulate('click');
      let actualCalls = handleBaseClick.mock.calls.length;

      expect(actualCalls).toBe(expectedCalls);
    });
  });

  describe('choosing toppings', () => {
    it('clicking the add button next to a topping should call `handleAddTopping`', () => {
      wrapper.instance().handleAddTopping = jest.fn();

      let handleAddTopping = wrapper.instance().handleAddTopping;
      let addButton = wrapper.find('.add').first();
      let expectedCalls = 1;

      addButton.simulate('click');
      let actualCalls = handleAddTopping.mock.calls.length;

      expect(actualCalls).toBe(expectedCalls);
    });

    it('clicking a remove button next to a topping should call `handleRemoveTopping`', () => {
      wrapper.instance().handleRemoveTopping = jest.fn();

      let handleRemoveTopping = wrapper.instance().handleRemoveTopping;
      let addButton = wrapper.find('.remove').first();
      let expectedCalls = 1;

      addButton.simulate('click');
      let actualCalls = handleRemoveTopping.mock.calls.length;

      expect(actualCalls).toBe(expectedCalls);
    });
  });

  describe('choosing sugar or ice levels', () => {
    it('clicking a level should call `handleIceAndSugarLevelClick`', () => {
      wrapper.instance().handleIceAndSugarLevelClick = jest.fn();

      let handleIceAndSugarLevelClick = wrapper.instance().handleIceAndSugarLevelClick;
      let levelOption = wrapper.find('.ice-option').first();
      let expctedCalls = 1;

      levelOption.simulate('click');
      let actualCalls = handleIceAndSugarLevelClick.mock.calls.length;

      expect(actualCalls).toBe(actualCalls);

      handleIceAndSugarLevelClick.mockReset();
      levelOption = wrapper.find('.sugar-option').first();

      levelOption.simulate('click');
      actualCalls = handleIceAndSugarLevelClick.mock.calls.length;

      expect(actualCalls).toBe(actualCalls);
    });
  });
});