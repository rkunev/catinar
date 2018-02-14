<template>
    <main class="cat-details-page">
        <cat-svg v-bind="parts" class="cat" />
        <div>{{ $route.params.id }}</div>
        <cat-form class="create-cat-form--with-divider" @submit="logForm"></cat-form>
    </main>
</template>

<script>
    import CatSvg from '@/components/CatSvg';
    import CatForm from '@/components/CatForm';

    export default {
        name: 'cat-details-page',
        components: { CatSvg, CatForm },
        data() {
            return {
                parts: {
                    bg: '',
                    chest: '',
                    collar: '',
                    eyes: '',
                    hair: '',
                    main: '',
                    mouth: '',
                    noseAndLips: '',
                    pawright: '',
                    pawbackright: '',
                    pawbackleft: '',
                    pawleft: '',
                    tailtop: '',
                },
            };
        },
        methods: {
            logForm() {
                console.log('implement editing cat');
            }
        }
    };
</script>

<style lang="scss">
    .cat-details-page {
        text-align: center;

        .cat {
            max-width: 400px;
        }
    }
</style>
