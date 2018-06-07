import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';
import { checkValidity } from '../../../shared/utility';
import checkoutFormData from './checkout-form-data';

class CheckoutForm extends Component {
  state = {
    checkoutForm: {},
    formIsValid: false
  };

  componentWillMount() {
    this.setState({ checkoutForm: checkoutFormData });
  }

  handleInputChange = (value, field, data) => {
    this.setState(prevState => {
      return {
        checkoutForm: {
          ...prevState.checkoutForm,
          [field]: {
            value,
            valid: checkValidity(value, data.validation),
            touched: true
          }
        }
      }
    });
  };

  formIsValid(form) {
    let formIsValid = true;

    for (let field in form) {
      formIsValid = form[field].valid && formIsValid;
    }

    return formIsValid;
  }

  renderFormInputs(formData) {
    const formElementsArray = [];

    for (let key in formData) {
      formElementsArray.push({
        id: key,
        config: formData[key]
      });
    }

    return formElementsArray.map(formElement => {
      let val;
      if (formElement.id === 'name') {
        val = formElement.value;
      }
      return <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        onChange={(event) => this.handleInputChange(
          event.target.value,
          formElement.id,
          this.state.checkoutForm[formElement.id])
        } />
    });
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