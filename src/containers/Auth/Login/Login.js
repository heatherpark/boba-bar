import React, { Component } from 'react';
import { connect } from 'react-redux'

import loginFormData from './login-form-data';
import { checkValidity, formIsValid, renderFormInputs } from '../../../shared/utility';
import * as actions from '../../../store/actions';

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

  handleLogin = event => {
    event.preventDefault();

    const { loginForm } = this.state;
    this.props.onAuth(
      loginForm.email.value,
      loginForm.password.value
    );
  };

  render() {
    const { loginForm } = this.state;

    return(
      <div> 
        <form onSubmit={this.handleLogin}>
          {loginForm ? renderFormInputs(loginForm, this.handleInputChange) : null}
          <button disabled={!this.state.formIsValid}>Log In</button>
        </form>
      </div>
    ); 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  };
};

export default connect(null, mapDispatchToProps)(Login);
