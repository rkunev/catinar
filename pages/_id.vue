<template>
    <main class="cat-details-page">
        <cat-svg v-bind="catTemplate" class="cat" :editable="true" :update="updatePart" />
        <cat-name class="cat-details-page__name">{{ name }}</cat-name>
        <cat-form class="cat-form--with-divider"
                  :cat-name="name"
                  :submit="onUpdateCatFormSubmit"
                  :randomize="randomizeCat">
            <md-input v-model="name" label="Cat Name" />
        </cat-form>
    </main>
</template>

<script>
    import { mapState } from 'vuex';

    import CatSvg from '@/components/CatSvg';
    import CatForm from '@/components/CatForm';
    import CatName from '@/components/CatName';
    import MdInput from '@/components/MdInput';

    import { updateCat } from '@/services/catApi';

    export default {
        name: 'cat-details-page',
        components: { CatSvg, CatForm, CatName, MdInput },
        head() {
            return {
                title: `Catinar - ${this.$store.state.catName}`,
            };
        },
        fetch({ store, params }) {
            return store.dispatch('updateCatById', params.id)
        },
        data() {
            return {
                isSavingDisabled: false,
            }
        },
        computed: {
            ...mapState(['catTemplate']),
            name: {
                get() {
                    return this.$store.state.catName;
                },
                set(name) {
                    this.$store.dispatch('updateCatName', name);
                },
            },
        },
        methods: {
            randomizeCat() {
                this.$store.dispatch('randomizeCatTemplate');
            },
            async onUpdateCatFormSubmit() {
                this.isSavingDisabled = true;

                await updateCat(this.$route.params.id, {
                    name: this.name,
                    parts: this.catTemplate,
                });

                this.isSavingDisabled = false;
                this.$router.push('/');

                console.log('show a success toast and redirect to home page');
            },
            updatePart(part) {
                this.$store.dispatch('updateCatTemplate', part);
            },
        },
    };
</script>

<style lang="scss">
    @import '~@/assets/scss/typography';

    .cat-details-page {
        text-align: center;

        .cat {
            max-width: 400px;
        }
    }

    .cat-details-page__name {
        @include font-headline;
    }
</style>
