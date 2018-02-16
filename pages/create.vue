<template>
    <main class="create-cat-page">
        <cat-svg class="cat" :editable="true" v-bind="parts" @update="updatePart" />
        <cat-form class="cat-form--with-divider" @submit="onCreateCatFormSubmit" :randomize="randomizeCat" />
    </main>
</template>

<script>
    import CatSvg from '@/components/CatSvg';
    import CatForm from '@/components/CatForm';
    import CatName from '@/components/CatName';

    import { generateRandomCat, getPermittedColorsForPart } from '@/services/catRandomizer';
    import { createCat } from '@/services/catApi';
    import { getRandomElFromArray } from '@/services/utils';

    export default {
        name: 'create-cat-page',
        components: { CatSvg, CatForm, CatName },
        head() {
            return {
                title: 'Catinar - New Cat',
            };
        },
        data() {
            return {
                name: '',
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
                }
            };
        },
        methods: {
            async onCreateCatFormSubmit(name) {
                console.log('disable saving while creating the cat...');

                const res = await createCat({
                    name,
                    parts: this.parts,
                });

                console.log('show a success toast and redirect to home page', res);
                this.$router.push('/');
            },
            randomizeCat() {
                this.parts = generateRandomCat();
            },
            updatePart(part) {
                const availableColors = getPermittedColorsForPart({
                    color: part.color,
                    part: part.type,
                    allParts: this.parts
                });
                const newColor = getRandomElFromArray(availableColors);

                if (part.type in this.parts) {
                    this.parts[part.type] = newColor;
                }
            },
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
