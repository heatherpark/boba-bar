import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drink from '../../components/Drink/Drink';
import * as actions from '../../store/actions';

export class DrinkCustomizer extends Component {
  componentDidMount() {
    this.props.initDrinkCustomizer();
  }

  handleBaseClick(base, price) {
    this.props.chooseBase(base, price);
  }

  handleAddTopping(topping, price) {
    this.props.addTopping(topping, price);
  }

  handleRemoveTopping(topping, price) {
    if (this.props.drinkOrder.toppings[topping] > 0) {
      this.props.removeTopping(topping, price);
    }
  }

  handleIceAndSugarLevelClick = (item, level) => {
    this.props.chooseIceOrSugarLevel(item, level);
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
          className="add">+</span>
        <span
          onClick={() => this.handleRemoveTopping(topping.value, topping.price)}
          className="remove">-</span>
      </li>
    ));

    return <ul>{toppingElements}</ul>;
  }

  renderDrinkOptions(drinkOptions) {
    if (!drinkOptions) return 'Loading...';

    return (
      <div>
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

  render() {
    return (
      <div>
        <Drink />
        {this.renderDrinkOptions(this.props.drinkOptions)}
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
    chooseBase: (base, price) => dispatch(actions.chooseBase(base, price)),
    addTopping: (topping, price) => dispatch(actions.addTopping(topping, price)),
    removeTopping: (topping, price) => dispatch(actions.removeTopping(topping, price)),
    chooseIceOrSugarLevel: (item, level) => dispatch(actions.chooseIceOrSugarLevel(item, level)),
    initDrinkCustomizer: () => dispatch(actions.initDrinkCustomizer())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCustomizer);