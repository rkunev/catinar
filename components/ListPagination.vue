<template>
    <div class="list-pagination">
        <div class="list-pagination__controls">
            <md-button raised @click="onPageChange(-1)" :disabled="disabled || start <= 1">
                <svg class="list-pagination__icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                    <path d="M0-.5h24v24H0z" fill="none"/>
                </svg>
                <span class="list-pagination__button-label">prev</span>
            </md-button>

            <md-button raised @click="onPageChange(1)" :disabled="disabled || end >= total">
                <span class="list-pagination__button-label">next</span>
                <svg class="list-pagination__icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                    <path d="M0-.25h24v24H0z" fill="none"/>
                </svg>
            </md-button>
        </div>

        <div class="list-pagination__pages">
            <span>{{ start + '-' + end }}</span>
            of
            <span>{{ total }}</span>
        </div>
    </div>
</template>

<script>
    import MdButton from '@/components/MdButton';

    export default {
        name: 'list-pagination',
        components: { MdButton },
        props: ['onPageChange', 'pageSize', 'currentPage', 'total', 'disabled'],
        computed: {
            start() {
                return this.currentPage * this.pageSize + 1 - this.pageSize;
            },
            end() {
                const base = this.currentPage * this.pageSize;

                return base < this.total ? base : this.total;
            },
        },
    };
</script>

<style lang="scss">
    .list-pagination {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #ccc;
    }

    .list-pagination__pages {
        margin-top: 8px;
        display: grid;
        grid-gap: 8px;
        grid-template-columns: repeat(3, auto);
        justify-items: center;
    }

    .list-pagination__controls {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr 1fr;
    }

    .list-pagination__button-label {
        line-height: normal;
        vertical-align: middle;

        &:first-child {
            margin-right: 4px;
            margin-left: 16px;
        }

        svg + & {
            margin-right: 16px;
            margin-left: 4px;
        }
    }

    .list-pagination__icon {
        vertical-align: middle;
        pointer-events: none;
    }
</style>
