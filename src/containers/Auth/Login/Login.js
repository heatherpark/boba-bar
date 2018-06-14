import React, { Component } from 'react';

import loginFormData from './login-form-data';
import { checkValidity, formIsValid, renderFormInputs } from '../../../shared/utility';

class Login extends Component {
  state = {
    loginForm: loginFormData,
    formIsValid: false
  };

  handleInputChange = (value, field) => {
    const updateLoginFormState = prevState => {
      const inputData = prevState.loginForm[field];

      return {
        loginForm: {
          ...prevState.loginForm,
          [field]: {
            ...prevState.loginForm[field],
            value,
            valid: checkValidity(value, inputData.validation),
            touched: true
          }
        }
      };
    };

    const updateFormIsValidState = prevState => ({
      formIsValid: formIsValid(prevState.loginForm)
    });

    this.setState(
      prevState => updateLoginFormState(prevState),
      () => this.setState(prevState => updateFormIsValidState(prevState))
    );
  };

  render() {
    const { loginForm } = this.state;

    return(
      <div> 
        <form onSubmit={this.handleLogin}>
          {loginForm ? renderFormInputs(loginForm, this.handleInputChange) : null}
          <button
            disabled={!this.props.formIsValid}
            onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    ); 
  }
}

export default Login;