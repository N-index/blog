<script setup>
import {useTimestamp, useIntervalFn} from '@vueuse/core'

const timestamp = useTimestamp({offset: 0})
const age = computed(() => {
    const birth = '1997-03-23T18:30:00.000+08:00';
    return humanizeDuration(birth, new Date(timestamp.value));
})

function humanizeDuration(startTime, endTime) {
    if (!startTime || !endTime) return '';
    const secondsDuration = Math.round(Math.abs(new Date(startTime) - new Date(endTime)) / 1000);
    if (Number.isNaN(secondsDuration)) return 'invalid time';
    if (secondsDuration < 1) return '0';
    const timeUnitValue = {
        year: 60 * 60 * 24 * 30 * 12,
        month: 60 * 60 * 24 * 30,
        day: 60 * 60 * 24,
        hour: 60 * 60,
        minute: 60,
        second: 1
    };
    const timeUnitTranslatorMap = new Map([
        // [timeUnitValue.day, count => t('unit_day', {count})],
        // [timeUnitValue.hour, count => t('unit_hour', {count})],
        // [timeUnitValue.minute, count => t('unit_minute', {count})],
        // [timeUnitValue.second, count => t('unit_second', {count})],
        [timeUnitValue.year, count => `${count}年`],
        [timeUnitValue.month, count => `${count}月`],
        [timeUnitValue.day, count => `${count}天`],
        [timeUnitValue.hour, count => `${count}时`],
        [timeUnitValue.minute, count => `${count}分`],
        [timeUnitValue.second, count => `${count}秒`],
    ]);

    function formatDuration(secondsDuration) {
        if (!secondsDuration) return '';
        const [curUnitValue, curUnitTranslator] = [...timeUnitTranslatorMap.entries()].find(([unitValue]) => secondsDuration >= unitValue);
        const curHumanizedString = curUnitTranslator(Math.floor(secondsDuration / curUnitValue));
        const restHumanizedString = formatDuration(secondsDuration % curUnitValue);
        return curHumanizedString + ' ' + restHumanizedString;
    }

    return formatDuration(secondsDuration);
}

const blob = inject('blob');


const {pause, resume, isActive} = useIntervalFn(() => {
    blob.value.bounce();
}, 1000);
pause();

const startBouncing = () => {
    resume();

    blob.value.bounce();
    blob.value.showTooltip('❤️');
    blob.value.updateOptions({
        dotColor: 'rgb(254, 100, 143)',
        opacity: 1,
        fontSize: 32,
        tooltipPadding: 8,
    })

};
const stopBouncing = () => {
    pause();

    blob.value?.reset();
    blob.value?.bounce();
    blob.value?.updateOptions({
        dotColor: 'rgb(255,255,255)',
        opacity: .18,
        fontSize: 16,
        tooltipPadding: 12,
    })
};


</script>

<template>
    <span
        v-hint="''"
        @mouseenter="startBouncing"
        @mouseleave="stopBouncing"
    >
        {{ age }}
        <span v-if="false" class="heartbeat">
        ❤️
        </span>

    </span>
</template>

<style scoped lang="scss">
span {
    //background-image: linear-gradient(to right bottom, rgb(208, 26, 124), rgb(41, 40, 240))
}

.heartbeat {
    display: inline-block;
    vertical-align: top;
    animation: heartbeat 1s infinite;
}

@keyframes heartbeat {
    from, to {
        transform: scale(1, 1);
    }
    10% {
        transform: scale(1.25, 1.2);
    }

}

</style>