<template>
    <header class="app-bar">
        <h1 class="app-bar__title"><nuxt-link to="/">Catinar</nuxt-link></h1>

        <button class="app-bar__action" @click="logout">Sign out</button>
    </header>
</template>

<script>
    // import { signOut } from '@/services/authService';

    export default {
        name: 'app-bar',
        methods: {
            async logout() {
                await signOut();

                this.$router.replace('/auth');
            },
        }
    }
</script>

<style lang="scss">
    @import "~@/assets/scss/_media-queries";
    @import "~@/assets/scss/_typography";

    .app-bar {
        flex-shrink: 0;
        background-color: #1976D2;
        display: flex;
        align-items: center;
        height: 56px;
        color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .26);
        position: fixed;
        width: 100%;
        z-index: 10;

        @include tablet-landscape-up {
            height: 64px;
        }
    }

    .app-bar__title {
        @include font-title;
        margin-left: 12px;

        a {
            text-decoration: none;
            color: inherit;
        }
    }

    .app-bar__action {
        @include subheading;
        background: transparent;
        border: none;
        border-radius: 2px;
        color: inherit;
        outline: none;
        cursor: pointer;
        text-align: center;
        padding: 0;
        margin: 0 16px 0 auto;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
</style>
