<template>
    <div class="cat-list">
        <nuxt-link class="cat-list__link" :to="'/' + n" v-for="n in 10" :key="n">
            <colorful-cat class="cat-list__item" v-bind="parts" />
        </nuxt-link>
    </div>
</template>

<script>
    import ColorfulCat from '@/components/ColorfulCat';

    export default {
        name: 'cat-list',
        components: { ColorfulCat },
        props: ['cats'],
        data() {
            return {
                parts: {
                    bg: '',
                    ear1left: '',
                    ear1right: '',
                    ear2right: '',
                    ear2left: '',
                    head: '',
                    hair: '',
                    eyeright: '',
                    eyeleft: '',
                    mouth: '',
                    lips: '',
                    legright: '',
                    pawright: '',
                    legbackright: '',
                    pawbackright: '',
                    legbackleft: '',
                    pawbackleft: '',
                    legleft: '',
                    pawleft: '',
                    tail: '',
                    legrightshadow: '',
                    tailshadow: '',
                    body: '',
                    chest: '',
                    collar: '',
                    tailtop: '',
                    nose: '',
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
