import axios from 'axios';

const api = axios.create({
    baseURL: 'https://catinar-app.firebaseio.com',
    // "Mixing querying parameters and ETag requests is not supported"
    // headers: {
    //     'X-Firebase-ETag': 'true'
    // },
});
const suffix = '.json';

export const create = (path, data = {}) => api.post(path + suffix, data).then(r => r.data);
export const get = (path, params = {}) => api.get(path + suffix, { params }).then(r => r.data);
export const put = (path, data = {}) => api.put(path + suffix, data).then(r => r.data);
