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
            <Form.Input onChange={e => this.handleInputChange(e.target.value, 'lastName')} error={this.state.checkoutForm['lastName'].touched && !this.state.checkoutForm['lastName'].valid} fluid label="Last name" placeholder="Last name" />
          </Form.Group>
            <Form.Input onChange={e => this.handleInputChange(e.target.value, 'address')} error={this.state.checkoutForm['address'].touched && !this.state.checkoutForm['address'].valid} fluid label="Address" placeholder="Address" />
          <Form.Group>
            <Form.Input width={8} onChange={e => this.handleInputChange(e.target.value, 'city')} error={this.state.checkoutForm['city'].touched && !this.state.checkoutForm['city'].valid} fluid label="City" placeholder="City" />
            <Form.Input width={3} onChange={e => this.handleInputChange(e.target.value, 'state')} error={this.state.checkoutForm['state'].touched && !this.state.checkoutForm['state'].valid} fluid label="State" placeholder="State" />
            <Form.Input width={5} onChange={e => this.handleInputChange(e.target.value, 'zipCode')} error={this.state.checkoutForm['zipCode'].touched && !this.state.checkoutForm['zipCode'].valid} fluid label="Zip code" placeholder="Zip code" />
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