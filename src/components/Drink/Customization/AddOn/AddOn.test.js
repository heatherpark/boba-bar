import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddOn from './AddOn';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddOn />', () => {
  it('should render one element each for adding and removing toppings', () => {
    let wrapper = shallow(<AddOn />);

    let addElements = wrapper.find('.add');
    expect(addElements.length).toBe(1);

    let removeElements = wrapper.find('.add');
    expect(removeElements.length).toBe(1);
  });
});