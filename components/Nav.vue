<script setup lang="ts">

</script>

<template>
    <nav class="flex justify-end">
        <ul class="flex gap-8px list-none">
            <li class="nav-item">
                <NuxtLink to="/">
                    主页
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/archive">
                    归档
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/x">
                    碎念
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/about">
                    关于
                </NuxtLink>
            </li>
        </ul>


    </nav>

</template>

<style scoped lang="scss">
:root{

}


.nav-item{
    --bg-light:  rgba(223, 223, 214,1);
    border-radius: 6px;
    padding: 4px 8px ;
    transition: background-color .3s ease-out;
    will-change: background-color;
    //background-color: var(--bg-light);
}
</style>