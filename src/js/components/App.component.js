'use strict';

import React, {Component, PropTypes} from 'react';
import ROUTES from './../routes/routes';
import {connect} from 'react-redux';
import {setUser} from './../actions/user.actions';

import {Menu} from './Menu.component';

const menuItems = [
  {
    text: 'About',
    route: ROUTES.about
  },
  {
    text: 'Another Route',
    route: ROUTES.anotherRoute
  }
];

export class App extends Component {
  componentWillMount() {
    // simulate some server latency ...
    setTimeout(() => {
      this.props.dispatch(setUser({
        name: 'Joe'
      }));
    }, 1000);
  }
  
  render() {
    return (
      <div className="appWrapper">
        <div className="clearfix">
          <Menu items={menuItems} />
        </div>
        <div>
          {/* this would also work: {this.props.children || <Home/>} */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};

export default connect()(App);
