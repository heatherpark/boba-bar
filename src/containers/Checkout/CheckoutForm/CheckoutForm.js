import React, { Component } from 'react';

import { checkValidity, formIsValid, renderFormInputs } from '../../../shared/utility';
import checkoutFormData from './checkout-form-data';
import styles from './CheckoutForm.css';

import { Form, Header } from 'semantic-ui-react';

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
    return (
      <div className={styles.checkoutForm}>
        <Header as="h4">Please enter your information</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Input onChange={e => this.handleInputChange(e.target.value, 'firstName')} error={this.state.checkoutForm['firstName'].touched && !this.state.checkoutForm['firstName'].valid} fluid label="First name" placeholder="First name" />
            {/* <Form.Input error={!this.state.checkoutForm['firstName'].valid} fluid label="Last name" placeholder="Last name" /> */}
          </Form.Group>
          {/* <Form.Input width={16} label="Address" placeholder="Address" /> */}
          <Form.Group>
            {/* <Form.Input error={this.state.checkoutForm['firstName'].valid} width={8} label="City" placeholder="City" /> */}
            {/* <Form.Input error={this.state.checkoutForm['firstName'].valid} width={3} label="State" placeholder="State" /> */}
            {/* <Form.Input error={this.state.checkoutForm['firstName'].valid} width={5} label="Zip Code" placeholder="Zip Code" /> */}
          </Form.Group>
          <Form.Button
            disabled={this.props.checkingOut}
            onClick={event => this.props.onOrderSubmit(event, this.state.checkoutForm)}>Check Out</Form.Button>
        </Form>
      </div>
    );
  }
}

export default CheckoutForm;