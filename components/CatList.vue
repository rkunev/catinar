<template>
    <div class="cat-list">
        <div class="cat-list__item" v-for="(cat, key, index) in cats" :key="key">
            <nuxt-link class="cat-list__link" :to="'/' + key">
                <cat-svg v-bind="cat.parts" />
            </nuxt-link>

            <cat-name>
                <div>#{{ index + 1 }}</div>

                <truncate-single-line-text>
                    <nuxt-link class="cat-list__link" :to="'/' + key">{{ cat.name }}</nuxt-link>
                </truncate-single-line-text>
            </cat-name>
        </div>
    </div>
</template>

<script>
    import CatSvg from '@/components/CatSvg';
    import CatName from '@/components/CatName';
    import TruncateSingleLineText from '@/components/TruncateSingleLineText';

    export default {
        name: 'cat-list',
        components: { CatSvg, CatName, TruncateSingleLineText },
        props: ['cats'],
    };
</script>

<style lang="scss">
    .cat-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 32px;
        text-align: center;
    }

    .cat-list__link {
        display: inline-block;
        width: 100%;
        text-align: center;
        color: #111;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
