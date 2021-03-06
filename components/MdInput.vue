<template>
    <span class="md-input" :class="{ 'active': value.length || placeholder.length }">
        <input class="md-input__input"
               type="text"
               :id="uid"
               :disabled="disabled"
               :readonly="readonly"
               :value="value"
               :placeholder="placeholder"
               @input="updateValue($event.target.value)">

        <label class="md-input__label" :for="uid">{{ label }}</label>

        <span class="md-input__focus-underline"></span>
    </span>
</template>

<script>
    export default {
        name: 'md-input',
        data() {
            return {
                uid: 'md-input-' + (this.id || Math.random() * 10000 | 0)
            }
        },
        props: {
            value: { type: String, default: '' },
            label: { type: String, default: '' },
            id: { type: String, default: '' },
            placeholder: { type: String, default: '' },
            disabled: { type: Boolean, default: false },
            readonly: { type: Boolean, default: false },
        },
        methods: {
            updateValue(value) {
                this.$emit('input', value);
            },
        },
    };
</script>

<style lang="scss">
    @import '~assets/scss/_palette';
    @import '~assets/scss/_transition-settings';
    @import '~assets/scss/_typography';

    @mixin md-input__label--float {
        user-select: auto;
        font-size: .75em;
        transform: translateY(-130%);
    }

    @mixin md-input__input--reset-placeholder-color {
        color: rgba(0, 0, 0, .38);
        text-shadow: none;
        -webkit-text-fill-color: initial;
    }

    .md-input {
        display: inline-block;
        position: relative;
        margin-top: 1.5em;
        margin-bottom: .5em;
    }

    .md-input__input {
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid #ccc;
        outline: none;
        height: 2em;
        width: 100%;
        font-size: 1em;
        margin: 0;
        padding: 0;
        caret-color: $primary-color; // FF 53 and Chrome 58
        color: $primary-color;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, .87);
        -webkit-text-fill-color: transparent;
        position: relative;
        z-index: 1;

        &:disabled {
            cursor: not-allowed;

            ~ .md-input__label { cursor: not-allowed }
        }

        &:disabled,
        &[readonly] {
            color: rgba(0, 0, 0, .38);
            border-bottom: 1px dotted rgba(0, 0, 0, .38);

            ~ .md-input__label { color: rgba(0, 0, 0, .38) }
        }

        &:focus:not([readonly]) {
            ~ .md-input__label {
                @include md-input__label--float;
                color: $primary-color;
            }

            ~ .md-input__focus-underline {
                transform: none;
                transition: transform .2s;
            }
        }

        &::-webkit-input-placeholder { @include md-input__input--reset-placeholder-color; }
        &:-moz-placeholder           { @include md-input__input--reset-placeholder-color; }
        &::-moz-placeholder          { @include md-input__input--reset-placeholder-color; }
        &:-ms-input-placeholder      { @include md-input__input--reset-placeholder-color; }
    }

    .md-input__label {
        color: rgba(0, 0, 0, .38);
        position: absolute;
        top: 0.5em;
        left: 0;
        font-size: $subheading-size;
        cursor: text;
        transition-property: transform, font, color;
        transition-duration: .2s;
        transition-timing-function: $transition-timing-function-standard;
        user-select: none;
    }

    .md-input.active .md-input__label {
        @include md-input__label--float;
    }

    .md-input:hover .md-input__input:not([disabled]):not([readonly]):not(:focus) ~ .md-input__label {
        color: rgba(0, 0, 0, .54);
    }

    .md-input__focus-underline {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 2px solid $primary-color;
        transform: scale3d(0, 1, 1);
        will-change: transform;
    }
</style>
