<template>
  <div>
    <div class="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-12">
      <!-- Hero Section -->
      <section class="mb-16">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <span class="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full font-code-label text-xs text-on-surface uppercase tracking-widest border border-secondary-container/30">Case Study</span>
            <span class="text-outline">•</span>
            <span class="text-outline font-code-label text-xs text-on-surface">CHANNELASSIST</span>
          </div>
          <h1 class="text-[32px] lg:text-[40px] font-bold tracking-tight text-on-surface leading-tight">Multi-Tenant Design System</h1>
          <p class="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Engineered a component-based UI architecture for enterprise clients, enabling dynamic white-labeling across hundreds of portals via modular CSS updates and theme variables.
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="bg-surface-container border border-border-subtle p-6 rounded-xl flex-1 min-w-[240px]">
              <p class="text-outline font-code-label text-xs text-on-surface uppercase mb-2">Industry Recognition</p>
              <p class="text-headline-md text-primary">5-Star CRN Rating</p>
              <p class="text-body-sm text-on-surface-variant">Achieved in both 2024 & 2025</p>
            </div>
            <div class="bg-surface-container border border-border-subtle p-6 rounded-xl flex-1 min-w-[240px]">
              <p class="text-outline font-code-label text-xs text-on-surface uppercase mb-2">Efficiency Gain</p>
              <p class="text-headline-md text-primary">Zero-Code Theming</p>
              <p class="text-body-sm text-on-surface-variant">Client rollout via CSS tokens only</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Chips -->
      <section class="mb-16 border-t border-border-subtle pt-8">
        <h3 class="font-code-label text-xs text-on-surface uppercase tracking-widest text-outline mb-4">Technology Architecture</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Angular</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">.NET MVC</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Bootstrap 5</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">CSS3 Variables</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Storybook</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Figma Tokens</span>
        </div>
      </section>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left Column: Narrative -->
        <div class="lg:col-span-7 flex flex-col gap-20">
          <!-- Section 1: The Challenge -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-error-container/20 flex items-center justify-center border border-error-container/30">
                <span class="material-symbols-outlined text-error" data-icon="warning">warning</span>
              </div>
              <h2 class="text-[22px] font-bold text-on-surface">The Challenge</h2>
            </div>
            <div class="space-y-4 text-on-surface-variant">
              <p>
                As the sole frontend developer managing a rapidly growing list of enterprise clients, the legacy approach was unsustainable. Each new portal required bespoke code changes for branding—colors, typography, and spacing—leading to a fragmented codebase and long deployment cycles.
              </p>
              <ul class="list-none space-y-3">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1" data-icon="check_circle">check_circle</span>
                  <span>Inefficient manual white-labeling for 100+ active portals.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1" data-icon="check_circle">check_circle</span>
                  <span>Inconsistent user experience across different client environments.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1" data-icon="check_circle">check_circle</span>
                  <span>Slow time-to-market for onboarding new enterprise partners.</span>
                </li>
              </ul>
            </div>
          </section>

          <!-- Section 2: The Solution -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-primary-container/20 flex items-center justify-center border border-primary-container/30">
                <span class="material-symbols-outlined text-primary" data-icon="monitor">monitor</span>
              </div>
              <h2 class="text-[22px] font-bold text-on-surface">The Solution</h2>
            </div>
            <div class="space-y-4 text-on-surface-variant">
              <p>
                I architected a modular design system built on **Atomic Design principles**. By decoupling the logic from the presentation layer, I introduced a CSS Variable-driven engine that injected client branding at the root level.
              </p>
              <div class="bg-surface-elevated p-6 border border-border-subtle rounded-xl font-code-label text-sm leading-relaxed text-primary">
                :root {<br>
                &nbsp;&nbsp;--brand-primary: #3b83f6;<br>
                &nbsp;&nbsp;--brand-radius: 4px;<br>
                &nbsp;&nbsp;--font-family: 'Inter', sans-serif;<br>
                }
              </div>
              <p>
                We utilized Storybook for component documentation and documentation of the .NET MVC helper library, ensuring that any developer—backend or frontend—could build compliant UI without breaking the brand guidelines.
              </p>
            </div>
          </section>

          <!-- Section 3: The Impact -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-secondary-container/20 flex items-center justify-center border border-secondary-container/30">
                <span class="material-symbols-outlined text-secondary" data-icon="trending_up">trending_up</span>
              </div>
              <h2 class="text-[22px] font-bold text-on-surface">The Impact</h2>
            </div>
            <div class="space-y-4 text-on-surface-variant">
              <p>
                The transformation was immediate. We moved from "hardcoded branding" to "dynamic configuration."
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div class="p-4 bg-surface-container-high rounded-lg">
                  <p class="text-primary font-bold text-lg">90% Reduction</p>
                  <p class="text-body-sm">In CSS maintenance overhead across portals.</p>
                </div>
                <div class="p-4 bg-surface-container-high rounded-lg">
                  <p class="text-primary font-bold text-lg">Instant Rollouts</p>
                  <p class="text-body-sm">Branding updates no longer require code releases.</p>
                </div>
              </div>
              <p class="pt-4 italic">
                "This system became the backbone of our premium user experience, directly contributing to our 5-Star CRN rating for two consecutive years."
              </p>
            </div>
          </section>
        </div>

        <!-- Right Column: Visuals & Sidebars -->
        <div class="lg:col-span-5 space-y-8">
          <!-- Architecture Diagram -->
          <div class="glass-panel rounded-xl overflow-hidden">
            <div class="p-4 border-b border-border-subtle flex justify-between items-center bg-surface-container">
              <span class="font-code-label text-xs text-on-surface">ARCHITECTURE_SCHEMA.SVG</span>
              <span class="material-symbols-outlined text-outline text-sm" data-icon="fullscreen">fullscreen</span>
            </div>
            <div class="bg-surface-container-lowest relative flex items-center justify-center w-full">
              <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, #3b83f6 1px, transparent 0); background-size: 24px 24px;"></div>
              <img alt="Architecture Diagram" class="z-10 h-auto opacity-80 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyQBDbwUICk29G3WEFvfnAsKFlwGlCEptqG2OZksSDtZCNKvzpaW8hdlxo9aAu7JlOcT1Y4Py8AS5JWD6lSFyl86YaHB9zArbp0--Th7DAyjF5YDeWGJispysMIh27Xp4ItjEEImMy9XPZDYucFG1CVep9O0u7hWSCdfmC61fwtX1s8kbIa2SF8e5Obh1vRbs3U6TY971yJjYsgFlZ65UNHllHITbzCpcidwA185afyazPmdp0yLNldEJAPyxd8o7qp7AVC-7tLmtR">
            </div>
            <div class="p-4">
              <p class="text-body-sm text-outline">The central CSS engine feeds variables to isolated client components, ensuring global consistency with local flexibility.</p>
            </div>
          </div>

          <!-- Component Preview -->
          <div class="glass-panel rounded-xl overflow-hidden">
            <div class="p-4 border-b border-border-subtle bg-surface-container">
              <span class="font-code-label text-xs text-on-surface">DYNAMIC_THEME_PREVIEW.CSS</span>
            </div>
            <div class="p-8 space-y-6 bg-surface-container-low">
              <!-- Simulated Theme 1 -->
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <p class="text-xs text-outline font-code-label">Theme: Enterprise Blue</p>
                  <span class="text-[10px] text-primary font-code-label">.theme-blue</span>
                </div>
                <div class="p-3 bg-surface-container rounded-lg border border-border-subtle font-code-label text-[10px] space-y-1 text-on-surface">
                  <div class="flex gap-2"><span class="text-outline">--brand-color:</span> <span>#2563eb;</span></div>
                  <div class="flex gap-2"><span class="text-outline">--brand-radius:</span> <span>0.25rem;</span></div>
                </div>
                <div class="flex gap-4">
                  <div class="h-8 w-full bg-blue-600 rounded"></div>
                </div>
              </div>
              <hr class="border-border-subtle">
              <!-- Simulated Theme 2 -->
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <p class="text-xs text-outline font-code-label">Theme: High-Growth Emerald</p>
                  <span class="text-[10px] text-primary font-code-label">.theme-emerald</span>
                </div>
                <div class="p-3 bg-surface-container rounded-lg border border-border-subtle font-code-label text-[10px] space-y-1 text-on-surface">
                  <div class="flex gap-2"><span class="text-outline">--brand-color:</span> <span>#059669;</span></div>
                  <div class="flex gap-2"><span class="text-outline">--brand-radius:</span> <span>9999px;</span></div>
                </div>
                <div class="flex gap-4">
                  <div class="h-8 w-full bg-emerald-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Metric Card -->
          <div class="bg-primary-container text-on-primary-container p-6 rounded-xl relative overflow-hidden">
            <span class="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10" data-icon="star" data-weight="fill">star</span>
            <h4 class="font-bold mb-2">CRN 5-Star Benchmark</h4>
            <p class="text-sm opacity-90 leading-relaxed">
              Evaluated on technical innovation, partner support, and overall platform excellence. Our frontend design system was cited as a core competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Consistency Footer Section -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center pb-12" id="contact">
      <LetsConnect />
    </section>
  </div>
</template>

<script setup>
import LetsConnect from '../../components/LetsConnect.vue';

useHead({
  title: 'Case Study: Multi-Tenant Design System'
})
</script>
