<template>
    <section class="container">
        <div class="kitty" v-for="n in 10">
            <colorful-cat :editable="n % 2 === 0" />
        </div>
    </section>
</template>

<script>
    import ColorfulCat from '@/components/ColorfulCat';

    export default {
        components: { ColorfulCat },
    };
</script>

<style lang="scss">
    .container {
        width: 960px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-wrap: wrap;


        .kitty {
            padding: 15px;
            width: 33.3333%;

            > svg {
                width: 100%;
            }
        }
    }
</style>
