<template>
    <div class="home-empty-state">
        <cat-svg class="home-empty-state__image" v-bind="catTemplate" />

        <div class="home-empty-state__description">
            <p>It seem rather lonely here. Let's see if we can find you some company</p>

            <p>
                <md-button class="home-empty-state__cta" primary to="/create">Crazy Cat Lady Starter Kit</md-button>
            </p>
        </div>
    </div>
</template>

<script>
    import MdButton from '@/components/MdButton';
    import CatSvg from '@/components/CatSvg';

    export default {
        components: { MdButton, CatSvg },
        props: ['catTemplate'],
    };
</script>


<style lang="scss">
    @import '~@/assets/scss/typography';
    @import '~@/assets/scss/media-queries';

    .home-empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 576px;

        @include tablet-portrait-up {
            flex-direction: row;
            margin-top: 75px;
            margin-bottom: 75px;
            align-items: flex-start;
        }
    }

    .home-empty-state__image {
        max-width: 210px;
        margin-top: 34px;
        margin-bottom: 50px;

        flex: 0 0 30%;
    }

    .home-empty-state__description {
        @include font-title;
        max-width: 280px;
        flex: 0 0 70%;
        text-align: center;

        @include tablet-portrait-up {
            margin-top: 50px;
            padding-left: 30px;
            text-align: left;
        }

        p {
            margin-bottom: 10px;
        }
    }

    .home-empty-state__cta {
        margin-top: 20px;
    }
</style>
