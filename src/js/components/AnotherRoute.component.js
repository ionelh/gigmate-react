'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class AnotherRoute extends Component {
  render() {
    return (
      <div>
        <h1>Another Route</h1>
        <p>Just another route.</p>
      </div>
    );
  }
}

export default AnotherRoute;
