<template>
    <main class="colorful-cat-page">
        <colorful-cat v-bind="parts" class="cat" />
        <div>{{ $route.params.id }}</div>
        <cat-form class="create-cat-form--with-divider" @submit="logForm"></cat-form>
    </main>
</template>

<script>
    import ColorfulCat from '@/components/ColorfulCat';
    import CatForm from '@/components/CatForm';

    export default {
        name: 'colorful-cat-page',
        components: { ColorfulCat, CatForm },
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
    .colorful-cat-page {
        text-align: center;

        .cat {
            max-width: 400px;
        }
    }
</style>
