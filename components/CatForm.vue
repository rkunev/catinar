<template>
    <form class="cat-form" @submit.prevent="logForm">
        <md-button @click="randomize" accent class="cat-form__randomize">Randomize</md-button>
        <md-input v-model="name" label="Cat Name" class="cat-form__name" />

        <md-button raised to="/" class="cat-form__cancel">Cancel</md-button>
        <md-button primary type="submit" class="cat-form__save">Save</md-button>
    </form>
</template>

<script>
    import MdButton from '@/components/MdButton';
    import MdInput from '@/components/MdInput';

    export default {
        name: 'cat-form',
        components: { MdButton, MdInput },
        props: ['catName', 'randomize'],
        data() {
            return { name: this.catName || '' }
        },
        watch: {
            catName: function(val) {
                this.name = val;
            },
        },
        methods: {
            logForm() {
                this.$emit('submit', this.name);
            },
        },
    };
</script>

<style lang="scss">
    .cat-form {
        display: flex;
        align-items: baseline;
    }

    .cat-form--with-divider {
        margin-top: 16px;
        border-top: 1px solid #ccc;
    }

    .cat-form__randomize {
        margin-right: 16px;
    }

    .cat-form__cancel {
        margin-left: auto;
        margin-right: 16px;
    }

    .cat-form__save {
        margin-right: 0;
    }
</style>
