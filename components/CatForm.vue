<template>
    <form class="cat-form" @submit.prevent="submit">
        <md-button @click="randomize" accent class="cat-form__randomize">Randomize</md-button>
        <slot />
        <md-button raised to="/" class="cat-form__cancel">Cancel</md-button>
        <md-button :disabled="isSavingDisabled" primary type="submit" class="cat-form__save">Save</md-button>
    </form>
</template>

<script>
    import MdButton from '@/components/MdButton';

    export default {
        name: 'cat-form',
        components: { MdButton },
        props: ['randomize', 'isSavingDisabled', 'submit'],
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
