import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'https://operator-node-app-32192-prod.herokuapp.com';

const { REACT_APP_API_TOKEN } = process.env;

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${REACT_APP_API_TOKEN}`
  },
});

export default class API {
  
  static get(url, params = {}) {
    return instance({
      method: 'GET',
      url,
      params
    })
  }

  static post(url, data = {}, params = {}) {
    return instance({
      method: 'POST',
      url,
      data,
      params
    })
  };

  static put(url, data = {}, params = {}) {
    return instance({
      method: 'PUT',
      url,
      data,
      params
    });
  };

  static delete(url, params = {}, data = {}) {
    return instance({
      method: 'DELETE',
      url,
      data,
      params
    })
  }
};
