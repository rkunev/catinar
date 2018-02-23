import { getDefaultCat } from '@/services/catRandomizer';

export default {
    cats: [],
    totalCats: 0,
    catListPage: 1,
    catTemplate: getDefaultCat(),
    catName: '',
    appBarTitle: 'Catinar',
}
