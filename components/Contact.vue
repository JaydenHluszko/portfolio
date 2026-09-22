<script setup lang="ts">
    const config = useRuntimeConfig();
    const email = config.public.email;
</script>

<template>
    <section id="contact" class="py-space-2xl">
        <div class="w-full mx-auto relative">
            <!-- Ambient light behind container -->
            <div class="absolute inset-0 bg-gradient-to-r from-secondary-fixed/40 via-surface-container to-tertiary-fixed/30 rounded-3xl blur-2xl -z-10 transform scale-95 opacity-70"> </div>
            <div class="rounded-3xl bg-surface-container-lowest/90 backdrop-blur-2xl p-space-lg md:p-space-xl shadow-[0_30px_70px_-20px_rgba(30,41,59,0.08),0_0_1px_rgba(51,65,85,0.1)] flex flex-col items-center text-center">
                <h2 class="font-display-md text-display-md-mobile md:text-display-md text-primary font-normal tracking-tight max-w-3xl leading-tight mb-space-sm">
                    Let’s build something remarkable together.
                </h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light leading-relaxed mb-space-lg">
                    Whether you have an upcoming product launch, an ambitious interface overhaul, or
                    just want to talk about frontend architecture — my inbox is always open.
                </p>
                <!-- CTA Action Hub -->
                <div class="flex flex-col sm:flex-row items-center gap-space-sm w-full sm:w-auto justify-center mb-space-md">
                    <a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-[0_4px_16px_rgba(29,43,62,0.18)] transition-all duration-200" :href="`mailto:${email}`">
                        <span class="material-symbols-rounded text-[18px]">mail</span>
                        <span>Get in touch</span>
                    </a>
                </div>
                <div class="flex items-center gap-2 text-outline font-label-sm text-label-sm">
                    <span class="material-symbols-rounded text-[16px]">schedule</span>
                    <span>Typically responds within 24 hours</span>
                </div>
            </div>
        </div>
    </section>
</template>