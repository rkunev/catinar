<template>
    <div class="truncate-single-line-text"><slot /></div>
</template>

<script>
    export default {
        name: 'truncate-single-line-text',
    };
</script>

<style lang="scss">
    .truncate-single-line-text {
        margin: auto;
        white-space: nowrap;
        overflow: hidden;
        max-width: 200px;
        text-overflow: ellipsis;
    }
</style>
