import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin":"*",
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'authentication':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VpZCI6IklSVDI4MTIzNDU2IiwibGFuZ3VhZ2UiOiJ0ciIsImlhdCI6MTY3MjkwODUwOSwiZXhwIjoxNjcyOTk0OTA5fQ.OrpDwxohPy7FvI8H93DWt4CNpz-7vkDt4d05Z_aYl7U",
  }
});


export const API_URL = "http://localhost:9001";