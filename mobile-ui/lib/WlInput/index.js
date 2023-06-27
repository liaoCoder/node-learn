import { defineComponent, ref, watchEffect, openBlock, createElementBlock, withDirectives, createElementVNode, unref, vModelText, toDisplayString, createCommentVNode, createBlock, withModifiers } from "vue";
import WlSvg from "@wltech/svg";
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
const _hoisted_1 = {
  class: "wl-input",
  "data-weiling-mobile-ui-wl-input": ""
};
const _hoisted_2 = ["maxlength", "placeholder"];
const _hoisted_3 = {
  key: 0,
  class: "max-len"
};
const __default__ = {
  name: "WlInput"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    clearable: { type: Boolean, default: false },
    needDebounce: { type: Boolean, default: true },
    inputType: { default: "text" },
    maxlength: { default: "" }
  },
  emits: ["onBlur", "onFocus", "onClear", "onChange", "update:modelValue"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const formValue = ref("");
    const inputRef = ref(null);
    const onClear = () => {
      emit("onFocus");
      emit("update:modelValue", "");
    };
    const onBlur = emit("onBlur");
    const onFocus = emit("onFocus");
    const formatNumber = (value, is_float) => {
      value += "";
      const regExp = is_float ? /[^-0-9.]/g : /[^-0-9]/g;
      value = value.replace(regExp, "");
      if (value.indexOf(".") !== -1) {
        let arr = value.split(".");
        let firstNum = arr[0];
        arr[0] = "";
        value = firstNum + `${arr.length > 1 && is_float ? "." + arr.join("") : ""}`;
      }
      if (value.lastIndexOf("-") !== 0 && value.lastIndexOf("-") !== -1) {
        const arr = value.split("-");
        value = value.startsWith("-") ? "-" + arr.join("") : arr.join("");
      }
      return value.replace(regExp, "");
    };
    const onDebounceSave = onDebounce(() => {
      emit("onChange", formValue.value);
      emit("update:modelValue", formValue.value);
    }, 500);
    const onInput = () => {
      let val = formValue.value;
      if (["number", "digit"].includes(props.inputType)) {
        val = formatNumber(val, props.inputType === "number");
      }
      formValue.value = val;
      if (props.needDebounce) {
        onDebounceSave();
      } else {
        emit("onChange", val);
        emit("update:modelValue", val);
      }
    };
    const onTriggerFocus = () => {
      inputRef.value.focus();
    };
    watchEffect(() => {
      formValue.value = props.modelValue;
    });
    expose({
      onTriggerFocus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        withDirectives(createElementVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formValue.value = $event),
          onFocus: _cache[1] || (_cache[1] = (...args) => unref(onFocus) && unref(onFocus)(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => unref(onBlur) && unref(onBlur)(...args)),
          onInput,
          maxlength: __props.maxlength,
          placeholder: __props.placeholder
        }, null, 40, _hoisted_2), [
          [vModelText, formValue.value]
        ]),
        __props.maxlength ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(formValue.value.length) + "/" + toDisplayString(__props.maxlength), 1)) : createCommentVNode("", true),
        formValue.value && __props.clearable ? (openBlock(), createBlock(unref(WlSvg), {
          key: 1,
          type: "closeFill",
          width: "16",
          height: "16",
          color: "#919699",
          onClick: withModifiers(onClear, ["stop"])
        }, null, 8, ["onClick"])) : createCommentVNode("", true)
      ]);
    };
  }
});
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export { _sfc_main as default };
