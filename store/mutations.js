export default {
    UPDATE_CATS(state, cats) {
        state.cats = cats;
    },
    UPDATE_CATS_TOTAL(state, totalCats) {
        state.totalCats = totalCats;
    },
    UPDATE_CAT_LIST_PAGE(state, catListPage) {
        state.catListPage = catListPage;
    },
    UPDATE_CAT_TEMPLATE(state, parts) {
        state.catTemplate = parts;
    },
    UPDATE_PART_CAT_TEMPLATE(state, { partType, newColor }) {
        state.catTemplate[partType] = newColor;
    },
    UPDATE_CAT_NAME(state, name) {
        state.catName = name;
    },
};
