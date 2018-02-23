import { create, get, put } from '@/services/api';
import { mapFirebaseCollectionToArray } from '@/services/utils';

const catsPath = 'users/me/cats';

export const createCat = cat => create('users/me/cats', cat);

export const getCat = id => get(`users/me/cats/${id}`);

export const updateCat = (id, cat) => put(`users/me/cats/${id}`, cat);

export const getAllCats = () => get(`users/me/cats`);

export const getCatsCount = () => get(`users/me/cats`, { shallow: true }).then(cats => Object.keys(cats).length);

export const getCats = (config = {}) => {
    const pageSize = config.pageSize || 5;
    const limitToFirst = (config.startAt || config.endAt) ? pageSize + 1 : pageSize;
    const startAt = config.startAt ? `"${config.startAt}"` : null;
    const endAt = config.endAt ? `"${config.endAt}"` : null;

    return get(`users/me/cats`, { orderBy: '"$key"', limitToFirst, endAt, startAt })
        .then(mapFirebaseCollectionToArray)
        .then(cats => {
            if (config.startAt || config.endAt) {
                // page change (prev or next)
                return cats.filter(c => c.id !== (config.startAt || config.endAt));
            } else {
                // initial page
                return cats;
            }
        });
};
