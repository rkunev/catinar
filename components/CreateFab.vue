<template>
    <nuxt-link to="/create" class="fab">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </nuxt-link>
</template>

<script>
    export default {
        name: 'create-fab',
    };
</script>

<style lang="scss">
    @import "~@/assets/scss/transition-settings";

    .fab {
        align-items: center;
        background: #1975d3;
        border-radius: 50%;
        border: 0;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        color: #fff;
        cursor: pointer;
        display: flex;
        height: 56px;
        justify-content: center;
        padding: 0;
        text-decoration: none;
        transition: box-shadow .12s $transition-timing-function-sharp, transform .18s $transition-timing-function-sharp;
        width: 56px;
        margin-left: auto;
        right: 24px;
        bottom: 24px;
        position: fixed;

        &:focus {
            box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
        }
    }

    @media only screen and (max-width: 600px) {
        .is-toast-visible {
            .fab {
                transform: translateY(-41px);
            }
        }
    }
</style>
