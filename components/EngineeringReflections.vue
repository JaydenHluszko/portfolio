<template>
    <div class="rounded-lg bg-surface-container-lowest/90 backdrop-blur-xl p-space-md md:p-space-lg shadow-[0_20px_40px_-15px_rgba(51,65,85,0.06)] mb-space-xl">
        <div class="max-w-3xl space-y-4">
            <p class="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-3">Engineering Reflections</p>
            <h3 class="font-headline-md text-headline-md text-primary">{{ title }}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">{{ description1 }}</p>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">{{ description2 }}</p>
            <div class="pt-2">
                <span class="font-label-sm text-label-sm font-semibold text-primary">Next Horizon:</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant ml-1">{{ nextHorizon }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        description1: String,
        description2: String,
        nextHorizon: String
    })
</script>