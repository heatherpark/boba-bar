import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';
import { checkValidity, formIsValid } from '../../../shared/utility';
import checkoutFormData from './checkout-form-data';

class CheckoutForm extends Component {
  state = {
    checkoutForm: {},
    formIsValid: false
  };

  componentWillMount() {
    this.setState({ checkoutForm: checkoutFormData });
  }

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCheckOut(this.props.drinkOrder);
  };

  renderFormInputs(formData) {
    const inputs = [];

    for (let key in formData) {
      const config = formData[key];

      inputs.push(
        <Input
          key={key}
          elementType={config.elementType}
          elementConfig={config.elementConfig}
          value={config.value}
          invalid={!config.valid}
          shouldValidate={config.validation}
          touched={config.touched}
          onChange={(event) => this.handleInputChange(
            event.target.value,
            key,
            this.state.checkoutForm[key])} />
      );
    }

    return inputs;
  }

  render() {
    let form = (
      <React.Fragment>
        <h4>Please enter your information</h4>
        <form>
          {this.renderFormInputs(this.state.checkoutForm)}
          <button 
            disabled={this.props.checkingOut}
            onClick={this.handleSubmit}>Check Out</button>
        </form>
      </React.Fragment>
    );

    if (this.state.checkedOut) {
      form = <Redirect to="/" />;
    }

    return (
      <div>
        {form}
      </div>
    );
  }
}

export default CheckoutForm;