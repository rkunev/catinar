<template>
    <main class="home-page">
        <cat-list :cats="cats" :page-size="pageSize" :current-page="catListPage">
            <list-pagination v-if="hasPagination"
                             :on-page-change="changeCurrentPage"
                             :disabled="isPaginationDisabled"
                             :total="totalCats"
                             :page-size="pageSize"
                             :current-page="catListPage" />
        </cat-list>
    </main>
</template>

<script>
    import CatList from '@/components/CatList';
    import ListPagination from '@/components/ListPagination';
    import { mapState } from 'vuex';

    const pageSize = 5;

    export default {
        components: { CatList, ListPagination },
        head() {
            return {
                title: 'Catinar',
            };
        },
        data() {
            return {
                pageSize,
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
            ...mapState(['cats', 'totalCats', 'catListPage']),
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
