import {
    UPDATE_APP_BAR_TITLE,
    UPDATE_CATS,
    UPDATE_CATS_TOTAL,
    UPDATE_CAT_LIST_PAGE,
    UPDATE_CAT_TEMPLATE,
    UPDATE_PART_CAT_TEMPLATE,
    UPDATE_CAT_NAME,
} from './mutation-types';

import { getCats, getCatsCount, getCat } from '@/services/catApi';
import { generateRandomCat, getPermittedColorsForPart } from '@/services/catRandomizer';
import { getRandomElFromArray } from '@/services/utils';
import { getDefaultCat } from '@/services/catRandomizer';

export default {
    updateAppBarTitle({ commit }, title) {
        commit(UPDATE_APP_BAR_TITLE, title);
    },
    async updateCats({ commit }, params) {
        const cats = await getCats(params);

        commit(UPDATE_CATS, cats);
    },
    async updateCatListPage({ commit }, newPage) {
        commit(UPDATE_CAT_LIST_PAGE, newPage);
    },
    async updateCatsTotal({ commit }) {
        const total = await getCatsCount();

        commit(UPDATE_CATS_TOTAL, total);
    },
    async refreshScreen({ commit, dispatch }, route) {
        if (route.name === 'index') {
            await Promise.all([
                dispatch('updateCats',),
                dispatch('updateCatsTotal'),
            ]);

            dispatch('updateCatListPage', 1);
        } else if (route.name === 'create') {
            dispatch('resetCatTemplate');
            dispatch('resetCatName');
        } else if (route.name === 'id') {
            dispatch('updateCatById', route.params.id);
        } else {
            console.warn('Unknown route, bailing out from refresh', route.name);
        }
    },
    updateCatTemplate({ commit, state }, part) {
        const availableColors = getPermittedColorsForPart({
            color: part.color,
            part: part.type,
            allParts: state.catTemplate,
        });
        const newColor = getRandomElFromArray(availableColors);

        if (part.type in state.catTemplate) {
            commit(UPDATE_PART_CAT_TEMPLATE, { partType: part.type, newColor });
        }
    },
    randomizeCatTemplate({ commit }) {
        commit(UPDATE_CAT_TEMPLATE, generateRandomCat());
    },
    resetCatTemplate({ commit }) {
        commit(UPDATE_CAT_TEMPLATE, getDefaultCat());
    },
    resetCatName({ commit }) {
        commit(UPDATE_CAT_NAME, '');
    },
    async updateCatById({ commit, dispatch }, id) {
        const cat = await getCat(id);

        commit(UPDATE_CAT_TEMPLATE, cat.parts);
        commit(UPDATE_CAT_NAME, cat.name);
        commit(UPDATE_APP_BAR_TITLE, `Catinar - ${cat.name}`);
    },
    updateCatName({ commit }, name) {
        commit(UPDATE_CAT_NAME, name);
    },
};
