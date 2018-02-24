<template>
    <div class="toasted-container">
        <div class="toasted">
            {{ $store.state.toast }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'md-toast',
        methods: {
            undo() {
                console.log('undoing...');
            },
        },
    };
</script>

<style lang="scss">
    @import "~@/assets/scss/transition-settings";

    .toasted-container {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        transition: transform .18s $transition-timing-function-sharp, opacity .18s $transition-timing-function-sharp;
        transform: translateY(100%);
        z-index: 10;
        opacity: 0;

        .toasted {
            align-items: center;
            background-color: #323232;
            border-radius: 0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            color: #fff;
            display: flex;
            font-size: 14px;
            height: auto;
            justify-content: space-between;
            line-height: normal;
            max-width: 100%;
            min-width: 288px;
            min-height: 48px;
            padding: 0 24px;
            width: auto;
            word-break: normal;
        }

    }

    .is-toast-visible + .floating-actions {
        .toasted-container {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media only screen and (min-width: 600px) {
        .is-toast-visible + .floating-actions {
            .toasted-container {
                transform: translate3d(-50%, 0, 0);
            }
        }

        .toasted-container {
            max-width: 400px;
            left: 50%;
            transform: translate3d(-50%, 100%, 0);
            bottom: 0;

            .toasted {
                border-radius: 2px;
                max-width: 568px;
            }
        }
    }
</style>
