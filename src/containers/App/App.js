import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import DrinkCustomizer from '../DrinkCustomizer/DrinkCustomizer';
import Checkout from '../Checkout/Checkout';
import Orders from '../Orders/Orders';
import Login from '../Auth/Login/Login';
import Logout from '../Auth/Logout/Logout';
import Navigation from '../../components/Navigation/Navigation';
import { Container } from 'semantic-ui-react';
import * as actions from '../../store/actions';

class App extends Component {
  componentDidMount() {
    this.props.onAutoLogin();
  }

  determineRoutes(isAuthenticated) {
    if (isAuthenticated) {
      return (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={DrinkCustomizer} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={DrinkCustomizer} />
          <Redirect to="/" />
        </Switch>
      );
    }
  }

  render() {
    return (
      <Container>
        <Navigation isAuthenticated={this.props.isAuthenticated} />
        {this.determineRoutes(this.props.isAuthenticated)}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
  onAutoLogin: () => dispatch(actions.authCheckState())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
