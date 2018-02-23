<template>
    <main class="create-cat-page">
        <cat-svg class="cat" :editable="true" v-bind="catTemplate" :update="updatePart" />
        <span class="capture-chrome-focus">&nbsp;</span>
        <cat-form class="cat-form--with-divider"
                  :is-saving-disabled="isSavingDisabled || !name.length"
                  :submit="onCreateCatFormSubmit"
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

    import { createCat } from '@/services/catApi';

    export default {
        name: 'create-cat-page',
        components: { CatSvg, CatForm, CatName, MdInput },
        head() {
            return {
                title: 'Catinar - New Cat',
            };
        },
        data() {
            return {
                isSavingDisabled: false,
            };
        },
        fetch({ store }) {
            store.dispatch('updateAppBarTitle', 'Catinar - New Cat');
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
        created() {
            this.$store.dispatch('resetCatTemplate');
            this.$store.dispatch('resetCatName');
        },
        methods: {
            async onCreateCatFormSubmit() {
                this.isSavingDisabled = true;

                await createCat({
                    name: this.name,
                    parts: this.catTemplate,
                });

                this.isSavingDisabled = false;
                this.$router.push('/');

                console.log('show a success toast and redirect to home page');
            },
            randomizeCat() {
                this.$store.dispatch('randomizeCatTemplate');
            },
            updatePart(part) {
                this.$store.dispatch('updateCatTemplate', part);
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

        // @hack Double-clicking on the cat focuses the first text input in the form below
        .capture-chrome-focus {
            font-size: 0;
        }
    }
</style>
