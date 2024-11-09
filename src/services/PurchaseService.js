import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:9090/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getAll() {
    return apiClient.get('/purchase-orders');
  },
  create(data) {
    return apiClient.post('/purchase-order/store', data);
  },
};
