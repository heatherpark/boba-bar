import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import CheckoutForm from './CheckoutForm/CheckoutForm';

class Checkout extends Component {
  state = {
    checkingOut: false
  };

  render() {
    return (
      <div>
        <Modal showModal={this.state.checkingOut}>
          <CheckoutForm />
        </Modal>
      </div>
    );
  }
}

export default Checkout;