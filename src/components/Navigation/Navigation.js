import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavigationItem link="/">Drink Customizer</NavigationItem>
        <NavigationItem link="/orders">My Orders</NavigationItem>
        <NavigationItem link="/login">Log In</NavigationItem>
        <NavigationItem link="/logou">Log In</NavigationItem>
      </li>
    </ul>
  );
};

export default Navigation;