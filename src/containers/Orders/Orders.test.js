import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Orders } from './Orders';

Enzyme.configure({ adapter: new Adapter() });

describe('<Orders />', () => {
  let wrapper;
  let onFetchOrdersMock = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<Orders 
      orders={[]}
      onFetchOrders={onFetchOrdersMock} />);
  });

  it('should call onFetchOrders', () => {
    expect(onFetchOrdersMock.calls.length).toBe(1);
  });

  it('should receive a prop called orders', () => {
    expect(wrapper.props().orders).toBeTruthy();
  });

  it('should render message if there are no orders', () => {
    const messageElement = wrapper.find('.no-orders-msg');
    expect(messageElement.length).toBe(1);
  });
  
  it('should render one <Order /> for each order', () => {
    wrapper = shallow(<Orders 
      orders={[{}, {}]}
      onFetchOrders={onFetchOrdersMock} />);

    expect(wrapper.find(Order).length).toBe(2);
  });
});