'use strict';

export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  name: user.name
});
