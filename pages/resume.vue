<template>
  <div>
    <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-24">
      <!-- Hero / Intro Section -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-24">
        <div class="md:col-span-7">
          <div class="inline-flex items-center gap-2 bg-secondary-container/20 text-secondary border border-secondary-container/30 px-3 py-1 rounded-full mb-6">
            <span class="material-symbols-outlined text-[16px]" data-icon="verified_user">verified_user</span>
            <span class="font-code-label text-code-label">BUSINESS ENGINEER</span>
          </div>
          <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 text-on-surface">Building <span class="text-primary">Scalable UI</span> for Complex Technical Systems.</h1>
          <p class="text-on-surface-variant max-w-2xl text-body-base mb-8">
            Senior Frontend Engineer with 6+ years of experience building high-performing SaaS applications. Specialist in Angular, Vue, and TypeScript, focused on bridging the gap between deep technical implementation and executive-level business impact.
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded border border-primary/20 flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-[20px]" data-icon="architecture">architecture</span>
              </div>
              <div>
                <div class="font-code-label text-[11px] text-primary uppercase tracking-widest">Architectural Impact</div>
                <div class="text-on-surface font-semibold text-[15px]">Senior Experience</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded border border-tertiary/20 flex items-center justify-center">
                <span class="material-symbols-outlined text-tertiary text-[20px]" data-icon="speed">speed</span>
              </div>
              <div>
                <div class="font-code-label text-[11px] text-tertiary uppercase tracking-widest">Performance KPI</div>
                <div class="text-on-surface font-semibold text-[15px]">15% LCP Improvement</div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-5 relative">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary-container rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div class="relative bg-surface-container-highest rounded-2xl aspect-square overflow-hidden border border-border-subtle">
              <img src="~/assets/images/me.webp" alt="Jayden Hluszko" class="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <!-- Experience & Education Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <!-- Left Column: Work Experience -->
        <section class="md:col-span-2 space-y-gutter">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-primary" data-icon="work">work</span>Work Experience
            </h2>
            <div class="h-px flex-grow bg-border-subtle"></div>
          </div>
          
          <!-- ChannelAssist -->
          <article class="glass-panel p-8 rounded-xl relative">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="font-headline-md text-headline-md text-primary mb-1">Front-End Developer</h3>
                <p class="text-on-surface font-semibold">ChannelAssist</p>
              </div>
              <div class="text-right">
                <span class="font-code-label text-code-label text-slate-text bg-surface-container-high px-3 py-1 rounded">Jun 2022 - Present</span>
              </div>
            </div>
            <ul class="space-y-4 text-on-surface-variant text-body-sm list-none">
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-primary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Spearheaded the front-end development of a global sales engagement web app using Angular and TypeScript, architecting scalable UI components and integrating RESTful APIs.</span>
              </li>
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-primary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Optimized performance against Core Web Vitals (LCP, CLS, FCP), achieving 15% faster load times through Lighthouse audits and legacy code refactoring.</span>
              </li>
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-primary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Enhanced CI/CD pipelines with Azure DevOps and Git, ensuring reliable deployments and transferable expertise for AWS Amplify.</span>
              </li>
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-primary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Collaborated with designers via Figma and built reusable components aligned with scalable design systems.</span>
              </li>
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-primary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Applied AI-assisted tools for refactoring, diagnostics, and documentation, accelerating delivery and shaping team best practices.</span>
              </li>
            </ul>
          </article>
          
          <!-- Bagal -->
          <article class="glass-panel p-8 rounded-xl">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="font-headline-md text-headline-md text-on-surface mb-1">Full Stack Developer & Marketing Manager</h3>
                <p class="text-on-surface font-semibold">Bagal – Immigration and Legal Services</p>
              </div>
              <div class="text-right">
                <span class="font-code-label text-code-label text-slate-text bg-surface-container-high px-3 py-1 rounded whitespace-nowrap">Dec 2020 - Jun 2022</span>
              </div>
            </div>
            <ul class="space-y-4 text-on-surface-variant text-body-sm list-none">
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-secondary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Directed the end-to-end redesign of the company’s website, embedding accessibility (WCAG 2.1, AODA) and compliance from the ground up.</span>
              </li>
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-secondary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Rebuilt public-facing website with Vue.js, driving a 450% increase in organic traffic within 8 months.</span>
              </li>
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-secondary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Developed a secure CMS in .NET MVC and C# to manage sensitive client records.</span>
              </li>
            </ul>
            <div class="mt-6 flex items-center gap-2">
              <span class="font-code-label text-[11px] bg-secondary-container/20 text-secondary border border-secondary-container/30 px-2 py-0.5 rounded uppercase tracking-wider">Vue.js</span>
              <span class="font-code-label text-[11px] bg-secondary-container/20 text-secondary border border-secondary-container/30 px-2 py-0.5 rounded uppercase tracking-wider">.NET MVC</span>
              <span class="font-code-label text-[11px] bg-secondary-container/20 text-secondary border border-secondary-container/30 px-2 py-0.5 rounded uppercase tracking-wider">SEO</span>
            </div>
          </article>
          
          <!-- Freelance -->
          <article class="glass-panel p-8 rounded-xl">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="font-headline-md text-headline-md text-on-surface mb-1">Web Developer</h3>
                <p class="text-on-surface font-semibold">Freelance</p>
              </div>
              <div class="text-right">
                <span class="font-code-label text-code-label text-slate-text bg-surface-container-high px-3 py-1 rounded whitespace-nowrap">Sep 2019 - Present</span>
              </div>
            </div>
            <ul class="space-y-4 text-on-surface-variant text-body-sm list-none">
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-tertiary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Led the design, development and execution of websites for multiple clients using Vue.js, NUXT, MongoDB, ExpressJS, Netlify and WordPress.</span>
              </li>
              <li class="flex gap-3">
                <span class="material-symbols-outlined text-tertiary shrink-0 text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Managed end-to-end delivery of web projects including planning, stakeholder facilitation, and vendor coordination.</span>
              </li>
            </ul>
          </article>
        </section>

        <!-- Right Column: Competencies & Education -->
        <aside class="space-y-gutter">
          <!-- Competencies Section -->
          <div class="space-y-4">
            <h2 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>Core Competencies
            </h2>
            <!-- Languages & Frameworks -->
            <div class="py-4 border-b border-border-subtle">
              <div class="font-code-label text-primary text-[11px] mb-4 tracking-widest uppercase">Languages & Frameworks</div>
              <div class="flex flex-wrap gap-x-4 gap-y-2 text-on-surface text-[13px]">
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> Angular</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> Vue.js</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> TypeScript</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> JavaScript (ES6+)</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> NUXT</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> CSS3 / SCSS</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> .NET (C#)</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-primary/40"></span> MongoDB</span>
              </div>
            </div>
            <!-- Software & Tools -->
            <div class="py-4 border-b border-border-subtle">
              <div class="font-code-label text-tertiary text-[11px] mb-4 tracking-widest uppercase">Software & Tools</div>
              <div class="flex flex-wrap gap-x-4 gap-y-2 text-on-surface text-[13px]">
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-tertiary/40"></span> Git</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-tertiary/40"></span> Azure DevOps</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-tertiary/40"></span> AWS Amplify</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-tertiary/40"></span> Adobe Suite</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-tertiary/40"></span> Figma</span>
                <span class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-tertiary/40"></span> Netlify</span>
              </div>
            </div>
            <!-- Additional Strengths -->
            <div class="py-4 border-b border-border-subtle">
              <div class="font-code-label text-secondary text-[11px] mb-4 tracking-widest uppercase">Additional Strengths</div>
              <div class="space-y-2">
                <div class="flex justify-between items-center text-[13px]">
                  <span class="text-on-surface">Accessibility (WCAG)</span>
                  <span class="text-secondary font-bold">Expert</span>
                </div>
                <div class="flex justify-between items-center text-[13px]">
                  <span class="text-on-surface">Performance / SEO</span>
                  <span class="text-secondary font-bold">Advanced</span>
                </div>
                <div class="flex justify-between items-center text-[13px]">
                  <span class="text-on-surface">CI / CD Pipelines</span>
                  <span class="text-secondary font-bold">Advanced</span>
                </div>
              </div>
            </div>
            <!-- Currently Learning -->
            <div class="mt-4">
              <div class="font-code-label text-primary text-[11px] mb-2 tracking-widest uppercase">Continuous Dev</div>
              <div class="text-[12px] font-medium text-primary/80 leading-relaxed">
                React.js / Next.js • Cypress • AI Integration (Copilot)
              </div>
            </div>
          </div>
          <!-- Education Section (With very large margin top) -->
          <div class="mt-32">
            <h2 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary" data-icon="school">school</span>
              Education
            </h2>
            <div class="space-y-4">
              <div>
                <div class="text-primary font-bold">Interactive Media Design – Web (Honours)</div>
                <div class="text-on-surface text-body-sm">Georgian College</div>
                <div class="text-slate-text font-code-label text-[12px] mt-1 uppercase tracking-wider">Sep 2017 - Apr 2019 | Barrie, ON</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center pb-12" id="contact">
      <div class="glass-card p-8 md:p-16 rounded-3xl relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
        <h2 class="text-4xl md:text-5xl font-black text-on-surface mb-6">Let's Connect</h2>
        <p class="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Whether you're looking for architectural guidance, a senior frontend lead, or a discussion on building for scale — I'm always open to new challenges.
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <a class="h-14 px-10 bg-primary text-on-primary text-base font-bold rounded-xl flex items-center gap-3 hover:scale-105 transition-transform w-full md:w-auto" href="mailto:hello@jaydenhluszko.com">
            <span class="material-symbols-outlined" data-icon="mail">mail</span>
            Email Me
          </a>
          <div class="flex items-center gap-4">
            <a class="size-14 border border-border-subtle rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors" href="#">
              <svg class="size-6 text-on-surface" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
            <a class="size-14 border border-border-subtle rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors" href="#">
              <span class="material-symbols-outlined text-on-surface" data-icon="public">public</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Resume | Jayden Hluszko - Senior Frontend Engineer'
})
</script>
