<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded transition-colors duration-200 font-sans font-medium text-sm',
      variant === 'primary' 
        ? 'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container' 
        : 'bg-transparent border border-border-subtle text-on-surface hover:border-primary hover:text-primary interactive-glow',
      size === 'sm' ? 'px-3 py-1.5' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2'
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}>(), {
  variant: 'primary',
  size: 'md'
})

defineEmits(['click'])
</script>
