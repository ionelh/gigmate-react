'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import ROUTES from './../routes/routes';

export class Menu extends Component {
  render() {
    const menuItems = this.props.items.map((item, index) => (
      <Link to={item.route} activeClassName="active" key={index}>{item.text}</Link>
    ));

    return (
      <div className="menu">
        <Link to={ROUTES.home} activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
        {menuItems}
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired
};
