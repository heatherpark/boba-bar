import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drink from '../../components/Drink/Drink';
import CustomizerOptions from '../../components/CustomizerOptions/CustomizerOptions';
import * as actions from '../../store/actions';

export class DrinkCustomizer extends Component {
  componentDidMount() {
    this.props.initDrinkCustomizer();
  }

  removeAddOn = (addOn, price) => {
    if (this.props.drinkOrder.addOns[addOn] > 0) {
      this.props.removeAddOn(addOn, price);
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
                  removeAddOn={this.props.removeAddOn}
                  removeAddOn={this.removeAddOn}
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
    addAddOn: (addOn, price) => dispatch(actions.addAddOn(addOn, price)),
    removeAddOn: (addOn, price) => dispatch(actions.removeAddOn(addOn, price)),
    chooseIceOrSugarLevel: (item, level) => dispatch(actions.chooseIceOrSugarLevel(item, level)),
    initDrinkCustomizer: () => dispatch(actions.initDrinkCustomizer())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCustomizer);