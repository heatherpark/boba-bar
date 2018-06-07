import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Modal from '../../components/UI/Modal/Modal';
import CheckoutForm from './CheckoutForm/CheckoutForm';

class Checkout extends Component {
  state = {
    checkingOut: false,
    checkoutCanceled: false
  };

  handleCheckoutContinued = () => {
    this.setState({ checkingOut: true });
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
        
        <Modal showModal={this.state.checkingOut}>
          <CheckoutForm />
        </Modal>
      </div>
    );
  }
}

export default Checkout;