<template>
    <div>
        <a class="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all duration-200" :class="bgColor, textColor" :target="target" :data-path="path" :href="path">
            <span v-if="icon" class="material-symbols-rounded text-[16px]" :class="iconColor">{{ icon }}</span>
            <span v-if="label">{{ label }}</span>
        </a>
    </div>
</template>

<script setup>
    const props = defineProps({
        path: String,
        label: String,
        icon: String,
        bgColor: String,
        textColor: String,
        iconColor: String,
        target: String
    })
</script>