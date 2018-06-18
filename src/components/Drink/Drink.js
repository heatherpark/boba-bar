import React from 'react';

import styles from './Drink.css';

import { List, Segment, Header } from 'semantic-ui-react';

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
        {key}: {content}</List.Item>;

      elements.push(element);
    }

    return elements;
  }

  function renderAddOns(addOns) {
    const elements = [];

    for (let key in addOns) {
      const quantity = addOns[key];

      elements.push(<List.Item key={key}>
        {key} x{quantity}</List.Item>);
    }

    return <ul>{elements}</ul>;
  }

  return (
    <Segment compact>
      <Header as="h3">Your drink order:</Header>
      <List>
        {renderDrinkOrder(props.drinkOrder)}
        <p className="price">Total: ${props.price}</p>
      </List>
    </Segment>
  );
};

export default Drink;