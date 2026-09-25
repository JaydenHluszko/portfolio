<template>
  <div class="bg-background font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed relative min-h-screen antialiased">
        <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div class="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-surface-container-high opacity-35 blur-[120px]"></div>
            <div class="absolute top-1/3 right-1/4 h-[480px] w-[480px] rounded-full bg-secondary-fixed opacity-30 blur-[130px]"></div>
        </div>
        <Header />
        <main class="relative z-10 w-full pt-16 bg-transparent">
            <NuxtPage />
        </main>
        <Footer />
    </div>
</template>

<script setup>
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'
</script>
