import { create, get, put } from '@/services/api';
import { mapFirebaseCollectionToArray } from '@/services/utils';

const catsPath = 'users/me/cats';

export const createCat = ({ name, parts }) => create(catsPath, { name: name.slice(0, 25), parts });

export const getCat = id => get(catsPath + '/' + id);

export const updateCat = (id, { name, parts }) => put(catsPath + '/' + id, { name: name.slice(0, 25), parts });

export const getCatsCount = () => get(catsPath, { shallow: true }).then(cats => Object.keys(cats).length);

export const getCats = (config = {}) => {
    const pageSize = config.pageSize || 5;
    const limitToFirst = (config.startAt || config.endAt) ? pageSize + 1 : pageSize;
    const startAt = config.startAt ? `"${config.startAt}"` : null;
    const endAt = config.endAt ? `"${config.endAt}"` : null;

    return get(catsPath, { orderBy: '"$key"', limitToFirst, endAt, startAt })
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
