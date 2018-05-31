import React, { Component } from 'react';

class DrinkCustomizer extends Component() {
  state = {
    drinkOrder: {
      base: '',
      toppings: {
        boba: 0,
        pudding: 0,
        grassJelly: 0
      },
      ice: 0,
      sugar: 0
    }
  };
  
  render() {
    return (
      <div></div>
    );  
  }
}

export default DrinkCustomizer;