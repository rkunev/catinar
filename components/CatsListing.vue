<template>
    <div class="cats-listing">
        <template v-for="n in 10">
            <colorful-cat v-bind="parts" class="cats-listing__kitty" :key="n" :editable="n % 2 === 0" />
        </template>
    </div>
</template>

<script>
    import ColorfulCat from '@/components/ColorfulCat';

    export default {
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
    .cats-listing {
        display: flex;
        flex-wrap: wrap;
    }

    .cats-listing__kitty.colorful-cat {
        padding: 15px;
        width: 33.3333%;
    }
</style>
