import React, { Component } from 'react';

import Drink from '../../components/Drink/Drink';

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
        price: 3
      },
      {
        flavor: 'green apple',
        price: 3
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
  ice: ['0%', '25%', '50%', '75%', '100%'],
  sugar: ['0%', '25%', '50%', '75%', '100%']
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
      return { 
        ...prevState,
        drinkOrder: {
          ...prevState.drinkOrder,
          base
        },
        price: prevState.price + price
      };
    });
  }

  handleIncrementTopping(toppingName, price) {
    this.setState(prevState => {
      const { drinkOrder } = prevState;

      return {
        ...prevState,
        drinkOrder: {
          ...drinkOrder,
          toppings: {
            ...drinkOrder.toppings,
            [toppingName]: drinkOrder.toppings[toppingName] + 1  
          }
        },
        price: prevState.price + price
      };
    });
  }

  handleDecrementTopping(toppingName, price) {
    this.setState(prevState => {
      const { toppings }  = prevState.drinkOrder;

      return {
        ...prevState,
        drinkOrder: {
          ...prevState.drinkOrder,
          toppings: {
            ...toppings,
            [toppingName]: toppings[toppingName] <= 0 ? 0 : toppings[toppingName] - 1
          }
        },
        price: toppings[toppingName] > 0 ? prevState.price - price : prevState.price
      };
    });
  }

  handleIceAndSugarLevelClick = (item, level) => {
    this.setState(prevState => {
      return {
        drinkOrder: {
          ...prevState.drinkOrder,
          [item]: level
        }
      };
    });
  };

  renderBases = bases => {
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

  renderBaseFlavors = flavors => {
    const baseFlavors = flavors.map(flavor => (
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

  renderIceAndSugarLevels = (item, levels) => {
    const levelElements = levels.map(level => 
        <li 
          className={`${item}-option`}
          onClick={() => this.handleIceAndSugarLevelClick(item, level)}
          key={level}>{level}</li>
      );

    return <ul>{levelElements}</ul>;
  };
  
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
        <Drink 
          price={this.state.price}
          drinkOrder={this.state.drinkOrder} />
        <div>
          <p>bases:</p>
          {this.renderBases(drinkOptions.bases)}
        </div>
        <div>
          <p>toppings:</p>
          {this.renderToppings(drinkOptions.toppings)}
        </div>
        <div>
          <p>ice:</p>
          {this.renderIceAndSugarLevels('ice', drinkOptions.ice)}
        </div>
        <div>
          <p>sugar:</p>
          {this.renderIceAndSugarLevels('sugar', drinkOptions.sugar)}
        </div>
      </div>
    );  
  }
}

export default DrinkCustomizer;