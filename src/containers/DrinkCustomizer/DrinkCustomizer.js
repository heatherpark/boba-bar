import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drink from '../../components/Drink/Drink';
import CustomizerOptions from '../../components/CustomizerOptions/CustomizerOptions';
import * as actions from '../../store/actions';

export class DrinkCustomizer extends Component {
  componentDidMount() {
    this.props.initDrinkCustomizer();
  }

  removeTopping = (topping, price) => {
    if (this.props.drinkOrder.toppings[topping] > 0) {
      this.props.removeTopping(topping, price);
    }
  }

  render() {
    return (
      <div>
        {this.props.drinkOptions
          ? (<React.Fragment>
                <Drink
                  drinkOrder={this.props.drinkOrder}
                  price={this.props.price} />
                <CustomizerOptions
                  chooseBase={this.props.chooseBase}
                  addTopping={this.props.addTopping}
                  removeTopping={this.removeTopping}
                  chooseIceOrSugarLevel={this.props.chooseIceOrSugarLevel}
                  drinkOptions={this.props.drinkOptions} />
            </React.Fragment>)
          : 'Loading options'}
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