<template>
    <div class="app-wrapper">
        <app-bar />

        <div class="main-content-wrapper">
            <div class="main-content">
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
    import AppBar from '@/components/AppBar';

    export default {
        name: 'default-layout',
        components: { AppBar },
    }
</script>

<style lang="scss" src="~/assets/scss/_reset.scss"></style>
<style lang="scss">
    @import "~@/assets/scss/_media-queries";
    @import "~@/assets/scss/_shadows";

    #__nuxt, #__layout { height: 100%; }

    .app-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        background: #f4f4f5;
    }

    .main-content-wrapper {
        margin-top: 56px;
        @include tablet-landscape-up {
            margin-top: 64px;
        }
        transition: padding .28s cubic-bezier(0, 0, 0.3, 1);
    }

    .main-content {
        max-width: 1024px;
        margin: 0 auto;
        padding: 8px 16px;

        @include tablet-landscape-up {
            padding: 16px 32px;
        }

        main {
            @include shadow(2);
            background: #fff;
            padding: 16px;
            border-radius: 2px;
        }
    }
</style>
