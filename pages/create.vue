<template>
    <main class="create-cat-page">
        <colorful-cat class="cat" :editable="true" />

        <hr>

        <cat-form @submit="logForm"></cat-form>
    </main>
</template>

<script>
    import ColorfulCat from '@/components/ColorfulCat';
    import CatForm from '@/components/CatForm';

    export default {
        name: 'create-cat-page',
        components: { ColorfulCat, CatForm },
        head() {
            return {
                title: 'Catinar - New Cat',
            };
        },
        data() {
            return {
                catName: '',
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
            logForm(name) {
                console.log('form', name);
            }
        },
    };
</script>

<style lang="scss">
    .create-cat-page {
        text-align: center;

        .cat {
            max-width: 400px;
        }
    }
</style>
