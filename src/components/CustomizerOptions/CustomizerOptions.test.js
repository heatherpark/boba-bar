import React from 'react';
import Provider from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CustomizerOptions from './CustomizerOptions';

Enzyme.configure({ adapter: new Adapter() });

const DRINK_OPTIONS = {
  bases: {
    milkTea: [{ flavor: "green", price: 2 }, { flavor: "black", price: 2 }, { flavor: "oolong", price: 2 }]
  },
  ice: ["0%", "25%", "50%", "75%", "100%"],
  sugar: ["0%", "25%", "50%", "75%", "100%"],
  addOns: [{ displayName: "boba", price: 0.5, value: "boba" }, { displayName: "egg pudding", price: 0.75, value: "eggPudding" }, { displayName: "grass jelly", price: 0.8, value: "grassJelly" }]
};

describe('<CustomizerOptions />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CustomizerOptions
      drinkOptions={DRINK_OPTIONS} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});