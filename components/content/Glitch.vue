<script setup lang="ts">
import {PowerGlitch} from "powerglitch";

const glitch = ref(null);
onMounted(() => {
    PowerGlitch.glitch(
        glitch.value,
        {
            "playMode": "hover",
            "createContainers": true,
            "hideOverflow": false,
            "timing": {
                "duration": 2000
            },
            "glitchTimeSpan": {
                "start": 0.5,
                "end": 0.7
            },
            "shake": {
                "velocity": 15,
                "amplitudeX": 0.11,
                "amplitudeY": 0.2
            },
            "slice": {
                "count": 6,
                "velocity": 15,
                "minHeight": 0.02,
                "maxHeight": 0.15,
                "hueRotate": true
            },
            "pulse": false
        }
    )
})
</script>

<template>
    <div ref="glitch">
        <slot/>
    </div>
</template>

<style scoped lang="scss">

</style>