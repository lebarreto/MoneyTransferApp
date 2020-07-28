import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/juliomerisio/currency-json-server/currencies',
});

export default api;
