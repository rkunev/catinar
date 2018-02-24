<template>
    <footer class="app-footer" v-once>
        <p>{{ version }}</p>
        <a href="https://github.com/rkunev/catinar/issues" target="_blank">Send Feedback</a>
    </footer>
</template>

<script>
    export default {
        name: 'app-footer',
        data() {
            return {
                version: 'CatinarApp 2018, v1.0.0'
            };
        },
    };
</script>

<style lang="scss">
    @import "~@/assets/scss/_typography";

    .app-footer {
        color: #333;
        font-size: 12px;
        text-align: center;
        margin-top: 16px;
        margin-bottom: 8px;
        padding-top: 8px;

        p {
            margin-bottom: 4px;
        }

        a {
            color: inherit;
        }
    }
</style>
