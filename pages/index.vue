<template>
    <main class="home-page">
        <cat-list :cats="cats" />
    </main>
</template>

<script>
    import CatList from '@/components/CatList';
    import { getAllCats } from '@/services/catApi';

    export default {
        components: { CatList },
        head() {
            return {
                title: 'Catinar',
            };
        },
        data() {
            return {
                cats: {},
            };
        },
        async asyncData() {
            const cats = await getAllCats();

            return { cats };
        },
    };
</script>
