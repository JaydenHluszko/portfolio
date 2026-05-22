<template>
  <div class="glass-panel p-8 md:p-16 rounded-3xl relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
    <h2 class="text-4xl md:text-5xl font-black text-on-surface mb-6">Let's Connect</h2>
    <p class="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
      Whether you're looking for architectural guidance, a senior frontend lead, or a discussion on building for scale — I'm always open to new challenges.
    </p>
    <div class="flex flex-col md:flex-row items-center justify-center gap-6">
      <a class="h-14 px-10 bg-primary text-on-primary text-base font-bold rounded-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform w-full md:w-auto" href="mailto:hello@jaydenhluszko.com">
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
</template>
