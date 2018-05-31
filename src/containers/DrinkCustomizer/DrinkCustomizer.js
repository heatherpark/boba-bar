import React, { Component } from 'react';

export const drinkOptions= {
  bases: {
    milkTea: [
      {
        flavor: 'green',
        price: 2
      },
      {
        flavor: 'black',
        price: 2
      },
      {
        flavor: 'oolong',
        price: 2
      }
    ],
    slush: [  
      {
        flavor: 'passionfruit',
        price: 2
      },
      {
        flavor: 'green apple',
        price: 2
      }
    ]
  },
  toppings: [
    {
      name: 'boba',
      price: 0.5
    },
    {
      name: 'egg pudding',
      price: 0.75
    },
    {
      name: 'grass jelly',
      price: 0.8
    },
  ],
  ice: [0, 0.25, .5, .75, 1],
  sugar: [0, 0.25, .5, .75, 1]
};

class DrinkCustomizer extends Component {
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

  handleBaseClick(base) {
    const drinkOrder = {
      ...this.state.drinkOrder,
      base
    };

    this.setState({ 
      drinkOrder
    }, () => console.log(this.state));
  }

  renderBases = (bases) => {
    const baseTypes = []; 
    
    for (let type in bases) {
      baseTypes.push(<li>
        {type} <ul>{this.renderBaseFlavors(bases[type])}</ul>
      </li>);
    }

    return <ul>{baseTypes}</ul>;
  }

  renderBaseFlavors = (flavors) => {
    const baseFlavors = flavors.map(
      flavor => (
        <li 
          className="base-option"
          onClick={() => {this.handleBaseClick(flavor.flavor)}}>
          {flavor.flavor}
        </li>
      )
    );

    return <ul>{baseFlavors}</ul>;
  }
  
  renderToppings(toppings) {
    const toppingElements = toppings.map(topping => (
      <li>{topping.name} {topping.price}</li>
    ));

    return <ul>{toppingElements}</ul>;
  }
  
  render() {
    return (
      <div>
        <div className="bases">
          <p>bases:</p>
          {this.renderBases(drinkOptions.bases)}
        </div>
        <div>
          <p>toppings:</p>
          {this.renderToppings(drinkOptions.toppings)}
        </div>
        <div>
          <p>ice:</p>
          {drinkOptions.ice.map(level => <li>{level}</li>)}
        </div>
        <div>
          <p>sugar:</p>
          {drinkOptions.sugar.map(level => <li>{level}</li>)}
        </div>
      </div>
    );  
  }
}



export default DrinkCustomizer;