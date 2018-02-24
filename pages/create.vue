<template>
    <main class="create-cat-page">
        <cat-svg class="cat" :editable="true" v-bind="catTemplate" :update="updateCatTemplate" />
        <span class="capture-chrome-focus">&nbsp;</span>
        <cat-form :is-saving-disabled="isSavingDisabled || !name.length"
                  :submit="onCreateCatFormSubmit"
                  :randomize="randomizeCatTemplate">
            <md-input v-model="name" label="Cat Name" />
        </cat-form>
    </main>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

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
            ...mapActions(['randomizeCatTemplate', 'updateCatTemplate']),
            async onCreateCatFormSubmit() {
                this.isSavingDisabled = true;

                await createCat({
                    name: this.name,
                    parts: this.catTemplate,
                });

                this.isSavingDisabled = false;
                this.$router.push('/');

                this.$store.dispatch('toggleToast', 'Cat saved');

                setTimeout(() => {
                    this.$store.dispatch('toggleToast', '');
                }, 1500);
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
