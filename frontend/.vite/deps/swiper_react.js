import {
  core_default,
  extend,
  isObject,
  needsNavigation,
  needsPagination,
  needsScrollbar,
  paramsList,
  uniqueClasses,
  updateSwiper,
  wrapperClass
} from "./chunk-XHEU4AHX.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/swiper/react/swiper.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/swiper/components-shared/get-params.js
function getParams(obj = {}, splitEvents = true) {
  const params = {
    on: {}
  };
  const events = {};
  const passedParams = {};
  extend(params, core_default.defaults);
  extend(params, core_default.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach((key) => {
    if (typeof obj[key] === "undefined")
      return;
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      if (splitEvents) {
        events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events
  };
}

// node_modules/swiper/components-shared/mount-swiper.js
function mountSwiper({
  el,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl,
  swiper
}, swiperParams) {
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }
  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }
  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }
  swiper.init(el);
}

// node_modules/swiper/components-shared/get-changed-params.js
function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
  const keys = [];
  if (!oldParams)
    return keys;
  const addKey = (key) => {
    if (keys.indexOf(key) < 0)
      keys.push(key);
  };
  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children.map(getKey);
    if (oldChildrenKeys.join("") !== childrenKeys.join(""))
      addKey("children");
    if (oldChildren.length !== children.length)
      addKey("children");
  }
  const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
  watchParams.forEach((key) => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach((newKey) => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach((oldKey) => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
              addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}

// node_modules/swiper/react/get-children.js
var import_react = __toESM(require_react(), 1);
function isChildSwiperSlide(child) {
  return child.type && child.type.displayName && child.type.displayName.includes("SwiperSlide");
}
function processChildren(c) {
  const slides = [];
  import_react.default.Children.toArray(c).forEach((child) => {
    if (isChildSwiperSlide(child)) {
      slides.push(child);
    } else if (child.props && child.props.children) {
      processChildren(child.props.children).forEach((slide) => slides.push(slide));
    }
  });
  return slides;
}
function getChildren(c) {
  const slides = [];
  const slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  import_react.default.Children.toArray(c).forEach((child) => {
    if (isChildSwiperSlide(child)) {
      slides.push(child);
    } else if (child.props && child.props.slot && slots[child.props.slot]) {
      slots[child.props.slot].push(child);
    } else if (child.props && child.props.children) {
      const foundSlides = processChildren(child.props.children);
      if (foundSlides.length > 0) {
        foundSlides.forEach((slide) => slides.push(slide));
      } else {
        slots["container-end"].push(child);
      }
    } else {
      slots["container-end"].push(child);
    }
  });
  return {
    slides,
    slots
  };
}

// node_modules/swiper/react/virtual.js
var import_react2 = __toESM(require_react(), 1);
function renderVirtual(swiper, slides, virtualData) {
  if (!virtualData)
    return null;
  const getSlideIndex = (index) => {
    let slideIndex = index;
    if (index < 0) {
      slideIndex = slides.length + index;
    } else if (slideIndex >= slides.length) {
      slideIndex = slideIndex - slides.length;
    }
    return slideIndex;
  };
  const style = swiper.isHorizontal() ? {
    [swiper.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  const {
    from,
    to
  } = virtualData;
  const loopFrom = swiper.params.loop ? -slides.length : 0;
  const loopTo = swiper.params.loop ? slides.length * 2 : slides.length;
  const slidesToRender = [];
  for (let i = loopFrom; i < loopTo; i += 1) {
    if (i >= from && i <= to) {
      slidesToRender.push(slides[getSlideIndex(i)]);
    }
  }
  return slidesToRender.map((child, index) => {
    return import_react2.default.cloneElement(child, {
      swiper,
      style,
      key: `slide-${index}`
    });
  });
}

// node_modules/swiper/components-shared/update-on-virtual-data.js
var updateOnVirtualData = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled)
    return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};

// node_modules/swiper/react/use-isomorphic-layout-effect.js
var import_react3 = __toESM(require_react(), 1);
function useIsomorphicLayoutEffect(callback, deps) {
  if (typeof window === "undefined")
    return (0, import_react3.useEffect)(callback, deps);
  return (0, import_react3.useLayoutEffect)(callback, deps);
}

// node_modules/swiper/react/context.js
var import_react4 = __toESM(require_react(), 1);
var SwiperSlideContext = (0, import_react4.createContext)(null);
var useSwiperSlide = () => {
  return (0, import_react4.useContext)(SwiperSlideContext);
};
var SwiperContext = (0, import_react4.createContext)(null);
var useSwiper = () => {
  return (0, import_react4.useContext)(SwiperContext);
};

// node_modules/swiper/react/swiper.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Swiper = (0, import_react5.forwardRef)(function(_temp, externalElRef) {
  let {
    className,
    tag: Tag = "div",
    wrapperTag: WrapperTag = "div",
    children,
    onSwiper,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  let eventsAssigned = false;
  const [containerClasses, setContainerClasses] = (0, import_react5.useState)("swiper");
  const [virtualData, setVirtualData] = (0, import_react5.useState)(null);
  const [breakpointChanged, setBreakpointChanged] = (0, import_react5.useState)(false);
  const initializedRef = (0, import_react5.useRef)(false);
  const swiperElRef = (0, import_react5.useRef)(null);
  const swiperRef = (0, import_react5.useRef)(null);
  const oldPassedParamsRef = (0, import_react5.useRef)(null);
  const oldSlides = (0, import_react5.useRef)(null);
  const nextElRef = (0, import_react5.useRef)(null);
  const prevElRef = (0, import_react5.useRef)(null);
  const paginationElRef = (0, import_react5.useRef)(null);
  const scrollbarElRef = (0, import_react5.useRef)(null);
  const {
    params: swiperParams,
    passedParams,
    rest: restProps,
    events
  } = getParams(rest);
  const {
    slides,
    slots
  } = getChildren(children);
  const onBeforeBreakpoint = () => {
    setBreakpointChanged(!breakpointChanged);
  };
  Object.assign(swiperParams.on, {
    _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }
  });
  const initSwiper = () => {
    Object.assign(swiperParams.on, events);
    eventsAssigned = true;
    const passParams = {
      ...swiperParams
    };
    delete passParams.wrapperClass;
    swiperRef.current = new core_default(passParams);
    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      const extendWith = {
        cache: false,
        slides,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      extend(swiperRef.current.params.virtual, extendWith);
      extend(swiperRef.current.originalParams.virtual, extendWith);
    }
  };
  if (!swiperElRef.current) {
    initSwiper();
  }
  if (swiperRef.current) {
    swiperRef.current.on("_beforeBreakpoint", onBeforeBreakpoint);
  }
  const attachEvents = () => {
    if (eventsAssigned || !events || !swiperRef.current)
      return;
    Object.keys(events).forEach((eventName) => {
      swiperRef.current.on(eventName, events[eventName]);
    });
  };
  const detachEvents = () => {
    if (!events || !swiperRef.current)
      return;
    Object.keys(events).forEach((eventName) => {
      swiperRef.current.off(eventName, events[eventName]);
    });
  };
  (0, import_react5.useEffect)(() => {
    return () => {
      if (swiperRef.current)
        swiperRef.current.off("_beforeBreakpoint", onBeforeBreakpoint);
    };
  });
  (0, import_react5.useEffect)(() => {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  });
  useIsomorphicLayoutEffect(() => {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }
    if (!swiperElRef.current)
      return;
    if (swiperRef.current.destroyed) {
      initSwiper();
    }
    mountSwiper({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper)
      onSwiper(swiperRef.current);
    return () => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []);
  useIsomorphicLayoutEffect(() => {
    attachEvents();
    const changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, (c) => c.key);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;
    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      updateSwiper({
        swiper: swiperRef.current,
        slides,
        passedParams,
        changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }
    return () => {
      detachEvents();
    };
  });
  useIsomorphicLayoutEffect(() => {
    updateOnVirtualData(swiperRef.current);
  }, [virtualData]);
  function renderSlides() {
    if (swiperParams.virtual) {
      return renderVirtual(swiperRef.current, slides, virtualData);
    }
    return slides.map((child, index) => {
      return import_react5.default.cloneElement(child, {
        swiper: swiperRef.current,
        swiperSlideIndex: index
      });
    });
  }
  return import_react5.default.createElement(Tag, _extends({
    ref: swiperElRef,
    className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`)
  }, restProps), import_react5.default.createElement(SwiperContext.Provider, {
    value: swiperRef.current
  }, slots["container-start"], import_react5.default.createElement(WrapperTag, {
    className: wrapperClass(swiperParams.wrapperClass)
  }, slots["wrapper-start"], renderSlides(), slots["wrapper-end"]), needsNavigation(swiperParams) && import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), import_react5.default.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), needsScrollbar(swiperParams) && import_react5.default.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), needsPagination(swiperParams) && import_react5.default.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), slots["container-end"]));
});
Swiper.displayName = "Swiper";

// node_modules/swiper/react/swiper-slide.js
var import_react6 = __toESM(require_react(), 1);
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var SwiperSlide = (0, import_react6.forwardRef)(function(_temp, externalRef) {
  let {
    tag: Tag = "div",
    children,
    className = "",
    swiper,
    zoom,
    lazy,
    virtualIndex,
    swiperSlideIndex,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  const slideElRef = (0, import_react6.useRef)(null);
  const [slideClasses, setSlideClasses] = (0, import_react6.useState)("swiper-slide");
  const [lazyLoaded, setLazyLoaded] = (0, import_react6.useState)(false);
  function updateClasses(_s, el, classNames) {
    if (el === slideElRef.current) {
      setSlideClasses(classNames);
    }
  }
  useIsomorphicLayoutEffect(() => {
    if (typeof swiperSlideIndex !== "undefined") {
      slideElRef.current.swiperSlideIndex = swiperSlideIndex;
    }
    if (externalRef) {
      externalRef.current = slideElRef.current;
    }
    if (!slideElRef.current || !swiper) {
      return;
    }
    if (swiper.destroyed) {
      if (slideClasses !== "swiper-slide") {
        setSlideClasses("swiper-slide");
      }
      return;
    }
    swiper.on("_slideClass", updateClasses);
    return () => {
      if (!swiper)
        return;
      swiper.off("_slideClass", updateClasses);
    };
  });
  useIsomorphicLayoutEffect(() => {
    if (swiper && slideElRef.current && !swiper.destroyed) {
      setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }
  }, [swiper]);
  const slideData = {
    isActive: slideClasses.indexOf("swiper-slide-active") >= 0,
    isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
    isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0,
    isNext: slideClasses.indexOf("swiper-slide-next") >= 0
  };
  const renderChildren = () => {
    return typeof children === "function" ? children(slideData) : children;
  };
  const onLoad = () => {
    setLazyLoaded(true);
  };
  return import_react6.default.createElement(Tag, _extends2({
    ref: slideElRef,
    className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`),
    "data-swiper-slide-index": virtualIndex,
    onLoad
  }, rest), zoom && import_react6.default.createElement(SwiperSlideContext.Provider, {
    value: slideData
  }, import_react6.default.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === "number" ? zoom : void 0
  }, renderChildren(), lazy && !lazyLoaded && import_react6.default.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !zoom && import_react6.default.createElement(SwiperSlideContext.Provider, {
    value: slideData
  }, renderChildren(), lazy && !lazyLoaded && import_react6.default.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
SwiperSlide.displayName = "SwiperSlide";
export {
  Swiper,
  SwiperSlide,
  useSwiper,
  useSwiperSlide
};
//# sourceMappingURL=swiper_react.js.map
