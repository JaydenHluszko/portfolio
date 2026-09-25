<template>
    <div class="bg-background font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed relative min-h-screen antialiased">
        <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div class="absolute -top-40 left-1/4 h-full w-full rounded-full bg-surface-container-high opacity-35 blur-[120px]"></div>
            <div class="absolute top-1/3 right-1/4 h-full w-full rounded-full bg-secondary-fixed opacity-30 blur-[130px]"></div>
        </div>
        <div class="relative z-10 w-full pt-16 bg-transparent">
            <div class="max-w-7xl mx-auto px-margin-mobile min-h-[calc(100vh-14rem)]">
                <div class="flex flex-col w-full">
                    <!-- SECTION 1: HERO & THE BIG PICTURE -->
                    <section class="relative w-full pt-4 pb-space-xl">
                        <!-- Breadcrumb & Status Pill -->
                        <Breadcrumbs />
                        <!-- Title & Editorial Subtitle -->
                        <div class="max-w-4xl mb-space-lg">
                            <h1 class="font-display-lg text-display-lg text-primary tracking-tight mb-space-sm leading-[1.05]">
                                Selected Projects
                            </h1>
                            <p class="font-headline-md text-headline-md text-on-surface-variant font-light leading-relaxed">
                                A curated look at recent interface architectures, generative platforms, and real-time visualization systems.
                            </p>
                        </div>
                    </section>
                    <section class="py-space-xl my-space-md">
                        <div class="w-full max-w-6xl mx-auto">
                            <Projects />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>    
</template>

<script setup>
    import Breadcrumbs from '../../components/Breadcrumbs.vue';
    import Projects from '../../components/Projects.vue';
</script>