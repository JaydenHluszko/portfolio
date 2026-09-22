<template>
    <div class="rounded-lg bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(51,65,85,0.06)] p-space-md md:p-space-lg mb-space-xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md items-start">
            <div class="space-y-1">
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Role</span>
                <p class="font-body-md text-body-md text-on-surface font-medium">{{ role }}</p>                                
            </div>
            <div class="space-y-1">
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Core Technologies</span>
                <div class="flex flex-wrap gap-1.5 pt-1">
                    <Tag
                        v-for="tech in technologies"
                        :key="tech"
                        :text="tech"
                    />
                </div>
            </div>
            <div class="space-y-1">
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Timeline &amp; Context</span>
                <p class="font-body-md text-body-md text-on-surface font-medium">{{ timeline }}</p>
            </div>
            <div class="space-y-2 lg:pt-1">
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline block">Scope</span>
                <p class="font-body-md text-body-md text-on-surface font-medium">{{ scope }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
    const props = defineProps({
        role: String,
        technologies: Array,
        timeline: String,
        scope: String,
    })
</script>