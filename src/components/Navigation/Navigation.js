import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = props => {
  return (
    <ul>
      <li>
        <NavigationItem link="/" exact>Drink Customizer</NavigationItem>
        {props.isAuthenticated 
          ? <NavigationItem link="/orders">My Orders</NavigationItem>
          : null}
        {props.isAuthenticated
          ? <NavigationItem link="/logout">Log Out</NavigationItem>
          : <NavigationItem link="/login">Log In</NavigationItem>}
      </li>
    </ul>
  );
};

export default Navigation;