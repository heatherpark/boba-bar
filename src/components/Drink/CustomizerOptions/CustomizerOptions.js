import React from 'react';

import Base from '../Customization/Base/Base';
import AddOn from '../Customization/AddOn/AddOn';
import IceAndSugar from '../Customization/IceAndSugar/IceAndSugar';
import utilityStyles from '../../../css/utility.css';

import { Segment, List, Header } from 'semantic-ui-react';

const CustomizerOptions = props => {
  const renderBases = bases => {
    const baseTypes = [];

    for (let type in bases) {
      baseTypes.push(
        <List.Item key={type}>
          <span className={utilityStyles['u-uppercase']}>{type} </span>
          ${bases[type].price} {renderBaseFlavors(type, bases[type])}
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
    <div>
      <Segment>
        <Header as="h3">choose your base:</Header>
        {renderBases(props.drinkOptions.bases)}
      </Segment>
      <Segment>
        <Header as="h3">add-ons:</Header>
        {renderAddOns(props.drinkOptions.addOns)}
      </Segment>
      <Segment>
        <Header as="h3">ice:</Header>
        {renderIceAndSugarLevels('ice', props.drinkOptions.ice)}
      </Segment>
      <Segment>
        <Header as="h3">sugar:</Header>
        {renderIceAndSugarLevels('sugar', props.drinkOptions.sugar)}
      </Segment>
      <button
        onClick={props.onPlaceOrder}
        disabled={!drinkOrderIsValid(props.drinkOrder)}>Buy Drink</button>
    </div>
  );
};

export default CustomizerOptions;