import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/react-tiny-fab/dist/react-tiny-fab.esm.js
var import_react = __toESM(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = ".rtf{box-sizing:border-box;margin:25px;position:fixed;white-space:nowrap;z-index:9998;padding-left:0;list-style:none}.rtf.open .rtf--mb>*{transform-origin:center center;transform:rotate(315deg);transition:transform .2s ease-in-out}.rtf.open .rtf--mb>ul{list-style:none;margin:0;padding:0}.rtf.open .rtf--ab__c:hover>span,.rtf.open .rtf--ab__c>span.always-show{transition:opacity .2s ease-in-out;opacity:.9}.rtf.open .rtf--ab__c:first-child{transform:translateY(-60px) scale(1);transition-delay:.03s}.rtf.open .rtf--ab__c:first-child.top{transform:translateY(60px) scale(1)}.rtf.open .rtf--ab__c:nth-child(2){transform:translateY(-120px) scale(1);transition-delay:.09s}.rtf.open .rtf--ab__c:nth-child(2).top{transform:translateY(120px) scale(1)}.rtf.open .rtf--ab__c:nth-child(3){transform:translateY(-180px) scale(1);transition-delay:.12s}.rtf.open .rtf--ab__c:nth-child(3).top{transform:translateY(180px) scale(1)}.rtf.open .rtf--ab__c:nth-child(4){transform:translateY(-240px) scale(1);transition-delay:.15s}.rtf.open .rtf--ab__c:nth-child(4).top{transform:translateY(240px) scale(1)}.rtf.open .rtf--ab__c:nth-child(5){transform:translateY(-300px) scale(1);transition-delay:.18s}.rtf.open .rtf--ab__c:nth-child(5).top{transform:translateY(300px) scale(1)}.rtf.open .rtf--ab__c:nth-child(6){transform:translateY(-360px) scale(1);transition-delay:.21s}.rtf.open .rtf--ab__c:nth-child(6).top{transform:translateY(360px) scale(1)}.rtf--mb__c{padding:25px;margin:-25px}.rtf--mb__c :last-child{margin-bottom:0}.rtf--mb__c:hover>span,.rtf--mb__c>span.always-show{transition:opacity .2s ease-in-out;opacity:.9}.rtf--mb__c>span{opacity:0;transition:opacity .2s ease-in-out;position:absolute;top:50%;transform:translateY(-50%);margin-right:6px;margin-left:4px;background:rgba(0,0,0,.75);padding:2px 4px;border-radius:2px;color:#fff;font-size:13px;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)}.rtf--mb__c>span.right{right:100%}.rtf--mb{height:56px;width:56px;z-index:9999;background-color:#666;display:inline-flex;justify-content:center;align-items:center;position:relative;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);cursor:pointer;outline:none;padding:0;-webkit-user-drag:none;font-weight:700;color:#f1f1f1;font-size:18px}.rtf--ab__c,.rtf--mb>*{transition:transform .2s ease-in-out}.rtf--ab__c{display:block;position:absolute;top:0;right:1px;padding:10px 0;margin:-10px 0}.rtf--ab__c>span{opacity:0;transition:opacity .2s ease-in-out;position:absolute;top:50%;transform:translateY(-50%);margin-right:6px;background:rgba(0,0,0,.75);padding:2px 4px;border-radius:2px;color:#fff;font-size:13px;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)}.rtf--ab__c>span.right{right:100%}.rtf--ab__c:first-child{transform:translateY(-60px) scale(0);transition-delay:.21s}.rtf--ab__c:first-child.top{transform:translateY(60px) scale(0)}.rtf--ab__c:nth-child(2){transform:translateY(-120px) scale(0);transition-delay:.18s}.rtf--ab__c:nth-child(2).top{transform:translateY(120px) scale(0)}.rtf--ab__c:nth-child(3){transform:translateY(-180px) scale(0);transition-delay:.15s}.rtf--ab__c:nth-child(3).top{transform:translateY(180px) scale(0)}.rtf--ab__c:nth-child(4){transform:translateY(-240px) scale(0);transition-delay:.12s}.rtf--ab__c:nth-child(4).top{transform:translateY(240px) scale(0)}.rtf--ab__c:nth-child(5){transform:translateY(-300px) scale(0);transition-delay:.09s}.rtf--ab__c:nth-child(5).top{transform:translateY(300px) scale(0)}.rtf--ab__c:nth-child(6){transform:translateY(-360px) scale(0);transition-delay:.03s}.rtf--ab__c:nth-child(6).top{transform:translateY(360px) scale(0)}.rtf--ab{height:48px;width:48px;background-color:#aaa;display:inline-flex;justify-content:center;align-items:center;position:relative;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);cursor:pointer;outline:none;padding:0;-webkit-user-drag:none;font-weight:700;color:#f1f1f1;margin-right:4px;font-size:16px;z-index:10000}";
styleInject(css_248z);
var AB = function AB2(_ref) {
  var children = _ref.children, p = _objectWithoutPropertiesLoose(_ref, ["children"]);
  return import_react.default.createElement("button", Object.assign({
    type: "button"
  }, p, {
    className: "rtf--ab"
  }), children);
};
var MB = function MB2(_ref2) {
  var children = _ref2.children, p = _objectWithoutPropertiesLoose(_ref2, ["children"]);
  return import_react.default.createElement("button", Object.assign({
    type: "button",
    className: "rtf--mb"
  }, p), children);
};
var defaultStyles = {
  bottom: 24,
  right: 24
};
var Fab = function Fab2(_ref3) {
  var _ref3$event = _ref3.event, event = _ref3$event === void 0 ? "hover" : _ref3$event, _ref3$style = _ref3.style, style = _ref3$style === void 0 ? defaultStyles : _ref3$style, _ref3$alwaysShowTitle = _ref3.alwaysShowTitle, alwaysShowTitle = _ref3$alwaysShowTitle === void 0 ? false : _ref3$alwaysShowTitle, children = _ref3.children, icon = _ref3.icon, mainButtonStyles = _ref3.mainButtonStyles, onClick = _ref3.onClick, text = _ref3.text, p = _objectWithoutPropertiesLoose(_ref3, ["event", "style", "alwaysShowTitle", "children", "icon", "mainButtonStyles", "onClick", "text"]);
  var _useState = (0, import_react.useState)(false), isOpen = _useState[0], setIsOpen = _useState[1];
  var ariaHidden = alwaysShowTitle || !isOpen;
  var interpolatedEvent = "ontouchstart" in window ? "click" : event;
  var open = function open2() {
    return setIsOpen(true);
  };
  var close = function close2() {
    return setIsOpen(false);
  };
  var enter = function enter2() {
    return interpolatedEvent === "hover" && open();
  };
  var leave = function leave2() {
    return interpolatedEvent === "hover" && close();
  };
  var toggle = function toggle2(e) {
    if (onClick) {
      return onClick(e);
    }
    e.persist();
    return interpolatedEvent === "click" ? isOpen ? close() : open() : null;
  };
  var actionOnClick = function actionOnClick2(e, userFunc) {
    e.persist();
    setIsOpen(false);
    setTimeout(function() {
      userFunc(e);
    }, 1);
  };
  var rc = function rc2() {
    return import_react.default.Children.map(children, function(ch, i) {
      if (import_react.default.isValidElement(ch)) {
        return import_react.default.createElement("li", {
          className: "rtf--ab__c " + ("top" in style ? "top" : "")
        }, import_react.default.cloneElement(ch, _extends({
          "data-testid": "action-button-" + i,
          "aria-label": ch.props.text || "Menu button " + (i + 1),
          "aria-hidden": ariaHidden,
          tabIndex: isOpen ? 0 : -1
        }, ch.props, {
          onClick: function onClick2(e) {
            if (ch.props.onClick)
              actionOnClick(e, ch.props.onClick);
          }
        })), ch.props.text && import_react.default.createElement("span", {
          className: ("right" in style ? "right" : "") + " " + (alwaysShowTitle ? "always-show" : ""),
          "aria-hidden": ariaHidden
        }, ch.props.text));
      }
      return null;
    });
  };
  return import_react.default.createElement("ul", Object.assign({
    onMouseEnter: enter,
    onMouseLeave: leave,
    className: "rtf " + (isOpen ? "open" : "closed"),
    "data-testid": "fab",
    style
  }, p), import_react.default.createElement("li", {
    className: "rtf--mb__c"
  }, import_react.default.createElement(MB, {
    onClick: toggle,
    style: mainButtonStyles,
    "data-testid": "main-button",
    role: "button",
    "aria-label": "Floating menu",
    tabIndex: 0
  }, icon), text && import_react.default.createElement("span", {
    className: ("right" in style ? "right" : "") + " " + (alwaysShowTitle ? "always-show" : ""),
    "aria-hidden": ariaHidden
  }, text), import_react.default.createElement("ul", null, rc())));
};
export {
  AB as Action,
  Fab,
  MB
};
//# sourceMappingURL=react-tiny-fab.js.map
