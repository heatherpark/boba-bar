import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { checkValidity, formIsValid, renderFormInputs } from '../../../shared/utility';
import checkoutFormData from './checkout-form-data';
import styles from './CheckoutForm.css';

import { Form, Button } from 'semantic-ui-react';

class CheckoutForm extends Component {
  state = {
    checkoutForm: checkoutFormData,
    formIsValid: false
  };

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

    const checkoutFormData = {};

    for (let field in this.state.checkoutForm) {
      checkoutFormData[field] = this.state.checkoutForm[field].value;
    }

    const order = {
      drinkOrder: this.props.drinkOrder,
      price: this.props.price,
      customerInfo: checkoutFormData,
      userId: this.props.userId
    };
    
    this.props.onCheckOut(order, this.props.token);
  };

  render() {
    const { checkoutForm } = this.state;

    return (
      <div className={styles.checkoutForm}>
        <h4>Please enter your information</h4>
        <Form>
          {checkoutForm ? renderFormInputs(checkoutForm, this.handleInputChange) : null}
          <Button
            disabled={this.props.checkingOut}
            onClick={this.handleSubmit}>Check Out</Button>
        </Form>
      </div>
    );
  }
}

export default CheckoutForm;