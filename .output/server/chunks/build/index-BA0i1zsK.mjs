import { resolveDirective, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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
import 'framesync';
import 'popmotion';
import 'style-value-types';

const _sfc_main$3 = {
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (val) => ["primary", "secondary", "ghost"].includes(val)
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "inline-flex items-center justify-center px-6 py-3 rounded-full font-sans text-sm font-semibold transition-all duration-300 hover:-translate-y-[1px]",
          __props.variant === "primary" ? "bg-slate text-white hover:shadow-md" : "bg-white/50 backdrop-blur-md border border-white/60 text-slate hover:bg-white/70"
        ],
        initial: { scale: 1 },
        hover: { scale: 1.02 },
        tap: { scale: 0.98 }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TechChip",
  __ssrInlineRender: true,
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [
          "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-wide border transition-colors duration-300 cursor-default",
          __props.active ? "bg-indigo/10 text-indigo border-indigo/20" : "bg-linen/60 text-slate border-slate/10 hover:bg-indigo/5 hover:text-indigo hover:border-indigo/10"
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechChip.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "flex flex-col group gap-6",
        initial: { opacity: 0, y: 30 },
        enter: { opacity: 1, y: 0, transition: { duration: 800, delay: __props.index * 150, type: "spring", stiffness: 40 } }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))}><div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-dim transition-transform duration-500 group-hover:-translate-y-2 shadow-ambient group-hover:shadow-ambient-deep">`);
      if (__props.image) {
        _push(`<img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} class="object-cover w-full h-full opacity-90 transition-opacity duration-500 group-hover:opacity-100">`);
      } else {
        _push(`<div class="w-full h-full bg-gradient-to-br from-indigo/5 to-amber/5 flex items-center justify-center"><span class="text-slate/30 font-sans text-sm">Image Preview</span></div>`);
      }
      _push(`<div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div></div><div class="flex flex-col gap-3 px-2"><h3 class="text-3xl font-serif text-ink tracking-tight">${ssrInterpolate(__props.title)}</h3><p class="text-slate font-sans leading-relaxed text-sm max-w-lg">${ssrInterpolate(__props.description)}</p><div class="flex flex-wrap gap-2 mt-2"><!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(ssrRenderComponent(_sfc_main$2, { key: tag }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></article>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Warm Editorial Portfolio",
      meta: [
        { name: "description", content: "A thoughtful, spacious, and refined frontend portfolio." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32" }, _attrs))}><section class="min-h-[60vh] flex flex-col justify-center gap-8 mt-16 md:mt-24"><h1${ssrRenderAttrs(mergeProps({
        class: "text-5xl md:text-7xl font-serif text-ink tracking-tight max-w-3xl leading-[1.1]",
        initial: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0, transition: { duration: 1e3, delay: 200, type: "spring", stiffness: 30 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Crafting digital experiences with <i class="italic font-light">precision</i> and warmth. </h1><p${ssrRenderAttrs(mergeProps({
        class: "text-lg md:text-xl font-sans text-slate max-w-xl leading-relaxed",
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 1e3, delay: 600 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> I am a senior web engineer specializing in thoughtful, spacious, and refined frontend architectures. Bringing editorial sensibility to modern software. </p><div${ssrRenderAttrs(mergeProps({
        class: "flex items-center gap-4 mt-4",
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 1e3, delay: 900 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}>`);
      _push(ssrRenderComponent(_sfc_main$3, { variant: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Work`);
          } else {
            return [
              createTextVNode("View Work")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { variant: "ghost" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get in touch`);
          } else {
            return [
              createTextVNode("Get in touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="flex flex-col gap-16"><h2${ssrRenderAttrs(mergeProps({
        class: "text-3xl font-serif text-ink",
        initial: { opacity: 0, x: -30 },
        visibleOnce: { opacity: 1, x: 0, transition: { duration: 800, type: "spring" } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Selected Work </h2><div class="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-8"><div class="md:col-span-8 md:pr-12">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Ethereal Commerce",
        description: "A headless storefront built with Nuxt 3 and Shopify, focusing on fluid transitions and sub-second load times.",
        tags: ["Nuxt 3", "Vue", "Tailwind CSS"],
        index: 0
      }, null, _parent));
      _push(`</div><div class="md:col-span-6 md:col-start-7 md:mt-32">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Design System Pro",
        description: "An expansive, token-driven component library created for a fast-paced fintech startup.",
        tags: ["React", "TypeScript", "Storybook"],
        index: 1
      }, null, _parent));
      _push(`</div><div class="md:col-span-10 md:col-start-2 md:mt-16">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Editorial Journal",
        description: "A rich-text publishing platform emphasizing reading experience, typography, and offline support.",
        tags: ["Next.js", "PostgreSQL", "TipTap"],
        index: 2
      }, null, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BA0i1zsK.mjs.map
