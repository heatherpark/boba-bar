import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import CheckoutForm from './CheckoutForm/CheckoutForm';

class Checkout extends Component {
  state = {
    checkingOut: false
  };

  handleCheckoutContinued = () => {
    this.setState({ checkingOut: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCheckoutContinued}>check out</button>
        <button>cancel</button>
        <Modal showModal={this.state.checkingOut}>
          <CheckoutForm />
        </Modal>
      </div>
    );
  }
}

export default Checkout;