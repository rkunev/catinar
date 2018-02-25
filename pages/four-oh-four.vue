<template>
    <div class="four-oh-four">
        <h2>Bah! No such kitty found</h2>

        <cat-svg class="cat" v-bind="parts" />

        <p>
            <md-button primary to="/">Home</md-button>
        </p>
    </div>
</template>

<script>
    import CatSvg from '@/components/CatSvg';
    import MdButton from '@/components/MdButton';

    export default {
        name: 'four-oh-four',
        components: { CatSvg, MdButton },
        data() {
            return {
                parts: {
                    bg: 'md-none',
                    chest: 'md-white',
                    collar: 'md-grey',
                    eyes: 'md-grey',
                    hair: 'md-grey',
                    main: 'md-white',
                    mouth: 'md-none',
                    noseAndLips: 'md-grey',
                    pawright: 'md-white',
                    pawbackright: 'md-white',
                    pawbackleft: 'md-white',
                    pawleft: 'md-white',
                    tailtop: 'md-white',
                }
            }
        },
    };
</script>

<style lang="scss">
    @import '~@/assets/scss/typography';
    @import '~@/assets/scss/media-queries';

    .four-oh-four {
        text-align: center;

        h2 {
            @include font-headline;
            color: #9e9e9e;
            margin-top: 24px;

            @include tablet-portrait-up {
                @include font-display-1;
            }
        }

        .cat {
            max-width: 400px;

            [data-part=ear2left],
            [data-part=ear2right] {
                fill: desaturate(#ef9a9a, 55%) !important;
            }
        }

        // a {
        //     @include font-title;
        //     color: #9e9e9e;
        // }
    }
</style>
