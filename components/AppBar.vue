<template>
    <header class="app-bar">
        <h1 class="app-bar__title">
            <nuxt-link @click.native="scrollToTop" to="/">{{ appBarTitle }}</nuxt-link>
        </h1>

        <div class="app-bar__actions">
            <md-menu v-if="isSortMenuVisible" :items="menuItems" @action="onAction">
                <svg slot="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
            </md-menu>
        </div>
    </header>
</template>

<script>
    import { mapState } from 'vuex';

    import MdMenu from '@/components/MdMenu';
    import MdButton from '@/components/MdButton';

    export default {
        name: 'app-bar',
        components: { MdMenu, MdButton },
        data() {
            return {
                isSortMenuVisible: true,
                menuItems: [
                    { id: 0, disabled: false, text: 'Refresh' },
                    { id: 1, disabled: true, text: 'Settings' },
                    { id: 2, disabled: false, text: 'About' }, // (show a modal with the version number, built with and author)
                    { id: 3, disabled: false, text: 'Send Feedback' }, // (link to github.com/rkunev/catinar/issues)
                ],
            };
        },
        computed: {
            ...mapState(['appBarTitle']),
        },
        methods: {
            onAction({ id }) {
                if (id === 0) {
                    this.$store.dispatch('refreshScreen', this.$route);
                }
            },
            scrollToTop() {
                if (this.$route.name === 'index') {
                    window.scrollTo(0, 0);
                }
            },
        },
    };
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

    .app-bar__actions {
        margin: 0 16px 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }

    .app-bar__action {
        @include subheading;
        background: transparent;
        border: none;
        color: inherit;
        outline: none;
        cursor: pointer;
        text-align: center;
        padding: 0;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
</style>
