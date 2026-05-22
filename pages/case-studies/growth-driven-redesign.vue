<template>
  <div>
    <div class="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-12">
      <!-- Hero Section -->
      <section class="mb-16">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <span class="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full font-code-label text-xs text-on-surface uppercase tracking-widest border border-secondary-container/30">Case Study</span>
            <span class="text-outline">•</span>
            <span class="text-outline font-code-label text-xs text-on-surface uppercase">BAGAL IMMIGRATION</span>
          </div>
          <h1 class="text-display-lg-mobile lg:text-display-lg text-on-surface">Growth-Driven Redesign</h1>
          <p class="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Full-scale transformation of a legacy immigration platform focused on performance and SEO-driven architecture, resulting in unprecedented organic growth.
          </p>
          <!-- Key Metrics Layout -->
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="glass-panel p-6 rounded-xl flex-1 min-w-[240px]">
              <p class="text-outline font-code-label text-xs text-on-surface uppercase mb-2">Organic Traffic</p>
              <p class="text-headline-md text-primary">+450%</p>
              <p class="text-body-sm text-on-surface-variant">within 8 months</p>
            </div>
            <div class="glass-panel p-6 rounded-xl flex-1 min-w-[240px]">
              <p class="text-outline font-code-label text-xs text-on-surface uppercase mb-2">Compliance</p>
              <p class="text-headline-md text-primary">WCAG 2.1</p>
              <p class="text-body-sm text-on-surface-variant">AODA Compliant</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Chips -->
      <section class="mb-16 border-t border-border-subtle pt-8">
        <h3 class="font-code-label text-xs text-on-surface uppercase tracking-widest text-outline mb-4">Technology Architecture</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">NUXT.JS</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">VUE.JS</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">SSR</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">GOOGLE ANALYTICS</span>
        </div>
      </section>

      <!-- Main Visual REMOVED as per request -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left Column: Narrative -->
        <div class="lg:col-span-7 flex flex-col gap-20">
          <!-- Section 1: The Challenge -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-error-container/20 flex items-center justify-center border border-error-container/30">
                <span class="material-symbols-outlined text-error" data-icon="report_problem">report_problem</span>
              </div>
              <h2 class="text-headline-md text-on-surface">The Challenge</h2>
            </div>
            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>The legacy platform suffered from critical technical debt that hindered both user experience and business growth:</p>
              <ul class="list-none space-y-3">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1" data-icon="check_circle">check_circle</span>
                  <span>Monolithic architecture with slow server response times.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1" data-icon="check_circle">check_circle</span>
                  <span>Poor SEO structure preventing discovery in a competitive market.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1" data-icon="check_circle">check_circle</span>
                  <span>High user drop-off rates due to complex, non-responsive lead funnels.</span>
                </li>
              </ul>
            </div>
          </section>

          <!-- Section 2: The Solution -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-primary-container/20 flex items-center justify-center border border-primary-container/30">
                <span class="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
              </div>
              <h2 class="text-headline-md text-on-surface">The Solution</h2>
            </div>
            <div class="space-y-6 text-on-surface-variant leading-relaxed">
              <div class="space-y-4">
                <h4 class="font-bold text-on-surface">Architectural Transformation</h4>
                <p>Engineered a headless frontend using <span class="text-primary font-medium">Nuxt.js</span> to leverage Server-Side Rendering (SSR). This ensured lightning-fast initial loads and immediate indexing by search engines. Integrated a secure backend to handle sensitive records.</p>
              </div>
              <div class="space-y-4">
                <h4 class="font-bold text-on-surface">SEO & Conversion Focus</h4>
                <p>Implemented an "SEO-first" architecture including dynamic sitemaps and optimized metadata. Redesigned the lead generation funnel using <span class="text-primary font-medium">Google Analytics</span> to identify and fix friction points.</p>
              </div>
            </div>
          </section>

          <!-- Section 3: The Impact -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-secondary-container/20 flex items-center justify-center border border-secondary-container/30">
                <span class="material-symbols-outlined text-secondary" data-icon="trending_up">trending_up</span>
              </div>
              <h2 class="text-headline-md text-on-surface">The Impact</h2>
            </div>
            <div class="space-y-6 text-on-surface-variant leading-relaxed">
              <p>The transformation shifted the business trajectory, reducing cost-per-acquisition by 40% and increasing high-quality leads.</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-center">
                <div class="p-4 bg-surface-container-high rounded-lg">
                  <p class="text-xs font-code-label uppercase text-outline mb-1">Time to Index</p>
                  <p class="text-primary font-bold text-lg">2.4 Days</p>
                </div>
                <div class="p-4 bg-surface-container-high rounded-lg">
                  <p class="text-xs font-code-label uppercase text-outline mb-1">Lead Conv.</p>
                  <p class="text-primary font-bold text-lg">+28%</p>
                </div>
                <div class="p-4 bg-surface-container-high rounded-lg">
                  <p class="text-xs font-code-label uppercase text-outline mb-1">Mobile</p>
                  <p class="text-primary font-bold text-lg">62%</p>
                </div>
              </div>
              <p class="pt-4 italic">"The transition to Nuxt.js SSR was the single most impactful technical decision, allowing us to dominate competitive keywords within months."</p>
            </div>
          </section>
        </div>

        <!-- Right Column: Visuals & Sidebars -->
        <div class="lg:col-span-5 space-y-8">
          <div class="glass-panel rounded-xl overflow-hidden">
            <div class="p-4 border-b border-border-subtle bg-surface-container flex justify-between items-center">
              <span class="font-code-label text-xs text-on-surface uppercase">SEO_Performance.Audit</span>
              <div class="flex gap-2">
                <span class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold">SEO: 98</span>
                <span class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold">PERF: 96</span>
              </div>
            </div>
            <div class="aspect-[4/3] bg-surface-container-lowest relative flex items-center justify-center p-4">
              <img alt="Google Lighthouse performance report showing near-perfect scores." class="w-full h-full object-contain grayscale opacity-60 rounded-lg border border-border-subtle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXIrnPZSCQnp3VAlI6tOJIUtLsqgTU1I-_MX59z972kEE5-c-gElgDURdRBW_2uMjY_z3y8O2JxtO2nKcdXbTDd5n3rxPt_9D1QDf_XLxVVBjPc7_HeL8vQTZyDPsCAEIzB7_lmF6Sn_F-0HaUDYvtgs1g3C4Ul4DNvYG_ePhbMWpsI7RPyjVUpa4Xur1ZASChpnwu22OlvKLyXdVR1ZrrBdANmVYkdBJGWocleJ2FeHZzzv-rPbh-7R0JQE2-X7ZodSxo7Y3QsKcO">
            </div>
            <div class="p-6 space-y-4">
              <div class="space-y-1">
                <div class="flex justify-between text-xs font-code-label text-outline uppercase">
                  <span>Accessibility</span>
                  <span>100%</span>
                </div>
                <div class="h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div class="h-full bg-primary w-full"></div>
                </div>
              </div>
              <div class="space-y-1">
                <div class="flex justify-between text-xs font-code-label text-outline uppercase">
                  <span>Load Speed Decrease</span>
                  <span>-70%</span>
                </div>
                <div class="h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div class="h-full bg-primary w-[70%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-primary-container text-on-primary-container p-6 rounded-xl relative overflow-hidden">
            <span class="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10" data-icon="verified">verified</span>
            <h4 class="font-bold mb-2">Search Dominance</h4>
            <p class="text-sm opacity-90 leading-relaxed">By leveraging SSR and structured data, we secured top-3 rankings for key immigration terms, bypassing competitors with 10x the marketing budget.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer / CTA -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center pb-12" id="contact">
      <LetsConnect />
    </section>
  </div>
</template>

<script setup>
import LetsConnect from '../../components/LetsConnect.vue';

useHead({
  title: 'Growth-Driven Redesign - Case Study'
})
</script>
