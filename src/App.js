import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import DrinkCustomizer from './containers/DrinkCustomizer/DrinkCustomizer';
import Checkout from './containers/Checkout/Checkout';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout/Logout';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation isAuthenticated={this.props.isAuthenticated} />
        <Switch>
          <Route path="/" exact component={DrinkCustomizer} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default withRouter(connect(mapStateToProps)(App));
