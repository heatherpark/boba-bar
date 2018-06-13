import React from 'react';
import Provider from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckoutForm from './CheckoutForm';
import Input from '../../../components/UI/Input/Input';

Enzyme.configure({ adapter: new Adapter() });

describe('<CheckoutForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CheckoutForm />);
  });

  it('should contain one form', () => {
    let formElements = wrapper.find('form');
    expect(formElements.length).toBe(1);    
  });

  it('should render as form information as inputs', () => {
    const formInfo = wrapper.state().checkoutForm;
    const fields = Object.keys(formInfo);
    const inputs = wrapper.find(Input);

    expect(fields.length).toBe(inputs.length);
  });
});