import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drink from '../../components/Drink/Drink';
import CustomizerOptions from '../../components/CustomizerOptions/CustomizerOptions';
import * as actions from '../../store/actions';

export class DrinkCustomizer extends Component {
  componentDidMount() {
    this.props.initDrinkCustomizer();
  }

  handleRemoveAddOn = (addOn, price) => {
    const addOnQuantity = this.props.drinkOrder.addOns[addOn];

    if (addOnQuantity > 0) {
      this.props.removeAddOn(addOn, price);
    }
  }

  handlePlaceOrder = () => {
    console.log('placing order');
  };

  renderCustomizer() {
    return (
      <React.Fragment>
        <Drink
          drinkOrder={this.props.drinkOrder}
          price={this.props.price} />
        <CustomizerOptions
          onPlaceOrder={this.handlePlaceOrder}
          drinkOrder={this.props.drinkOrder}
          chooseBase={this.props.chooseBase}
          removeAddOn={this.handleRemoveAddOn}
          addAddOn={this.props.addAddOn}
          chooseIceOrSugarLevel={this.props.chooseIceOrSugarLevel}
          drinkOptions={this.props.drinkOptions} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.props.drinkOptions ? this.renderCustomizer() : 'Loading options'}
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
    addAddOn: (addOn, price) => dispatch(actions.addAddOn(addOn, price)),
    chooseBase: (baseType, base, price) => dispatch(actions.chooseBase(baseType, base, price)),
    chooseIceOrSugarLevel: (item, level) => dispatch(actions.chooseIceOrSugarLevel(item, level)),
    initDrinkCustomizer: () => dispatch(actions.initDrinkCustomizer()),
    removeAddOn: (addOn, price) => dispatch(actions.removeAddOn(addOn, price))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCustomizer);