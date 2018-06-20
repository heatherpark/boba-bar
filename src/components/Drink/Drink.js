import React from 'react';

import { List, Header } from 'semantic-ui-react';

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

      let element = <List.Item key={key}>
        <strong>{key}</strong>: {content}</List.Item>;

      elements.push(element);
    }

    return elements;
  }

  function renderAddOns(addOns) {
    const addOnText = [];

    for (let addOn in addOns) {
      if (addOns[addOn] > 0) {
        addOnText.push(addOn + ' ' + addOns[addOn]);
      }
    }

    return addOnText.join(', ');
  }

  return (
    <div>
      <Header as="h3">Your drink order:</Header>
      <List>
        {renderDrinkOrder(props.drinkOrder)}
      </List>
      <p><strong>Total:</strong> ${props.price}</p>

    </div>
  );
};

export default Drink;