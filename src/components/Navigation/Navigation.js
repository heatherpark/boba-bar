import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { Menu } from 'semantic-ui-react';

const Navigation = props => (
  <Menu secondary>
    <NavigationItem link="/" exact>Drink Customizer</NavigationItem>
    {props.isAuthenticated
      ? <NavigationItem link="/orders">My Orders</NavigationItem>
      : null}
    {props.isAuthenticated
      ? <NavigationItem link="/logout">Log Out</NavigationItem>
      : <NavigationItem link="/login">Log In</NavigationItem>}
  </Menu>
);

export default Navigation;