import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';

import {
  fieldIsInvalid, 
  handleInputChange, 
  markInputAsTouched 
} from '../../../shared/form-utility';
import checkoutFormConfig from './checkout-form-config';

class CheckoutForm extends Component {
  constructor() {
    super();
    
    this.markInputAsTouched = markInputAsTouched.bind(this);
    this.handleInputChange = handleInputChange.bind(this);
  }

  state = {
    checkoutForm: checkoutFormConfig,
    formIsValid: false
  };

  render() {
    const checkoutFormKey = 'checkoutForm';
    const checkoutForm = this.state.checkoutForm;

    return (
      <div style={{ padding: '4rem' }}>

        <Header as="h4">Please enter your information</Header>

        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'firstName')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'firstName')}
              error={fieldIsInvalid(checkoutForm, 'firstName')} />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'lastName')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'lastName')}
              error={fieldIsInvalid(checkoutForm, 'lastName')} />
          </Form.Group>
          <Form.Input
            fluid
            label="Address"
            placeholder="Address"
            onFocus={() => this.markInputAsTouched(checkoutFormKey, 'address')}
            onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'address')}
            error={fieldIsInvalid(checkoutForm, 'address')} />
          <Form.Group>
            <Form.Input
              width={8}
              label="City"
              placeholder="City"
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'city')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'city')}
              error={fieldIsInvalid(checkoutForm, 'city')} />
            <Form.Input
              width={3}
              label="State"
              placeholder="State"
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'state')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'state')}
              error={fieldIsInvalid(checkoutForm, 'state')} />
            <Form.Input
              wdith={5}
              label="Zip code"
              placeholder="Zip code"
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'zipCode')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'zipCode')}
              error={fieldIsInvalid(checkoutForm, 'zipCode')} />
          </Form.Group>

          <Form.Button
            disabled={!this.state.formIsValid}
            onClick={event => this.props.onOrderSubmit(event, checkoutForm)}>
            Complete order
          </Form.Button>
        </Form>
      </div>
    );
  }
}

export default CheckoutForm;