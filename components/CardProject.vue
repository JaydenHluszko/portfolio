<template>
    <div class="rounded-lg bg-surface-container-lowest/70 p-space-md shadow-sm flex flex-col justify-between">
        <div class="space-y-2">
            <div class="w-10 h-10 rounded-full flex items-center justify-center mb-3" :class="iconColor">
                <span class="material-symbols-rounded text-[20px]">{{ icon }}</span>
            </div>
            <h4 class="font-headline-sm text-[1.25rem] text-primary">{{ title }}</h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {{ description }}
            </p>
        </div>
        <div v-if="impact" class="pt-4 mt-4 border-t border-surface-container-low flex justify-between items-center text-label-sm font-label-sm">
            <span class="text-outline">Impact:</span>
            <span class="text-primary font-medium">{{ impact }}</span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        description: String,
        icon: String,
        iconColor: String,
        impact: String
    })
</script>