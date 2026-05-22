<template>
  <div>
    <!-- Hero Content -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="flex flex-col gap-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-container-low w-fit">
            <span class="size-2 rounded-full bg-green-500 animate-pulse"></span>
            <span class="text-code-label uppercase text-slate-text">Open for Collaboration</span>
          </div>
          <h1 class="text-display-lg-mobile md:text-display-lg text-on-surface">Jayden Hluszko — Senior Frontend Engineer bridging the gap between <span class="text-primary">Angular & Vue systems</span> and business ROI.</h1>
          <p class="text-headline-md text-on-surface-variant max-w-xl">
            Currently building scalable, themeable architectures at ChannelAssist. Focused on high-performance web applications and enterprise design systems.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#work" class="h-14 px-8 bg-primary text-on-primary text-base font-bold rounded-xl hover:scale-[1.02] transition-transform flex items-center gap-2">
              View Case Studies
              <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </a>
            <a href="#about" class="h-14 px-8 border border-border-subtle text-on-surface text-base font-bold rounded-xl hover:bg-surface-container-high transition-colors flex items-center">
              About Me
            </a>
          </div>
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary-container rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div class="relative bg-surface-container-highest rounded-2xl aspect-square overflow-hidden border border-border-subtle">
            <img src="~/assets/images/me.webp" alt="Jayden Hluszko" class="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Bar -->
    <section class="border-y border-border-subtle bg-surface-container-low/50 backdrop-blur-sm py-12">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="flex flex-col items-center md:items-start gap-2">
            <span class="text-code-label text-primary uppercase tracking-widest">Growth Metric</span>
            <p class="text-5xl font-black text-on-surface">450%</p>
            <p class="text-on-surface-variant text-base">Organic Traffic Increase</p>
          </div>
          <div class="flex flex-col items-center md:items-start gap-2 border-t md:border-t-0 md:border-x border-border-subtle pt-6 md:pt-0 md:px-12">
            <span class="text-code-label text-primary uppercase tracking-widest">Industry Standard</span>
            <p class="text-5xl font-black text-on-surface">5-Star</p>
            <p class="text-on-surface-variant text-base">CRN Rating (2024/25)</p>
          </div>
          <div class="flex flex-col items-center md:items-start gap-2 border-t md:border-t-0 border-border-subtle pt-6 md:pt-0">
            <span class="text-code-label text-primary uppercase tracking-widest">Optimization</span>
            <p class="text-5xl font-black text-on-surface">15%</p>
            <p class="text-on-surface-variant text-base">Core Web Vital Gain</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Grid -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32" id="work">
      <div class="flex flex-col gap-4 mb-12">
        <h2 class="text-headline-md text-on-surface">Selected Case Studies</h2>
        <div class="h-1 w-24 bg-primary rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 gap-12">
        <!-- Case 1 -->
        <div class="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:border-primary/30 transition-all duration-500">
          <div class="h-[300px] lg:h-[400px] bg-surface-container overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD99EuKcemRHApWv3SAzZJ5ur__I3S7QW-d7fzneqfVpoga1p7avqDMSDvG-_Qjmc093CNGKqCmy3z-qi_GnIahWKLnqfEVfQlNOEQOcUnVQpg339Q98k4remoSo6zA4kVfMCnz5kQsS3ig8dWtcoc8_N7hcopMlsu2IfpsRReljBNyW0H394T_JGrQfL7phPkzzhlJKQmZiK8MZ0iYQUyyRVXTfRXkTGvI2eDnUpbn9QvWXDfrLWjSJYOj0Z9DNXisxmPo14wqSM71'); background-size: cover; background-position: center;">
          </div>
          <div class="p-8 lg:p-12 flex flex-col justify-center gap-6">
            <span class="text-code-label text-primary font-mono tracking-tighter">PROJECT_01 // ChannelAssist</span>
            <h3 class="text-3xl lg:text-4xl font-extrabold text-on-surface leading-tight">Multi-Tenant Design System</h3>
            <p class="text-on-surface-variant text-lg">Architecting a scalable, themeable UI architecture for enterprise clients. Engineered a robust foundation that allows seamless white-labeling across hundreds of corporate portals.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Angular</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">.NET MVC</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Bootstrap</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">CSS3</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Storybook</span>
            </div>
            <div class="bg-surface-container-low p-6 rounded-xl border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p class="text-on-surface font-bold text-2xl">5-Star</p>
                <p class="text-slate-text text-sm">Industry Rating</p>
              </div>
              <div class="flex flex-wrap gap-4">
                <button class="h-10 px-5 bg-primary text-on-primary text-sm font-bold rounded hover:brightness-110" @click="$router.push('/case-studies/multi-tenant-design-system')">View Case Study</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Case 2 -->
        <div class="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:border-primary/30 transition-all duration-500">
          <div class="lg:order-2 h-[300px] lg:h-[400px] bg-surface-container overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9L4CGcsAIoLAzfT8ajQxGE4abtEF4-No-kJ3wz76YpWk2DfGTkwnpijUR318oHVoIP76EmneWmCHGVF9ifk-I2uDJrfgICOfY9Lma-uPznKk_8vYNx6jTYBnm_0AQNdNQO3tfnW0liSdjR5AxFPhX0hoP6Z3JBtCx4vlTZp_tXTpyAZdwhtFGJfcGLbiDMA5YSVDV-7xAbpZStbLpo7bUt4YQbciZ7EoS10Rk8L4DcJdVqBtqHgfq8avJ6FthvK6qauRauAb2Cutp'); background-size: cover; background-position: center;">
          </div>
          <div class="lg:order-1 p-8 lg:p-12 flex flex-col justify-center gap-6">
            <span class="text-code-label text-primary font-mono tracking-tighter">PROJECT_02 // Bagal Immigration</span>
            <h3 class="text-3xl lg:text-4xl font-extrabold text-on-surface leading-tight">Growth-Driven Redesign</h3>
            <p class="text-on-surface-variant text-lg">Full-scale transformation of a legacy immigration platform. Focused on performance optimization and SEO-driven architecture to maximize lead generation and user retention.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Nuxt.js</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Vue.js</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">SEO Engine</span>
            </div>
            <div class="bg-surface-container-low p-6 rounded-xl border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p class="text-on-surface font-bold text-2xl">+450%</p>
                <p class="text-slate-text text-sm">Organic Traffic</p>
              </div>
              <div class="flex flex-wrap gap-4">
                <button class="h-10 px-5 bg-primary text-on-primary text-sm font-bold rounded hover:brightness-110" @click="$router.push('/case-studies/growth-driven-redesign')">View Case Study</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Case 3 -->
        <div class="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:border-primary/30 transition-all duration-500">
          <div class="h-[300px] lg:h-[400px] bg-surface-container overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDILVUF-iU9vAr6eIaL1nAxsIm5tN6sLir9gz8hMHcdyGvfb3Eh2UaJXzWbnDkRbWlrBb211SCRnGFKP7LbRmp-9YWd3bQrEKdc4vSJdiqsjg6YkhaLbpIQHeVzVzQQ805DbdVvLHyn_G719xAx1XpeBfoPORP94jSdVQTM7NMZt5SjS9LwV31QwxmndswuGa9a6lVtkgG809e4PZF_8u7Gxkh93T99XC6ttRTCCl5W4ue2jJod0l154xnyg2qrujwCBCiXf_G9GKt-'); background-size: cover; background-position: center;">
          </div>
          <div class="p-8 lg:p-12 flex flex-col justify-center gap-6">
            <span class="text-code-label text-primary font-mono tracking-tighter">PROJECT_03 // Internal POC</span>
            <h3 class="text-3xl lg:text-4xl font-extrabold text-on-surface leading-tight">AI Claim Builder POC</h3>
            <p class="text-on-surface-variant text-lg">Proof of concept for automated claim processing. Integrating Azure AI Document Intelligence to extract and validate data from unstructured documents with 99% accuracy.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Azure AI</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Document Intelligence</span>
              <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Cognitive Services</span>
            </div>
            <div class="bg-surface-container-low p-6 rounded-xl border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p class="text-on-surface font-bold text-2xl">Azure</p>
                <p class="text-slate-text text-sm">AI Integration</p>
              </div>
              <div class="flex flex-wrap gap-4">
                <button class="h-10 px-5 bg-primary text-on-primary text-sm font-bold rounded hover:brightness-110" @click="$router.push('/case-studies/ai-claim-builder')">View Case Study</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-surface-container-lowest py-32" id="about">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div class="relative">
          <h2 class="text-4xl md:text-5xl font-black text-on-surface mb-8">Professional Evolution</h2>
          <div class="flex flex-col gap-6 text-on-surface-variant text-lg leading-relaxed">
            <p>My journey has been defined by a significant evolution from a highly effective solo developer and freelancer to a collaborative leader within complex enterprise environments.</p>
            <p>This represents a phase where technical execution meets business strategy. It’s no longer just about writing clean code; it's about architecting systems that empower teams, reduce technical debt, and drive measurable ROI for stakeholders.</p>
            <p>At ChannelAssist, I bridge the gap between design and engineering, ensuring our multi-tenant architectures remain performant, themeable, and ready for global scale.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-4">
            <div class="bg-surface-container p-8 rounded-2xl border border-border-subtle">
              <span class="material-symbols-outlined text-primary mb-4" data-icon="groups">groups</span>
              <h4 class="text-on-surface font-bold mb-2">Team Collaboration</h4>
              <p class="text-sm text-on-surface-variant">Bridging the gap between design and engineering to contribute effectively within high-velocity teams.</p>
            </div>
            <div class="bg-surface-container p-8 rounded-2xl border border-border-subtle">
              <span class="material-symbols-outlined text-primary mb-4" data-icon="architecture">architecture</span>
              <h4 class="text-on-surface font-bold mb-2">Architecture</h4>
              <p class="text-sm text-on-surface-variant">Designing resilient frontend structures that survive scale and evolution.</p>
            </div>
          </div>
          <div class="space-y-4 pt-0 sm:pt-12">
            <div class="bg-surface-container p-8 rounded-2xl border border-border-subtle">
              <span class="material-symbols-outlined text-primary mb-4" data-icon="insights">insights</span>
              <h4 class="text-on-surface font-bold mb-2">Business ROI</h4>
              <p class="text-sm text-on-surface-variant">Aligning technical decisions with core business objectives and user growth.</p>
            </div>
            <div class="bg-surface-container p-8 rounded-2xl border border-border-subtle">
              <span class="material-symbols-outlined text-primary mb-4" data-icon="terminal">terminal</span>
              <h4 class="text-on-surface font-bold mb-2">Technical Depth</h4>
              <p class="text-sm text-on-surface-variant">Hands-on expertise in Vue, Angular, TypeScript, and the modern web stack.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center pb-12" id="contact">
      <LetsConnect />
    </section>
  </div>
</template>

<script setup>
import LetsConnect from '../components/LetsConnect.vue';
useHead({
  title: 'Jayden Hluszko | Senior Frontend Engineer'
})
</script>
