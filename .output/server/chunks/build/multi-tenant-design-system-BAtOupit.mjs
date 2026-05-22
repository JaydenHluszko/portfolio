import { _ as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './TechChip-Z2Wh9pCD.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './v3-CHRCb4dE.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "multi-tenant-design-system",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Multi-Tenant Design System - Jayden"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TechChip = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20" }, _attrs))}><div class="max-w-4xl mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center text-primary hover:text-primary-container mb-12 font-sans font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-2"${_scopeId}>\u2190</span> Back to Home `);
          } else {
            return [
              createVNode("span", { class: "mr-2" }, "\u2190"),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header class="mb-16"><div class="flex gap-2 mb-6">`);
      _push(ssrRenderComponent(_component_TechChip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CSS Modules`);
          } else {
            return [
              createTextVNode("CSS Modules")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TechChip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Storybook`);
          } else {
            return [
              createTextVNode("Storybook")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TechChip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Figma API`);
          } else {
            return [
              createTextVNode("Figma API")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="text-4xl md:text-5xl font-sans font-extrabold text-on-surface mb-6 tracking-tight leading-tight">Multi-Tenant Design System</h1><p class="text-xl text-slate-text font-sans leading-relaxed"> Architected a core design system supporting 4 distinct enterprise brands with CSS variables. </p></header><div class="w-full h-64 md:h-96 bg-surface-variant rounded-xl mb-16 relative overflow-hidden flex items-center justify-center border border-border-subtle"><span class="text-slate-text font-mono">Design System Architecture</span></div><div class="prose prose-invert max-w-none prose-p:text-on-surface-variant prose-headings:text-on-surface prose-a:text-primary"><h2>The Challenge</h2><p>The company had 4 separate frontend codebases with divergent UI implementations, making updates difficult and leading to visual inconsistencies across brands.</p><h2>The Solution</h2><p>I architected a centralized, headless component library using Vue 3 and CSS modules. The system uses a strict token-based architecture synced directly with Figma via their API, allowing a single codebase to serve entirely different visual brands just by swapping the CSS variable theme.</p><h2>Results</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose"><div class="glass-panel p-6 rounded-lg text-center"><span class="block text-3xl font-bold text-primary mb-2">40%</span><span class="text-sm text-slate-text font-mono">Less Dev Time per Feature</span></div><div class="glass-panel p-6 rounded-lg text-center"><span class="block text-3xl font-bold text-primary mb-2">4</span><span class="text-sm text-slate-text font-mono">Brands Supported</span></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case-studies/multi-tenant-design-system.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=multi-tenant-design-system-BAtOupit.mjs.map
