import axios from 'axios';
export default axios.create({
  baseURL: `${process.env.PROD_URL}/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
