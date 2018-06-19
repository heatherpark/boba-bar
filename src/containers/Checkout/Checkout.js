import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutForm from './CheckoutForm/CheckoutForm';
import * as actions from '../../store/actions';

import { Button, Modal } from 'semantic-ui-react';

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

        <Button 
          primary
          onClick={this.handleCheckoutContinued}>Check out</Button>
        <Button 
          secondary
          onClick={this.handleCheckoutCanceled}>Cancel</Button>
        
        <Modal 
          size="tiny"
          open={this.state.checkoutConfirmed}>
          <CheckoutForm
            drinkOrder={this.props.drinkOrder}
            price={this.props.price}
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
  return {
    drinkOrder: state.drinkCustomizer.drinkOrder,
    price: state.drinkCustomizer.price,
    checkedOut: state.orders.checkedOut,
    checkingOut: state.orders.checkingOut,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckOut: (drinkOrder) => dispatch(actions.checkOut(drinkOrder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);