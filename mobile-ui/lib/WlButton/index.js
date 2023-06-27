import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, withModifiers, normalizeStyle, createTextVNode, toDisplayString, renderSlot } from "vue";
const onDebounce = (fn, delay) => {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(
      () => {
        typeof fn === "function" && fn.apply(null, [...args]);
        clearTimeout(timer);
      },
      delay > 0 ? delay : 100
    );
  };
};
var index_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  name: "WlButton"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    text: { default: "" },
    disabled: { type: Boolean, default: false },
    type: { default: "primary" },
    size: { default: "normal" },
    shape: { default: "default" },
    styleExtra: { default: null },
    plain: { type: Boolean, default: false },
    color: { default: "" }
  },
  emits: ["onClick"],
  setup(__props, { emit }) {
    const props = __props;
    const btnClass = computed(() => {
      return {
        [`btn-plain-${props.type}`]: props.plain,
        [`btn-type-${props.type}`]: !props.plain,
        [`btn-shape-${props.shape}`]: true,
        [`btn-size-${props.size}`]: true,
        disabled: props.disabled
      };
    });
    const btnStyle = computed(() => {
      let colorStyle = {};
      if (props.plain && props.color) {
        colorStyle = {
          "border-color": props.color,
          color: props.color
        };
      } else if (!props.plain && props.color) {
        colorStyle = {
          "background-color": props.color,
          "border-color": props.color
        };
      }
      return {
        ...props.styleExtra,
        ...colorStyle
      };
    });
    const onButtonClick = onDebounce(() => {
      if (props.disabled)
        return;
      emit("onClick");
    }, 500);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(btnClass), "btn"]),
        onClick: _cache[0] || (_cache[0] = withModifiers(
          (...args) => unref(onButtonClick) && unref(onButtonClick)(...args),
          ["stop"]
        )),
        style: normalizeStyle(unref(btnStyle)),
        "data-weiling-mobile-ui-wl-button": ""
      }, [
        createTextVNode(toDisplayString(__props.text) + " ", 1),
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export { _sfc_main as default };
