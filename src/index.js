'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
import {createStore} from 'redux';

import About from './js/components/About.component';
import Home from './js/components/Home.component';
import AnotherRoute from './js/components/AnotherRoute.component';
import App from './js/components/App.component';
import combinedReducers from './js/reducers/combinedReducers';
import ROUTES from './js/routes/routes';

import './sass/styles.sass';

const store = createStore(combinedReducers);

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={ROUTES.home} component={App}>
        <IndexRoute component={Home} />
        <Route path={ROUTES.about} component={About} />
        <Route path={ROUTES.anotherRoute} component={AnotherRoute} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
