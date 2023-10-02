<template>
    <div class="py-2rem" style="">
        <Html data-color-mode="dark"></Html>
        <Body></Body>
        <header class="w-95% mx-auto max-w-40rem">
            <Nav></Nav>
        </header>
        <NuxtPage/>
    </div>

</template>

<script setup>
import 'normalize.css';
// import useBlobity from 'blobity/lib/vue/useBlobity';

useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;400;700;900&amp;display=swap'
        },
    ]
})

const blobityInstance = useBlobity({
    licenseKey: '...',
    zIndex: 50000,
    fontSize: 16,
    color: 'rgb(232, 239, 248)',
    dotColor: 'rgb(255,255,255)',
    focusableElementsOffsetX: 8,
    focusableElementsOffsetY: 4,
    opacity: 0.18,
    magnetic: false,
    // mode: 'bouncy',
    kineticMorphing: true,
})
provide('blob', blobityInstance);




</script>

<style lang="scss">
html {
    scroll-behavior: smooth;
    scroll-padding-block-start: 26px;
}
.medium-zoom-overlay{
    background-color: rgba(0,0,0,.4) !important;
}

body {
    background-color: #18181a;
    color: #d1d5db;
    font-family: -apple-system, BlinkMacSystemFont, "Noto Serif SC", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;

    line-height: 1.6;
    word-spacing: -0.04em;
    //max-width: 40rem;
    //padding: 0 8rem;
}

.markdown-body {
    background-color: unset !important;
    letter-spacing: -.1px;
}

.markdown-body p {
    line-height: 1.8;
}

.markdown-body ol, .markdown-body li {
    line-height: 1.8;
}

::selection {
    background: #95a5ac40;
}

table {
    th, td {
        padding: 4px 8px;
    }
}

a, a:link {
    color: #d1d5db;
    text-underline-position: from-font;
    text-decoration-skip-ink: all;
    text-decoration-color: #5e6365;
    transition: opacity .2s ease;
    text-decoration: underline;
    word-break: break-word;
    font-weight: 500;
    text-decoration-thickness: 0.5px;


    &:hover {
        //opacity: .7;
    }
}

h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system, BlinkMacSystemFont, "Noto Serif SC", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, "PingFang SC", STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif !important;
    font-weight: 600;
}

.navigation a, .navigation span {
    font-family: -apple-system, BlinkMacSystemFont, "Noto Serif SC", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, "PingFang SC", STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif !important;
}

</style>
<style>
.surround-container {
    margin-top: 32px;
    height: 40px;
    display: flex;
    gap: 16px;
    width: 100%;

    .surround-page {
        flex: 1 0 auto;
        height: 100%;
    }

    .surround-link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        border: solid 1px #efefef;
        background-color: rgba(255, 255, 255, .1);
        text-decoration: none;
        color: #fff;
        transition: all .25s ease-out;

        &:hover {
            background-color: rgba(255, 255, 255, .2);;
        }
    }
}
</style>
