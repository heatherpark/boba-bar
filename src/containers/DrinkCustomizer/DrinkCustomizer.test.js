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
      drinkOptions={drinkOptions}
      initDrinkCustomizer={jest.fn()} />);
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