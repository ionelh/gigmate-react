'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Hi {this.props.user.name || '...'}!</h2>
        <small>(Sorry if you name is not really "Joe")</small>
        <p>This is just another react boilerplate!</p>
        <p>It uses react, react-redux, react-router and other development tools to get you going with a single page web app. These components, actions and reducers are here just to serve as examples, get rid of them and start building your own thing! See the readme file for more details.</p>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect((state) => ({
  user: state.user
}))(Home);
