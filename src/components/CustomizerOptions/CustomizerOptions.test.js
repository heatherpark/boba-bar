import React from 'react';
import Provider from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CustomizerOptions from './CustomizerOptions';
import { drinkOptions } from '../../mock-data';

Enzyme.configure({ adapter: new Adapter() });

describe('<CustomizerOptions />', () => {
  it('should render all options as unordered lists', () => {
    let wrapper = shallow(<CustomizerOptions
      drinkOptions={drinkOptions} />);
    const countBases = (baseTypes) => {
      let total = 0;

      for (let type in baseTypes) {
        total += baseTypes[type].length;
      }

      return total;
    };

    const baseTypes = drinkOptions.bases;
    const baseCount = countBases(drinkOptions.bases);
    const addOns = drinkOptions.addOns;
    const iceLevels = drinkOptions.ice;
    const sugarLevels = drinkOptions.sugar;

    const listLength = wrapper.find('li').length;
    const expectedListLength = Object.keys(baseTypes).length
      + baseCount
      + Object.keys(addOns).length
      + Object.keys(iceLevels).length
      + Object.keys(sugarLevels).length;

    expect(listLength).toEqual(expectedListLength);
  });
});