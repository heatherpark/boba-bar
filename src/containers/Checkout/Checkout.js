import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import * as actions from '../../store/actions';

class Checkout extends Component {
  state = {
    checkoutConfirmed: false,
    checkoutCanceled: false
  };

  handleCheckoutContinued = () => {
    this.setState({ checkoutConfirmed: true });
  };

  handleCheckoutCanceled = () => {
    this.setState({ checkoutCanceled: true });
  };

  render() {
    return (
      <div>
        {this.state.checkoutCanceled ? <Redirect to="/" /> : null}

        <button onClick={this.handleCheckoutContinued}>check out</button>
        <button onClick={this.handleCheckoutCanceled}>cancel</button>
        
        <Modal showModal={this.state.checkoutConfirmed}>
          <CheckoutForm
            drinkOrder={this.props.drinkOrder}
            checkedOut={this.props.checkedOut}
            checkingOut={this.props.checkingOut}
            onCheckOut={this.props.onCheckOut}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    drinkOrder: state.drinkCustomizer.drinkOrder,
    checkedOut: state.orders.checkedOut,
    checkingOut: state.orders.checkingOut
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckOut: (drinkOrder) => dispatch(actions.checkOut(drinkOrder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);