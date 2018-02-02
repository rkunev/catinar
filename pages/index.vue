<template>
    <main class="home-page">
        <cat-list :cats="cats" />
    </main>
</template>

<script>
    import CatList from '@/components/CatList';

    export default {
        components: { CatList },
        head() {
            return {
                title: 'Catinar',
            };
        },
        data() {
            return {
                cats: [],
            };
        },
    };
</script>

<style lang="scss">
    @import "~@/assets/scss/_media-queries";

    .home-page {
    }
</style>
