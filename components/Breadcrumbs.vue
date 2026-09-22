<template>
    <!-- Breadcrumb & Status Pill -->
    <div class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant pb-5">
        <nuxt-link to="/" class="hover:text-primary transition-colors">Home</nuxt-link>
        <span class="text-outline-variant">/</span>
        <nuxt-link to="/projects" class="hover:text-primary transition-colors">Projects</nuxt-link>
        <span v-if="title" class="text-outline-variant">/</span>
        <span v-if="title" class="text-primary font-semibold">{{ title }}</span>
    </div>
</template>

<script setup>
    defineProps({
        title: String
    })
</script>