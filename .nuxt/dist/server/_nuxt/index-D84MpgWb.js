import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_1 } from "./TechChip-Z2Wh9pCD.js";
import { b as _sfc_main$2 } from "../server.mjs";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    tags: {},
    metric: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-panel rounded-lg overflow-hidden flex flex-col group interactive-glow cursor-pointer transition-all duration-300" }, _attrs))}><div class="h-48 bg-surface-variant relative overflow-hidden flex items-center justify-center"><span class="text-slate-text font-mono text-sm opacity-50">Project Image</span><div class="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent opacity-60"></div></div><div class="p-6 flex flex-col flex-grow"><h3 class="text-on-surface text-xl font-sans font-bold mb-2 group-hover:text-primary transition-colors">${ssrInterpolate(__props.title)}</h3><p class="text-slate-text text-sm font-sans mb-6 flex-grow">${ssrInterpolate(__props.description)}</p><div class="flex flex-wrap gap-2 mt-auto mb-4"><!--[-->`);
      ssrRenderList(__props.tags, (tech) => {
        _push(ssrRenderComponent(__nuxt_component_1, { key: tech }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tech)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tech), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="pt-4 border-t border-border-subtle mt-auto"><span class="text-[13px] font-mono text-primary font-medium tracking-[0.05em]">${ssrInterpolate(__props.metric)}</span></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Jayden - Senior Frontend Engineer"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20" }, _attrs))}><section class="max-w-3xl mb-32"><h1 class="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-on-surface mb-6 tracking-tight leading-tight"> Senior Frontend Engineer &amp; <br class="hidden md:block"><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Business Partner.</span></h1><p class="text-lg text-slate-text font-sans mb-10 leading-relaxed max-w-2xl"> I architect scalable frontend solutions and design systems that bridge the gap between complex engineering and elegant user experiences. Specializing in Vue ecosystem and design system infrastructure. </p><div class="flex gap-4">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        variant: "primary",
        size: "lg",
        onClick: ($event) => _ctx.$router.push("/case-studies/growth-driven-redesign")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Projects`);
          } else {
            return [
              createTextVNode("View Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        variant: "secondary",
        size: "lg",
        onClick: ($event) => _ctx.$router.push("/resume")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Read Resume`);
          } else {
            return [
              createTextVNode("Read Resume")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-2xl font-sans font-semibold text-on-surface mb-12 flex items-center gap-4"><span class="w-8 h-[1px] bg-primary"></span> Featured Case Studies </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Growth-Driven Redesign",
        description: "A complete overhaul of the conversion funnel, restoring layout stability and improving load times.",
        tags: ["Nuxt 3", "Tailwind", "A/B Testing"],
        metric: "24% conversion lift",
        onClick: ($event) => _ctx.$router.push("/case-studies/growth-driven-redesign")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "AI Claim Builder POC",
        description: "Proof of concept for an AI-assisted claim generation tool with real-time streaming UI.",
        tags: ["Vue 3", "WebSockets", "GenAI"],
        metric: "70% faster TTI",
        onClick: ($event) => _ctx.$router.push("/case-studies/ai-claim-builder")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Multi-Tenant Design System",
        description: "Architected a core design system supporting 4 distinct brands with CSS variables.",
        tags: ["CSS Modules", "Storybook", "Figma API"],
        metric: "40% less dev time",
        onClick: ($event) => _ctx.$router.push("/case-studies/multi-tenant-design-system")
      }, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D84MpgWb.js.map
