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
                    ear1left: '',
                    ear1right: '',
                    ear2right: '',
                    ear2left: '',
                    head: '',
                    hair: '',
                    eyeright: '',
                    eyeleft: '',
                    mouth: '',
                    lips: '',
                    legright: '',
                    pawright: '',
                    legbackright: '',
                    pawbackright: '',
                    legbackleft: '',
                    pawbackleft: '',
                    legleft: '',
                    pawleft: '',
                    tail: '',
                    legrightshadow: '',
                    tailshadow: '',
                    body: '',
                    chest: '',
                    collar: '',
                    tailtop: '',
                    nose: '',
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
