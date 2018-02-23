<template>
    <div class="cat-list">
        <div class="cat-grid">
            <div class="cat-list__item" v-for="(cat, i) in cats" :key="cat.id">
                <nuxt-link class="cat-list__link" :to="'/' + cat.id">
                    <cat-svg v-bind="cat.parts" />
                </nuxt-link>

                <cat-name>
                    <div>#{{ ((currentPage - 1) * pageSize) + i + 1 }}</div>

                    <truncate-single-line-text>
                        <nuxt-link class="cat-list__link" :to="'/' + cat.id">{{ cat.name }}</nuxt-link>
                    </truncate-single-line-text>
                </cat-name>
            </div>
        </div>

        <slot />
    </div>
</template>

<script>
    import CatSvg from '@/components/CatSvg';
    import CatName from '@/components/CatName';
    import TruncateSingleLineText from '@/components/TruncateSingleLineText';

    export default {
        name: 'cat-list',
        components: { CatSvg, CatName, TruncateSingleLineText },
        props: ['cats', 'pageSize', 'currentPage'],
    };
</script>

<style lang="scss">
    .cat-grid {
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
