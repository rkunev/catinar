<template>
    <form class="create-cat-form" @submit.prevent="logForm">
        <button type="button" class="create-cat-form__randomize">Randomize</button>

        <input v-model="name" title="Cat Name" type="text" placeholder="Tom" class="create-cat-form__name">

        <nuxt-link to="/" class="create-cat-form__cancel">Cancel</nuxt-link>

        <button type="submit" class="create-cat-form__save">Save</button>
    </form>
</template>

<script>
    export default {
        name: 'create-cat-form',
        props: ['catName'],
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
    .create-cat-form {
        display: flex;
        align-items: center;
        margin-top: 12px;
        margin-bottom: 12px;
    }

    .create-cat-form__cancel {
        margin-left: auto;
        margin-right: 12px;
    }

    .create-cat-form__save {
        margin-right: 0;
    }
</style>
