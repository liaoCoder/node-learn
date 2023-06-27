import { defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createCommentVNode, onMounted, createElementVNode, renderSlot, withDirectives, createVNode, vShow, withCtx, createTextVNode, toDisplayString } from "vue";
const domain = "https://wlmvp-cos.weiling.cn";
const loadingPic = domain + "/frontend/weilingMobileUI/loading.png";
const loadingFailPic = domain + "/frontend/weilingMobileUI/loadingFail.png";
const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const newImg = new Image();
    newImg.src = url;
    newImg.onerror = () => {
      reject("failure");
    };
    newImg.onload = (e) => {
      resolve(e.target);
    };
  });
};
const isTencentCosPic = (url) => {
  return url.includes("wlmvp-cos.weiling.cn");
};
const isBase64 = (str) => {
  return str.indexOf("data:") != -1 && str.indexOf("base64") != -1;
};
var index_vue_vue_type_style_index_0_lang$1 = "";
const _hoisted_1$2 = ["src", "alt"];
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = ["src"];
var ECosType = /* @__PURE__ */ ((ECosType2) => {
  ECosType2["normal"] = "imageView2/1/q/85";
  ECosType2["thumbnail"] = "imageView2/1/w/100/h/100/q/85";
  return ECosType2;
})(ECosType || {});
const __default__$2 = {
  name: "WlPic"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    src: { default: "" },
    needCos: { type: Boolean, default: true },
    cosType: { default: "normal" },
    radius: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    needLoading: { type: Boolean, default: true },
    needMiddleCenter: { type: Boolean, default: true },
    fit: { default: "fill" }
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(true);
    const isError = ref(false);
    const imgSrc = ref("");
    const imgStyleComputed = computed(() => {
      return {
        "border-radius": props.round ? "50%" : "",
        "object-fit": props.fit
      };
    });
    const imgWrapClassComputed = computed(() => {
      return {
        "wl-img": true,
        "img-middle-center": props.needMiddleCenter
      };
    });
    const onLoadImage = (url) => {
      return new Promise((resolve, reject) => {
        loadImage(url).then((elem) => {
          resolve(elem);
        }).catch((reason) => {
          reject(reason);
        }).finally(() => {
          isLoading.value = false;
        });
      });
    };
    const setImgSrc = (url) => {
      const needCos = isTencentCosPic(url) && props.needCos;
      const file_type = url.split(".").pop();
      let isSvg = file_type === "svg";
      let isBase64Bool = isBase64(url);
      if (isSvg || !needCos || isBase64Bool) {
        imgSrc.value = url;
        onLoadImage(imgSrc.value).catch(() => {
          isError.value = true;
        });
      } else {
        imgSrc.value = `${url}?${ECosType[props.cosType]}`;
        onLoadImage(imgSrc.value).catch(() => {
          imgSrc.value = url;
        });
      }
    };
    watch(
      () => props.src,
      (val) => {
        if (val)
          setImgSrc(props.src);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(imgWrapClassComputed)),
        "data-weiling-mobile-ui-wl-pic": ""
      }, [
        !isLoading.value && !isError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: imgSrc.value,
          style: normalizeStyle(unref(imgStyleComputed)),
          class: "img-style",
          alt: imgSrc.value
        }, null, 12, _hoisted_1$2)) : createCommentVNode("", true),
        isLoading.value && __props.needLoading ? (openBlock(), createElementBlock("img", {
          key: 1,
          src: unref(loadingPic),
          alt: "loading",
          class: "spe-pic loading-pic"
        }, null, 8, _hoisted_2$1)) : createCommentVNode("", true),
        isError.value ? (openBlock(), createElementBlock("img", {
          key: 2,
          src: unref(loadingFailPic),
          alt: "failure",
          class: "spe-pic"
        }, null, 8, _hoisted_3$1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var BackIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADJElEQVR4Xu2b0YoTMRRAk+lgZToz6dQWtYiIIouIIqIiosgiIqKIiCiCCCK4KyKCiIgggggiIoKIugoiiCCuH+En+OSD+Ad9aW760tI2kmUCY9dmp922M+1tn9Pce06TzG2SoQT5hyLnJ1MB0xGA3MB0CoxyADiOs9G27TlCyH5K6S8p5QIA/BllDp2xRjYCXNfdYVnWIiFkZzSJbDbrVSqVWlISRiLA87wZBS+l3LXsF6B0jnP+fmIF+L6/XUr5nVK6uwvkTQB4M5ECGGPbFDwhZE8XwKplWbPVavXnxAlgjG2VUqo5v7cbHKX0Iuf8W1LwKu5Q1oB8Pr+l3W4r+H0GuEsA8DVJ+KEICIJgc6vVUvAHDHCXAeBL0vADF1AoFDY1m00Ff9AAdwUAPqcBfqACHMcp27at4A91g5NSXhVCfEoL/MAE5HK5DZlMRsEfNsBfE0J8TBP8QATkcrn1IfwRw2p/nXP+IW3wqxbgum5JwUspjxrg5znnC2mEX5UAz/PWEUIWKaWzBrhEq7w40vuqAxhjQVjkHDMEuQUAr+MkkWSbngUEQcDC5/xxQ+K3AeBVkmBxY/ckoFgseo1GQ632JwwB7gDAy7gJJN0utoBSqeTW63VVt580POruCiFeJA3VS/xYAsrlslOr1RT8KQP8PSHE816Cp6FtHAFrfd9Xw/604VF3n3P+LA1AveawkoA1IfwZA/wDzvnTXgOnpb1JgM0YU0XOWUOyDwHgSVpg+smjmwDL8zxV5JwzdPoIAB73EzRN3/mvgBD+vGHB+5EmiJi5VIQQFzrbLhPg+/5bQsh8zE7Hrdk7ALgRTfofAeEmZqIHFcM2KqWcEUL81nGmAjqNo54CWgbqRTCUgPsxGEpAXQjp2YC6FNYSUP8ZWpKA/e/wkgTUGyJ6LqDeEtMSUG+Kagmot8Uj1SLegxEtAfXRmJaA+nA0IgHv8biWgPqChJaA+opMpE7Ae0lKS0B9TS5SLOG9KBmRgPeqrJaA+rJ0pGzGe10+UjbjfWEiUizhfWVm2Ede/fa/0gWJfvsdm+9NBYzNTzWkRKcjYEhix6bbvxa+jlAG+ZjdAAAAAElFTkSuQmCC";
var CloseIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACWElEQVR4Xu2aPU7DMBSAnyuugcTCxCHcHgKExBkYmSkzjNyAjXKHyl1ZGZEY4AJIrKlRJCJVVRPb788OcdfUz+/7/OzUrg1M/GMmzg9VQK2AiRuoU2DiBVAXwagp4Jy7B4BLY8x30zQvi8ViWWLlrNfrpTHmyhhzBACv1tqLUJ5BAc65ZwA43wu0igke6pzzeU+eD9bam6F+YgR8AMDJgSDFSOiBb1P+stYekwRsNps37/1ZT5DsEgbgwXv/Pp/PT0kC2nk1m81uB4JkkzAE3+a73W7vQutVcAq0gUIdAYC6BK6cogSUJoELvuWKFlCKBE74ZAG5JXDDowTkkiABjxagLUEKniRAS4IkPFmAtARpeBYBUhI04NkEcEvQgmcVwCVBE55dAFWCNryIAKyEHPBiAlIl5IIXFRAr4W+bvX/itLv7Ft1pJm2GBs4Eeh9FjO5QWFF48QroyJASxOHVBEROB7Wy3+1IfArsdhZZCSoj3+VVBWAWNkybyNHvQqtVgUoFJMKrShAXgIRXkyAqIAJ+9W9/CMXAd/8vpnwXs/4MtRGpAAwQpg2HDHYBFBBKW6wMVgEcABwxUmSwCeBMnDNWSAaLAImEJWIekkEWIJmoZGyWvYBGgtJ9oCtAOrHEXSR674ASoAmfcKiCkpAsIAe8pIQkATnhpSRECygBXkJClICS4LklBAVM/prc5C9KOuemfVW2Z/6j3rmhjQnleU+ej9baa/KByAivy/9471fGmCdr7SdZAGVkSm8bfAuUDkDNrwqgGhx7+1oBYx9Bav61AqgGx97+F+cRz1Chs9oLAAAAAElFTkSuQmCC";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = ["lines"];
const __default__$1 = {
  name: "WlTextEllipsis"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    lines: { default: "1" },
    effect: { default: "ellipsis" },
    masker_background: { default: "#fff" },
    custormClass: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const target_node = ref();
    const masker_node = ref();
    const init = () => {
      if (target_node.value) {
        target_node.value.style.setProperty("--lines", props.lines);
        let parent_line_height = getComputedStyle(target_node.value)["line-height"];
        parent_line_height = parent_line_height === "normal" ? "20px" : parent_line_height;
        parent_line_height = +parent_line_height.split("px")[0];
        const parent_height = +getComputedStyle(target_node.value)["height"].split(
          "px"
        )[0];
        const text_allow_height = parent_line_height * +props.lines;
        if (parent_height - 10 > text_allow_height) {
          target_node.value.classList.add("visual-effect");
          if (masker_node.value) {
            masker_node.value.style.background = `linear-gradient(90deg, transparent 0%, ${props.masker_background} 75%)`;
            masker_node.value.style.height = parent_line_height + "px";
            masker_node.value.style.lineHeight = parent_line_height + "px";
          }
        }
      }
    };
    onMounted(() => {
      setTimeout(() => {
        init();
      }, 100);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "lines-wrapper",
        lines: __props.lines
      }, [
        createElementVNode("div", {
          class: normalizeClass(["text-wrap", [__props.custormClass]]),
          ref_key: "target_node",
          ref: target_node
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2),
        __props.effect === "needMasker" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "masker",
          ref_key: "masker_node",
          ref: masker_node
        }, null, 512)) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
var Comp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a9ed9df"]]);
Comp.install = (app) => {
  app.component(Comp.name, Comp);
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "header-left" };
const _hoisted_2 = { class: "header-title" };
const _hoisted_3 = { class: "header-right" };
const __default__ = {
  name: "WlHeader"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    title: { default: "" },
    showClose: { type: Boolean, default: false },
    showBack: { type: Boolean, default: false },
    needAutoBack: { type: Boolean, default: true },
    needBottomBorder: { type: Boolean, default: false }
  },
  emits: ["onBack", "onClose"],
  setup(__props, { emit }) {
    const props = __props;
    const onBack = () => {
      if (props.needAutoBack) {
        history.back();
      } else {
        emit("onBack");
      }
    };
    const onClose = () => {
      emit("onClose");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`header ${__props.needBottomBorder ? " bottom-border" : " "}`),
        "data-weiling-mobile-ui-wl-header": ""
      }, [
        createElementVNode("div", _hoisted_1, [
          withDirectives(createElementVNode("div", {
            class: "icon",
            onClick: onBack
          }, [
            createVNode(_sfc_main$2, { src: unref(BackIcon) }, null, 8, ["src"])
          ], 512), [
            [vShow, __props.showBack]
          ]),
          renderSlot(_ctx.$slots, "header_part_left")
        ]),
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(Comp), {
            lines: "1",
            effect: "needMasker",
            masker_background: "#fff"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.title), 1)
              ])
            ]),
            _: 3
          })
        ]),
        createElementVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "header_part_right", {}, () => [
            withDirectives(createElementVNode("div", {
              class: "icon",
              onClick: onClose
            }, [
              createVNode(_sfc_main$2, { src: unref(CloseIcon) }, null, 8, ["src"])
            ], 512), [
              [vShow, __props.showClose]
            ])
          ])
        ])
      ], 2);
    };
  }
});
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export { _sfc_main as default };
