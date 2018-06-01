import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drink from '../../components/Drink/Drink';
import * as actions from '../../store/actions';

export const drinkOptions = {
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

export class DrinkCustomizer extends Component {
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
    this.props.onChooseBase(base, price);
  }

  handleAddTopping(topping, price) {
    this.props.onAddTopping(topping, price);
  }

  handleDecrementTopping(topping, price) {
    if (this.props.drinkOrder.toppings[topping] > 0) {
      this.props.onRemoveTopping(topping, price);
    }
  }

  handleIceAndSugarLevelClick = (item, level) => {
    this.props.onChooseIceOrSugarLevel(item, level);
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
          onClick={() => this.handleAddTopping(topping.value, topping.price)}
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
          price={this.props.price}
          drinkOrder={this.props.drinkOrder} />
        <div>
          <p>bases:</p>
          {this.renderBases(this.props.drinkOptions.bases)}
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

const mapStateToProps = state => {
  return {
    drinkOptions: state.drinkOptions,
    drinkOrder: state.drinkOrder,
    price: state.price
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChooseBase: (base, price) => dispatch(actions.chooseBase(base, price)),
    onAddTopping: (topping, price) => dispatch(actions.addTopping(topping, price)),
    onRemoveTopping: (topping, price) => dispatch(actions.removeTopping(topping, price)),
    onChooseIceOrSugarLevel: (item, level) => dispatch(actions.chooseIceOrSugarLevel(item, level))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCustomizer);