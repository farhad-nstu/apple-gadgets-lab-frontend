import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:9090/api/product',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getAll() {
    return apiClient.get('/list');
  },
  get(id) {
    return apiClient.get(`/${id}`);
  },
  create(data) {
    return apiClient.post('/store', data);
  },
  update(id, data) {
    return apiClient.put(`/update/${id}`, data);
  },
  delete(id) {
    return apiClient.delete(`/delete/${id}`);
  }
};
