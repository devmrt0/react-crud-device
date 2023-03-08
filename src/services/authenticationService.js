import axios from 'axios';
import { API_URL } from '../config/config';


export const AuthService = {
  login: function(email, password) {
    return axios.post(API_URL + '/login', { email: email, password: password });
  },
  register: function(data) {
    return axios.post(API_URL + '/register', { data });
  },
  getProfile: function() {
    return axios.get(API_URL + '/profile', { headers: this.authHeader() });
  },
  logout: function () {
    localStorage.removeItem('token');
  },
  getToken: function() {
    return localStorage.getItem('token');
  },
  saveToken: function(token) {
    localStorage.setItem('token', token);
  },
  authHeader: function () {
    return { Authorization: this.getToken() }
  }
}



export const loginUserService = async (request) => {
    const LOGIN_API_ENDPOINT = 'http://localhost:9001/api/v1/login';
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    const response = await fetch(LOGIN_API_ENDPOINT, parameters);
  const json = await response.json();
  return json;
  };