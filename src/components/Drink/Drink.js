import React from 'react';
import PropTypes from 'prop-types';

const Drink = props => {
  function renderDrinkOrder(drinkOrder) {
    const elements = [];

    for (let key in drinkOrder) {
      let element = <li
        key={key}>{key}: {drinkOrder[key]}</li>;

      if (key === 'toppings') {
        element = <li key={key}>
          {key}: {renderToppings(drinkOrder[key])}</li>;
      }

      elements.push(element);
    }

    return elements;
  }

  function renderToppings(toppings) {
    const elements = [];

    for (let key in toppings) {
      const quantity = toppings[key];

      elements.push(<li key={key}>
        {key} x{quantity}</li>);
    }
    
    return <ul>{elements}</ul>;
  }

  return (
    <div>
      {renderDrinkOrder(props.drinkOrder)}
    </div>
  );  
};

Drink.propTypes = {
  drinkorder: PropTypes.object
};

export default Drink;