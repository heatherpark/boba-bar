import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import loginFormData from './login-form-data';
import { checkValidity, formIsValid, renderFormInputs } from '../../../shared/utility';
import * as actions from '../../../store/actions';

class Login extends Component {
  state = {
    loginForm: loginFormData,
    isSignup: true,
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

    const { loginForm, isSignup } = this.state;
    this.props.onAuth(
      loginForm.email.value,
      loginForm.password.value,
      isSignup
    );
  };

  handleSwitchAuthMode = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };

  render() {
    const { loginForm } = this.state;

    return (
      <div>
        {this.props.isAuthenticated ? <Redirect to="/" /> : null}

        <form onSubmit={this.handleLogin}>
          {loginForm ? renderFormInputs(loginForm, this.handleInputChange) : null}
          <button disabled={!this.state.formIsValid}>
            {this.state.isSignup ? 'Sign Up' : 'Log In'}
          </button>
          <a
            href="#"
            onClick={this.handleSwitchAuthMode}>
            {this.state.isSignup ? 'Have an account already ? Log In' : 'New User ? Sign Up'}
          </a>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
