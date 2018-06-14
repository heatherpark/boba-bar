import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DrinkCustomizer from './containers/DrinkCustomizer/DrinkCustomizer';
import Checkout from './containers/Checkout/Checkout';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/" exact component={DrinkCustomizer} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
