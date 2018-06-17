import React from 'react';

import Base from '../Customization/Base/Base';
import AddOn from '../Customization/AddOn/AddOn';
import IceAndSugar from '../Customization/IceAndSugar/IceAndSugar';

import typography from '../../../css/typography.css';

const CustomizerOptions = props => {
  const renderBases = bases => {
    const baseTypes = [];

    for (let type in bases) {
      baseTypes.push(
        <li key={type}>
          <h3 className={typography.headingQuaternary}>{type}: {bases[type].price}</h3>
          <ul>{renderBaseFlavors(type, bases[type])}</ul>
        </li>
      );
    }

    return <ul>{baseTypes}</ul>;
  }

  const renderBaseFlavors = (baseType, baseData) => {
    const elements = baseData.flavors.map(
      flavor => (
        <li 
          className={typography.paragraph}
          key={baseType + '-' + flavor}>
          <Base
            type={baseType}
            price={baseData.price}
            onChooseBase={props.onChooseBase}>
            {flavor}
          </Base>
        </li>
      )
    );

    return <ul>{elements}</ul>;
  }

  const drinkOrderIsValid = drinkOrder => drinkOrder && drinkOrder.base.flavor;

  const renderIceAndSugarLevels = (item, levels) => {
    const levelElements = levels.map(level =>
      <li key={`${item}-${level}`}>
        <IceAndSugar
          onChooseIceOrSugarLevel={props.onChooseIceOrSugarLevel}
          item={item}
          level={level} />
      </li>
    );

    return <ul>{levelElements}</ul>;
  };

  const renderAddOns = (addOns) => {
    const elements = addOns.map(addOn => (
      <li key={addOn.displayName}>
        <AddOn
          onAddAddOn={props.onAddAddOn}
          onRemoveAddOn={props.onRemoveAddOn}
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
      <h3 className={typography.headingTertiary}>bases:</h3>
      {renderBases(props.drinkOptions.bases)}
      <h3 className={typography.headingTertiary}>add-ons:</h3>
      {renderAddOns(props.drinkOptions.addOns)}
      <h3 className={typography.headingTertiary}>ice:</h3>
      {renderIceAndSugarLevels('ice', props.drinkOptions.ice)}
      <h3 className={typography.headingTertiary}>sugar:</h3>
      {renderIceAndSugarLevels('sugar', props.drinkOptions.sugar)}
      <button
        onClick={props.onPlaceOrder}
        disabled={!drinkOrderIsValid(props.drinkOrder)}>Buy Drink</button>
    </div>
  );
};

export default CustomizerOptions;