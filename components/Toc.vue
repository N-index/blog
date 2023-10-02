<script setup >
const props = defineProps({
    toc: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <nav class="py-16px bg-#1f1f1f w-full" style="">
        <ul class="m-0 px-16px list-none">
            <li v-for="link of toc.links">
                <a :href="`#${link.id}`" class="block" style="width: 100%">
                    {{link.text}}
                </a>
                <ul v-if="link.children && link.children.length" class="list-none">
                    <li v-for="link of link.children">
                        <a :href="`#${link.id}`" class="block" >
                            {{link.text}}
                        </a>
                    </li>
                </ul>

            </li>
        </ul>
    </nav>

</template>

<style scoped lang="scss">

</style>