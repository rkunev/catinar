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
    @import '~@/assets/scss/media-queries';

    .cat-grid {
        display: grid;
        grid-gap: 32px;
        text-align: center;
        grid-template-columns: repeat(2, 1fr);

        @include tablet-portrait-up {
            grid-template-columns: repeat(3, 1fr);
        }

        @include tablet-landscape-up {
            grid-template-columns: repeat(4, 1fr);
        }
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
