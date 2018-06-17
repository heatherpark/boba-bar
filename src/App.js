import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import DrinkCustomizer from './containers/DrinkCustomizer/DrinkCustomizer';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout/Logout';
import Navigation from './components/Navigation/Navigation';

import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation isAuthenticated={this.props.isAuthenticated} />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={DrinkCustomizer} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default withRouter(connect(mapStateToProps)(App));
