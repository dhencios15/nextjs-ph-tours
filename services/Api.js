import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production'
    ? process.env.PROD_URL
    : process.env.BASE_URL;

export default axios.create({
  baseURL: `${URL}/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
