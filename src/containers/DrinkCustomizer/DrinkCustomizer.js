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
        flavor: 'passion fruit',
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
      displayName: 'boba',
      value: 'boba',
      price: 0.5
    },
    {
      displayName: 'egg pudding',
      value: 'eggPudding',
      price: 0.75
    },
    {
      displayName: 'grass jelly',
      value: 'grassJelly',
      price: 0.8
    },
  ],
  ice: ['0', '25%', '50%', '75%', '100%'],
  sugar: ['0', '25%', '50%', '75%', '100%']
};

class DrinkCustomizer extends Component {
  state = {
    drinkOrder: {
      base: '',
      toppings: {
        boba: 0,
        eggPudding: 0,
        grassJelly: 0
      },
      ice: 0,
      sugar: 0
    },
    price: 0
  };

  handleBaseClick(base, price) {
    this.setState(prevState => {
      const drinkOrder = {
        ...prevState.drinkOrder,
        base
      };

      return { 
        ...prevState,
        drinkOrder,
        price: prevState.price + price
      };
    });
  }

  handleIncrementTopping(name, price) {
    this.setState(prevState => {
      const updatedToppings = {...prevState.drinkOrder.toppings};
      updatedToppings[name] = updatedToppings[name] + 1;

      const updatedDrinkOrder = {
        ...prevState.drinkOrder,
        toppings: updatedToppings
      };

      const updatedPrice = prevState.price + price;

      return {
        ...prevState,
        drinkOrder: updatedDrinkOrder,
        price: updatedPrice
      };
    });
  }

  handleDecrementTopping(name, price) {
    this.setState(prevState => {
      const updatedToppings = {...prevState.drinkOrder.toppings};
      updatedToppings[name] = updatedToppings[name] <= 0 ? 0 : updatedToppings[name] - 1;

      const updatedDrinkOrder = {
        ...prevState.drinkOrder,
        toppings: updatedToppings
      };
      const updatedPrice = updatedToppings[name] > 0 ? prevState.price - price : prevState.price;

      return {
        ...prevState,
        drinkOrder: updatedDrinkOrder,
        price: updatedPrice
      };
    });
  }

  handleIceLevelClick = level => {
    this.setState(prevState => {
      return {
        drinkOrder: {
          ...prevState.drinkOrder,
          ice: level
        }
      };
    });
  };

  handleSugarLevelClick = level => {
    this.setState(prevState => {
      return {
        drinkOrder: {
          ...prevState.drinkOrder,
          sugar: level
        }
      };
    });
  };

  renderBases = (bases) => {
    const baseTypes = []; 
    
    for (let type in bases) {
      baseTypes.push(
        <li key={type}>
          {type} <ul>{this.renderBaseFlavors(bases[type])}</ul>
        </li>
      );
    }

    return <ul>{baseTypes}</ul>;
  }

  renderBaseFlavors = (flavors) => {
    const baseFlavors = flavors.map(
      flavor => (
        <li 
          key={flavor.flavor}
          className="base-option"
          onClick={() => {this.handleBaseClick(flavor.flavor, flavor.price)}}>
          {flavor.flavor}
        </li>
      )
    );

    return <ul>{baseFlavors}</ul>;
  }
  
  renderToppings(toppings) {
    const toppingElements = toppings.map((topping, index) => (
      <li key={topping.displayName}>
        {topping.displayName} {topping.price} 
        <span 
          onClick={() => this.handleIncrementTopping(topping.value, topping.price)}
          className="more">+</span>
        <span 
          onClick={() => this.handleDecrementTopping(topping.value, topping.price)}
          className="less">-</span>
      </li>
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
          {drinkOptions.ice.map(
            level => 
              <li 
                className="ice-option"
                onClick={() => {this.handleIceLevelClick(level)}}
                key={level}>{level}</li>)}
        </div>
        <div>
          <p>sugar:</p>
          {drinkOptions.sugar.map(
            level => 
              <li 
                className="sugar-option"
                onClick={() => {this.handleSugarLevelClick(level)}}
                key={level}>{level}</li>)}
        </div>
      </div>
    );  
  }
}



export default DrinkCustomizer;