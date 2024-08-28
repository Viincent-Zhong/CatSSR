import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, renderToString } from "vue/server-renderer";
import { useSSRContext, ref, createSSRApp } from "vue";
const _imports_0 = "/vite.svg";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: String
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-7c57035b>${ssrInterpolate(__props.msg)}</h1><div class="card" data-v-7c57035b><button type="button" data-v-7c57035b>count is ${ssrInterpolate(count.value)}</button><p data-v-7c57035b> Edit <code data-v-7c57035b>components/HelloWorld.vue</code> to test HMR </p></div><p data-v-7c57035b> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-7c57035b>create-vue</a>, the official Vue + Vite starter </p><p data-v-7c57035b> Learn more about IDE Support for Vue in the <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank" data-v-7c57035b>Vue Docs Scaling up Guide</a>. </p><p class="read-the-docs" data-v-7c57035b>Click on the Vite and Vue logos to learn more</p><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/client/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7c57035b"]]);
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-6e597d4b><a href="https://vitejs.dev" target="_blank" data-v-6e597d4b><img${ssrRenderAttr("src", _imports_0)} class="logo" alt="Vite logo" data-v-6e597d4b></a><a href="https://vuejs.org/" target="_blank" data-v-6e597d4b><img${ssrRenderAttr("src", _imports_1)} class="logo vue" alt="Vue logo" data-v-6e597d4b></a></div>`);
      _push(ssrRenderComponent(HelloWorld, { msg: "Vite + Vue" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/client/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e597d4b"]]);
function createApp() {
  const app = createSSRApp(App);
  return { app };
}
async function render() {
  const { app } = createApp();
  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
export {
  render
};
