<template>
  <div class="relative flex flex-col w-full bg-background min-h-screen selection:bg-primary-container selection:text-on-primary-container">
    <div class="layout-container flex h-full grow flex-col">
      <NavBar />
      <main class="flex-1 pt-32">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
</script>
