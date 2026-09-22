<template>
    <div>
        <span class="px-3.5 py-1.5 rounded-full bg-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm">{{ text }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        text: String
    })
</script>