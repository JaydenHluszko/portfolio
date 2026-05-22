<template>
  <component :is="route.path === '/' ? 'header' : 'nav'" class="fixed top-0 left-0 right-0 z-50 glass-fill border-b border-border-subtle backdrop-blur-md">
    <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/assets/images/logo.png" alt="Logo" class="size-6">
        <span class="text-on-surface text-lg font-bold tracking-tight uppercase hidden sm:block">Jayden Hluszko</span>
      </NuxtLink>
      <nav class="flex items-center gap-8">
        <template v-if="route.path !== '/'">
          <NuxtLink to="/" class="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 h-10">
            <span class="material-symbols-outlined text-[18px]">arrow_back</span>Back to Portfolio
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/#work" :class="getLinkClass('#work')">Work</NuxtLink>
          <NuxtLink to="/#about" :class="getLinkClass('#about')">About</NuxtLink>
          <NuxtLink to="/#contact" :class="getLinkClass('#contact')">Contact</NuxtLink>
          <NuxtLink to="/resume" class="bg-primary-container text-on-primary-container text-sm font-bold h-10 px-6 rounded-lg hover:brightness-110 transition-all flex items-center justify-center">Resume</NuxtLink>
        </template>
      </nav>
    </div>
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeHash = ref('')
let observer: IntersectionObserver | null = null

const setupObserver = () => {
  if (observer) observer.disconnect()
  
  if (route.path !== '/') return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeHash.value = `#${entry.target.id}`
        } else if (entry.target.id === 'work' && entry.boundingClientRect.top > 0) {
          if (activeHash.value === '#work') {
            activeHash.value = ''
          }
        }
      })
    },
    { rootMargin: '-20% 0px -50% 0px' }
  )

  // Use timeout to wait for DOM to fully render after route change
  setTimeout(() => {
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer?.observe(section))
  }, 200)
}

onMounted(() => {
  if (route.hash) activeHash.value = route.hash
  setupObserver()
})

watch(() => route.path, () => {
  setupObserver()
})

const getLinkClass = (hash: string) => {
  const isActive = activeHash.value === hash
  return [
    isActive ? 'text-primary font-bold' : 'text-on-surface-variant font-medium',
    'text-sm transition-colors hover:text-primary'
  ]
}
</script>
