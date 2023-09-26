<template>
    <pre @click="copy"
         @mouseenter="enter"
         @mouseleave="leave"
         data-blobity-tooltip="Click to copy"
         data-blobity-magnetic="false"
         :class="$props.class">
        <slot />
    </pre>
</template>

<script setup>
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array,
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
const blob = inject('blob');

let copyTimer = null;
const copy = ()=>{
    navigator.clipboard.writeText(String(props.code));
    blob.value.showTooltip('Copied');
    clearTimeout(copyTimer);
    copyTimer = setTimeout(()=>{
        blob.value?.reset();
        blob.value?.bounce();
    }, 1200);
}
const enter = ()=>{
    blob.value?.updateOptions({
        opacity: .92,
    })
}
const leave = ()=>{
    blob.value?.updateOptions({
        opacity: 0.18,
    })
}


</script>

<style>
pre code .line {
    display: block;
    min-height: 1rem;
}
</style>