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
  __name: "ai-claim-builder",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "AI Claim Builder POC - Jayden"
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
            _push2(`Vue 3`);
          } else {
            return [
              createTextVNode("Vue 3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TechChip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`WebSockets`);
          } else {
            return [
              createTextVNode("WebSockets")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TechChip, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`GenAI`);
          } else {
            return [
              createTextVNode("GenAI")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="text-4xl md:text-5xl font-sans font-extrabold text-on-surface mb-6 tracking-tight leading-tight">AI Claim Builder POC</h1><p class="text-xl text-slate-text font-sans leading-relaxed"> Proof of concept for an AI-assisted claim generation tool with real-time streaming UI. </p></header><div class="w-full h-64 md:h-96 bg-surface-variant rounded-xl mb-16 relative overflow-hidden flex items-center justify-center border border-border-subtle"><span class="text-slate-text font-mono">Real-time Streaming Interface</span></div><div class="prose prose-invert max-w-none prose-p:text-on-surface-variant prose-headings:text-on-surface prose-a:text-primary"><h2>The Challenge</h2><p>Agents needed a faster way to generate complex claims based on unstructured data. The traditional form-based approach was too slow and error-prone.</p><h2>The Solution</h2><p>We built a proof of concept using Vue 3 and WebSockets to stream AI-generated claim data directly into the user interface in real-time, allowing agents to edit and approve as it&#39;s generated.</p><h2>Results</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose"><div class="glass-panel p-6 rounded-lg text-center"><span class="block text-3xl font-bold text-primary mb-2">70%</span><span class="text-sm text-slate-text font-mono">Faster Time-to-Interactive</span></div><div class="glass-panel p-6 rounded-lg text-center"><span class="block text-3xl font-bold text-primary mb-2">3x</span><span class="text-sm text-slate-text font-mono">More Claims Processed</span></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/case-studies/ai-claim-builder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ai-claim-builder-BfbuR936.js.map
