<script setup>
const height = ref('0');
const scrollContentRef = ref(null);
const isExpanded = ref(false);
const isToggling = ref(false); // 是否正在toggle高度
const toggleCollapse = ()=>{
    isToggling.value = true;
    const scrollHeight = scrollContentRef.value?.scrollHeight;
    if (!isExpanded.value){
        height.value = scrollHeight;
    } else {
        height.value = '0';
    }
}

const handleTransitionEnd = ()=>{
    isToggling.value = false;
    if (!isExpanded.value){
        // 展开完毕
        height.value = 'auto';
        isExpanded.value = true;
    }else{
        // 收缩完毕
        height.value = '0';
        isExpanded.value = false;
    }
}
</script>

<template>
<div class="collapse-container">
    <div  @click="toggleCollapse">
        <slot name="controller" :isExpanded="isExpanded">Collapse Controller</slot>
    </div>
    <div ref="scrollContentRef"
         class="collapse-content"
         :style="{height: height + 'px'}"
         @transitionend="handleTransitionEnd">
        <slot name="content" :isExpanded="isExpanded">
            <ul>
                <li>内容1</li>
                <li>内容2</li>
                <li>内容3</li>
                <li>内容4</li>
            </ul>
        </slot>
    </div>


</div>
</template>

<style scoped lang="scss">
.collapse-container{

}
.collapse-content{
    height: auto;
    overflow: hidden;
    transition: height cubic-bezier(.48,.19,.04,1.33) .25s;
}
</style>