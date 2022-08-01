import getConfig from 'next/config';
import Router from 'next/router';

import {fetchWrapper} from 'helpers';

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/admins`;
let userObject = process.browser && JSON.parse(localStorage.getItem('user'));

export const userService = {
  user: userObject,
  get userValue() {
    return userObject;
  },
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  return fetchWrapper.post(`${baseUrl}/authenticate`, {username, password})
    .then(user => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userObject = user;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('user');
  userObject = null;
  Router.push('/login');
}

function register(user) {
  return fetchWrapper.post(`${baseUrl}/register`, user);
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
    .then(x => {
      // update stored user if the logged in user updated their own record
      if (id === userObject.id) {
        // update local storage
        const user = {...userObject, ...params};
        localStorage.setItem('user', JSON.stringify(user));
      }
      return x;
    });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
