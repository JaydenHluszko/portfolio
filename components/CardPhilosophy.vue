<template>
    <div class="p-space-md rounded-2xl bg-surface-container-low/70 shadow-[0_10px_30px_-15px_rgba(51,65,85,0.03)] flex flex-col">
        <span class="font-display-md text-display-md font-normal leading-none mb-1" :class="numberColor">{{ number }}</span>
        <span class="font-label-md text-label-md text-primary font-medium mb-1">{{ title }}</span>
        <span class="font-body-sm text-body-sm text-on-surface-variant">{{ description }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        number: String,
        title: String,
        description: String,
        numberColor: String
    })
</script>