import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Drink from './Drink';

Enzyme.configure({ adapter: new Adapter() });

describe('<Drink />', () => {
  it('should render a drink order and toppings as unordered lists', () => {
    const drinkOrder = {
      base: 'oolong milk tea',
      toppings: {
        pudding: 1,
        boba: 2,
        grassJelly: 3
      },
      ice: 0.5,
      sugar: 0.25
    };
    const toppings = drinkOrder.toppings;
    const wrapper = shallow(<Drink drinkOrder={drinkOrder} />);

    const listLength = wrapper.find('li').length;
    const expectedListLength = Object.keys(drinkOrder).length
      + Object.keys(toppings).length;

    expect(listLength).toEqual(expectedListLength);
  });
});