import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import CheckoutForm from './CheckoutForm/CheckoutForm';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Modal showModal={true}>
          <CheckoutForm />
        </Modal>
      </div>
    );
  }
}

export default Checkout;