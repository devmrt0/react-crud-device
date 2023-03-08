import { authHeader } from '../helpers/auth_header';
import { checkCookie, setCookie } from '../utils/cookies';
let config = {
  apiUrl: 'http://localhost:9001'
};


export const userService = {
  login,
  logout,
  getAll,
  getById,
  post,
  update,
  delete: _delete
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  }
  return fetch(`${config.apiUrl}/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if(user.token) {
        // store user details and jwt token in local storage to keep user logged in
        setCookie('token', user.token, 10);
        localStorage.setItem('user', JSON.stringify(user));
        
      }
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function post(user) {
  const requestOptions = {
    method: 'POST',
    headers: {...authHeader(), 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  console.log('post');
  return fetch(`${config.apiUrl}/users/post`, requestOptions).then(handleResponse);
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: {...authHeader(), 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.json().then(data => {
    if(!response.ok) {
      if(response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.error) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  })
}




const storage = {
    token: "userToken",
    userInfo: "userInfo",
    userName: "emrah",
    password: "123"
  };
  class User {
    setToken = token => {
      localStorage.setItem(storage.token, token);
    };
    getDataKey = key => {
      return localStorage.getItem(key);
    };
    setUserInfo = info => {
      localStorage.setItem(storage.userInfo, info);
    };
    isLogin() {
      return localStorage.getItem(storage.token) &&
        localStorage.getItem(storage.userInfo)
        ? true
        : false;
    }
  
    loginAttempt = (username, password) => {
      if (storage.userName === username && storage.password === password) {
        return true;
      }
      return false;
    };
  
    clearData() {
      localStorage.removeItem(storage.token);
      localStorage.removeItem(storage.userInfo);
    }
  }
  export default new User();