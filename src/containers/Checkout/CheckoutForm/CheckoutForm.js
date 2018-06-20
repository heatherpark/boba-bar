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

  

  render() {
    const { checkoutForm } = this.state;

    return (
      <div className={styles.checkoutForm}>
        <h4>Please enter your information</h4>
        <Form>
          {checkoutForm ? renderFormInputs(checkoutForm, this.handleInputChange) : null}
          <Button
            disabled={this.props.checkingOut}
            onClick={event => this.props.onOrderSubmit(event, this.state.checkoutForm)}>Check Out</Button>
        </Form>
      </div>
    );
  }
}

export default CheckoutForm;