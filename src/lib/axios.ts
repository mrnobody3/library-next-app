import axios from 'axios';

// export  BASE_URL = 'https://api-express-017d.onrender.com/api';
export const BASE_URL = 'http://localhost:4000/api';
export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
