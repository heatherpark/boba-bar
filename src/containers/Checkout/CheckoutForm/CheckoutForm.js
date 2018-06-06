import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';
import { checkValidity } from '../../../shared/utility';

class CheckoutForm extends Component {
  state = {
    checkoutForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'fastest',
        validation: {},
        valid: true
      }      
    },
    formIsValid: false
  };

  handleInputChange = (event, inputIdentifier) => {
    const updatedFormElement = {
      ...this.state.checkoutForm[inputIdentifier],
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.checkoutForm[inputIdentifier].validation),
      touched: true
    };

    const updatedCheckoutForm = {
      ...this.state.checkoutForm,
      [inputIdentifier]: updatedFormElement
    };

    let formIsValid = true;
    for (let inputIdentifier in updatedCheckoutForm) {
      formIsValid = updatedCheckoutForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ checkoutForm: updatedCheckoutForm, formIsValid: formIsValid });
  };

  renderFormInputs(formData) {
    const formElementsArray = [];

    for (let key in formData) {
      formElementsArray.push({
        id: key,
        config: formData[key]
      });
    }

    return formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        onChange={(event) => this.handleInputChange(event, formElement.id)} />
    ));
  }

  render() {
    return (
      <div>
        <h4>Please enter your information</h4>
        <form>
          {this.renderFormInputs(this.state.checkoutForm)}
        </form>
      </div>
    );
  }
}

export default CheckoutForm;