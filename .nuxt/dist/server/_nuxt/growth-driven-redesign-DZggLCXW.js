import { _ as __nuxt_component_0 } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./TechChip-Z2Wh9pCD.js";
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-CHRCb4dE.js";
import "D:/Documents/Jayden/Jayden-Portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/Documents/Jayden/Jayden-Portfolio/node_modules/hookable/dist/index.mjs";
import "D:/Documents/Jayden/Jayden-Portfolio/node_modules/unctx/dist/index.mjs";
import "D:/Documents/Jayden/Jayden-Portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/Documents/Jayden/Jayden-Portfolio/node_modules/defu/dist/defu.mjs";
import "D:/Documents/Jayden/Jayden-Portfolio/node_modules/ufo/dist/index.mjs";
import "D:/Documents/Jayden/Jayden-Portfolio/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "growth-driven-redesign",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Growth-Driven Redesign - Jayden"
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
            _push2(`<span class="mr-2"${_scopeId}>←</span> Back to Home `);
          } else {
            return [
              createVNode("span", { class: "mr-2" }, "←"),
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
            _push2(`Nuxt 3`);
          } else {
            return [
              createTextVNode("Nuxt 3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TechChip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tailwind`);
          } else {
            return [
              createTextVNode("Tailwind")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TechChip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A/B Testing`);
          } else {
            return [
              createTextVNode("A/B Testing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="text-4xl md:text-5xl font-sans font-extrabold text-on-surface mb-6 tracking-tight leading-tight">Growth-Driven Redesign</h1><p class="text-xl text-slate-text font-sans leading-relaxed"> A complete overhaul of the conversion funnel, restoring layout stability and improving load times. </p></header><div class="w-full h-64 md:h-96 bg-surface-variant rounded-xl mb-16 relative overflow-hidden flex items-center justify-center border border-border-subtle"><span class="text-slate-text font-mono">Hero Image / Mockup</span></div><div class="prose prose-invert max-w-none prose-p:text-on-surface-variant prose-headings:text-on-surface prose-a:text-primary"><h2>The Challenge</h2><p>The legacy conversion funnel was suffering from layout shifts, slow rendering, and a drop-off rate of over 60%. The goal was to rebuild the critical path to be performant, accessible, and highly converting.</p><h2>The Solution</h2><p>By migrating the flow to Nuxt 3 and utilizing Tailwind CSS, we were able to significantly reduce the CSS payload and eliminate layout shifts. A/B testing was integrated directly at the edge, allowing for zero-flicker experiments.</p><h2>Results</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 not-prose"><div class="glass-panel p-6 rounded-lg text-center"><span class="block text-3xl font-bold text-primary mb-2">24%</span><span class="text-sm text-slate-text font-mono">Conversion Lift</span></div><div class="glass-panel p-6 rounded-lg text-center"><span class="block text-3xl font-bold text-primary mb-2">-45%</span><span class="text-sm text-slate-text font-mono">Bounce Rate</span></div><div class="glass-panel p-6 rounded-lg text-center"><span class="block text-3xl font-bold text-primary mb-2">1.2s</span><span class="text-sm text-slate-text font-mono">Avg. LCP</span></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case-studies/growth-driven-redesign.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=growth-driven-redesign-DZggLCXW.js.map
