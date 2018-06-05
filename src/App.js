import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DrinkCustomizer from './containers/DrinkCustomizer/DrinkCustomizer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={DrinkCustomizer} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
