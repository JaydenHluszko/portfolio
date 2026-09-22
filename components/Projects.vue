<template>
    <!-- Project 1: Synergy Analytics (Asymmetric Spread: Image Left, Content Right) -->
    <div class="mb-space-2xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
        <!-- Floating Visual Container -->
        <div class="lg:col-span-7 group">
            <div class="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(30,41,59,0.12),0_0_1px_rgba(51,65,85,0.08)] transition-transform duration-500 hover:scale-[1.01]">
                <img alt="An administrative dashboard interface featuring a 'Copy Promotion' modal triggered from a data table"
                    class="w-full h-auto object-cover block"
                    src="~/assets/images/promotion-copy.png" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
        <!-- Project 1 Details -->
        <div class="lg:col-span-5 flex flex-col justify-center">
            <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-space-xs">Architecture & API Design</span>
            <h3 class="font-headline-md text-headline-md text-primary font-normal mb-space-sm leading-tight">
                Promotion Copy
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-space-md">
                Analyzed a recurring operational bottleneck in template management to engineer a full-stack deep-copy feature for dynamic forms and templates. Built utilizing RESTful API contracts and Controller/Service design patterns, this solution successfully cut creation time by 50%.
            </p>
            <div class="flex flex-wrap gap-2 mb-space-lg">
                <Tag text=".NET" />
                <Tag text="Full Stack" />
                <Tag text="RESTful APIs" />
                <Tag text="Controller/Service Pattern" />
            </div>
            <div class="flex items-center gap-space-md">
                <NuxtLink to="/projects/promotion-copy" class="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-secondary font-semibold group transition-colors duration-200">
                    <span>Explore Project</span>
                    <span class="material-symbols-rounded text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </NuxtLink>
            </div>
        </div>
    </div>
    <!-- Project 2: StudioFlow IDE (Reverse Spread: Content Left, Image Right) -->
    <div class="mb-space-2xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
        <!-- Project 2 Details (Appears First on Desktop) -->
        <div class="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-space-xs">Frontend System Modernization</span>
            <h3 class="font-headline-md text-headline-md text-primary font-normal mb-space-sm leading-tight">
                Popup Engine
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-space-md">
                Identified a recurring third-party licensing cost and engineered a native Popup Engine to replace it. By supporting multiple configurations through robust data model design, this feature successfully translated a business cost problem into a durable, in-house technical solution.
            </p>
            <div class="flex flex-wrap gap-2 mb-space-lg">
                <Tag text="Data Model Design" />
                <Tag text="Cost Optimization" />
                <Tag text="In-house Architecture" />
            </div>
            <div class="flex items-center gap-space-md">
                <NuxtLink to="/projects/popup-engine"
                    class="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-secondary font-semibold group transition-colors duration-200">
                    <span>Explore Project</span>
                    <span class="material-symbols-rounded text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </NuxtLink>
            </div>
        </div>
        <!-- Floating Visual Container -->
        <div class="lg:col-span-7 order-1 lg:order-2 group">
            <div class="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(30,41,59,0.12),0_0_1px_rgba(51,65,85,0.08)] transition-transform duration-500 hover:scale-[1.01]">
                <img alt="An administrative dashboard interface for a custom popup engine."
                    class="w-full h-auto object-cover block"
                    src="~/assets/images/popup-engine.png" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
    </div>
    <!-- Project 3: Atmosphere Engine (Compact Editorial Card) -->
    <div class="rounded-3xl bg-surface-container-lowest/70 backdrop-blur-md p-space-md md:p-space-lg shadow-[0_15px_35px_-10px_rgba(51,65,85,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
        <div class="max-w-2xl">
            <h4 class="font-headline-sm text-headline-sm text-primary font-normal mb-1">
                Multi-tenant Themeable Design System
            </h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-3">
                Took ownership of a highly scalable, multi-tenant design system to address the business need for infinite client branding with zero code bloat. This architecture drastically streamlined client customization, cutting enterprise onboarding timelines from months down to two weeks.
            </p>
            <div class="flex items-center gap-1.5">
                <Tag text="Multi-Tenant Systems" />
                <Tag text="SaaS" />
                <Tag text="UI Workflows" />
            </div>
        </div>
        <div class="flex items-center gap-space-md w-full md:w-auto justify-between md:justify-end">
            <NuxtLink to="/projects/themable-design-system" class="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-secondary font-semibold group transition-colors duration-200">
                <span>Explore Project</span>
                <span class="material-symbols-rounded text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </NuxtLink>
        </div>
    </div>
</template>