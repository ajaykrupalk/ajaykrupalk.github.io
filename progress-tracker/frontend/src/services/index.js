import api from './api';

const Row = {
  query() {
    return api.get('api/dashboard');
  },
  get(id) {
    return api.get(`api/dashboard/${id}`);
  },
  create(row) {
    return api.post('api/dashboard', row);
  },
  update(id, row) {
    return api.put(`api/dashboard/${id}`, row);
  },
  delete(id) {
    return api.delete(`api/dashboard/${id}`);
  },
};

export { Row };
