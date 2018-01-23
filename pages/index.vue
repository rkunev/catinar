<template>
    <section class="container">
        <cats-listing :cats="cats" />
    </section>
</template>

<script>
    import CatsListing from '@/components/CatsListing';

    export default {
        components: { CatsListing },
        data() {
            return {
                cats: [],
            }
        },
    };
</script>

<style lang="scss">
    .container {
        width: 960px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
