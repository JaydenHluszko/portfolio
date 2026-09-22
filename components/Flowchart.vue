<template>
    <div class="rounded-lg bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(51,65,85,0.06)] p-space-md md:p-space-lg mb-space-lg">
        <p class="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-outline mb-3">{{ title }}</p>
        <!-- Flowchart Nodes -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3 items-center relative">
            <!-- Step 1 -->
            <CardFlowchart
                :title="step1?.title"
                :subtitle="step1?.subtitle"
                :description="step1?.description"
                :icon="step1?.icon"
                :titleColor="step1?.titleColor"
                :subtitleColor="step1?.subtitleColor"
                :descriptionColor="step1?.descriptionColor"
                :cardColor="step1?.cardColor"
            />
            <div class="hidden md:flex justify-center text-outline-variant">
                <span class="material-symbols-rounded text-[20px]">arrow_forward</span>
            </div>
            <!-- Step 2 -->
            <CardFlowchart
                :title="step2?.title"
                :subtitle="step2?.subtitle"
                :description="step2?.description"
                :icon="step2?.icon"
                :titleColor="step2?.titleColor"
                :subtitleColor="step2?.subtitleColor"
                :descriptionColor="step2?.descriptionColor"
                :cardColor="step2?.cardColor"
            />
            <div class="hidden md:flex justify-center text-outline-variant">
                <span class="material-symbols-rounded text-[20px]">arrow_forward</span>
            </div>
            <!-- Step 3 -->
            <CardFlowchart
                :title="step3?.title"
                :subtitle="step3?.subtitle"
                :description="step3?.description"
                :icon="step3?.icon"
                :titleColor="step3?.titleColor"
                :subtitleColor="step3?.subtitleColor"
                :descriptionColor="step3?.descriptionColor"
                :cardColor="step3?.cardColor"
            />
        </div>
        <!-- Secondary Sub-Flow Connection -->
        <div class="mt-4 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-surface-container/50 rounded-md p-3.5">
            <div class="flex items-center gap-3">
                <p class="font-body-sm text-[12px] text-on-surface-variant">{{ description }}</p>
            </div>
            <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-[12px] font-medium">{{ result }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CardFlowchart from './CardFlowchart.vue';
    const props = defineProps({
        title: String,
        step1: Object,
        step2: Object,
        step3: Object,
        description: String,
        result: String,
    })
</script>