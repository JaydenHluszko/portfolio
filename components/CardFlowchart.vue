<template>
    <div class="rounded-md p-3.5 space-y-1.5 transition-all" :class="cardColor">
        <div class="flex items-center justify-between" :class="subtitleColor">
            <span class="material-symbols-rounded text-[18px]">{{ icon }}</span>
            <span class="font-mono text-[11px]">{{ subtitle }}</span>
        </div>
        <p class="font-label-md text-label-md font-semibold" :class="titleColor">{{ title }}</p>
        <p class="font-body-sm text-[12px]" :class="descriptionColor">{{ description }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        subtitle: String,
        description: String,
        icon: String,
        titleColor: String,
        descriptionColor: String,
        subtitleColor: String,
        cardColor: String
    })
</script>