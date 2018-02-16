<template>
    <main class="cat-details-page">
        <cat-svg v-bind="parts" class="cat" />
        <cat-name>{{ name }}</cat-name>
        <cat-form class="cat-form--with-divider" :cat-name="name" @submit="onUpdateCatFormSubmit" :randomize="randomizeCat"></cat-form>
    </main>
</template>

<script>
    import CatSvg from '@/components/CatSvg';
    import CatForm from '@/components/CatForm';
    import CatName from '@/components/CatName';

    import { getCat, updateCat } from '@/services/catApi';

    const getDefaultData = () => ({
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
        },
    })

    export default {
        name: 'cat-details-page',
        components: { CatSvg, CatForm, CatName },
        data() {
            return getDefaultData();
        },
        async asyncData({ params }) {
            const res = await getCat(params.id);

            if (res) {
                return res;
            } else {
                return getDefaultData();
            }
        },
        methods: {
            randomizeCat() {
                this.parts = generateRandomCat();
            },
            async onUpdateCatFormSubmit(name) {
                console.log('disable saving while updating the cat...');

                const res = await updateCat(this.$route.params.id, {
                    name,
                    parts: this.parts,
                });

                console.log('show a success toast and redirect to home page', res);
                this.$router.push('/');
            },
        },
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
