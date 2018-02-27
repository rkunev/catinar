<template>
    <main class="home-page">
        <cat-list v-if="cats.length" :cats="cats" :page-size="pageSize" :current-page="catListPage">
            <list-pagination v-if="hasPagination"
                             :on-page-change="changeCurrentPage"
                             :disabled="isPaginationDisabled"
                             :total="totalCats"
                             :page-size="pageSize"
                             :current-page="catListPage" />
        </cat-list>
        <home-empty-state v-else :cat-template="catTemplate" />
    </main>
</template>

<script>
    import { mapState } from 'vuex';

    import CatList from '@/components/CatList';
    import ListPagination from '@/components/ListPagination';
    import HomeEmptyState from '@/components/HomeEmptyState';

    export default {
        components: { CatList, ListPagination, HomeEmptyState },
        head() {
            return {
                title: 'Catinar',
            };
        },
        data() {
            return {
                pageSize: 50,
                isPaginationDisabled: false,
            };
        },
        fetch({ store }) {
            store.dispatch('updateAppBarTitle', 'Catinar');

            return Promise.all([
                store.dispatch('updateCats'),
                store.dispatch('updateCatsTotal'),
            ]);
        },
        computed: {
            ...mapState(['cats', 'totalCats', 'catListPage', 'catTemplate']),
            hasPagination() {
                return this.cats.length < this.totalCats;
            },
        },
        methods: {
            async changeCurrentPage(page) {
                let params = {
                    startAt: page > 0 ? this.cats[this.cats.length - 1].id : null,
                    endAt: page < 0 ? this.cats[0].id : null,
                };

                this.isPaginationDisabled = true;

                await this.$store.dispatch('updateCats', params);

                this.$store.dispatch('updateCatListPage', this.catListPage + page);

                this.isPaginationDisabled = false;
            },
        },
    };
</script>
