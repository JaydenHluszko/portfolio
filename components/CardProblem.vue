<template>
    <div class="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
        <span>{{ title }}</span>
        <span class="font-mono" :class="valueColor">{{ value }}</span>
    </div>
    <div class="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div class="h-full rounded-full" :class="percentageColor" :style="{ width: `${percentage}%`}"></div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        value: String,
        valueColor: String,
        percentage: String,
        percentageColor: String,
    })
</script>