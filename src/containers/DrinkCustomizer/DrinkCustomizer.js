import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CustomizerOptions from '../../components/Drink/CustomizerOptions/CustomizerOptions';
import * as actions from '../../store/actions';

export class DrinkCustomizer extends Component {
  state = {
    placingOrder: false,
    redirectPath: '/checkout'
  };

  componentDidMount() {
    this.props.initDrinkCustomizer();
  }

  handlePlaceOrder = () => {
    if (!this.props.isAuthenticated) {
      this.setState({ redirectPath: '/login' });
    }

    this.setState({ placingOrder: true });
  };

  handleRemoveAddOn = (addOn, price) => {
    const addOnQuantity = this.props.drinkOrder.addOns[addOn];
    addOnQuantity > 0 && this.props.onRemoveAddOn(addOn, price);
  }

  renderCustomizer() {
    return (
      <div>
        {this.state.placingOrder ? <Redirect to={this.state.redirectPath} /> : null}
        <CustomizerOptions
          onPlaceOrder={this.handlePlaceOrder}
          drinkOrder={this.props.drinkOrder}
          onChooseBase={this.props.onChooseBase}
          onRemoveAddOn={this.handleRemoveAddOn}
          onAddAddOn={this.props.onAddAddOn}
          onChooseIceOrSugarLevel={this.props.onChooseIceOrSugarLevel}
          price={this.props.price}
          isAuthenticated={this.props.isAuthenticated}
          drinkOptions={this.props.drinkOptions} />
      </div>
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
    drinkOptions: state.drinkCustomizer.drinkOptions,
    drinkOrder: state.drinkCustomizer.drinkOrder,
    price: state.drinkCustomizer.price,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddAddOn: (addOn, price) => dispatch(actions.addAddOn(addOn, price)),
    onChooseBase: (baseType, base, price) => dispatch(actions.chooseBase(baseType, base, price)),
    onChooseIceOrSugarLevel: (item, level) => dispatch(actions.chooseIceOrSugarLevel(item, level)),
    onRemoveAddOn: (addOn, price) => dispatch(actions.removeAddOn(addOn, price)),
    initDrinkCustomizer: () => dispatch(actions.initDrinkCustomizer())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCustomizer);