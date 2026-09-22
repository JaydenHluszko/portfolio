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
                        <Breadcrumbs title="Promotion Copy Feature" />
                        <!-- Title & Editorial Subtitle -->
                        <div class="max-w-4xl mb-space-lg">
                            <h1 class="font-display-lg text-display-lg text-primary tracking-tight mb-space-sm leading-[1.05]">
                                Promotion Copy Feature
                            </h1>
                            <p class="font-headline-md text-headline-md text-on-surface-variant font-light leading-relaxed">
                                A full-stack solution empowering the CX team to seamlessly duplicate complex campaigns, eliminating a massive operational bottleneck.
                            </p>
                        </div>
                        <!-- Quick Facts Metadata Bar -->
                        <QuickFacts
                            role="Full Stack Engineer & Consultant"
                            :technologies="['C#', 'ASP.NET MVC', 'LINQ to DB', 'REST APIs', 'Fetch API']"
                            timeline="2026 • 1-Month Delivery"
                            scope="Full-Stack Feature Architecture, Database Architecture"
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
                                        <span class="font-mono">admin.portal.internal/runtime/dashboard/promotions</span>
                                    </div>
                                </div>
                                <!-- Telemetry HUD -->
                                <div class="flex items-center gap-2 sm:gap-3">
                                    <div class="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>C# / .NET MVC</span>
                                    </div>
                                    <div class="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>LINQ to DB</span>
                                    </div>
                                    <div class="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">
                                        <span>Fetch API</span>
                                    </div>
                                    <span class="items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low font-mono font-label-sm text-label-sm text-on-surface-variant">Creation Time: -50%</span>
                                </div>
                            </div>
                            <!-- Main Canvas Screen Media -->
                            <div class="relative overflow-hidden rounded-md aspect-[16/9] md:aspect-[21/10] bg-surface-container-highest">
                                <img src="~/assets/images/promotion-copy.png" class="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out" alt="An administrative dashboard interface featuring a 'Copy Promotion' modal triggered from a data table, accompanied by a schematic diagram illustrating the backend database duplication process." />
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
                                Eliminating Manual Configuration Overhead
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">The CX team faced a severe operational bottleneck, forced to manually rebuild the same promotion from scratch multiple times for every required country.</p>
                        </div>
                        <!-- The Problem Narrative Card -->
                        <ProblemNarrative
                            title="Operational Bottlenecks and UI Rigidity"
                            description1="The primary goal of this feature was to reduce manual effort and improve the overall customer experience. Previously, CX coordinators had to upload the exact same promotion multiple times to deploy campaigns across different sites, taking a very long time to complete."
                            description2="The system needed a way to flawlessly duplicate the original promotion’s configuration—including complex templates, roles, tags, and locales—so the team could deploy within the same country without starting from the beginning."
                            cardTitle="Legacy Workflow"
                            cardSubtitle="Manual Data Entry"
                            cardDescription="CX coordinators were forced to manually upload identical promotions across multiple sites from scratch, causing severe delays."
                            :comparison1="{
                                title: 'Campaign Duplication',
                                value: 'Manual Rebuild',
                                valueColor: 'text-error',
                                percentage: '98',
                                percentageColor: 'bg-error',
                            }"
                            :comparison2="{
                                title: 'Operational Status',
                                value: 'Severe Overhead',
                                valueColor: 'text-on-surface',
                                percentage: '89',
                                percentageColor: 'bg-tertiary-container',
                            }"
                        />                        
                        <!-- Constraints Micro-Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                            <CardProject
                                title="Operational Bottleneck" 
                                description="CX coordinators were forced to manually re-upload identical promotions across multiple regional sites, severely dragging out deployment timelines."
                                icon="hourglass_empty" 
                                iconColor="bg-secondary-fixed/50 text-secondary"
                            />
                            <CardProject
                                title="Complex Data Hierarchies" 
                                description="Duplicating a promotion required safely recreating nested data, including templates, managers, vendors, and linked SKU records."
                                icon="sync_problem" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject
                                title="Security & Access Parity" 
                                description="The solution needed to duplicate role assignments and permissions to ensure the copied promotion remained accessible to the correct users."
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
                                Full-Stack Controller & Service Architecture
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                                Built a robust C# Service and Controller architecture featuring resilient error handling and a modern Fetch API integration.
                            </p>
                        </div>
                        <!-- Interactive Pipeline Schematic Diagram -->
                        <Flowchart
                            title="Promotion Copy Pipeline"
                            description="Architecture decoupled core promotion creation from template duplication, utilizing field ID mapping to seamlessly preserve complex nested hierarchies."
                            result="Creation Time: -50%"
                            :step1="{
                                title: 'Client Interface',
                                subtitle: 'JS Fetch API',
                                description: 'Asynchronous modal submission & real-time UI validation.',
                                icon: 'code',
                                titleColor: 'text-on-surface-variant',
                                subtitleColor: 'text-secondary',
                                descriptionColor: 'text-primary',
                                cardColor: 'bg-surface-container-low hover:bg-surface-container'
                            }"
                            :step2="{
                                title: 'API Routing',
                                subtitle: 'MVC Controller',
                                description: 'RESTful GET and POST endpoints handling payload distribution.',
                                icon: 'network_check',
                                titleColor: 'text-on-primary',
                                subtitleColor: 'text-secondary-fixed-dim',
                                descriptionColor: 'text-on-primary-container',
                                cardColor: 'bg-primary-container text-on-primary'
                            }"
                            :step3="{
                                title: 'Data Logic',
                                subtitle: 'C# Service Layer',
                                description: 'Deep-copy mapping and resilient partial-success handling.',
                                icon: 'schema',
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
                                        // Engineered service layer methods to handle deep-copying of templates and forms
                                    </div>
                                    <div>
                                        <span class="text-secondary-fixed">int</span> <span class="text-tertiary-fixed-dim">CopyPromotion</span>(<span class="text-secondary-fixed">int</span> originalPromotionId, <span class="text-secondary-fixed">string</span> newName, <span class="text-secondary-fixed">bool</span> copyForms);
                                    </div>
                                    <div>
                                        <span class="text-secondary-fixed">int</span> <span class="text-tertiary-fixed-dim">CopyPromotionTemplatesAndForms</span>(<span class="text-secondary-fixed">int</span> newPromotionId, <span class="text-secondary-fixed">string</span> newName, <span class="text-secondary-fixed">bool</span> copyForms);
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Technical Trade-offs Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                            <CardProject
                                title="JS Fetch Integration" 
                                description="Added a new modal dialog driven by the JavaScript Fetch API for smooth, asynchronous form submission and real-time loading UI."
                                icon="sync_alt" 
                                iconColor="bg-primary-fixed text-primary" 
                                impact="Seamless User Experience"
                            />
                            <CardProject
                                title="Resilient Error Handling" 
                                description="Engineered isolated failure handling where promotion creation and template copying are processed separately to prevent catastrophic failures during partial successes."
                                icon="shield" 
                                iconColor="bg-secondary-fixed/50 text-secondary" 
                                impact="Graceful Partial Successes"
                            />
                            <CardProject
                                title="Store-Bound Scoping" 
                                description="Designed the architecture to intentionally limit duplication strictly within the existing store, preventing cross-region data contamination while satisfying the core business requirement."
                                icon="storefront"
                                iconColor="bg-primary-fixed text-primary" 
                                impact="Zero Data Contamination"
                            />
                        </div>
                    </section>
                    <!-- SECTION 4: IMPACT & ENGINEERING TAKEAWAYS -->
                    <section class="relative w-full py-space-xl">
                        <p class="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">03 / Outcomes</p>
                        <div class="flex flex-col md:flex-row justify-between gap-space-sm mb-space-lg">
                            <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                                Measured Operational Efficiency
                            </h2>
                            <p class="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                                Automating the duplication of complex promotion hierarchies drastically reduced the time required for coordinators to add material to relevant sites.
                            </p>
                        </div>
                        <!-- Impact Metrics Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
                            <CardProject
                                title="50% Time Reduction"
                                description="Reduced total promotion creation time by 50% for CX teams." 
                                icon="speed" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject 
                                title="RESTful Endpoints" 
                                description="New RESTful POST endpoints created in the Controller layer to handle the requests." 
                                icon="api" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                            <CardProject 
                                title="Fetch API Modal" 
                                description="Intuitive Fetch API based modal implemented to handle the entire copy process." 
                                icon="web_asset" 
                                iconColor="bg-secondary-fixed/50 text-secondary"
                            />
                            <CardProject 
                                title="Zero Database Migrations" 
                                description="Zero database migrations were introduced or required as part of this feature rollout." 
                                icon="database" 
                                iconColor="bg-primary-fixed text-primary"
                            />
                        </div>
                        <!-- Editorial Engineering Reflection -->
                         <EngineeringReflections 
                            title="High-performance ergonomics: architecting resilient data duplication"
                            description1="The complexity of this feature wasn't just in creating a new database record, but in preserving the intricate web of parent/child field mappings, template locales, and SKU validations."
                            description2="By utilizing the Fetch API for the client-side interface and decoupling the core promotion creation from the template duplication process on the backend, the system gracefully handles partial successes. This ensures that even if an edge-case form fails to copy, the CX team still receives their base promotion layout—directly solving their operational bottleneck and drastically reducing the time needed to populate relevant sites."
                            nextHorizon="Introduce batch copying functionality for power-clients who manage large-scale, international promotions simultaneously. This would allow users to select multiple promotions and copy them in a single operation."
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