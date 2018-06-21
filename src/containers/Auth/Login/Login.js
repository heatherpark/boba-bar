import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import loginFormData from './login-form-config';
import {
  fieldIsInvalid, 
  handleInputChange, 
  markInputAsTouched 
} from '../../../shared/form-utility';
import * as actions from '../../../store/actions';
import styles from './Login.css';

import {
  Form,
  Header,
  Segment,
  Message
} from 'semantic-ui-react';

class Login extends Component {
  state = {
    loginForm: loginFormData,
    isSignup: false,
    formIsValid: false
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

  renderErrorMessage(error) {
    const errors = {
      EMAIL_EXISTS: 'This email address is already in use.',
      INVALID_PASSWORD: 'The password you\'ve entered is incorrect.'
    };

    return (
      <Message negative size="small">
        {errors[error]}
      </Message>
    );
  }

  render() {
    const loginFormKey = 'loginForm';
    const loginFormConfig = this.state.loginForm;

    return (
      <div className={styles.Login}>
        {this.props.isAuthenticated ? <Redirect to={this.props.authRedirectPath} /> : null}
        <Header as="h2" textAlign="center">
          {this.state.isSignup
            ? 'Sign up for an account!'
            : 'Log in to Boba Bar!'}
        </Header>
        <Segment>
          <Form
            className={styles.LoginForm}
            onSubmit={this.handleLogin}>
            <Form.Input
              fluid
              label="Email address"
              placeholder="Email address"
              value={loginFormConfig.email.value}
              onFocus={markInputAsTouched.bind(this, loginFormKey, 'email')}
              onChange={e => handleInputChange.call(this, e.target.value, loginFormKey, 'email')}
              error={fieldIsInvalid(loginFormConfig, 'email')} />
            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
              value={loginFormConfig.password.value}
              onFocus={markInputAsTouched.bind(this, loginFormKey, 'password')}
              onChange={e => handleInputChange.call(this, e.target.value, loginFormKey, 'password')}
              error={fieldIsInvalid(loginFormConfig, 'password')} />
            <Form.Button
              fluid
              disabled={!this.state.formIsValid}
              primary>
              {this.state.isSignup ? 'Sign Up' : 'Log In'}
            </Form.Button>
          </Form>
          {this.props.error ? this.renderErrorMessage(this.props.error) : null}
        </Segment>
        <Segment textAlign="center">
          <p>
            {this.state.isSignup
              ? 'Already have an account?'
              : 'New user?'}
            &nbsp;&nbsp;
            <a
              onClick={this.handleSwitchAuthMode}
              href="#">
              {this.state.isSignup
                ? "Log in here."
                : "Sign up here."}
            </a>
          </p>
        </Segment>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
