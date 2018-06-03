import React from 'react';

const Drink = props => {
  function renderDrinkOrder(drinkOrder) {
    const elements = [];

    for (let key in drinkOrder) {
      let element = <li key={key}>
        {key}: {drinkOrder[key]}</li>;

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
      <p className="price">{props.price}</p>
    </div>
  );  
};

export default Drink;