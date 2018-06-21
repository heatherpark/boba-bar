import React, { Component } from 'react';

import { checkValidity, formIsValid } from '../../../shared/utility';
import checkoutFormData from './checkout-form-data';
import styles from './CheckoutForm.css';

import { Form, Header } from 'semantic-ui-react';

class CheckoutForm extends Component {
  state = {
    checkoutForm: checkoutFormData,
    formIsValid: false
  };

  fieldIsInvalid = (formData, fieldKey) => {
    return formData[fieldKey].touched && !formData[fieldKey].valid;
  };

  handleInputChange = (value, fieldKey) => {
    const updateCheckoutFormState = prevState => {
      const inputData = prevState.checkoutForm[fieldKey];

      return {
        checkoutForm: {
          ...prevState.checkoutForm,
          [fieldKey]: {
            ...prevState.checkoutForm[fieldKey],
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
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              onChange={e => this.handleInputChange(e.target.value, 'firstName')}
              error={this.fieldIsInvalid(this.state.checkoutForm, 'firstName')} />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={e => this.handleInputChange(e.target.value, 'lastName')}
              error={this.fieldIsInvalid(this.state.checkoutForm, 'lastName')} />
          </Form.Group>
          <Form.Input
            fluid
            label="Address"
            placeholder="Address"
            onChange={e => this.handleInputChange(e.target.value, 'address')}
            error={this.fieldIsInvalid(this.state.checkoutForm, 'address')} />
          <Form.Group>
            <Form.Input
              width={8}
              label="City"
              placeholder="City"
              onChange={e => this.handleInputChange(e.target.value, 'city')}
              error={this.fieldIsInvalid(this.state.checkoutForm, 'city')} />
            <Form.Input
              width={3}
              label="State"
              placeholder="State"
              onChange={e => this.handleInputChange(e.target.value, 'state')}
              error={this.fieldIsInvalid(this.state.checkoutForm, 'state')} />
            <Form.Input
              wdith={5}
              label="Zip code"
              placeholder="Zip code"
              onChange={e => this.handleInputChange(e.target.value, 'zipCode')}
              error={this.fieldIsInvalid(this.state.checkoutForm, 'zipCode')} />
          </Form.Group>
          <Form.Button
            disabled={!this.state.formIsValid}
            onClick={event => this.props.onOrderSubmit(event, this.state.checkoutForm)}>
            Complete order
          </Form.Button>
        </Form>
      </div>
    );
  }
}

export default CheckoutForm;