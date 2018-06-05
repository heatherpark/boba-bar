import React from 'react';
import Provider from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckoutForm from './CheckoutForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<CheckoutForm />', () => {
  it('should contain one form', () => {
    let wrapper = shallow(<CheckoutForm />);
    let formElements = wrapper.find('form');
    
    expect(formElements.length).toBe(1);    
  });
});