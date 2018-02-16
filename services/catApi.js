import { create, get, put } from '@/services/api';

const catsPath = 'users/me/cats';

export const createCat = cat => create('users/me/cats', cat);
export const getCat = id => get(`users/me/cats/${id}`);
export const updateCat = (id, cat) => put(`users/me/cats/${id}`, cat);
export const getAllCats = () => get(`users/me/cats`);
