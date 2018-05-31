import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DrinkCustomizer from './DrinkCustomizer';

Enzyme.configure({ adapter: new Adapter() });

describe('<DrinkCustomizer />', () => {
  describe('rendering', () => {
    it('should render base options as unordered list', () => {
    
    });
  
    it('should render topping options as unordered list', () => {
      
    });
  
    it('should render ice amounts as dropdown', () => {
      
    });
  
    it('should render sugar quantities as dropdown', () => {
      
    });
  });

  describe('customizing', () => {
    it('clicking base option should update base in drink order', () => {

    });

    it('clicking "more" or "less" buttons for topping should increment topping quantity in drink order', () => {

    });

    it('topping quantities should never fall below zero', () => {

    });

    it('choosing ice dropdown option should update ice quantity in drink order', () => {

    });

    it('choosing sugar dropdown option should update sugar quantity in drink order', () => {

    });
  });
});