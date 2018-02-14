<template>
    <div class="cat-list">
        <nuxt-link class="cat-list__link" :to="'/' + n" v-for="n in 10" :key="n">
            <cat-svg class="cat-list__item" v-bind="parts" />
        </nuxt-link>
    </div>
</template>

<script>
    import CatSvg from '@/components/CatSvg';

    export default {
        name: 'cat-list',
        components: { CatSvg },
        props: ['cats'],
        data() {
            return {
                parts: {
                    bg: '',
                    chest: '',
                    collar: '',
                    eyes: '',
                    hair: '',
                    main: '',
                    mouth: '',
                    noseAndLips: '',
                    pawright: '',
                    pawbackright: '',
                    pawbackleft: '',
                    pawleft: '',
                    tailtop: '',
                },
            };
        },
    };
</script>

<style lang="scss">
    .cat-list {
        display: flex;
        flex-wrap: wrap;
    }

    .cat-list__link {
        width: 33.3333%;
    }

    .cat-list__item {
        padding: 15px;
    }
</style>
