<template>
    <h2 class="cat-name"><slot /></h2>
</template>

<script>
    export default {
        name: 'cat-name',
    };
</script>

<style lang="scss">
    .cat-name {
        margin: 16px 0;
    }
</style>
