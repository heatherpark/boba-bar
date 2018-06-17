import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

const NavigationItem = props => {
  return (
    <Menu.Item>
      <NavLink
        to={props.link}
        exact={props.exact}>
        {props.children}
      </NavLink>
    </Menu.Item>
  );
};

export default NavigationItem;