import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { checkValidity, formIsValid, renderFormInputs } from '../../../shared/utility';
import checkoutFormData from './checkout-form-data';

class CheckoutForm extends Component {
  state = {
    checkoutForm: {},
    formIsValid: false
  };

  componentWillMount() {
    this.setState({ checkoutForm: checkoutFormData });
  }

  handleInputChange = (value, field) => {
    const updateCheckoutFormState = prevState => {
      const inputData = prevState.checkoutForm[field];

      return {
        checkoutForm: {
          ...prevState.checkoutForm,
          [field]: {
            ...prevState.checkoutForm[field],
            value,
            valid: checkValidity(value, inputData.validation),
            touched: true
          }
        }
      };
    };

    const updateFormIsValidState = prevState => ({
      formIsValid: formIsValid(prevState.checkoutForm)
    });

    this.setState(
      prevState => updateCheckoutFormState(prevState),
      () => this.setState(prevState => updateFormIsValidState(prevState))
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCheckOut(this.props.drinkOrder);
  };

  render() {
    return (
      <div>
        {this.state.checkedOut ? <Redirect to="/" /> : null}

        <h4>Please enter your information</h4>
        <form>
          {renderFormInputs(this.state.checkoutForm)}
          <button
            disabled={this.props.checkingOut}
            onClick={this.handleSubmit}>Check Out</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;