<template>
    <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-margin-mobile md:px-margin pt-4 pointer-events-none">
        <div class="h-16 w-full max-w-7xl mx-auto rounded-full bg-surface-container-lowest/40 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(51,65,85,0.08),0_0_1px_rgba(51,65,85,0.12)] px-space-md flex items-center justify-between pointer-events-auto transition-all duration-300">
            <div class="flex items-center gap-space-sm">
                <nuxt-link to="/" class="flex items-center gap-space-xs" data-path="home">
                    <img alt="Developer Monogram Logo" class="h-8 w-auto object-contain" src="~/assets/images/logo-dark.png" />
                    <span class="hidden sm:inline-block font-label-md text-label-md text-primary tracking-tight font-semibold">Jayden Hluszko</span>
                </nuxt-link>
                <span class="hidden lg:inline-block text-outline-variant font-light">/</span>
                <span class="hidden lg:inline-block font-label-sm text-label-sm text-on-surface-variant font-normal">Full Stack Engineer</span>
            </div>
            <!-- data-active-classes="bg-surface-container text-on-surface font-semibold" -->
            <nav class="flex items-center gap-1 sm:gap-space-xs">
                <nuxt-link to="/"
                    class="px-3 py-1.5 rounded-full transition-all duration-200 text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                    active-class="!text-on-surface bg-surface-container font-semibold">Home</nuxt-link>
                <nuxt-link to="/projects"
                    class="px-3 py-1.5 rounded-full transition-all duration-200 text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                    active-class="text-on-surface bg-surface-container font-semibold">Projects</nuxt-link>
            </nav>
            <div class="flex items-center gap-space-xs">
                <BtnPill path="/jayden-hluszko-resume.pdf" target="_blank" label="Resume" icon="download" bgColor="bg-surface-container-low/70 hover:bg-surface-container" textColor="text-on-surface" iconColor="text-on-surface-variant" />
                <BtnPill path="#contact" label="Contact" icon="mail" bgColor="bg-primary hover:bg-primary-container" textColor="text-on-primary" iconColor="text-on-primary-variant" />
            </div>
        </div>
    </header>
</template>

<script>
    import BtnPill from './BtnPill.vue';
</script>