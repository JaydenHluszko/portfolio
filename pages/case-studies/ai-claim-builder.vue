<template>
  <div>
    <div class="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-12">
      <!-- Hero Section -->
      <section class="mb-16">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <span class="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full font-code-label text-xs text-on-surface uppercase tracking-widest border border-secondary-container/30">Case Study</span>
            <span class="text-outline">•</span>
            <span class="text-outline font-code-label text-xs text-on-surface uppercase">JH DESIGN</span>
          </div>
          <h1 class="text-display-lg-mobile lg:text-display-lg text-on-surface">AI Claim Builder POC</h1>
          <p class="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Bridging the gap between complex AI logic and a seamless frontend experience to automate manual data entry.
          </p>
          <!-- Key Metrics Layout -->
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="glass-panel p-6 rounded-xl flex-1 min-w-[240px]">
              <p class="text-outline font-code-label text-xs text-on-surface uppercase mb-2">Innovation</p>
              <p class="text-headline-md text-primary">AI-Powered Automation</p>
            </div>
            <div class="glass-panel p-6 rounded-xl flex-1 min-w-[240px]">
              <p class="text-outline font-code-label text-xs text-on-surface uppercase mb-2">Tech Stack</p>
              <p class="text-headline-md text-primary">TypeScript & Azure AI</p>
            </div>
          </div>
        </div>
      </section>
      <hr class="border-border-subtle mb-16">
      
      <!-- Tech Stack Chips -->
      <section class="mb-16">
        <h3 class="font-code-label text-xs text-on-surface uppercase tracking-widest text-outline mb-4">Technology Architecture</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">TypeScript</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Angular</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Azure AI</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">Node.js</span>
          <span class="px-3 py-1 bg-surface-container-high rounded text-code-label border border-border-subtle text-on-surface">PDF.js</span>
        </div>
      </section>

      <!-- Content Grid: Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Left Column: Narrative Content -->
        <div class="lg:col-span-7 flex flex-col gap-16 lg:gap-24">
          <!-- The Challenge -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-error-container/20 flex items-center justify-center border border-error-container/30">
                <span class="material-symbols-outlined text-error">report_problem</span>
              </div>
              <h2 class="text-headline-md font-bold text-on-surface">The Challenge</h2>
            </div>
            <div class="space-y-4 text-on-surface-variant max-w-3xl leading-relaxed">
              <p>Field technicians and insurance adjusters frequently struggle with the labor-intensive process of manual data entry from physical invoices and receipts. This friction not only slows down the claim submission process but also increases the risk of human error during transcription.</p>
              <ul class="list-none space-y-3">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>15min+ Average Entry: Labor-intensive manual processes for field staff.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span>12% Human Error Rate: Significant data integrity risks during transcription.</span>
                </li>
              </ul>
            </div>
          </section>

          <!-- The Solution -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-primary-container/20 flex items-center justify-center border border-primary-container/30">
                <span class="material-symbols-outlined text-primary">terminal</span>
              </div>
              <h2 class="text-headline-md font-bold text-on-surface">The Solution</h2>
            </div>
            <div class="space-y-6 text-on-surface-variant leading-relaxed">
              <p>We engineered a reactive frontend POC integrated with <span class="text-primary font-medium">Azure AI Document Intelligence</span>. The application allows users to upload documents directly from their mobile devices; it then visualizes the parsing status in real-time as the AI extracts relevant keys.</p>
              <div class="bg-surface-elevated p-6 border border-border-subtle rounded-xl font-code-label text-sm leading-relaxed text-primary">
                interface ClaimData {<br>
                &nbsp;&nbsp;id: string;<br>
                &nbsp;&nbsp;vendor: string;<br>
                &nbsp;&nbsp;total: number;<br>
                &nbsp;&nbsp;confidence: number;<br>
                }
              </div>
              <p class="italic">
                "By utilizing TypeScript, we ensured rigorous type-safety between the AI's JSON output and complex claim forms."
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-surface-elevated px-4 py-1.5 border border-border-subtle rounded text-xs font-code-label uppercase">Reactive State</span>
                <span class="bg-surface-elevated px-4 py-1.5 border border-border-subtle rounded text-xs font-code-label uppercase">OCR Integration</span>
                <span class="bg-surface-elevated px-4 py-1.5 border border-border-subtle rounded text-xs font-code-label uppercase">Type-Safe Models</span>
              </div>
            </div>
          </section>

          <!-- The Impact -->
          <section>
            <div class="flex items-center gap-4 mb-6">
              <div class="size-10 rounded bg-secondary-container/20 flex items-center justify-center border border-secondary-container/30">
                <span class="material-symbols-outlined text-secondary">trending_up</span>
              </div>
              <h2 class="text-headline-md font-bold text-on-surface">The Impact</h2>
            </div>
            <div class="space-y-6 text-on-surface-variant leading-relaxed">
              <p>The POC demonstrated a radical shift in claim processing efficiency. By automating the extraction layer, we moved the user's role from "data entry clerk" to "data reviewer," significantly lowering the cognitive load.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div class="p-6 bg-surface-container-high rounded-xl">
                  <p class="text-xs font-code-label uppercase text-outline mb-2">70% Processing Boost</p>
                  <p class="text-body-sm">Initial tests showed that users could complete a full claim submission 70% faster.</p>
                </div>
                <div class="p-6 bg-surface-container-high rounded-xl">
                  <p class="text-xs font-code-label uppercase text-outline mb-2">Improved Data Integrity</p>
                  <p class="text-body-sm">Automated parsing eliminated 95% of transcription errors.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Right Column: Visual Assets -->
        <div class="lg:col-span-5">
          <div class="sticky top-24 space-y-8">
            <img alt="AI Claim Builder Interface" class="rounded-xl border border-border-subtle w-full h-auto shadow-2xl" src="https://lh3.googleusercontent.com/aida/ADBb0ujcseuqtu22plrpiGPpVQvdy53fprfo-LtV44-fxf2_TK32oQN-p9vVCtvarS2p5mxtf8DGz9B4znFmLP2RgFrqWiotdxT96IPvzNJlb92hMd1x6KaAvjRT9Yexku8b4aUYGzvcnz8Snf19dbit9T68uMNNZkigniFteUpxtdq0mnvv7cv3PLwuk6SJfNybha_cF5MxY301fS9CMxCRNyGP8GksePoJdkFeqY_frWVHmZD6-Ktm3Ai-JK3d">
            <div class="glass-panel rounded-xl overflow-hidden">
              <div class="p-4 border-b border-border-subtle flex justify-between items-center bg-surface-container">
                <span class="font-code-label text-xs text-on-surface">AZURE_AI_PARSER.LOG</span>
                <span class="material-symbols-outlined text-outline text-sm">code</span>
              </div>
              <div class="p-6 bg-surface-container-low space-y-4">
                <div class="space-y-2">
                  <div class="flex justify-between items-center text-[10px] font-code-label text-outline">
                    <span>ANALYZING_INVOICE_001.PDF</span>
                    <span class="text-primary">85% COMPLETE</span>
                  </div>
                  <div class="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div class="h-full bg-primary w-[85%]"></div>
                  </div>
                </div>
                <div class="p-3 bg-surface-container rounded-lg border border-border-subtle font-code-label text-[10px] space-y-1 text-on-surface">
                  <div class="flex gap-2"><span class="text-outline">detected_field:</span> <span>Total_Amount</span></div>
                  <div class="flex gap-2"><span class="text-outline">extracted_val:</span> <span>$1,240.50</span></div>
                  <div class="flex gap-2"><span class="text-outline">confidence:</span> <span class="text-primary">0.992</span></div>
                </div>
              </div>
            </div>
            <div class="bg-primary-container text-on-primary-container p-6 rounded-xl relative overflow-hidden">
              <span class="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10">biotech</span>
              <h4 class="font-bold mb-2">85% Parsing Accuracy</h4>
              <p class="text-sm opacity-90 leading-relaxed">
                Initial POC results surpassed expectations, providing high-fidelity data extraction across varied invoice templates without manual mapping.
              </p>
            </div>
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
  title: 'AI Claim Builder POC - Case Study'
})
</script>
