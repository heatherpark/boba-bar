import React from 'react';

const Drink = props => {
  function renderDrinkOrder(drinkOrder) {
    const elements = [];

    for (let key in drinkOrder) {
      let content = drinkOrder[key];

      if (key === 'base') {
        content = drinkOrder[key].flavor;
      }

      if (key === 'addOns') {
        content = renderAddOns(drinkOrder[key]);
      }

      let element = <li key={key}>
        {key}: {content}</li>;
        
      elements.push(element);
    }

    return elements;
  }

  function renderAddOns(addOns) {
    const elements = [];

    for (let key in addOns) {
      const quantity = addOns[key];

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