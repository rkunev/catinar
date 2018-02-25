<template>
    <div class="app-wrapper">
        <app-bar />

        <div class="main-content-wrapper" :class="{ 'is-toast-visible': $store.state.toast }">
            <div class="main-content">
                <nuxt />
                <create-fab />
                <app-footer />
            </div>
        </div>

        <div class="floating-actions">
            <md-toast />
        </div>
    </div>
</template>

<script>
    import AppBar from '@/components/AppBar';
    import CreateFab from '@/components/CreateFab';
    import MdToast from '@/components/MdToast';
    import AppFooter from '@/components/AppFooter';

    export default {
        name: 'default-layout',
        components: { AppBar, CreateFab, MdToast, AppFooter },
    };
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

        @media (max-width: 360px) {
            padding-left: 8px;
            padding-right: 8px;
        }

        main {
            @include shadow(2);
            background: #fff;
            padding: 16px;
            border-radius: 2px;
        }
    }

    .floating-actions {
        position: relative;
    }

    $page-enter-animation-duration: .4s;
    $page-leave-animation-duration: .2s;

    .page-enter-active ~ .fab {
        animation: fab-in cubic-bezier(.4, 0, .2, 1) $page-enter-animation-duration;
    }

    .home-page.page-leave-active ~ .fab {
        animation: fab-out cubic-bezier(.4, 0, .2, 1) $page-leave-animation-duration;
    }

    main:not(.home-page) ~ .fab {
        visibility: hidden;
        pointer-events: none;
    }

    .page-enter-active ~ .app-footer,
    .page-enter-active {
      animation: $page-enter-animation-duration cubic-bezier(.4, 0, .2, 1) page-in;
    }

    .page-leave-active ~ .app-footer,
    .page-leave-active {
      animation: $page-leave-animation-duration cubic-bezier(.4, 0, .2, 1) page-out;
    }

    @keyframes page-in {
      0% { transform: translateY(30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes page-out {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(30px); opacity: 0; }
    }

    @keyframes fab-in {
      0% { transform: scale(0) rotate(-45deg); opacity: 0; }
      100% { transform: scale(1) rotate(0); opacity: 1; }
    }

    @keyframes fab-out {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(0); opacity: 0; }
    }
</style>
