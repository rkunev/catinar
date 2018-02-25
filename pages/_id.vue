<template>
    <main class="cat-details-page">
        <cat-svg v-bind="catTemplate" class="cat" :editable="true" :update="updateCatTemplate" />
        <cat-name class="cat-details-page__name">{{ name }}</cat-name>
        <cat-form :cat-name="name"
                  :submit="onUpdateCatFormSubmit"
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

    import { updateCat } from '@/services/catApi';

    export default {
        name: 'cat-details-page',
        components: { CatSvg, CatForm, CatName, MdInput },
        head() {
            return {
                title: `Catinar - ${this.$store.state.catName}`,
            };
        },
        async fetch({ store, params, redirect }) {
            try {
                await store.dispatch('updateCatById', params.id);
            } catch (err) {
                redirect('/four-oh-four');
            }
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
            ...mapActions(['randomizeCatTemplate', 'updateCatTemplate']),
            async onUpdateCatFormSubmit() {
                this.isSavingDisabled = true;

                await updateCat(this.$route.params.id, {
                    name: this.name,
                    parts: this.catTemplate,
                });

                this.isSavingDisabled = false;
                this.$store.dispatch('toggleToast', 'Cat updated');

                setTimeout(() => {
                    this.$store.dispatch('toggleToast', '');
                }, 1500);

                this.$router.push('/');
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

        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 400px;
        margin-left: auto !important;
        margin-right: auto !important;
        white-space: nowrap;
    }
</style>
