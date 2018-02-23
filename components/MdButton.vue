<template>
    <component :is="buttonType" class="md-button" v-bind="$props" @click="ripple">
        <span class="waves-effect" :class="wavesType">
            <slot></slot>
        </span>
    </component>
</template>

<script>
    export default {
        name: 'md-button',
        props: {
            to: {
                type: String,
                default() { return this.to || null }
            },
            target: String,
            rel: String,
            type: {
                type: String,
                default() { return this.to ? null : (this.type || 'button') }
            },
            exact: Boolean,
            disabled: Boolean,
            primary: Boolean,
            accent: Boolean,
            lightWaves: Boolean,
            icon: Boolean,
        },
        computed: {
            buttonType() {
                return this.to ? 'nuxt-link' : 'button';
            },
            wavesType() {
                return {
                    'waves-circle': this.icon,
                    'waves-light': (this.lightWaves || this.primary || this.accent),
                };
            },
        },
        methods: {
            ripple(e) {
                Waves.ripple(this.$el.firstChild, {
                    position: !this.icon ? { x: e.offsetX, y: e.offsetY } : null
                });

                this.$emit("click", e);
            },
        },
        destroyed() {
            Waves.calm(this.$el.firstChild);
        },
    };
</script>

<style lang="scss">
    @import '~@/assets/scss/_buttons.scss';

    .md-button {
        @include button;

        .waves-effect {
            position: relative;
            cursor: pointer;
            display: block;
            overflow: hidden;
            user-select: none;
            -webkit-tap-highlight-color: transparent;

            .waves-ripple {
                position: absolute;
                border-radius: 50%;
                width: 100px;
                height: 100px;
                margin-top:-50px;
                margin-left:-50px;
                opacity: 0;
                background: rgba(0,0,0,0.2);
                background: radial-gradient(rgba(0,0,0,0.2) 0,rgba(0,0,0,.3) 40%,rgba(0,0,0,.4) 50%,rgba(0,0,0,.5) 60%,rgba(255,255,255,0) 70%);
                transition: all 0.5s ease-out;
                transition-property: transform, opacity;
                transform: scale(0) translate(0,0);
                pointer-events: none;
            }

            &.waves-light .waves-ripple {
                background: rgba(255,255,255,0.4);
                background: radial-gradient(rgba(255,255,255,0.1) 0,rgba(255,255,255,.2) 40%,rgba(255,255,255,.3) 50%,rgba(255,255,255,.4) 60%,rgba(255,255,255,0) 70%);
            }
        }

        .waves-button,
        .waves-circle {
            transform: translateZ(0);
            -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
        }

        &[raised] {
            @include button-raised;
        }

        &[primary] {
            @include button-primary;
        }

        &[accent] {
            @include button-accent;
        }

        &[icon] {
            > .waves-effect {
                display: block;
                width: 36px;
                min-height: 36px;
                margin-left: auto;
                margin-right: auto;
                border-radius: 50%;
                padding: 0;
                min-width: 0;

                .svg-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -12px;
                    margin-left: -12px;
                }
            }
        }
    }
</style>
