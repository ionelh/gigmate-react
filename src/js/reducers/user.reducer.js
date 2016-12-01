'use strict';

import {SET_USER} from './../actions/user.actions';

const DEFAULT_STATE = {
  name: null
};

const user = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
};

export default user;
