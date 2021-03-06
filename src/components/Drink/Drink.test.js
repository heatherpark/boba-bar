import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Drink from './Drink';

Enzyme.configure({ adapter: new Adapter() });

describe('<Drink />', () => {
  let wrapper;
  const drinkOrder = {
    base: 'oolong milk tea',
    addOns: {
      pudding: 1,
      boba: 2,
      grassJelly: 3
    },
    ice: 0.5,
    sugar: 0.25
  };

  beforeEach(() => {
    wrapper = shallow(<Drink 
      drinkOrder={drinkOrder}
      price={6.39} />);
  });
  
  it('should render a drink order and add-ons as unordered lists', () => {
    const addOns = drinkOrder.addOns;

    const listLength = wrapper.find('li').length;
    const expectedListLength = Object.keys(drinkOrder).length
      + Object.keys(addOns).length;

    expect(listLength).toEqual(expectedListLength);
  });

  it('should render total price of drink', () => {
    const priceElementLength = wrapper.find('.price').length;
    expect(priceElementLength).toEqual(1);
  });
});