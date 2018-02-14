<template>
    <main class="create-cat-page">
        <cat-svg class="cat" :editable="true" v-bind="parts" @update="updatePart" />
        <h2 class="cat-name">Cat #1</h2>
        <cat-form class="cat-form--with-divider" @submit="logForm" :randomize="randomizeCat"></cat-form>
    </main>
</template>

<script>
    import CatSvg from '@/components/CatSvg';
    import CatForm from '@/components/CatForm';

    import { generateRandomCat, getPermittedColorsForPart } from '@/services/catRandomizer';
    import { getRandomElFromArray } from '@/services/utils';

    export default {
        name: 'create-cat-page',
        components: { CatSvg, CatForm },
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
            logForm(name) {
                console.log('form', name);
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

        .cat-name {
            margin: 16px 0;
        }
    }
</style>
