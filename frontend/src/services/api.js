import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

// Attach token from localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // we saved it in Login.js
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
