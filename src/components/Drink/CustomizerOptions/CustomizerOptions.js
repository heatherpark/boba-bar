import React from 'react';

import Base from '../Customization/Base/Base';
import AddOn from '../Customization/AddOn/AddOn';
import IceAndSugar from '../Customization/IceAndSugar/IceAndSugar';
import styles from './CustomizerOptions.css';

import { Button, Segment, List, Header } from 'semantic-ui-react';

const CustomizerOptions = props => {
  const renderBases = bases => {
    const baseTypes = [];

    for (let type in bases) {
      baseTypes.push(
        <List.Item key={type}>
          <Header as="h4">
            {type} ${bases[type].price}
          </Header>
          {renderBaseFlavors(type, bases[type])}
        </List.Item>
      );
    }

    return <List>{baseTypes}</List>;
  }

  const renderBaseFlavors = (baseType, baseData) => {
    const elements = baseData.flavors.map(
      flavor => (
        <List.Item key={baseType + '-' + flavor}>
          <Base
            type={baseType}
            price={baseData.price}
            onChooseBase={props.onChooseBase}>
            {flavor}
          </Base>
        </List.Item>
      )
    );

    return <List horizontal>{elements}</List>;
  }

  const drinkOrderIsValid = drinkOrder => drinkOrder && drinkOrder.base.flavor;

  const renderIceAndSugarLevels = (item, levels) => {
    const levelElements = levels.map(level =>
      <List.Item key={`${item}-${level}`}>
        <IceAndSugar
          onChooseIceOrSugarLevel={props.onChooseIceOrSugarLevel}
          item={item}
          level={level} />
      </List.Item>
    );

    return <List horizontal>{levelElements}</List>;
  };

  const renderChosenAddOns = addOns => {
    const addOnText = [];

    for (let addOn in addOns) {
      if (addOns[addOn] > 0) {
        addOnText.push(addOn + ': ' + addOns[addOn]);
      }
    }

    return addOnText.join(', ');
  };

  const renderAddOns = (addOns) => {
    const elements = addOns.map(addOn => (
      <List.Item key={addOn.displayName}>
        <AddOn
          onAddAddOn={props.onAddAddOn}
          onRemoveAddOn={props.onRemoveAddOn}
          displayName={addOn.displayName}
          value={addOn.value}
          price={addOn.price} />
      </List.Item>
    )
    );

    return <List horizontal>{elements}</List>;
  }

  return (
    <div className={styles.options}>
      <Segment>
        <Header as="h3">
          Base: &nbsp;
            <span style={{ fontWeight: 'normal' }}>
            {props.drinkOrder
              ? props.drinkOrder.base.flavor + ' ' + props.drinkOrder.base.type
              : null}
          </span>
        </Header>
        {renderBases(props.drinkOptions.bases)}
      </Segment>
      <Segment>
        <Header as="h3">
          Add-ons: &nbsp;
            <span style={{ fontWeight: 'normal' }}>
            {props.drinkOrder
              ? renderChosenAddOns(props.drinkOrder.addOns)
              : null}
          </span>
        </Header>
        {renderAddOns(props.drinkOptions.addOns)}
      </Segment>
      <Segment>
        <Header as="h3">
          Ice: &nbsp;
            <span style={{ fontWeight: 'normal' }}>
            {props.drinkOrder
              ? props.drinkOrder.ice
              : null}
          </span>
        </Header>
        {renderIceAndSugarLevels('ice', props.drinkOptions.ice)}
      </Segment>
      <Segment>
        <Header as="h3">
          Sugar: &nbsp;
              <span style={{ fontWeight: 'normal' }}>
            {props.drinkOrder
              ? props.drinkOrder.sugar
              : null}
          </span>
        </Header>
        {renderIceAndSugarLevels('sugar', props.drinkOptions.sugar)}
      </Segment>
      <Segment>
        <Header as="h3">
          Total: ${props.price}
        </Header>
      </Segment>
      <Button
        primary
        onClick={props.onPlaceOrder}
        fluid
        disabled={!drinkOrderIsValid(props.drinkOrder)}>
        {props.isAuthenticated ? 'Buy Drink' : 'Log in to buy drink'}
      </Button>
    </div>
  );
};

export default CustomizerOptions;