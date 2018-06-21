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
    const checkoutFormConfig = this.state.checkoutForm;

    return (
      <div style={{ padding: '4rem' }}>

        <Header as="h4">Please enter your information</Header>

        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              value={checkoutFormConfig.firstName.value}
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'firstName')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'firstName')}
              error={fieldIsInvalid(checkoutFormConfig, 'firstName')} />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              value={checkoutFormConfig.lastName.value}
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'lastName')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'lastName')}
              error={fieldIsInvalid(checkoutFormConfig, 'lastName')} />
          </Form.Group>
          <Form.Input
            fluid
            label="Address"
            placeholder="Address"
            value={checkoutFormConfig.address.value}
            onFocus={() => this.markInputAsTouched(checkoutFormKey, 'address')}
            onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'address')}
            error={fieldIsInvalid(checkoutFormConfig, 'address')} />
          <Form.Group>
            <Form.Input
              width={8}
              label="City"
              placeholder="City"
              value={checkoutFormConfig.city.value}
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'city')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'city')}
              error={fieldIsInvalid(checkoutFormConfig, 'city')} />
            <Form.Input
              width={3}
              label="State"
              placeholder="State"
              value={checkoutFormConfig.state.value}
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'state')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'state')}
              error={fieldIsInvalid(checkoutFormConfig, 'state')} />
            <Form.Input
              wdith={5}
              label="Zip code"
              placeholder="Zip code"
              value={checkoutFormConfig.zipCode.value}
              onFocus={() => this.markInputAsTouched(checkoutFormKey, 'zipCode')}
              onChange={e => this.handleInputChange(e.target.value, checkoutFormKey, 'zipCode')}
              error={fieldIsInvalid(checkoutFormConfig, 'zipCode')} />
          </Form.Group>

          <Form.Button
            disabled={!this.state.formIsValid}
            onClick={event => this.props.onOrderSubmit(event, checkoutFormConfig)}>
            Complete order
          </Form.Button>
        </Form>
      </div>
    );
  }
}

export default CheckoutForm;