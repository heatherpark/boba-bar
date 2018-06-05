import React from 'react';

import Base from '../Customization/Base/Base';
import AddOn from '../Customization/AddOn/AddOn';
import IceAndSugar from '../Customization/IceAndSugar/IceAndSugar';

const CustomizerOptions = props => {
  const renderBases = bases => {
    const baseTypes = [];

    for (let type in bases) {
      baseTypes.push(
        <li key={type}>
          {type}: {bases[type].price} <ul>{renderBaseFlavors(type, bases[type])}</ul>
        </li>
      );
    }

    return <ul>{baseTypes}</ul>;
  }

  const renderBaseFlavors = (baseType, baseData) => {
    const elements = baseData.flavors.map(
      flavor => (
        <li key={baseType + '-' + flavor}>
          <Base
            type={baseType}
            price={baseData.price}
            chooseBase={props.chooseBase}>
            {flavor}
          </Base>
        </li>
      )
    );

    return <ul>{elements}</ul>;
  }

  const drinkOrderIsValid = (drinkOrder) => drinkOrder.base.flavor;

  const renderIceAndSugarLevels = (item, levels) => {
    const levelElements = levels.map(level =>
      <li key={`${item}-${level}`}>
        <IceAndSugar
          chooseIceOrSugarLevel={props.chooseIceOrSugarLevel}
          item={item}
          level={level} />
      </li>
    );

    return <ul>{levelElements}</ul>;
  };

  const renderAddOns = (addOns) => {
    const elements = addOns.map(
      (addOn, index) => (
        <li key={addOn.displayName}>
          <AddOn
            addAddOn={props.addAddOn}
            removeAddOn={props.removeAddOn}
            displayName={addOn.displayName}
            value={addOn.value}
            price={addOn.price} />
        </li>
      )
    );

    return <ul>{elements}</ul>;
  }

  return (
    <div>
      <p>bases:</p>
      {renderBases(props.drinkOptions.bases)}
      <p>add-ons:</p>
      {renderAddOns(props.drinkOptions.addOns)}
      <p>ice:</p>
      {renderIceAndSugarLevels('ice', props.drinkOptions.ice)}
      <p>sugar:</p>
      {renderIceAndSugarLevels('sugar', props.drinkOptions.sugar)}
      <button 
        onClick={props.onPurchase}
        disabled={props.drinkOrder.base
          && !drinkOrderIsValid(props.drinkOrder)}>Buy Drink</button>
    </div>
  );
};

export default CustomizerOptions;