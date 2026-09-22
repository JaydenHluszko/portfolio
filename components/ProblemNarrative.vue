<template>
    <div class="rounded-lg bg-surface-container-lowest/70 backdrop-blur-sm p-space-md md:p-space-lg shadow-[0_15px_30px_-10px_rgba(51,65,85,0.04)] mb-space-lg">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div class="lg:col-span-7 space-y-4">
                <h3 class="font-headline-sm text-headline-sm text-primary">
                    {{ title }}
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {{ description1 }}
                </p>
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {{ description2 }}
                </p>
            </div>
            <div class="lg:col-span-5 rounded-md bg-surface-container-low p-space-md space-y-3">
                <div class="flex items-center justify-between">
                    <span class="font-label-sm text-label-sm font-semibold text-primary">{{ cardTitle }}</span>
                    <span class="px-2 py-0.5 rounded-full bg-error/10 text-error font-label-sm text-[11px] font-semibold">{{ cardSubtitle }}</span>
                </div>
                <!-- Metric Comparison Bar -->
                <div class="space-y-1.5">
                    <CardProblem 
                        :title="comparison1?.title"
                        :value="comparison1?.value"
                        :percentage="comparison1?.percentage"
                        :valueColor="comparison1?.valueColor"
                        :percentageColor="comparison1?.percentageColor"
                    />
                </div>
                <div class="space-y-1.5 pt-2">
                    <CardProblem 
                        :title="comparison2?.title"
                        :value="comparison2?.value"
                        :percentage="comparison2?.percentage"
                        :valueColor="comparison2?.valueColor"
                        :percentageColor="comparison2?.percentageColor"
                    />
                </div>
                <p class="font-body-sm text-body-sm text-outline pt-2 italic">
                    {{ cardDescription }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CardProblem from './CardProblem.vue';
    const props = defineProps({
        title: String,
        description1: String,
        description2: String,
        cardTitle: String,
        cardSubtitle: String,
        comparison1: Object,
        comparison2: Object,
        cardDescription: String,
    })
</script>
