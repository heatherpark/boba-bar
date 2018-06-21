import React from 'react';

import { List, Header } from 'semantic-ui-react';

const Drink = props => {
  function renderDrinkOrder(drinkOrder) {
    const elements = [];
    let element;

    for (let key in drinkOrder) {
      if (key === 'base') {
        element = <List.Item key={key}>
          <strong>Base:</strong> {drinkOrder[key].flavor}</List.Item>;
      }

      if (key === 'addOns') {
        element = <List.Item key={key}>
          <strong>Add-ons:</strong> {renderAddOns(drinkOrder[key])}
        </List.Item>;
      }

      if (key === 'ice' || key === 'sugar') {
        element = <List.Item key={key}>
          <strong style={{ textTransform: 'capitalize' }}>{key}:</strong> {drinkOrder[key]}
        </List.Item>;
      }

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