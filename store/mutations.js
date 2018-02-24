import {
    UPDATE_APP_BAR_TITLE,
    UPDATE_CATS,
    UPDATE_CATS_TOTAL,
    UPDATE_CAT_LIST_PAGE,
    UPDATE_CAT_TEMPLATE,
    UPDATE_PART_CAT_TEMPLATE,
    UPDATE_CAT_NAME,
    TOGGLE_TOAST,
} from './mutation-types';

export default {
    [UPDATE_APP_BAR_TITLE](state, title) {
        state.appBarTitle = title;
    },
    [UPDATE_CATS](state, cats) {
        state.cats = cats;
    },
    [UPDATE_CATS_TOTAL](state, totalCats) {
        state.totalCats = totalCats;
    },
    [UPDATE_CAT_LIST_PAGE](state, catListPage) {
        state.catListPage = catListPage;
    },
    [UPDATE_CAT_TEMPLATE](state, parts) {
        state.catTemplate = parts;
    },
    [UPDATE_PART_CAT_TEMPLATE](state, { partType, newColor }) {
        state.catTemplate[partType] = newColor;
    },
    [UPDATE_CAT_NAME](state, name) {
        state.catName = name;
    },
    [TOGGLE_TOAST](state, toast) {
        state.toast = toast;
    },
};
