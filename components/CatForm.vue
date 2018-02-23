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
    @import '~@/assets/scss/media-queries';

    .cat-form {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;

        > .md-input {
            margin-top: 32px;
            margin-bottom: 16px;
            width: 100%;
            order: -1;

            @include tablet-portrait-up {
                order: 0;
                width: auto;
                margin-top: 1.5em;
                margin-bottom: .5em;
            }
        }
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
