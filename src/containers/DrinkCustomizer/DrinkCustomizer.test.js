import React from 'react';
import Provider from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { DrinkCustomizer } from './DrinkCustomizer';
import Drink from '../../components/Drink/Drink';

Enzyme.configure({ adapter: new Adapter() });

describe('<DrinkCustomizer />', () => {
  it('dummy test', () => {

  });
});