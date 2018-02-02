<template>
    <nuxt-link to="/create" class="fab">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </nuxt-link>
</template>

<style lang="scss">
    @import "~@/assets/scss/_media-queries";

    .fab {
        position: fixed;
        border-radius: 50%;
        background: #1975d3;
        color: #fff;
        right: 24px;
        bottom: 24px;
        width: 56px;
        height: 56px;
        border: 0;
        padding: 0;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow .12s linear;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);

        &:focus {
            box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
        }
    }
</style>
