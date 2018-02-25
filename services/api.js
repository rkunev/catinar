import axios from 'axios';

const api = axios.create({
    baseURL: 'https://catinar-app.firebaseio.com',
});
const suffix = '.json';

const unwrapData = r => r.data;

export const create = (path, data = {}) => api.post(path + suffix, data).then(unwrapData);
export const get = (path, params = {}) => api.get(path + suffix, { params }).then(unwrapData);
export const put = (path, data = {}) => api.put(path + suffix, data).then(unwrapData);
