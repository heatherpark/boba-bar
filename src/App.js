import React, { Component } from 'react';

import Drink from './components/Drink/Drink';
import DrinkCustomizer from './containers/DrinkCustomizer/DrinkCustomizer';

class App extends Component {
  render() {
    return (
      <div>
        <DrinkCustomizer />
      </div>
    );
  }
}

export default App;
