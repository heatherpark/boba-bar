import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';
import { checkValidity } from '../../../shared/utility';
import checkoutFormInfo from './checkout-form-info';

class CheckoutForm extends Component {
  state = {
    checkoutForm: {},
    formIsValid: false
  };

  componentWillMount() {
    this.setState({ checkoutForm: checkoutFormInfo });
  }

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