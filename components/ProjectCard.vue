<template>
  <div class="glass-panel rounded-lg overflow-hidden flex flex-col group interactive-glow cursor-pointer transition-all duration-300">
    <div class="h-48 bg-surface-variant relative overflow-hidden flex items-center justify-center">
      <span class="text-slate-text font-mono text-sm opacity-50">Project Image</span>
      <div class="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent opacity-60"></div>
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-on-surface text-xl font-sans font-bold mb-2 group-hover:text-primary transition-colors">{{ title }}</h3>
      <p class="text-slate-text text-sm font-sans mb-6 flex-grow">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mt-auto mb-4">
        <TechChip v-for="tech in tags" :key="tech">{{ tech }}</TechChip>
      </div>
      <div class="pt-4 border-t border-border-subtle mt-auto">
        <span class="text-[13px] font-mono text-primary font-medium tracking-[0.05em]">{{ metric }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechChip from './TechChip.vue'

defineProps<{
  title: string
  description: string
  tags: string[]
  metric: string
}>()
</script>
