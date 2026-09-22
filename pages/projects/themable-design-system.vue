<template>
    <div class="bg-background font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed relative min-h-screen antialiased">
        <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div class="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-surface-container-high opacity-35 blur-[120px]"></div>
            <div class="absolute top-1/3 right-1/4 h-[480px] w-[480px] rounded-full bg-secondary-fixed opacity-30 blur-[130px]"></div>
        </div>
        <div class="relative z-10 w-full pt-16 bg-transparent">
            <div class="max-w-7xl mx-auto px-margin-mobile min-h-[calc(100vh-14rem)]">
                <div class="flex flex-col w-full">
                    <!-- SECTION 1: HERO & THE BIG PICTURE -->
                    <section class="relative w-full pt-4 pb-space-xl">
                        <!-- Breadcrumb & Status Pill -->
                        <Breadcrumbs title="Multi-tenant Themeable Design System" />
                        <!-- Title & Editorial Subtitle -->
                        <div class="max-w-4xl mb-space-lg">
                            <h1 class="font-display-lg text-display-lg text-primary tracking-tight mb-space-sm leading-[1.05]">
                                Multi-tenant Themeable Design System
                            </h1>
                            <p class="font-headline-md text-headline-md text-on-surface-variant font-light leading-relaxed">
                                A highly scalable, component-based frontend architecture supporting infinite client branding with zero code bloat.
                            </p>
                        </div>
                        <!-- Quick Facts Metadata Bar -->
                        <QuickFacts
                            role="Lead Frontend Architect &amp; Engineer"
                            :technologies="['.NET', 'Angular', 'CSS Variables']"
                            timeline="2024 • 6-Month Delivery"
                            scope="Scalability, Multi-Tenancy, UI Architecture"
                        />
                        <!-- Visual Anchor: Showcase Viewport Mockup -->
                        <div class="relative group rounded-lg bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(30,41,59,0.12)] p-3 md:p-5 transition-all duration-300" id="demo-preview">
                            <!-- Browser Top Bar -->
                            <div class="flex items-center justify-between pb-3 px-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-3 h-3 rounded-full bg-error/70"></div>
                                    <div class="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                                    <div class="w-3 h-3 rounded-full bg-secondary-fixed"></div>
                                    <div class="ml-3 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low font-label-sm text-[12px] text-on-surface-variant">
                                        <span class="material-symbols-rounded text-[14px] text-secondary">lock</span>
                                        <span class="font-mono">admin.portal.internal/runtime/design-system/preview</span>
                                    </div>
                                </div>
                                <!-- Telemetry HUD -->
                                <div class="flex items-center gap-2 sm:gap-3">
                                    <div class="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>ASP.NET MVC</span>
                                    </div>
                                    <div class="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>Angular</span>
                                    </div>
                                    <div class="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>CSS Variables</span>
                                    </div>
                                    <span class="items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">Multi-Tenant</span>
                                </div>
                            </div>
                            <!-- Main Canvas Screen Media -->
                            <div class="relative overflow-hidden rounded-md aspect-[16/9] md:aspect-[21/10] bg-surface-container-highest">
                                <img src="~/assets/images/design-system.png" class="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out" alt="A side-by-side comparison of three multi-tenant storefronts for HPE, AMD, and HP, demonstrating how a single underlying design system dynamically adapts to distinct brand themes, dark and light modes, and custom color palettes."/>
                                <!-- Interactive Dynamic Overlay Vignette -->
                                <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION 2: CONTEXT & CHALLENGE -->
                    <section class="relative w-full py-space-xl">
                        <p class="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">01 / Problem</p>
                        <div class="flex flex-col md:flex-row justify-between gap-space-sm mb-space-lg">
                            <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                                Overcoming Multi-Tenant Scaling Limits
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">The platform faced critical scaling limits because handling custom client formatting, branding, and layouts was causing a severe operational bottleneck.</p>
                        </div>
                        <!-- The Problem Narrative Card -->
                        <ProblemNarrative
                            title="Operational Bottlenecks and UI Rigidity"
                            description1="As the lead Frontend Architect & Engineer, I recognized that writing new code for every single client deployment was unsustainable. Our multi-tenant platform required a complete redesign focused heavily on scalability and multi-tenancy."
                            description2="We needed a foundational shift that would allow us to deploy client-specific branding and themes dynamically, ensuring a premium user experience across the board without maintaining separate codebases or custom deployments for each tenant."
                            cardTitle="Legacy Architecture Bottleneck"
                            cardSubtitle="Unoptimized Logic"
                            cardDescription="Scaling was limited by redundant and unoptimized logic, requiring months of onboarding time per enterprise client."
                            :comparison1="{
                                title: 'Client Onboarding',
                                value: '6 Months',
                                valueColor: 'text-error',
                                percentage: '78',
                                percentageColor: 'bg-error',
                            }"
                            :comparison2="{
                                title: 'Operational Status',
                                value: 'High Overhead',
                                valueColor: 'text-on-surface',
                                percentage: '85',
                                percentageColor: 'bg-tertiary-container',
                            }"
                        />                        
                        <!-- Constraints Micro-Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                            <CardProject
                                title="Operational Bottleneck" 
                                description="Handling client formatting and layouts manually limited the platform's ability to scale efficiently." 
                                icon="hourglass_empty" 
                                iconColor="bg-secondary-fixed/50 text-secondary"
                            />
                            <CardProject
                                title="Deployment Friction" 
                                description="Requiring new codebase additions for every new client drastically increased our time-to-market." 
                                icon="sync_problem" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject
                                title="Code Bloat Threat" 
                                description="Managing infinite client variations through hardcoded logic threatened the long-term maintainability of the platform." 
                                icon="code_blocks" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                        </div>
                    </section>
                    <!-- SECTION 3: ARCHITECTURE & THE ICEBERG REVEAL -->
                    <section class="relative w-full py-space-xl">
                        <p class="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">02 / Architecture</p>
                        <div class="flex flex-col md:flex-row justify-between gap-space-sm mb-space-lg">
                            <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                                A Decoupled, Component-Based Foundation
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                                Built a modular component system from scratch that separated styling from application logic to inject client themes on-the-fly.
                            </p>
                        </div>
                        <!-- Interactive Pipeline Schematic Diagram -->
                        <Flowchart
                            title="Themeable Design System"
                            description="Architecture decoupled core logic from presentation, utilizing CSS Variables to map custom tenant properties dynamically without requiring a rebuild."
                            result="Onboarding: < 2 Weeks"
                            :step1="{
                                title: 'Multi-Tenant Config',
                                subtitle: 'Client Themes',
                                description: 'Client business requirements & branding data',
                                icon: 'database',
                                titleColor: 'text-on-surface-variant',
                                subtitleColor: 'text-secondary',
                                descriptionColor: 'text-primary',
                                cardColor: 'bg-surface-container-low hover:bg-surface-container'
                            }"
                            :step2="{
                                title: 'CSS Variables',
                                subtitle: 'Core Logic',
                                description: 'Map custom tenant properties dynamically',
                                icon: 'api',
                                titleColor: 'text-on-primary',
                                subtitleColor: 'text-secondary-fixed-dim',
                                descriptionColor: 'text-on-primary-container',
                                cardColor: 'bg-primary-container text-on-primary'
                            }"
                            :step3="{
                                title: '.NET, Angular',
                                subtitle: 'UI/UX',
                                description: 'Infinite client branding UI injection',
                                icon: 'palette',
                                titleColor: 'text-on-surface-variant',
                                subtitleColor: 'text-secondary',
                                descriptionColor: 'text-primary',
                                cardColor: 'bg-surface-container-low hover:bg-surface-container'
                            }"
                        />
                        <!-- Technical Trade-offs Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                            <CardProject
                                title="CSS Variable Engine" 
                                description="Engineered a dynamic theming system leveraging native CSS variables. Instead of writing new code for every client, we now only need to apply CSS updates." 
                                icon="palette" 
                                iconColor="bg-primary-fixed text-primary" 
                                impact="Code bloat eliminated"
                            />
                            <CardProject
                                title="Logic & Style Separation" 
                                description="Built a modular component system using Angular and .NET that completely separated frontend styling from core application logic." 
                                icon="schema" 
                                iconColor="bg-secondary-fixed/50 text-secondary" 
                                impact="Load times compressed by 27%"
                            />
                            <CardProject
                                title="Zero Custom Deployments" 
                                description="Achieved infinite client branding capabilities injected on-the-fly, entirely eliminating code bloat and the need for tenant-specific deployments." 
                                icon="auto_mode" 
                                iconColor="bg-primary-fixed text-primary" 
                                impact="Onboarding cut to 2 weeks"
                            />
                        </div>
                    </section>
                    <!-- SECTION 4: IMPACT & ENGINEERING TAKEAWAYS -->
                    <section class="relative w-full py-space-xl">
                        <p class="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">03 / Outcomes</p>
                        <div class="flex flex-col md:flex-row justify-between gap-space-sm mb-space-lg">
                            <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                                Measured Performance Realized
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                                The architectural overhaul eliminated custom deployments, significantly reduced time-to-market, and laid the foundation for top-tier industry recognition.
                            </p>
                        </div>
                        <!-- Impact Metrics Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
                            <CardProject
                                title="5 Star CRN Recognition" 
                                description="Earned a 5-star rating from CRN’s Partner Program Guide in both 2024 and 2025." 
                                icon="workspace_premium" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject 
                                title="Reduced Onboarding Timelines" 
                                description="Slashed client onboarding times from months to under two weeks." 
                                icon="speed" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject 
                                title="Infinite Scalable Configurations" 
                                description="Scalable client branding supported seamlessly by a single codebase." 
                                icon="all_inclusive" 
                                iconColor="bg-secondary-fixed/50 text-secondary"
                            />
                            <CardProject 
                                title="Zero Code Bloat" 
                                description="Eliminated code bloat or custom codebase deployments required per client." 
                                icon="code_off" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                        </div>
                        <!-- Editorial Engineering Reflection -->
                         <EngineeringReflections 
                            title="Infinite scalability: where business strategy meets modular architecture"
                            description1="The most rewarding insight from building this multi-tenant platform was proving that infinite client branding does not require endless codebase branching. By relying on strong design fundamentals and CSS architecture, we could completely separate styling from core application logic."
                            description2="I architected a modular system using .NET, Angular and CSS Variables that translated a critical operational bottleneck into a scalable, durable solution."
                            nextHorizon="Optimizing data-dense interfaces against Core Web Vitals (LCP, CLS, FCP) through rapid, iterative performance testing to further compress load times."
                         />
                        <!-- Contact & Collaboration Callout (Warm finale) -->
                        <Contact />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Breadcrumbs from '../../components/Breadcrumbs.vue';
    import EngineeringReflections from '../../components/EngineeringReflections.vue';
    import Flowchart from '../../components/Flowchart.vue';
    import ProblemNarrative from '../../components/ProblemNarrative.vue';
    import CardProject from '../components/CardProject.vue';
</script>