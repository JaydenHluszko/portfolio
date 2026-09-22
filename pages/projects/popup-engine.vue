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
                                Custom Popup Engine
                            </h1>
                            <p class="font-headline-md text-headline-md text-on-surface-variant font-light leading-relaxed">
                                A native, extensible modal system designed to replace costly third-party integrations with an in-house targeting and localization engine.
                            </p>
                        </div>
                        <!-- Quick Facts Metadata Bar -->
                        <QuickFacts
                            role="Lead Full Stack Architect &amp; Consultant"
                            :technologies="['C#', 'ASP.NET MVC', 'Entity Framework', 'SQL']"
                            timeline="2026 • 1-Month Delivery"
                            scope="API Development, Database Architecture, UI/UX Design"
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
                                        <span class="font-mono">admin.portal.internal/runtime/dashboard/message-center/popups</span>
                                    </div>
                                </div>
                                <!-- Telemetry HUD -->
                                <div class="flex items-center gap-2 sm:gap-3">
                                    <div class="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>.NET / C#</span>
                                    </div>
                                    <div class="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>Entity Framework</span>
                                    </div>
                                    <div class="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>SQL Server</span>
                                    </div>
                                    <span class="items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">Cost Elimination</span>
                                </div>
                            </div>
                            <!-- Main Canvas Screen Media -->
                            <div class="relative overflow-hidden rounded-md aspect-[16/9] md:aspect-[21/10] bg-surface-container-highest">
                                <img src="~/assets/images/popup-engine.png" class="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out" alt="A side-by-side comparison of three multi-tenant storefronts for HPE, AMD, and HP, demonstrating how a single underlying design system dynamically adapts to distinct brand themes, dark and light modes, and custom color palettes." />
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
                                Reclaiming Ownership from Costly Dependencies
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">The organization faced escalating annual price increases from an outsourced popup provider, creating a mandate to build a native solution for call-to-actions and onboarding.</p>
                        </div>
                        <!-- The Problem Narrative Card -->
                        <ProblemNarrative
                            title="Operational Bottlenecks and UI Rigidity"
                            description1="The organization relied heavily on an outsourced tool for customer-facing popups, which introduced recurring yearly price increases and required third-party embedding."
                            description2="This impacted Finance through escalating costs and the CX team through cumbersome operational efforts. The directive was to build an internal feature focused strictly on replacing the popups used today, while ensuring the architecture was flexible enough to support additional template options in the future."
                            cardTitle="Third-Party Dependency"
                            cardSubtitle="Escalating Costs"
                            cardDescription="Relying on an outsourced vendor resulted in unsustainable yearly price hikes and forced CX teams to use fragmented, third-party embedding."
                            :comparison1="{
                                title: 'Licensing Fees',
                                value: 'Annual Increases',
                                valueColor: 'text-error',
                                percentage: '82',
                                percentageColor: 'bg-error',
                            }"
                            :comparison2="{
                                title: 'Publishing Workflow',
                                value: 'External Dependencies',
                                valueColor: 'text-on-surface',
                                percentage: '72',
                                percentageColor: 'bg-tertiary-container',
                            }"
                        />                        
                        <!-- Constraints Micro-Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                            <CardProject
                                title="Escalating Vendor Costs" 
                                description="Yearly price hikes from a third-party vendor created an unsustainable financial model for basic onboarding and CTA modals." 
                                icon="price_change" 
                                iconColor="bg-secondary-fixed/50 text-secondary"
                            />
                            <CardProject
                                title="Operational Friction" 
                                description="CX coordinators were bottlenecked by third-party publishing workflows, requiring a faster, fully in-house solution without external embedding." 
                                icon="pending_actions" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject
                                title="Fragmented Customer Experience" 
                                description="The business required a unified experience where popups are displayed automatically on the homepage load, specifically targeting authenticated customers." 
                                icon="hub" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                        </div>
                    </section>
                    <!-- SECTION 3: ARCHITECTURE & THE ICEBERG REVEAL -->
                    <section class="relative w-full py-space-xl">
                        <p class="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">02 / Architecture</p>
                        <div class="flex flex-col md:flex-row justify-between gap-space-sm mb-space-lg">
                            <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                                Role-Targeted Carousel & Delivery Engine
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                                Architected a scalable MVC solution with dedicated database tables and a centralized service layer to handle role-based targeting, localization, and customer dismissal tracking.
                            </p>
                        </div>
                        <!-- Interactive Pipeline Schematic Diagram -->
                        <Flowchart
                            title="Popup Delivery Engine"
                            description="Architecture fully decouples popup content from third-party dependencies, leveraging a centralized service to strict-check eligibility before UI injection."
                            result="Max Slides: 10"
                            :step1="{
                                title: 'Dedicated SQL Tables',
                                subtitle: 'Data Layer',
                                description: 'Stores popup configuration, localized carousel slides, and interaction tracking',
                                icon: 'database',
                                titleColor: 'text-on-surface-variant',
                                subtitleColor: 'text-secondary',
                                descriptionColor: 'text-primary',
                                cardColor: 'bg-surface-container-low hover:bg-surface-container'
                            }"
                            :step2="{
                                title: 'IPopupService',
                                subtitle: 'Service Logic',
                                description: 'Resolves active popups, evaluates customer role eligibility, and processes dismissal tracking.',
                                icon: 'api',
                                titleColor: 'text-on-primary',
                                subtitleColor: 'text-secondary-fixed-dim',
                                descriptionColor: 'text-on-primary-container',
                                cardColor: 'bg-primary-container text-on-primary'
                            }"
                            :step3="{
                                title: 'Carousel Modal',
                                subtitle: 'Storefront UI',
                                description: 'Natively renders targeted, multi-slide content automatically on homepage load for authenticated customers.',
                                icon: 'palette',
                                titleColor: 'text-on-surface-variant',
                                subtitleColor: 'text-secondary',
                                descriptionColor: 'text-primary',
                                cardColor: 'bg-surface-container-low hover:bg-surface-container'
                            }"
                        />
                        <div class="rounded-lg bg-inverse-surface text-inverse-on-surface shadow-xl overflow-hidden mb-space-lg">
                            <div class="p- space-md md:p-6 font-mono text-[13px] leading-relaxed overflow-x-auto">
                                <div class="block space-y-1">
                                    <div class="bg-inverse-surface text-inverse-on-surface font-mono text-[13px] transition-colors bg-inverse-surface text-inverse-on-surface font-medium">C#</div>
                                    <div class="text-outline-variant">
                                        // Implemented within IPopupService to resolve eligibility and track dismissals
                                    </div>
                                    <div>
                                        <span class="text-secondary-fixed">bool</span> <span class="text-tertiary-fixed-dim">EvaluateEligibility</span>(<span class="text-secondary-fixed">Customer</span> customer, <span class="text-secondary-fixed">Popup</span> activePopup);
                                    </div>
                                    <div>
                                        <span class="text-secondary-fixed">void</span> <span class="text-tertiary-fixed-dim">RecordDismissal</span>(<span class="text-secondary-fixed">int</span> customerId, <span class="text-secondary-fixed">int</span> popupId);
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Technical Trade-offs Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                            <CardProject
                                title="Extensible Data Models" 
                                description="Engineered three new database tables using an abstracted PopupTypeId to support current Carousel needs while laying the groundwork for future Info Banners." 
                                icon="database" 
                                iconColor="bg-primary-fixed text-primary" 
                                impact="Scalable architecture"
                            />
                            <CardProject
                                title="Intelligent Dismissal Tracking" 
                                description="Customer dismissals are explicitly tracked so the popup remains hidden after the user has seen and dismissed it." 
                                icon="visibility_off" 
                                iconColor="bg-secondary-fixed/50 text-secondary" 
                                impact="Zero modal fatigue"
                            />
                            <CardProject
                                title="Role-Based Targeting" 
                                description="Built targeting logic using Role Mapping and 'Launch On First Login' support to ensure the system strictly evaluates eligibility before rendering content to the storefront." 
                                icon="manage_accounts" 
                                iconColor="bg-primary-fixed text-primary" 
                                impact="Strict eligibility control"
                            />
                        </div>
                    </section>
                    <!-- SECTION 4: IMPACT & ENGINEERING TAKEAWAYS -->
                    <section class="relative w-full py-space-xl">
                        <p class="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">03 / Outcomes</p>
                        <div class="flex flex-col md:flex-row justify-between gap-space-sm mb-space-lg">
                            <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                                Measured Cost & Operational Efficiency
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                                Successfully transitioned away from third-party embedding, delivering an autonomous, in-house publishing tool that eliminated third-party subscription overhead.
                            </p>
                        </div>
                        <!-- Impact Metrics Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
                            <CardProject
                                title="Cost Elimination" 
                                description="Total elimination of third-party embedding and associated yearly licensing fees." 
                                icon="money_off" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject 
                                title="10 Max Slides" 
                                description="Maximum number of localized, drag-and-drop slides supported per Carousel Popup." 
                                icon="view_carousel" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject 
                                title="Extensible Data Modeling" 
                                description="New database tables deployed to handle configuration, slide content, and customer interaction tracking." 
                                icon="database" 
                                iconColor="bg-secondary-fixed/50 text-secondary"
                            />
                            <CardProject 
                                title="First Login Targeting" 
                                description="Targeting successfully implemented to trigger specific onboarding experiences automatically." 
                                icon="login" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                        </div>
                        <!-- Editorial Engineering Reflection -->
                         <EngineeringReflections 
                            title="High-performance ergonomics: Extensibility without over-engineering"
                            description1="The primary challenge of this initiative was delivering immediate business value—replacing the existing third-party carousels to stop financial bleed—without painting the architecture into a corner. By abstracting the popup framework and isolating slide content into a dedicated PopupSlide table, the system handles the immediate demand for multi-slide image carousels while establishing the foundational framework for upcoming Info Banners."
                            description2="Furthermore, handling customer interactions directly in the Popup_Customer table ensures we respect user friction. The system intelligently honors dismissals to prevent modal fatigue."
                            nextHorizon="Integrate additional Popup Types to further support business needs and improve customer experience."
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