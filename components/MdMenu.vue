<template>
    <header class="md-menu">
        <md-button ref="btn" :disabled="disabled" @click.stop="openMenu" icon light-waves class="md-menu__button">
            <slot name="icon" />
        </md-button>

        <transition name="md-menu">
            <div class="md-menu__items" v-show="isMenuVisible">
                <div class="md-menu__item" v-for="item in items" :key="item.id" :class="{ 'md-menu__item--disabled': item.disabled }">
                    <md-button :disabled="item.disabled" @click.stop="triggerAction(item)">{{ item.text }}</md-button>
                </div>
            </div>
        </transition>
    </header>
</template>

<script>
    import MdButton from '@/components/MdButton';

    export default {
        name: 'app-bar',
        props: ['items', 'disabled'],
        components: { MdButton },
        data() {
            return {
                isMenuVisible: false,
            };
        },
        mounted() {
            window.addEventListener('click', this.closeMenu.bind(this));
        },
        destroyed() {
            window.removeEventListener('click', this.closeMenu.bind(this));
        },
        methods: {
            openMenu() {
                this.isMenuVisible = true;
                this.$refs.btn.$el.focus()
            },
            closeMenu(e) {
                if (this.isMenuVisible && !this.$el.contains(e.target)) {
                    this.isMenuVisible = false;
                }
            },
            triggerAction(item) {
                this.isMenuVisible = false;
                this.$emit('action', item);
            },
        },
    };
</script>

<style lang="scss">
    @import '~@/assets/scss/media-queries';
    @import '~@/assets/scss/transition-settings';
    @import '~@/assets/scss/shadows';

    .md-menu {
        position: relative;
    }

    .md-menu__button svg {
        fill: currentColor;
        vertical-align: middle;
    }

    .md-menu__items {
        @include shadow(8);
        position: absolute;
        right: 0;
        top: 0;
        background-color: #fff;
        min-width: 180px;
        z-index: 11;
        border-radius: 2px;
        padding: 8px 0;
        transform-origin: top right;
    }

    .md-menu-enter-active {
        animation: md-menu-show $transition-duration-quick $transition-timing-function-deceleration;
    }

    .md-menu-leave-active {
        animation: md-menu-hide $transition-duration-quick $transition-timing-function-acceleration;
    }

    @keyframes md-menu-show {
        0% {
            transform: scale(0.3, 0.3);
            opacity: 0;
        }
        30% {
            opacity: 0.1;
            transform: scale(0.9, 0.3);
        }
        100% {
            opacity: 1;
            transform: scale(1, 1);
        }
    }

    @keyframes md-menu-hide {
        0% {
            transform: scale(1, 1);
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1, 0.9);
        }
    }

    .md-menu__item {
        color: #000;

        &:hover:not(.md-menu__item--disabled) {
            background: rgba(0, 0, 0, .05);
        }

        .md-button {
            $desktop-height: 32px;
            $mobile-height: 48px;

            width: 100%;
            text-align: left;
            text-transform: none;
            font-size: 15px;
            line-height: $desktop-height;
            height: $desktop-height;

            > span {
                min-height: $desktop-height;
                padding: 0 0 0 24px;
            }

            @include phone-only {
                font-size: 16px;
                line-height: $mobile-height;
                height: $mobile-height;

                > span {
                    padding: 0 0 0 16px;
                    min-height: $mobile-height;
                }
            }
        }
    }
</style>
