// ==UserScript==
// @name [VOT] - Voice Over Translation
// @name:de [VOT] - Voice-Over-Video-Übersetzung
// @name:es [VOT] - Traducción de vídeo en off
// @name:fr [VOT] - Traduction vidéo voix-off
// @name:it [VOT] - Traduzione Video fuori campo
// @name:ru [VOT] - Закадровый перевод видео
// @name:zh [VOT] - 画外音视频翻译
// @description A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @version 1.4.1-beta
// @author sodapng, mynovelhost, Toil, SashaXser, MrSoczekXD
// @supportURL https://github.com/ilyhalight/voice-over-translation/issues
// @match *://*.youtube.com/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.twitch.tv/*
// @match *://*.xvideos.com/*
// @match *://*.pornhub.com/*
// @match *://*.vk.com/*
// @match *://*.vk.ru/*
// @match *://invidious.snopyta.org/*
// @match *://invidious.kavin.rocks/*
// @match *://vid.puffyan.us/*
// @match *://invidious.namazso.eu/*
// @match *://inv.riverside.rocks/*
// @match *://yt.artemislena.eu/*
// @match *://invidious.flokinet.to/*
// @match *://invidious.esmailelbob.xyz/*
// @match *://invidious.nerdvpn.de/*
// @match *://invidious.slipfox.xyz/*
// @match *://invidio.xamh.de/*
// @match *://invidious.dhusch.de/*
// @match *://*.piped.video/*
// @match *://piped.tokhmi.xyz/*
// @match *://piped.moomoo.me/*
// @match *://piped.syncpundit.io/*
// @match *://piped.mha.fi/*
// @match *://watch.whatever.social/*
// @match *://piped.garudalinux.org/*
// @match *://efy.piped.pages.dev/*
// @match *://watch.leptons.xyz/*
// @match *://piped.lunar.icu/*
// @match *://yt.dc09.ru/*
// @match *://piped.mint.lgbt/*
// @match *://*.il.ax/*
// @match *://piped.privacy.com.de/*
// @match *://piped.esmailelbob.xyz/*
// @match *://piped.projectsegfau.lt/*
// @match *://piped.in.projectsegfau.lt/*
// @match *://piped.us.projectsegfau.lt/*
// @match *://piped.privacydev.net/*
// @match *://piped.palveluntarjoaja.eu/*
// @match *://piped.smnz.de/*
// @match *://piped.adminforge.de/*
// @match *://piped.qdi.fi/*
// @match *://piped.hostux.net/*
// @match *://piped.chauvet.pro/*
// @match *://piped.jotoma.de/*
// @match *://piped.pfcd.me/*
// @match *://piped.frontendfriendly.xyz/*
// @match *://*.yewtu.be/*
// @match *://inv.vern.cc/*
// @match *://*.vimeo.com/*
// @match *://*.9gag.com/*
// @match *://*.twitter.com/*
// @match *://*.facebook.com/*
// @match *://*.rutube.ru/*
// @match *://*.bilibili.com/*
// @match *://my.mail.ru/*
// @match *://*.bitchute.com/*
// @connect api.browser.yandex.ru
// @downloadURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @homepageURL https://github.com/ilyhalight/voice-over-translation/issues
// @icon https://translate.yandex.ru/icons/favicon.ico
// @namespace vot
// @require https://cdnjs.cloudflare.com/ajax/libs/protobufjs/7.2.3/light/protobuf.min.js
// @run-at document-start
// @updateURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.translationBlock {
  padding: 0.45rem !important;
  width: max-content;
  position: absolute;
  background: #2e2f34;
  border-radius: 0.5rem !important;
  left: 50%;
  top: 5rem;
  transform: translate(-50%);
  text-align: center;
  opacity: 0;
  transition: opacity 1s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
}

.translationBtn {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  padding-right: 0.25rem !important;
  cursor: pointer;
  font: 600 12px / 14px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif;
}

.translationBlock:hover {
  opacity: 1;
}

.translationMenu {
  display: inline-block;
  vertical-align: middle;
  border-left: 1px solid #424348;
  max-height: 16px;
  max-width: 24px;
  cursor: pointer;
}

.translationMenuIcon {
  padding: 0 10px !important;
  width: 24px;
}

.translationIAlice {
  display: inline-block;
  vertical-align: middle;
  max-height: 26px;
  max-width: 50px;
}

.translationIconAlice {
  height: 24px !important;
  width: 24px !important;
}

.translationITranslate {
  display: inline-block;
  vertical-align: middle;
  max-height: 20px;
  max-width: 20px;
}

.translationMenuContent {
  position: absolute;
  background: #2e2f34;
  color: #fff;
  display: none;
  border-radius: 1rem !important;
  left: 50%;
  top: 10rem;
  transform: translate(-50%);
  text-align: left;
  font: 600 14px / 16px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif !important;

  width: 300px;
  /* height: 375px; */
  opacity: 0;
  z-index: 100;
  transition: opacity 0.5s ease;
}

.VOTMenuSlider {
  -webkit-appearance: none !important;
  appearance: none !important;
  width: 268px !important;
  height: 8px !important;
  outline: none !important;
  margin-top: 0.5rem;
  opacity: 0.7;
  /* background: #3C3F4D !important; */
  background: rgb(253, 222, 85, 0.6) !important;
  border: none !important;
  border-radius: 2rem !important;
  -webkit-transition: 0.2s !important;
  transition: opacity 0.2s ease !important;
}

.VOTMenuSlider:hover {
  opacity: 1;
}

.VOTMenuSlider::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  appearance: none !important;
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-moz-range-thumb {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-ms-thumb {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-ms-fill-lower {
  height: 8px !important;
  border-radius: 2rem !important;
  background: linear-gradient(
    90.1deg,
    rgba(186, 153, 244, 0.85) -5.78%,
    rgba(236, 138, 202, 0.7) 56.46%,
    rgba(239, 168, 117, 0.6) 108.93%
  ) !important;
}

.VOTMenuSlider::-moz-range-progress {
  height: 8px !important;
  border-radius: 2rem !important;
  background: linear-gradient(
    90.1deg,
    rgba(186, 153, 244, 0.85) -5.78%,
    rgba(236, 138, 202, 0.7) 56.46%,
    rgba(239, 168, 117, 0.6) 108.93%
  ) !important;
}

.translationHeader {
  padding-bottom: 0.5rem !important;
}

.translationMainHeader {
  margin: 16px !important;
  color: #fff;
  font: 900 14px / 16px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif !important;
}

.translationMenuOptions {
  display: flex;
  flex-flow: column wrap;
}

.translationMenuContainer {
  /* width: 100%; */
  padding-left: 16px !important;
  padding-top: 5px !important;
  display: inline-block !important;
}

.translationMenuContainer > input {
  appearance: auto !important;
  vertical-align: text-bottom;
}

.translationMenuText {
  color: #fff;
  display: inline-flex;
  width: 80%;
}

.translationVolumeBox,
.translationVideoVolumeBox {
  padding-top: 0.5rem !important;
}

.translationDropDB {
  border: none !important;
  border-radius: 4px !important;
  background: #5426ff !important;
  color: #fff !important;
  padding: 6px 16px !important;
  margin-left: auto !important;
  cursor: pointer !important;
}

.translationDownload {
  background: #5426ff !important;
  color: #fff !important;
  padding: 2px 10px !important;
  border-radius: 4px !important;
  cursor: pointer;
  display: none;
}

.translationMenuFunctional {
  display: flex;
  margin: 16px !important;
}

.VOTMenuSelect {
  width: 110px;
  border-radius: 5px !important;
  border: 1px solid #dadce0 !important;
  box-shadow: 0 1px 3px -2px #9098a9;
  box-sizing: border-box !important;
  color: #2e2f34 !important;
  background: #fff !important;
  padding: 5px !important;
}

.VOTMenuSelect:focus {
  outline: none;
}

.VOTMenuSelect:focus {
  outline: none;
  border-color: #0077ff;
  box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
}

#VOTSelectLanguages {
  display: flex !important;
  margin-left: 5px;
}

#VOTSelectLanguages svg {
  margin: 0 5px;
}

#VOTSubtitlesLangContainer {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
}

#VOTSubtitlesLang {
  margin-right: 25px;
}

.VOTSubtitlesWidget {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50%;
  max-height: 100%;
  min-height: 20%;
  z-index: 100;
  left: 25%;
  top: 75%;
  pointer-events: none;
}

.VOTSubtitlesWidget > div {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: max-content;
  background: #2e2f34cc;
  border-radius: 1rem;
  pointer-events: all;
  padding: 1rem;
  font-size: 2rem;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.VOTSubtitlesWidget .passed {
  color: #9e84ff;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/config/config.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I1: () => (/* binding */ yandexHmacKey),
/* harmony export */   IM: () => (/* binding */ autoVolume),
/* harmony export */   Rr: () => (/* binding */ yandexUserAgent),
/* harmony export */   iF: () => (/* binding */ workerHost)
/* harmony export */ });
// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const yandexHmacKey = "xtGCyGdTY2Jy6OMEKdTuXev3Twhkamgm";
const yandexUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.1.1140 Yowser/2.5 Safari/537.36";
const autoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation




/***/ }),

/***/ "./src/utils/debug.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const debug = {};
debug.log = (...text) => {
  if (true) {
    return;
  }
  return console.log(
    "%c[VOT DEBUG]",
    "background: #F2452D; color: #fff; padding: 5px;",
    ...text
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debug);


/***/ }),

/***/ "./src/yandexRequest.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config/config.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/debug.js");



async function yandexRequest(path, body, headers, callback) {
  try {
    _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("yandexRequest:", path);
    // Create a fetch options object with headers and body
    const options = {
      url: `https://${_config_config_js__WEBPACK_IMPORTED_MODULE_1__/* .workerHost */ .iF}${path}`,
      method: "POST",
      headers: {
        ...{
          Accept: "application/x-protobuf",
          "Accept-Language": "en",
          "Content-Type": "application/x-protobuf",
          "User-Agent": _config_config_js__WEBPACK_IMPORTED_MODULE_1__/* .yandexUserAgent */ .Rr,
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "sec-ch-ua": null,
          "sec-ch-ua-mobile": null,
          "sec-ch-ua-platform": null,
        },
        ...headers,
      },
      binary: true,
      data: new Blob([body]),
      responseType: "arraybuffer",
    };
    // Send the request using GM_xmlhttpRequest
    GM_xmlhttpRequest({
      ...options,
      onload: (http) => {
        _utils_debug_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.log("yandexRequest:", http.status, http);
        callback(http.status === 200, http.response);
      },
      onerror: (error) => {
        console.error("[VOT]", error);
        callback(false);
      },
    });
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yandexRequest);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");
;// CONCATENATED MODULE: ./src/styles/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ const styles_main = (main/* default */.Z && main/* default */.Z.locals ? main/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/localization/locales/en.json
const en_namespaceObject = JSON.parse('{"recommended":"recommended","translateVideo":"Translate video","disableTranslate":"Turn off","translationSettings":"Translation settings","resetSettings":"Reset settings","videoBeingTranslated":"The video is being translated","videoLanguage":"Video language","translationLanguage":"Translation language","translationTake":"The translation will take","translationTakeMoreThanHour":"The translation will take more than an hour","translationTakeAboutMinute":"The translation will take about a minute","translationTakeFewMinutes":"The translation will take a few minutes","translationTakeApproximatelyMinutes":"The translation will take approximately {0} minutes","translationTakeApproximatelyMinute":"The translation will take approximately {0} minutes","unSupportedExtensionError":"Error! {0} is not supported by this version of the extension!\\n\\nPlease use the cloudflare version of the VOT extension.","requestTranslationFailed":"Failed to request video translation","audioNotReceived":"Audio link not received","grantPermissionToAutoPlay":"Grant permission to autoplay","neededAdditionalExtension":"An additional extension is needed to support this site","audioFormatNotSupported":"The audio format is not supported","VOTAutoTranslate":"Translate on open","VOTDontTranslateYourLang":"Do not translate from my language","VOTVolume":"Video volume","VOTVolumeTranslation":"Translation Volume","VOTAutoSetVolume":"Reduce video volume to ","VOTShowVideoSlider":"Video volume slider","VOTSyncVolume":"Link translation and video volume","VOTAudioProxy":"Proxy received audio","VOTDisableFromYourLang":"You have disabled the translation of the video in your language","VOTLiveNotSupported":"Translation of live streams is not supported","VOTPremiere":"Wait for the premiere to end before translating","VOTVideoIsTooLong":"Video is too long","VOTNoVideoIDFound":"No video ID found","VOTFailedInitDB":"Failed to initialize database","VOTDBNeedUpdate":"The database needs an update, please reload the page","VOTDisabledForDBUpdating":"VOT is disabled due to an error when updating the Database. Close all open tabs with {0} and try again","VOTFailedWriteToDB":"Data could not be written to the database","VOTFailedReadFromDB":"Data could not be retrieved from the database","VOTSubtitles":"Subtitles","VOTSubtitlesDisabled":"Disabled","VOTSubtitlesMaxLength":"Subtitles max length","VOTHighlightWords":"Highlight words","VOTTranslatedFrom":"translated from","VOTAutogenerated":"autogenerated","langs":{"af":"Afrikaans","ak":"Akan","sq":"Albanian","am":"Amharic","ar":"Arabic","hy":"Armenian","as":"Assamese","ay":"Aymara","az":"Azerbaijani","bn":"Bangla","eu":"Basque","be":"Belarusian","bho":"Bhojpuri","bs":"Bosnian","bg":"Bulgarian","my":"Burmese","ca":"Catalan","ceb":"Cebuano","zh":"Chinese","zh-Hans":"Chinese (Simplified)","zh-Hant":"Chinese (Traditional)","co":"Corsican","hr":"Croatian","cs":"Czech","da":"Danish","dv":"Divehi","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","ee":"Ewe","fil":"Filipino","fi":"Finnish","fr":"French","gl":"Galician","lg":"Ganda","ka":"Georgian","de":"German","el":"Greek","gn":"Guarani","gu":"Gujarati","ht":"Haitian Creole","ha":"Hausa","haw":"Hawaiian","iw":"Hebrew","hi":"Hindi","hmn":"Hmong","hu":"Hungarian","is":"Icelandic","ig":"Igbo","id":"Indonesian","ga":"Irish","it":"Italian","ja":"Japanese","jv":"Javanese","kn":"Kannada","kk":"Kazakh","km":"Khmer","rw":"Kinyarwanda","ko":"Korean","kri":"Krio","ku":"Kurdish","ky":"Kyrgyz","lo":"Lao","la":"Latin","lv":"Latvian","ln":"Lingala","lt":"Lithuanian","lb":"Luxembourgish","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Māori","mr":"Marathi","mn":"Mongolian","ne":"Nepali","nso":"Northern Sotho","no":"Norwegian","ny":"Nyanja","or":"Odia","om":"Oromo","ps":"Pashto","fa":"Persian","pl":"Polish","pt":"Portuguese","pa":"Punjabi","qu":"Quechua","ro":"Romanian","ru":"Russian","sm":"Samoan","sa":"Sanskrit","gd":"Scottish Gaelic","sr":"Serbian","sn":"Shona","sd":"Sindhi","si":"Sinhala","sk":"Slovak","sl":"Slovenian","so":"Somali","st":"Southern Sotho","es":"Spanish","su":"Sundanese","sw":"Swahili","sv":"Swedish","tg":"Tajik","ta":"Tamil","tt":"Tatar","te":"Telugu","th":"Thai","ti":"Tigrinya","ts":"Tsonga","tr":"Turkish","tk":"Turkmen","uk":"Ukrainian","ur":"Urdu","ug":"Uyghur","uz":"Uzbek","vi":"Vietnamese","cy":"Welsh","fy":"Western Frisian","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","zu":"Zulu"}}');
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/localization/localizationProvider.js



const localesVersion = 1;
const localesUrl =
  "https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/src/localization/locales";

const localizationProvider = new (class {
  lang =
    (navigator.language || navigator.userLanguage)
      ?.substr(0, 2)
      ?.toLowerCase() ?? "en";
  locale = {};

  constructor() {
    this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
  }

  async update(force = false) {
    if (
      !force &&
      Number(window.localStorage.getItem("vot-locale-version")) ===
        localesVersion &&
      window.localStorage.getItem("vot-locale-lang") === this.lang
    ) {
      return;
    }

    debug/* default */.Z.log("Updating locale...");

    await fetch(`${localesUrl}/${this.lang}.json`)
      .then((response) => {
        if (response.status === 200) return response.text();
        throw response.status;
      })
      .then((text) => {
        window.localStorage.setItem("vot-locale", text);
        this.setLocaleFromJsonString(text);
        window.localStorage.setItem("vot-locale-version", localesVersion);
        window.localStorage.setItem("vot-locale-lang", this.lang);
      })
      .catch((error) => {
        console.error(
          "[VOT] [localizationProvider] failed get locale, cause:",
          error
        );
        this.setLocaleFromJsonString(window.localStorage.getItem("vot-locale"));
      });
  }

  setLocaleFromJsonString(json) {
    try {
      this.locale = JSON.parse(json) ?? {};
    } catch (exception) {
      console.error("[VOT] [localizationProvider]", exception);
      this.locale = {};
    }
  }

  getFromLocale(locale, key) {
    const result = key.split(".").reduce((locale, key) => {
      if (typeof locale === "object" && locale) return locale[key];
      return undefined;
    }, locale);
    if (result === undefined) {
      console.warn(
        "[VOT] [localizationProvider] locale",
        locale,
        "doesn't contain key",
        key
      );
    }
    return result;
  }

  getDefault(key) {
    return this.getFromLocale(en_namespaceObject, key) ?? key;
  }

  get(key) {
    return (
      this.getFromLocale(this.locale, key) ??
      this.getFromLocale(en_namespaceObject, key) ??
      key
    );
  }
})();

;// CONCATENATED MODULE: ./src/utils/VOTLocalizedError.js


class VOTLocalizedError extends Error {
  constructor(message) {
    super(localizationProvider.getDefault(message));
    this.name = "VOTLocalizedError";
    this.unlocalizedMessage = message;
    this.localizedMessage = localizationProvider.get(message);
  }
}

;// CONCATENATED MODULE: ./src/utils/youtubeUtils.js


async function detect(cleanText) {
  const response = await fetch("https://rust-server-531j.onrender.com/detect", {
    method: "POST",
    body: cleanText,
  });
  return await response.text();
}

// Get the language code from the response or the text
async function getLanguage(player, response, title, description, author) {
  if (!window.location.hostname.includes("m.youtube.com")) {
    // ! Experimental ! get lang from selected audio track if availabled
    const audioTracks = player.getAudioTrack();
    const trackInfo = audioTracks?.getLanguageInfo(); // get selected track info (id === "und" if tracks are not available)
    if (trackInfo?.id !== "und") {
      return trackInfo.id.split(".")[0];
    }
  }

  // TODO: If the audio tracks will work fine, transfer the receipt of captions to the audioTracks variable
  // Check if there is an automatic caption track in the response
  const captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find((caption) => caption.kind === "asr");
    if (autoCaption) {
      return autoCaption.languageCode;
    }
  }
  // If there is no caption track, use detect to get the language code from the text
  const text = [title, description, author].join(" ");
  // Remove anything that is not a letter or a space in any language
  const cleanText = text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[^\p{L}\s]/gu, "")
    .slice(0, 250);
  return await detect(cleanText);
}

function isMobile() {
  return /^m\.youtube\.com$/.test(window.location.hostname);
}

function getPlayer() {
  return isMobile()
    ? document.querySelector("#app")
    : document.querySelector("#movie_player");
}

function getPlayerResponse() {
  const player = getPlayer();
  if (isMobile()) return player?.data?.playerResponse ?? null;
  return player?.getPlayerResponse?.call() ?? null;
}

function getPlayerData() {
  const player = getPlayer();
  if (isMobile()) return player?.data?.playerResponse?.videoDetails ?? null;
  return player?.getVideoData?.call() ?? null;
}

function getSubtitles() {
  const response = getPlayerResponse();
  let captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? [];
  captionTracks = captionTracks.reduce((result, captionTrack) => {
    if ("languageCode" in captionTrack) {
      const language = captionTrack?.languageCode
        ?.toLowerCase()
        .split(";")[0]
        .trim()
        .split("-")[0];
      const url = captionTrack?.url || captionTrack?.baseUrl;
      language &&
        url &&
        result.push({
          source: "youtube",
          language,
          isAutoGenerated: captionTrack?.kind === "asr",
          url: `${
            url.startsWith("http") ? url : `${window.location.origin}/${url}`
          }&fmt=json3`,
        });
    }
    return result;
  }, []);
  debug/* default */.Z.log("youtube subtitles:", captionTracks);
  return captionTracks;
}

// Get the video data from the player
async function getVideoData() {
  const player = getPlayer();
  const response = getPlayerResponse(); // null in /embed
  const data = getPlayerData();
  const { author, title } = data ?? {};
  const {
    shortDescription: description,
    isLive,
    isLiveContent,
    isUpcoming,
  } = response?.videoDetails ?? {};
  const isPremiere = (!!isLive || !!isUpcoming) && !isLiveContent;
  const videoData = {
    isLive: !!isLive,
    isPremiere,
    title,
    description,
    author,
    detectedLanguage: await getLanguage(
      player,
      response,
      title,
      description,
      author
    ),
  };
  debug/* default */.Z.log("youtube video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

const youtubeUtils = {
  isMobile,
  getPlayer,
  getPlayerResponse,
  getPlayerData,
  getSubtitles,
  getVideoData,
};

;// CONCATENATED MODULE: ./src/yandexProtobuf.js
const VideoTranslationRequest = new protobuf.Type("VideoTranslationRequest")
  .add(new protobuf.Field("url", 3, "string"))
  .add(new protobuf.Field("deviceId", 4, "string")) // removed?
  .add(new protobuf.Field("firstRequest", 5, "bool")) // true for the first request, false for subsequent ones
  .add(new protobuf.Field("duration", 6, "double"))
  .add(new protobuf.Field("unknown2", 7, "int32")) // 1 1
  .add(new protobuf.Field("language", 8, "string")) // source language code
  .add(new protobuf.Field("unknown3", 9, "int32")) // 0 0
  .add(new protobuf.Field("unknown4", 10, "int32")) // 0 0
  .add(new protobuf.Field("translationHelp", 11, "int32")) // array for translation assistance ([0] -> {2: link to video, 1: "video_file_url"}, [1] -> {2: link to subtitles, 1: "subtitles_file_url"})
  .add(new protobuf.Field("responseLanguage", 14, "string")); // target language code

const VideoSubtitlesRequest = new protobuf.Type("VideoSubtitlesRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string")); // source language code

const VideoStreamRequest = new protobuf.Type("VideoStreamRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string"))
  .add(new protobuf.Field("responseLanguage", 3, "string"));

const VideoStreamPingRequest = new protobuf.Type("VideoStreamPingRequest").add(
  new protobuf.Field("pingId", 1, "int32")
);

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32")) // status
  .add(new protobuf.Field("remainingTime", 5, "int32")) // secs before translation
  .add(new protobuf.Field("unknown0", 6, "int32")) // unknown 0 (1st request) -> 10 (2nd, 3th and etc requests)
  .add(new protobuf.Field("unknown1", 7, "string"))
  .add(new protobuf.Field("language", 8, "string")) // detected language (if the wrong one is set)
  .add(new protobuf.Field("message", 9, "string"));

const VideoSubtitlesObject = new protobuf.Type("VideoSubtitlesObject")
  .add(new protobuf.Field("language", 1, "string"))
  .add(new protobuf.Field("url", 2, "string"))
  .add(new protobuf.Field("unknown2", 3, "int32"))
  .add(new protobuf.Field("translatedLanguage", 4, "string"))
  .add(new protobuf.Field("translatedUrl", 5, "string"))
  .add(new protobuf.Field("unknown5", 6, "int32"))
  .add(new protobuf.Field("unknown6", 7, "int32"));

const VideoSubtitlesResponse = new protobuf.Type("VideoSubtitlesResponse")
  .add(new protobuf.Field("unknown0", 1, "int32"))
  .add(new protobuf.Field("subtitles", 2, "VideoSubtitlesObject", "repeated"));

const VideoStreamObject = new protobuf.Type("VideoStreamObject")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("timestamp", 2, "int32")); // timestamp in ms (probably means the time of 1 request to translate the stream)

const VideoStreamResponse = new protobuf.Type("VideoStreamResponse")
  .add(new protobuf.Field("interval", 1, "int32")) // 20s - streaming, 10s - translating
  .add(new protobuf.Field("translatedInfo", 2, "VideoStreamObject"))
  .add(new protobuf.Field("pingId", 3, "int32"));

// * Yandex has been skipping any translation streams for a long time (whitelist always return true)
// * Most likely, it is already outdated and will not be used
// const VideoWhitelistStreamRequest = new protobuf.Type("VideoWhitelistStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("deviceId", 4, "string"))

// const VideoWhitelistStreamResponse = new protobuf.Type("VideoWhitelistStreamResponse")
//   .add(new protobuf.Field("inWhitelist", 1, "bool"))

// Create a root namespace and add the types
const root = new protobuf.Root()
  .define("yandex")
  .add(VideoTranslationRequest)
  .add(VideoTranslationResponse)
  .add(VideoSubtitlesRequest)
  .add(VideoSubtitlesObject)
  .add(VideoSubtitlesResponse)
  .add(VideoStreamPingRequest)
  .add(VideoStreamRequest)
  .add(VideoStreamObject)
  .add(VideoStreamResponse);

// Export the encoding and decoding functions
const yandexProtobuf = {
  encodeTranslationRequest(url, duration, requestLang, responseLang) {
    return root.VideoTranslationRequest.encode({
      url,
      firstRequest: true,
      duration,
      unknown2: 1,
      language: requestLang,
      unknown3: 0,
      unknown4: 0,
      responseLanguage: responseLang,
    }).finish();
  },
  decodeTranslationResponse(response) {
    return root.VideoTranslationResponse.decode(new Uint8Array(response));
  },
  encodeSubtitlesRequest(url, requestLang) {
    return root.VideoSubtitlesRequest.encode({
      url,
      language: requestLang,
    }).finish();
  },
  decodeSubtitlesResponse(response) {
    return root.VideoSubtitlesResponse.decode(new Uint8Array(response));
  },
  encodeStreamPingRequest(pingId) {
    return root.VideoStreamPingRequest.encode({
      pingId,
    }).finish();
  },
  encodeStreamRequest(url, requestLang, responseLang) {
    return root.VideoStreamRequest.encode({
      url,
      language: requestLang,
      responseLanguage: responseLang,
    }).finish();
  },
  decodeStreamResponse(response) {
    return root.VideoStreamResponse.decode(new Uint8Array(response));
  },
};

;// CONCATENATED MODULE: ./src/utils/utils.js


if (!String.prototype.format) {
  // https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  // syntax example: "is {0} function".format("format")
  String.prototype.format = function () {
    // store arguments in an array
    var args = arguments;
    // use replace to iterate over the string
    // select the match and check if the related argument is present
    // if yes, replace the match with the argument
    return this.replace(/{(\d+)}/g, function (match, index) {
      // check if the argument is present
      return typeof args[index] != "undefined" ? args[index] : match;
    });
  };
}

function waitForElm(selector) {
  // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      once: true,
    });
  });
}

const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service) => {
  const url = new URL(window.location.href);

  switch (service) {
    case "youtube":
      return (
        url.pathname.match(/(?:watch|embed)\/([^/]+)/)?.[1] ||
        url.searchParams.get("v")
      );
    case "vk":
      if (url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)) {
        return url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)[0].slice(1);
      } else if (url.searchParams.get("z")) {
        return url.searchParams.get("z").split("/")[0];
      } else if (url.searchParams.get("oid") && url.searchParams.get("id")) {
        return `video-${Math.abs(
          url.searchParams.get("oid")
        )}_${url.searchParams.get("id")}`;
      } else {
        return false;
      }
    case "9gag":
    case "gag":
      return url.pathname.match(/gag\/([^/]+)/)?.[1];
    case "twitch":
      if (/^m\.twitch\.tv$/.test(window.location.hostname)) {
        const linkUrl = document.head.querySelector('link[rel="canonical"]');
        return (
          linkUrl?.href.match(/videos\/([^/]+)/)?.[0] || url.pathname.slice(1)
        );
      } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
        return `videos/${url.searchParams.get("video")}`;
      } else if (/^clips\.twitch\.tv$/.test(window.location.hostname)) {
        // get link to twitch channel (ex.: https://www.twitch.tv/xqc)
        const channelLink = document.querySelector(
          ".tw-link[data-test-selector='stream-info-card-component__stream-avatar-link']"
        );
        if (!channelLink) {
          return false;
        }

        const channelName = channelLink.href.replace(
          "https://www.twitch.tv/",
          ""
        );
        return `${channelName}/clip/${url.searchParams.get("clip")}`;
      } else if (url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)) {
        return url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)[0];
      } else {
        return url.pathname.match(/(?:videos)\/([^/]+)/)?.[0];
      }
    case "tiktok":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    case "vimeo":
      return (
        url.pathname.match(/[^/]+\/[^/]+$/)?.[0] ||
        url.pathname.match(/[^/]+$/)?.[0]
      );
    case "xvideos":
      return url.pathname.match(/[^/]+\/[^/]+$/)?.[0];
    case "pornhub":
      return (
        url.searchParams.get("viewkey") ||
        url.pathname.match(/embed\/([^/]+)/)?.[1]
      );
    case "twitter":
      return url.pathname.match(/status\/([^/]+)/)?.[1];
    case "udemy":
      return url.pathname;
    case "facebook":
      return url.pathname;
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "coub":
      return url.pathname.match(/view\/([^/]+)/)?.[1];
    case "bilibili.com": {
      const bvid = url.searchParams.get("bvid");
      if (bvid) {
        return bvid;
      } else {
        let vid = url.pathname.match(/video\/([^/]+)/)?.[1];
        if (vid && url.search && url.searchParams.get("p") !== null) {
          vid += `/?p=${url.searchParams.get("p")}`;
        }
        return vid;
      }
    }
    case "mail.ru":
      if (url.pathname.startsWith("/v/") || url.pathname.startsWith("/mail/")) {
        return url.pathname;
      } else if (url.pathname.match(/video\/embed\/([^/]+)/)) {
        const referer = document.querySelector(
          ".b-video-controls__mymail-link"
        );
        if (!referer) {
          return false;
        }

        return referer?.href.split("my.mail.ru")?.[1];
      }
      return false;
    case "bitchute":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return localizationProvider.get("translationTakeMoreThanHour");
  } else if (minutes >= 10 && minutes % 10) {
    return localizationProvider
      .get("translationTakeApproximatelyMinutes")
      .format(minutes);
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return localizationProvider.get("translationTakeAboutMinute");
  } else {
    return localizationProvider
      .get("translationTakeApproximatelyMinute")
      .format(minutes);
  }
}



// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__("./src/config/config.js");
;// CONCATENATED MODULE: ./src/config/alternativeUrls.js
// Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
const sitesInvidious = [
  "invidious.snopyta.org",
  "yewtu.be",
  "invidious.kavin.rocks",
  "vid.puffyan.us",
  "invidious.namazso.eu",
  "inv.riverside.rocks",
  "yt.artemislena.eu",
  "invidious.flokinet.to",
  "invidious.esmailelbob.xyz",
  "y.com.sb",
  "invidious.nerdvpn.de",
  "inv.vern.cc",
  "invidious.slipfox.xyz",
  "invidio.xamh.de",
  "invidious.dhusch.de",
];

// Sites host Piped. I tested the performance only on piped.video
const sitesPiped = [
  "piped.video",
  "piped.tokhmi.xyz",
  "piped.moomoo.me",
  "piped.syncpundit.io",
  "piped.mha.fi",
  "watch.whatever.social",
  "piped.garudalinux.org",
  "efy.piped.pages.dev",
  "watch.leptons.xyz",
  "piped.lunar.icu",
  "yt.dc09.ru",
  "piped.mint.lgbt",
  "il.ax",
  "piped.privacy.com.de",
  "piped.esmailelbob.xyz",
  "piped.projectsegfau.lt",
  "piped.in.projectsegfau.lt",
  "piped.us.projectsegfau.lt",
  "piped.privacydev.net",
  "piped.palveluntarjoaja.eu",
  "piped.smnz.de",
  "piped.adminforge.de",
  "piped.qdi.fi",
  "piped.hostux.net",
  "piped.chauvet.pro",
  "piped.jotoma.de",
  "piped.pfcd.me",
  "piped.frontendfriendly.xyz",
];



;// CONCATENATED MODULE: ./src/config/constants.js
// available languages for translation
const availableLangs = [
  "ru",
  "en",
  "zh",
  "ko",
  "ar",
  "fr",
  "it",
  "es",
  "de",
  "ja",
];

// Additional languages working with TTS
const additionalTTS = [
  "bn",
  "pt",
  "cs",
  "hi",
  "mr", // TODO: Add menu translation (MAYBE)
  "te", // TODO: Add menu translation (MAYBE)
  "tr",
  "ms",
  "vi",
  "ta", // TODO: Add menu translation (MAYBE)
  "jv",
  "ur",
  "fa",
  "gu", // TODO: Add menu translation (MAYBE)
  "id",
  "uk",
  "kk",
];

const siteTranslates = {
  youtube: "https://youtu.be/",
  twitch: "https://twitch.tv/",
  vimeo: "https://vimeo.com/",
  "9gag": "https://9gag.com/gag/",
  vk: "https://vk.com/video?z=",
  xvideos: "https://www.xvideos.com/",
  pornhub: "https://rt.pornhub.com/view_video.php?viewkey=",
  udemy: "https://www.udemy.com",
  twitter: "https://twitter.com/i/status/",
  facebook: "https://www.facebook.com/",
  rutube: "https://rutube.ru/video/",
  "bilibili.com": "https://www.bilibili.com/video/",
  "mail.ru": "https://my.mail.ru/",
  coub: "https://coub.com/view/",
  bitchute: "https://www.bitchute.com/video/",
};



;// CONCATENATED MODULE: ./src/menu.js



const userlang = navigator.language || navigator.userLanguage;
let lang = userlang?.substr(0, 2)?.toLowerCase() ?? "en";

function changeBtnColor(n) {
  document.querySelector(".translationBtn").style.color = n;
}

function changeBtnState(newState = "none") {
  document.querySelector(".translationBtn").dataset.state = newState;
}

function changeIconBackground(type = "none") {
  let iconBackgroundColor;
  switch (type) {
    case "error":
      iconBackgroundColor = "#7A7A7D";
      break;
    case "success":
      iconBackgroundColor = "#A36EFF";
      break;
    default:
      iconBackgroundColor = "#FFFFFF";
      break;
  }

  document.querySelector(".translateIcon").style.fill = iconBackgroundColor;
}

function transformBtn(type = "none", text) {
  switch (type) {
    case "error":
      changeIconBackground(type);
      changeBtnColor("#7A7A7D");
      changeBtnState(type);
      break;
    case "success":
      changeIconBackground(type);
      changeBtnColor("#A36EFF");
      changeBtnState(type);
      break;
    default:
      changeIconBackground("none");
      changeBtnColor("#FFFFFF");
      changeBtnState("none");
      break;
  }

  document.querySelector(".translationBtn").innerText = text;
}

// Add translation buttton block
function addTranslationBlock(element) {
  if (!element || element.querySelector(".translationBlock")) return;

  const block = document.createElement("div");
  block.classList.add("translationBlock");
  block.innerHTML = `
    <span class = "translationArea" role = "button">
      <span class = "translationITranslate" tabindex = "-1">
        <svg class="translateIcon" width="24" height="24" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.605 19.703c.794-.13 1.647-.476 2.47-.983.695 1.013 1.255 1.546 1.306 1.593l1.166-1.207c-.011-.01-.504-.48-1.124-1.401.277-.25.547-.512.797-.798a12.1 12.1 0 0 0 2.268-3.826c.383.216.761.541.96 1.027.68 1.649-.301 3.557-1.215 4.385l1.152 1.22c1.52-1.378 2.571-3.959 1.638-6.227-.368-.892-1.077-1.59-2.064-2.037.162-.763.216-1.38.233-1.785h-1.698c-.017.307-.06.762-.173 1.323-1.325-.187-2.818-.006-4.248.508a25.994 25.994 0 0 1-.313-2.547c5.092-.287 8.098-1.488 8.237-1.546l-.654-1.533c-.03.013-2.875 1.14-7.65 1.418-.001-.405-.008-.666-.012-.85-.008-.339-.01-.423.03-.67L17.01 5.75c-.026.283-.024.573-.018 1.278l.002.318c-.026 0-.051 0-.077.002l-.08.001a39.286 39.286 0 0 1-3.27-.14L13.25 8.89c.5.043 2.023.122 3.397.122h.1a19.457 19.457 0 0 1 .208-.003l.106-.002c.067.948.196 2.034.421 3.22a8.05 8.05 0 0 0-2.267 1.963l.811 1.871c.327-.732.995-1.51 1.856-2.111a16.762 16.762 0 0 0 1.33 3.346c-.811.514-1.64.818-2.301.804l.694 1.603Zm2.953-3.488a8.18 8.18 0 0 0 .374-.389 10.465 10.465 0 0 0 1.927-3.224c-.198-.021-.4-.031-.606-.031-.907 0-1.885.199-2.834.574.31 1.209.718 2.23 1.14 3.07ZM9.769 11.688 4.25 24.438h2.259l1.357-3.407h5.582l1.357 3.407h2.258l-5.52-12.75H9.77Zm.887 2.624 2.056 5H8.6l2.056-5Z"></path>
        </svg>
      </span>
      <span class = "translationBtn" tabindex = "0">${localizationProvider.get(
        "translateVideo"
      )}</span>
    </span>
    <span class = "translationMenu" tabindex = "0" role = "button">
      <svg class = "translationMenuIcon" height="15" width="5" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
      </svg>
    </span>
  `;

  element.appendChild(block);
  debug/* default */.Z.log("Added translation button to ", element);
}

function createTranslationMenu() {
  const container = document.createElement("div");
  container.classList.add("translationMenuContent");
  container.innerHTML = `
    <p class = "translationMainHeader">${localizationProvider.get(
      "translationSettings"
    )}</p>
    <div class="translationMenuOptions"></div>
    <div class="translationMenuFunctional">
      <a class = "translationDownload">
        <svg width="24px" height="24px" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
      </a>
      <button class = "translationDropDB">${localizationProvider.get(
        "resetSettings"
      )}</button>
    </div>
  `;

  container.onclick = (event) => event.stopPropagation();
  return container;
}

// Create checkbox for menu
function createMenuCheckbox(id, valueToCheck, content) {
  const checkboxContainer = document.createElement("div");
  const checkbox = document.createElement("input");
  const checkboxLabel = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = Boolean(valueToCheck);

  checkboxLabel.htmlFor = id;
  checkboxLabel.innerHTML = content;

  checkboxContainer.classList.add("translationMenuContainer");
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(checkboxLabel);

  return checkboxContainer;
}

// Create slider for menu
function createMenuSlider(id, sliderValue, content, min = 0, max = 100) {
  const sliderContainer = document.createElement("div");
  const slider = document.createElement("input");
  const sliderLabel = document.createElement("label");

  slider.type = "range";
  slider.id = id;
  slider.classList.add("VOTMenuSlider");
  slider.min = min;
  slider.max = max;
  slider.value = sliderValue;

  sliderLabel.htmlFor = id;
  sliderLabel.classList.add("translationHeader");
  sliderLabel.innerHTML = content;

  sliderContainer.classList.add("translationMenuContainer");
  sliderContainer.appendChild(sliderLabel);
  sliderContainer.appendChild(slider);

  return sliderContainer;
}

// Create select for menu
function createMenuSelect(id, selectOptions) {
  // selectOptions structure:
  // [
  //     {
  //         label: string,
  //         value: string,
  //         selected: boolean,
  //         disabled: boolean
  //     }
  // ]
  const selectContainer = document.createElement("div");
  const select = document.createElement("select");

  select.id = id;
  select.classList.add("VOTMenuSelect");

  for (const option of selectOptions) {
    const optionElement = document.createElement("option");
    optionElement.innerText = option.label;
    optionElement.value = option.value;
    if (
      Object.prototype.hasOwnProperty.call(option, "selected") &&
      option.selected
    ) {
      optionElement.setAttribute("selected", "selected");
    }

    if (Object.prototype.hasOwnProperty.call(option, "disabled")) {
      optionElement.disabled = option.disabled;
    }

    select.appendChild(optionElement);
  }

  selectContainer.classList.add("translationMenuContainer");
  selectContainer.appendChild(select);

  return selectContainer;
}

function genOptionsByOBJ(obj, conditionString) {
  console.log(obj);
  const test = obj.map((code) => ({
    label: localizationProvider.get(`langs`)[code] ?? code.toUpperCase(),
    value: code,
    selected: conditionString === code,
  }));
  console.log(test);
  return test;
}



;// CONCATENATED MODULE: ./src/indexedDB.js



// --- IndexedDB functions start:
const dbVersion = 3; // current db version
const settingsDefault = {
  key: "settings",
  autoTranslate: 0,
  defaultVolume: 100,
  showVideoSlider: 0,
  syncVolume: 0,
  autoSetVolumeYandexStyle: 1,
  dontTranslateYourLang: 1,
}; // default settings for db v1

const valuesV2 = {
  audioProxy: 0,
};

const valuesV3 = {
  subtitlesMaxLength: 300,
  highlightWords: 0,
  responseLanguage: lang,
};

function openDB(name) {
  return indexedDB.open(name, dbVersion);
}

async function initDB() {
  return new Promise((resolve, reject) => {
    function updateVersionProccessor(
      transaction,
      db,
      indexes,
      previousIndexes = {}
    ) {
      // openRequest is transaction object
      // indexes is object of strings with default values (used for createIndex) ex. {"name": 0}
      // previousIndexes is indexes for previous version
      const objectStore = transaction.objectStore("settings");

      for (const key of Object.keys(indexes)) {
        objectStore.createIndex(key, key, { unique: false });
      }

      console.log("[VOT] The database has been updated");
      objectStore.transaction.oncomplete = () => {
        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "[VOT] Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data =
            request.result || Object.assign(settingsDefault, previousIndexes); // use data from db or reset all data
          for (const key in indexes) {
            data[key] = indexes[key];
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "[VOT] Failed to update the Database to new version",
              event.error
            );
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            console.log(
              "[VOT] Standard settings of the new version have been added to the Database."
            );
            resolve(true);
          };
        };
      };
    }

    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(
        `[VOT] ${localizationProvider.getDefault("VOTFailedInitDB")}: ${
          openRequest.error.message
        }`
      );
      reject(false);
    };

    openRequest.onupgradeneeded = (event) => {
      const db = openRequest.result;

      db.onerror = () => {
        console.error(
          `[VOT] ${localizationProvider.getDefault("VOTFailedInitDB")}`,
          openRequest.error
        );
        alert(`[VOT] ${localizationProvider.get("VOTFailedInitDB")}`);
        reject(false);
      };

      if (event.oldVersion < 1) {
        // db not found
        const objectStore = db.createObjectStore("settings", {
          keyPath: "key",
        });

        // add indexes for 1 version (without key index)
        for (const key of Object.keys(settingsDefault).filter(
          (k) => k !== "key"
        )) {
          objectStore.createIndex(key, key, { unique: false });
        }

        console.log("[VOT] Database Created");

        objectStore.transaction.oncomplete = () => {
          const objectStore = db
            .transaction("settings", "readwrite")
            .objectStore("settings");
          const request = objectStore.add(settingsDefault);

          request.onsuccess = () => {
            console.log(
              "[VOT] Standard settings added to the Database: ",
              request.result
            );
            resolve(true);
          };

          request.onerror = () => {
            console.log(
              "[VOT] Error when adding standard settings to the Database: ",
              request.error
            );
            reject(false);
          };
        };
      }

      if (event.oldVersion < 2) {
        // db is outdated (db version is 1)
        updateVersionProccessor(openRequest.transaction, db, valuesV2);
      }

      if (event.oldVersion < 3) {
        // db is outdated (db version is 1)
        updateVersionProccessor(openRequest.transaction, db, valuesV3);
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        console.log(
          `[VOT] ${localizationProvider.getDefault("VOTDBNeedUpdate")}`
        );
        alert(`[VOT] ${localizationProvider.get("VOTDBNeedUpdate")}`);
        window.location.reload();
        reject(false);
      };
      resolve(true);
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      console.error(
        `[VOT] ${localizationProvider
          .getDefault("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`,
        db
      );
      alert(
        `[VOT] ${localizationProvider
          .get("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`
      );
      reject(false);
    };
  });
}

async function updateDB({
  autoTranslate,
  defaultVolume,
  showVideoSlider,
  syncVolume,
  autoSetVolumeYandexStyle,
  dontTranslateYourLang,
  audioProxy,
  subtitlesMaxLength,
  highlightWords,
  responseLanguage,
}) {
  return new Promise((resolve, reject) => {
    if (
      typeof autoTranslate === "number" ||
      typeof defaultVolume === "number" ||
      typeof showVideoSlider === "number" ||
      typeof syncVolume === "number" ||
      typeof autoSetVolumeYandexStyle === "number" ||
      typeof dontTranslateYourLang === "number" ||
      typeof audioProxy === "number" ||
      typeof subtitlesMaxLength === "number" ||
      typeof highlightWords === "number" ||
      typeof responseLanguage === "string"
    ) {
      const openRequest = openDB("VOT");

      openRequest.onerror = () => {
        console.error(
          `[VOT] ${localizationProvider.getDefault("VOTFailedWriteToDB")}`,
          openRequest.error.message
        );
        alert(`[VOT] ${localizationProvider.get("VOTFailedWriteToDB")}`);
        reject(false);
      };

      openRequest.onupgradeneeded = async () => {
        const db = openRequest.result;
        db.close();
        await initDB();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          console.log(
            "[VOT] The database needs an update, please reload the page if it didn't happen automatically"
          );
          window.location.reload();
          reject(false);
        };

        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "[VOT] Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data = request.result;

          if (typeof autoTranslate === "number") {
            data.autoTranslate = autoTranslate;
          }

          if (typeof defaultVolume === "number") {
            data.defaultVolume = defaultVolume;
          }

          if (typeof showVideoSlider === "number") {
            data.showVideoSlider = showVideoSlider;
          }

          if (typeof syncVolume === "number") {
            data.syncVolume = syncVolume;
          }

          if (typeof autoSetVolumeYandexStyle === "number") {
            data.autoSetVolumeYandexStyle = autoSetVolumeYandexStyle;
          }

          if (typeof dontTranslateYourLang === "number") {
            data.dontTranslateYourLang = dontTranslateYourLang;
          }

          if (typeof audioProxy === "number") {
            data.audioProxy = audioProxy;
          }

          if (typeof subtitlesMaxLength === "number") {
            data.subtitlesMaxLength = subtitlesMaxLength;
          }

          if (typeof highlightWords === "number") {
            data.highlightWords = highlightWords;
          }

          if (typeof responseLanguage === "string") {
            data.responseLanguage = responseLanguage;
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error("[VOT] failed update db data: ", event.error);
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            resolve(true);
          };
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        console.error(
          `[VOT] ${localizationProvider
            .getDefault("VOTDisabledForDBUpdating")
            .format(window.location.hostname)}`,
          db
        );
        alert(
          `[VOT] ${localizationProvider
            .get("VOTDisabledForDBUpdating")
            .format(window.location.hostname)}`
        );
        reject(false);
      };
    }
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(
        `[VOT] ${localizationProvider.getDefault("VOTFailedReadFromDB")}`,
        openRequest.error.message
      );
      alert(`[VOT] ${localizationProvider.get("VOTFailedReadFromDB")}`);
      reject(false);
    };

    openRequest.onupgradeneeded = async () => {
      const db = openRequest.result;
      db.close();
      await initDB();
      resolve(true);
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        console.error(
          `[VOT] ${localizationProvider.getDefault("VOTDBNeedUpdate")}`
        );
        alert(`[VOT] ${localizationProvider.get("VOTDBNeedUpdate")}`);
        reject(false);
      };

      const objectStore = db.transaction("settings").objectStore("settings");
      const request = objectStore.get("settings");

      request.onerror = (event) => {
        console.error(
          "[VOT]",
          localizationProvider.getDefault("VOTFailedReadFromDB"),
          event.error
        );
        console.error("[VOT]", event);
        reject(false);
      };

      request.onsuccess = () => {
        if (request.result === undefined) {
          db.close();
          deleteDB();
          reject(false);
        }
        const data = request.result;
        resolve(data);
      };
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      console.error(
        `[VOT] ${localizationProvider
          .getDefault("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`,
        db
      );
      alert(
        `[VOT] ${localizationProvider
          .get("VOTDisabledForDBUpdating")
          .format(window.location.hostname)}`
      );
      reject(false);
    };
  });
}

function deleteDB() {
  indexedDB.deleteDatabase("VOT");
}



;// CONCATENATED MODULE: ./src/utils/volume.js
// element - audio / video element
function syncVolume(element, sliderVolume, otherSliderVolume, tempVolume) {
  let finalValue;
  if (sliderVolume > tempVolume) {
    // sliderVolume = 100
    // tempVolume = 69
    // volume = 15
    // 100 - 69 = 31
    // 15 + 31 = 46 - final video volume
    finalValue = otherSliderVolume + (sliderVolume - tempVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  } else if (sliderVolume < tempVolume) {
    // sliderVolume = 69
    // tempVolume = 100
    // volume = 15
    // 100 - 69 = 31
    // 15 - 31 = 0 - final video volume
    finalValue = otherSliderVolume - (tempVolume - sliderVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  }

  return finalValue;
}



;// CONCATENATED MODULE: ./src/config/regexes.js
const regexes = () => {
  return {
    youtubeRegex: /^(www.|m.)?youtube(-nocookie)?.com$/,
  };
};

/* harmony default export */ const config_regexes = (regexes());

;// CONCATENATED MODULE: ./src/config/selectors.js
const selectors = () => {
  return {
    youtubeSelector: ".html5-video-container",
    twitchSelector: ".video-ref",
    twitchMobileSelector: "main > div > section > div > div > div",
    pipedSelector: ".shaka-video-container",
    vkSelector: ".videoplayer_media",
    twitterSelector:
      'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    vimeoSelector: ".player",
    gagSelector: ".video-post",
    bilibilicomSelector: ".bpx-player-video-wrap",
    mailSelector: "#b-video-wrapper",
  };
};

/* harmony default export */ const config_selectors = (selectors());

;// CONCATENATED MODULE: ./src/getUUID.js
function getUUID(isLower) {
  const uuid = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
  return isLower ? uuid : uuid.toUpperCase();
}



;// CONCATENATED MODULE: ./src/getSignature.js



async function getSignature(body) {
  // Create a key from the HMAC secret
  const utf8Encoder = new TextEncoder("utf-8");
  const key = await window.crypto.subtle.importKey(
    "raw",
    utf8Encoder.encode(
       false ? 0 : config/* yandexHmacKey */.I1
    ),
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign", "verify"]
  );
  // Sign the body with the key
  const signature = await window.crypto.subtle.sign("HMAC", key, body);
  // Convert the signature to a hex string
  return Array.from(new Uint8Array(signature), (x) =>
    x.toString(16).padStart(2, "0")
  ).join("");
}



;// CONCATENATED MODULE: ./src/rvt.js





// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  duration,
  requestLang,
  responseLang,
  callback
) {
  try {
    debug/* default */.Z.log("requestVideoTranslation");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.Z.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeTranslationRequest(
      url,
      duration,
      requestLang,
      responseLang
    );
    // Send the request
    await yandexRequest(
      // "/stream-translation/whitelist-stream",
      // "/stream-translation/translate-stream",
      "/video-translation/translate",
      body,
      {
        "Vtrans-Signature": await getSignature(body),
        "Sec-Vtrans-Token": getUUID(false),
      },
      callback
    );
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const rvt = (requestVideoTranslation);

;// CONCATENATED MODULE: ./src/rvs.js





// Request video subtitles from Yandex API
async function requestVideoSubtitles(url, requestLang, callback) {
  try {
    debug/* default */.Z.log("requestVideoSubtitles");
    const yar = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/yandexRequest.js"));
    const yandexRequest = yar.default;
    debug/* default */.Z.log("Inited yandexRequest...");
    // Initialize variables
    const body = yandexProtobuf.encodeSubtitlesRequest(url, requestLang);
    // Send the request
    await yandexRequest(
      "/video-subtitles/get-subtitles",
      body,
      {
        "Vsubs-Signature": await getSignature(body),
        "Sec-Vsubs-Token": getUUID(false),
      },
      callback
    );
  } catch (exception) {
    console.error("[VOT]", exception);
    // Handle errors
    callback(false);
  }
}

/* harmony default export */ const rvs = (requestVideoSubtitles);

;// CONCATENATED MODULE: ./src/subtitles.js








function formatYandexSubtitlesTokens(line) {
  const lineEndMs = line.startMs + line.durationMs;
  return line.tokens.reduce((result, token, index) => {
    const nextToken = line.tokens[index + 1];
    const lastToken = result[result.length - 1];
    const alignRangeEnd = lastToken?.alignRange?.end ?? 0;
    const newAlignRangeEnd = alignRangeEnd + token.text.length;
    result.push(
      Object.assign(Object.assign({}, token), {
        alignRange: {
          start: alignRangeEnd,
          end: newAlignRangeEnd,
        },
      })
    );
    if (nextToken) {
      const endMs = token.startMs + token.durationMs;
      const durationMs = nextToken.startMs
        ? nextToken.startMs - endMs
        : lineEndMs - endMs;
      result.push({
        text: " ",
        startMs: endMs,
        durationMs,
        alignRange: {
          start: newAlignRangeEnd,
          end: newAlignRangeEnd + 1,
        },
      });
    }
    return result;
  }, []);
}

function createSubtitlesTokens(line, previousLineLastToken) {
  const tokens = line.text
    .split(new RegExp("([\n \t])"))
    .reduce((result, tokenText) => {
      if (tokenText.length) {
        const lastToken = result[result.length - 1] ?? previousLineLastToken;
        const alignRangeStart = lastToken?.alignRange?.end ?? 0;
        const alignRangeEnd = alignRangeStart + tokenText.length;
        result.push({
          text: tokenText,
          alignRange: {
            start: alignRangeStart,
            end: alignRangeEnd,
          },
        });
      }
      return result;
    }, []);
  const tokenDurationMs = Math.floor(line.durationMs / tokens.length);
  const lineEndMs = line.startMs + line.durationMs;
  return tokens.map((token, index) => {
    const isLastToken = index === tokens.length - 1;
    const startMs = line.startMs + tokenDurationMs * index;
    const durationMs = isLastToken ? lineEndMs - startMs : tokenDurationMs;
    return Object.assign(Object.assign({}, token), {
      startMs,
      durationMs,
    });
  });
}

function getSubtitlesTokens(subtitles, source) {
  const result = [];
  let lastToken;
  for (const line of subtitles.subtitles) {
    let tokens;
    if (line?.tokens?.length) {
      if (source === "yandex") {
        tokens = formatYandexSubtitlesTokens(line);
      } else {
        console.warn("[VOT] Unsupported subtitles tokens type: ", source);
        subtitles.containsTokens = false;
        return null;
      }
    } else {
      tokens = createSubtitlesTokens(line, lastToken);
    }
    lastToken = tokens[tokens.length - 1];
    result.push(
      Object.assign(Object.assign({}, line), {
        tokens,
      })
    );
  }
  subtitles.containsTokens = true;
  return result;
}

function formatYoutubeSubtitles(subtitles) {
  const result = {
    containsTokens: false,
    subtitles: [],
  };
  if (
    typeof subtitles !== "object" ||
    !("events" in subtitles) ||
    !Array.isArray(subtitles.events)
  ) {
    console.error("[VOT] Failed to format youtube subtitles", subtitles);
    return result;
  }
  for (let i = 0; i < subtitles.events.length; i++) {
    if (!subtitles.events[i].segs) continue;
    const text = subtitles.events[i].segs
      .map((e) => e.utf8.replace(/^ +| +$/g, ""))
      .join(" ");
    let durationMs = subtitles.events[i].dDurationMs;
    if (
      subtitles.events[i + 1] &&
      subtitles.events[i].tStartMs + subtitles.events[i].dDurationMs >
        subtitles.events[i + 1].tStartMs
    ) {
      durationMs =
        subtitles.events[i + 1].tStartMs - subtitles.events[i].tStartMs;
    }
    if (text !== "\n") {
      result.subtitles.push({
        text,
        startMs: subtitles.events[i].tStartMs,
        durationMs,
      });
    }
  }
  return result;
}

async function fetchSubtitles(subtitlesObject) {
  let resolved = false;
  let subtitles = await Promise.race([
    new Promise(async (resolve) => {
      await sleep(5000);
      if (!resolved) {
        console.error("[VOT] Failed to fetch subtitles. Reason: timeout");
      }
      resolved = true;
      resolve([]);
    }),
    new Promise(async (resolve) => {
      debug/* default */.Z.log("Fetching subtitles:", subtitlesObject);
      await fetch(subtitlesObject.url)
        .then((response) => response.json())
        .then((json) => {
          resolved = true;
          resolve(json);
        })
        .catch((error) => {
          console.error("[VOT] Failed to fetch subtitles. Reason:", error);
          resolved = true;
          resolve({
            containsTokens: false,
            subtitles: [],
          });
        });
    }),
  ]);
  if (subtitlesObject.source === "youtube") {
    subtitles = formatYoutubeSubtitles(subtitles);
  }
  subtitles.subtitles = getSubtitlesTokens(subtitles, subtitlesObject.source);
  console.log("[VOT] subtitles:", subtitles);
  return subtitles;
}

async function subtitles_getSubtitles(siteHostname, videoId, requestLang) {
  const ytSubtitles =
    siteHostname === "youtube" ? youtubeUtils.getSubtitles() : [];
  let resolved = false;
  const yaSubtitles = await Promise.race([
    new Promise(async (resolve) => {
      await sleep(5000);
      if (!resolved) {
        console.error("[VOT] Failed get yandex subtitles. Reason: timeout");
      }
      resolved = true;
      resolve([]);
    }),
    new Promise((resolve) => {
      rvs(
        `${siteTranslates[siteHostname]}${videoId}`,
        requestLang,
        (success, response) => {
          debug/* default */.Z.log("[exec callback] Requesting video subtitles");

          if (!success) {
            console.error("[VOT] Failed get yandex subtitles");
            resolved = true;
            resolve([]);
          }

          const subtitlesResponse =
            yandexProtobuf.decodeSubtitlesResponse(response);
          console.log("[VOT] Subtitles response: ", subtitlesResponse);

          let subtitles = subtitlesResponse.subtitles ?? [];
          subtitles = subtitles.reduce((result, yaSubtitlesObject) => {
            if (
              yaSubtitlesObject.language &&
              !result.find((e) => {
                if (
                  e.source === "yandex" &&
                  e.language === yaSubtitlesObject.language &&
                  !e.translatedFromLanguage
                ) {
                  return e;
                }
              })
            ) {
              result.push({
                source: "yandex",
                language: yaSubtitlesObject.language,
                url: yaSubtitlesObject.url,
              });
            }
            if (yaSubtitlesObject.translatedLanguage) {
              result.push({
                source: "yandex",
                language: yaSubtitlesObject.translatedLanguage,
                translatedFromLanguage: yaSubtitlesObject.language,
                url: yaSubtitlesObject.translatedUrl,
              });
            }
            return result;
          }, []);
          resolved = true;
          resolve(subtitles);
        }
      );
    }),
  ]);
  const subtitles = [...yaSubtitles, ...ytSubtitles].sort((a, b) => {
    if (a.source !== b.source) {
      // sort by source
      return a.source === "yandex" ? -1 : 1;
    }
    if (
      a.language !== b.language &&
      (a.language === lang || b.language === lang)
    ) {
      // sort by user language
      return a.language === lang ? -1 : 1;
    }
    if (a.source === "yandex") {
      // sort by translation
      if (a.translatedFromLanguage !== b.translatedFromLanguage) {
        // sort by translatedFromLanguage
        if (!a.translatedFromLanguage || !b.translatedFromLanguage) {
          // sort by isTranslated
          if (a.language === b.language) {
            return a.translatedFromLanguage ? 1 : -1;
          }
          return !a.translatedFromLanguage ? 1 : -1;
        }
        return a.translatedFromLanguage === requestLang ? -1 : 1;
      }
      if (!a.translatedFromLanguage) {
        // sort non translated by language
        return a.language === requestLang ? -1 : 1;
      }
    }
    if (a.source === "youtube" && a.isAutoGenerated !== b.isAutoGenerated) {
      // sort by isAutoGenerated
      return a.isAutoGenerated ? 1 : -1;
    }
    return 0;
  });
  console.log("[VOT] subtitles list", subtitles);
  return subtitles;
}

var _subtitlesWidget = null;

function addSubtitlesWidget(element) {
  if (element.querySelector(".VOTSubtitlesWidget")) return;

  const container = document.createElement("div");
  container.classList.add("VOTSubtitlesWidget");
  element.appendChild(container);
  _subtitlesWidget = container;

  let dragging = false;
  let containerRect, elementRect;
  let offsetX, offsetY;

  function onMouseDown(e) {
    if (container.contains(e.target)) {
      containerRect = container.getBoundingClientRect();
      elementRect = element.getBoundingClientRect();
      offsetX = e.clientX - containerRect.x;
      offsetY = e.clientY - containerRect.y;
      dragging = true;
    }
  }

  function onMouseUp() {
    dragging = false;
  }

  function onMouseMove(e) {
    if (dragging) {
      e.preventDefault();
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      const top = y >= elementRect.top;
      const bottom = y + containerRect.height <= elementRect.bottom;
      const left = x >= elementRect.left;
      const right = x + containerRect.width <= elementRect.right;

      if (top && bottom) {
        container.style.top = `${y - elementRect.y}px`;
      } else {
        if (!top) {
          container.style.top = `${0}px`;
        } else {
          container.style.top = `${
            elementRect.height - containerRect.height
          }px`;
        }
      }
      if (left && right) {
        container.style.left = `${x - elementRect.x}px`;
      } else {
        if (!left) {
          container.style.left = `${0}px`;
        } else {
          container.style.left = `${elementRect.width - containerRect.width}px`;
        }
      }
    }
  }

  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);
}

var _subtitles = null;
var _video = null;
var _lastContent = null;
var _maxLength = 300;
var _maxLengthRegexp = /.{1,300}(?:\s|$)/g;
var _highlightWords = false;

function updateSubtitles(video) {
  if (!video) return;

  let content = "";
  let highlightWords = _highlightWords && _subtitles.containsTokens;
  const time = video.currentTime * 1000;
  const line = _subtitles.subtitles.findLast((e) => {
    return e.startMs < time && time < e.startMs + e.durationMs;
  });
  if (line) {
    if (highlightWords) {
      let tokens = line.tokens;
      if (tokens.at(-1).alignRange.end > _maxLength) {
        let chunks = [];
        let chunkStartIndex = 0;
        let chunkEndIndex = 0;
        let length = 0;
        for (let i = 0; i < tokens.length + 1; i++) {
          length += tokens[i]?.text?.length ?? 0;
          if (!tokens[i] || length > _maxLength) {
            let t = tokens.slice(chunkStartIndex, chunkEndIndex + 1);
            if (t.at(0) && t.at(0).text === " ") t = t.slice(1);
            if (t.at(-1) && t.at(-1).text === " ") t = t.slice(0, t.length - 1);
            chunks.push({
              startMs: tokens[chunkStartIndex].startMs,
              durationMs:
                tokens[chunkEndIndex].startMs +
                tokens[chunkEndIndex].durationMs -
                tokens[chunkStartIndex].startMs,
              tokens: t,
            });
            chunkStartIndex = i;
            length = 0;
          }
          chunkEndIndex = i;
        }
        for (let i = 0; i < chunks.length; i++) {
          if (
            chunks[i].startMs < time &&
            time < chunks[i].startMs + chunks[i].durationMs
          ) {
            tokens = chunks[i].tokens;
            break;
          }
        }
      }
      for (let token of tokens) {
        const passedMs = token.startMs + token.durationMs / 2;
        content += `<span ${
          time > passedMs ||
          (time > token.startMs - 100 && passedMs - time < 275)
            ? 'class="passed"'
            : ""
        }>${token.text}</span>`;
      }
    } else {
      if (line.text.length > _maxLength) {
        let chunks = line.text.match(_maxLengthRegexp);
        let chunkDurationMs = line.durationMs / chunks.length;
        for (let i = 0; i < chunks.length; i++) {
          if (
            line.startMs + chunkDurationMs * i < time &&
            time < line.startMs + chunkDurationMs * (i + 1)
          ) {
            content = chunks[i].trim();
            break;
          }
        }
      } else {
        content = line.text;
      }
    }
  }
  if (content !== _lastContent) {
    _lastContent = content;
    _subtitlesWidget.innerHTML = content
      ? `<div>${content.replace("\\n", "<br>")}</div>`
      : "";
  }
}

function onTimeUpdate(event) {
  updateSubtitles(event.target);
}

function setSubtitlesWidgetContent(video, subtitles) {
  if (subtitles && video) {
    _subtitles = subtitles;
    _video = video;
    video?.addEventListener("timeupdate", onTimeUpdate);
    updateSubtitles(video);
  } else {
    _subtitles = null;
    video?.removeEventListener("timeupdate", onTimeUpdate);
    _subtitlesWidget.innerHTML = "";
  }
}

function setSubtitlesMaxLength(len) {
  if (typeof len === "number" && len) {
    _maxLength = len;
    _maxLengthRegexp = new RegExp(`.{1,${len}}(?:\\s|$)`, "g");
    updateSubtitles(_video);
  }
}

function setSubtitlesHighlightWords(value) {
  if (_highlightWords !== !!value) {
    _highlightWords = !!value;
    updateSubtitles(_video);
  }
}

;// CONCATENATED MODULE: ./src/index.js




















const sitesChromiumBlocked = [...sitesInvidious, ...sitesPiped];

// translate properties
let translateFromLang = "en"; // default language of video

let translateToLang = lang; // default language of audio response

let ytData = "";
let subtitlesList = [];
let subtitlesListVideoId = null;

async function src_main() {
  debug/* default */.Z.log("Loading extension...");
  debug/* default */.Z.log(`Selected menu language: ${lang}`);

  if (
     true &&
    GM_info?.scriptHandler &&
    ["Violentmonkey", "FireMonkey", "Greasemonkey", "AdGuard"].includes(
      GM_info.scriptHandler
    )
  ) {
    console.error(
      `[VOT] ${localizationProvider
        .getDefault("unSupportedExtensionError")
        .format(GM_info.scriptHandler)}`
    );
    return alert(
      `[VOT] ${localizationProvider
        .get("unSupportedExtensionError")
        .format(GM_info.scriptHandler)}`
    );
  }

  debug/* default */.Z.log("Extension compatibility passed...");

  let timer;
  const audio = new Audio();
  let opacityRatio = 0.9;
  let openedMenu = false;

  if (false) { var translationPanding; }

  function logout(n) {
    if (openedMenu) return;

    document.querySelector(".translationBlock").style.opacity = n;
  }

  function resetTimer() {
    clearTimeout(timer);
    logout(1);
    timer = setTimeout(() => {
      logout(0);
    }, 2000);
  }

  function changeOpacityOnEvent(event, timer, opacityRatio) {
    clearTimeout(timer);
    logout(opacityRatio);
    event.stopPropagation();
  }

  const deleteAudioSrc = async () => {
    audio.src = "";
    audio.removeAttribute("src");
  };

  // Add menu container
  function addTranslationMenu(element) {
    if (element.querySelector(".translationMenuContent")) return;

    const container = createTranslationMenu();
    element.appendChild(container);

    // click to translation menu icon
    document
      .querySelector(".translationMenu")
      ?.addEventListener("click", (event) => {
        event.stopPropagation();
        const content = document.querySelector(".translationMenuContent");
        content.style.display = openedMenu ? "none" : "block";
        content.style.opacity = opacityRatio;
        openedMenu = !openedMenu;
      });

    document
      .querySelector(".translationDropDB")
      .addEventListener("click", (event) => {
        event.stopPropagation();
        deleteDB();
        location.reload();
      });

    debug/* default */.Z.log("Added translation menu to ", element);
  }

  function translateVideo(url, duration, requestLang, responseLang, callback) {
    debug/* default */.Z.log(
      `Translate video (url: ${url}, duration: ${duration}, requestLang: ${requestLang}, responseLang: ${responseLang})`
    );

    if (false) {}

    translationPanding = true;

    rvt(
      url,
      duration,
      requestLang,
      responseLang,
      (success, response) => {
        translationPanding = false;

        debug/* default */.Z.log("[exec callback] Requesting video translation");
        if (!success) {
          callback(false, localizationProvider.get("requestTranslationFailed"));
          return;
        }

        const translateResponse =
          yandexProtobuf.decodeTranslationResponse(response);
        console.log("[VOT] Translation response: ", translateResponse);

        switch (translateResponse.status) {
          case 0:
            callback(false, translateResponse.message);
            break;
          case 1:
            callback(
              !!translateResponse.url,
              translateResponse.url ||
                localizationProvider.get("audioNotReceived")
            );
            break;
          case 2:
            callback(
              false,
              translateResponse.remainingTime
                ? secsToStrTime(translateResponse.remainingTime)
                : localizationProvider.get("translationTakeFewMinutes")
            );
            break;
          case 3:
            /*
              Иногда, в ответе приходит статус код 3, но видео всё, так же, ожидает перевода.
              В конечном итоге, это занимает слишком много времени,
              как-будто сервер не понимает, что данное видео уже недавно было переведено
              и заместо возвращения готовой ссылки на перевод начинает переводить видео заново
              при чём у него это получается за очень длительное время.
            */
            callback(false, localizationProvider.get("videoBeingTranslated"));
            break;
        }
      }
    );
  }

  async function translateProccessor(videoContainer, siteHostname, siteEvent) {
    debug/* default */.Z.log("[translateProccessor] execute on element: ", videoContainer);

    let video;
    let autoRetry;
    let volumeOnStart;
    let tempOriginalVolume;
    let tempVolume;
    let dbSubtitlesMaxLength;
    let dbHighlightWords;
    let dbAutoTranslate;
    let dbDefaultVolume;
    let dbShowVideoSlider;
    let dbAutoSetVolumeYandexStyle;
    let dontTranslateYourLang;
    let dbSyncVolume;
    let dbResponseLanguage;
    let dbAudioProxy; // cf version only
    let firstPlay = true;
    let isDBInited;
    let videoData = "";

    debug/* default */.Z.log("videoContainer", videoContainer);

    video =
      siteHostname === "vimeo"
        ? videoContainer.querySelector(
            ".vp-video-wrapper > .vp-video > .vp-telecine > video"
          )
        : videoContainer.querySelector("video");

    debug/* default */.Z.log("video", video);

    const container =
      siteHostname === "pornhub" &&
      window.location.pathname.includes("view_video.php")
        ? document.querySelector(".original.mainPlayerDiv")
        : siteHostname === "pornhub" &&
          window.location.pathname.includes("embed/")
        ? document.querySelector("body")
        : window.location.hostname.includes("m.youtube.com")
        ? document.querySelector("#player-control-container")
        : videoContainer;

    addTranslationBlock(container);
    addTranslationMenu(container);
    if (
      window.location.hostname.includes("youtube.com") &&
      !window.location.hostname.includes("m.youtube.com")
    ) {
      addSubtitlesWidget(container.parentElement);
    } else {
      addSubtitlesWidget(container);
    }
    await changeSubtitlesLang("disabled");

    try {
      isDBInited = await initDB();
    } catch (err) {
      console.error(
        "[VOT] Failed to initialize database settings. All changes made will not be saved",
        err
      );
    }

    const menuOptions = document.querySelector(".translationMenuOptions");
    if (menuOptions && !menuOptions.querySelector("#VOTTranslateFromLang")) {
      const selectFromLangOptions = [
        {
          label: localizationProvider.get("videoLanguage"),
          value: "default",
          disabled: true,
        },
        ...genOptionsByOBJ(availableLangs, videoData.detectedLanguage),
      ];

      const selectToLangOptions = [
        {
          label: localizationProvider.get("translationLanguage"),
          value: "default",
          disabled: true,
        },
        ...genOptionsByOBJ(availableLangs, videoData.responseLanguage),
        {
          label: "─────────",
          value: "separator",
          disabled: true,
        },
        ...genOptionsByOBJ(additionalTTS, videoData.responseLanguage),
      ];

      const selectFromLang = createMenuSelect(
        "VOTTranslateFromLang",
        selectFromLangOptions
      );

      const selectToLang = createMenuSelect(
        "VOTTranslateToLang",
        selectToLangOptions
      ).firstElementChild;

      selectFromLang.id = "VOTSelectLanguages";
      selectFromLang.innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"/>
        </svg>
      `;

      selectFromLang.appendChild(selectToLang);
      menuOptions.appendChild(selectFromLang);

      menuOptions
        .querySelector("#VOTTranslateFromLang")
        .addEventListener("change", async (event) => {
          debug/* default */.Z.log("[onchange] select from language", event.target.value);
          videoData = await getVideoData();
          await setSelectMenuValues(
            event.target.value,
            videoData.responseLanguage
          );
        });

      menuOptions
        .querySelector("#VOTTranslateToLang")
        .addEventListener("change", async (event) => {
          debug/* default */.Z.log("[onchange] select to language", event.target.value);
          if (isDBInited) {
            translateToLang = event.target.value;
            await updateDB({ responseLanguage: event.target.value });
            debug/* default */.Z.log(
              "Response Language value changed. New value: ",
              event.target.value
            );
          }
          videoData = await getVideoData();
          await setSelectMenuValues(
            videoData.detectedLanguage,
            event.target.value
          );
        });
    }

    async function changeSubtitlesLang(subs) {
      debug/* default */.Z.log("[onchange] subtitles", subs);
      const select = document
        .querySelector(".translationMenuOptions")
        ?.querySelector("#VOTSubtitlesLang");
      select && (select.value = subs);
      if (!video) {
        console.error("[VOT] video not found");
        select && (select.value = "disabled");
        return;
      }
      if (subs === "disabled") {
        setSubtitlesWidgetContent(video, null);
      } else {
        setSubtitlesWidgetContent(
          video,
          await fetchSubtitles(subtitlesList.at(parseInt(subs)))
        );
      }
    }

    async function updateSubtitlesLangSelect() {
      const select = document
        .querySelector(".translationMenuOptions")
        ?.querySelector("#VOTSubtitlesLang");

      if (!select) {
        console.error("[VOT] #VOTSubtitlesLang not found");
        return;
      }

      const oldValue = select.value;
      select.innerHTML = "";

      const disabledOption = document.createElement("option");
      disabledOption.value = "disabled";
      disabledOption.innerHTML = localizationProvider.get(
        "VOTSubtitlesDisabled"
      );
      select.append(disabledOption);

      for (let i = 0; i < subtitlesList.length; i++) {
        const s = subtitlesList[i];
        const option = document.createElement("option");
        option.value = i;
        option.innerHTML =
          (localizationProvider.get("langs")[s.language] ??
            s.language.toUpperCase()) +
          (s.translatedFromLanguage
            ? ` ${localizationProvider.get("VOTTranslatedFrom")} ${
                localizationProvider.get("langs")[s.translatedFromLanguage] ??
                s.translatedFromLanguage.toUpperCase()
              }`
            : "") +
          (s.source !== "yandex" ? ` ${s.source}` : "") +
          (s.isAutoGenerated
            ? ` (${localizationProvider.get("VOTAutogenerated")})`
            : "");
        select.append(option);
      }

      await changeSubtitlesLang(oldValue);
    }

    if (menuOptions && !menuOptions.querySelector("#VOTSubtitlesLang")) {
      const options = [
        {
          label: localizationProvider.get("VOTSubtitlesDisabled"),
          value: "disabled",
          disabled: false,
        },
      ];

      const select = createMenuSelect("VOTSubtitlesLang", options);

      select.id = "VOTSubtitlesLangContainer";
      const span = document.createElement("span");
      span.textContent = localizationProvider.get("VOTSubtitles");
      select.prepend(span);

      menuOptions.appendChild(select);

      menuOptions
        .querySelector("#VOTSubtitlesLang")
        .addEventListener("change", async (event) => {
          await changeSubtitlesLang(event.target.value);
        });
    }

    if (isDBInited) {
      const dbData = await readDB();
      if (dbData) {
        dbSubtitlesMaxLength = dbData.subtitlesMaxLength;
        dbHighlightWords = dbData.highlightWords;
        dbAutoTranslate = dbData.autoTranslate;
        dbDefaultVolume = dbData.defaultVolume;
        dbShowVideoSlider = dbData.showVideoSlider;
        dbAutoSetVolumeYandexStyle = dbData.autoSetVolumeYandexStyle;
        dontTranslateYourLang = dbData.dontTranslateYourLang;
        dbResponseLanguage = dbData.responseLanguage;
        dbAudioProxy = dbData.audioProxy; // cf version only
        dbSyncVolume = dbData.syncVolume; // youtube only

        debug/* default */.Z.log("[db] data from db: ", dbData);

        if (dbSubtitlesMaxLength !== undefined) {
          setSubtitlesMaxLength(dbSubtitlesMaxLength);
        }

        if (dbHighlightWords !== undefined) {
          setSubtitlesHighlightWords(dbHighlightWords);
        }

        if (dbResponseLanguage !== undefined) {
          videoData = await getVideoData();
          setSelectMenuValues(videoData.detectedLanguage, dbResponseLanguage);
          translateToLang = dbResponseLanguage;
        }

        if (
          dbSubtitlesMaxLength !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTSubtitlesMaxLengthSlider")
        ) {
          const slider = createMenuSlider(
            "VOTSubtitlesMaxLengthSlider",
            dbSubtitlesMaxLength,
            `${localizationProvider.get(
              "VOTSubtitlesMaxLength"
            )}: <b id="VOTSubtitlesMaxLengthValue">${dbSubtitlesMaxLength}</b>`,
            50,
            300
          );

          slider.querySelector("#VOTSubtitlesMaxLengthSlider").oninput = async (
            event
          ) => {
            const value = Number(event.target.value);
            await updateDB({ subtitlesMaxLength: value });
            dbSubtitlesMaxLength = value;
            slider.querySelector(
              "#VOTSubtitlesMaxLengthValue"
            ).innerText = `${value}`;
            setSubtitlesMaxLength(value);
          };

          menuOptions.appendChild(slider);
        }

        if (
          dbHighlightWords !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTHighlightWords")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTHighlightWords",
            dbHighlightWords,
            localizationProvider.get("VOTHighlightWords")
          );

          checkbox.querySelector("#VOTHighlightWords").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ highlightWords: value });
            dbHighlightWords = value;
            debug/* default */.Z.log(
              "highlightWords value changed. New value: ",
              dbHighlightWords
            );
            setSubtitlesHighlightWords(value);
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbAutoTranslate !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAutoTranslate")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTAutoTranslate",
            dbAutoTranslate,
            localizationProvider.get("VOTAutoTranslate") +
              (siteHostname === "vk" ||
              window.location.hostname.includes("m.twitch.tv")
                ? ` <strong>(${localizationProvider.get(
                    "recommended"
                  )})</strong>`
                : "")
          );

          checkbox.querySelector("#VOTAutoTranslate").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ autoTranslate: value });
            dbAutoTranslate = value;
            debug/* default */.Z.log(
              "autoTranslate value changed. New value: ",
              dbAutoTranslate
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          window.location.hostname.includes("youtube.com") &&
          dontTranslateYourLang !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTDontTranslateYourLang")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTDontTranslateYourLang",
            dontTranslateYourLang,
            localizationProvider.get("VOTDontTranslateYourLang")
          );

          checkbox.querySelector("#VOTDontTranslateYourLang").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ dontTranslateYourLang: value });
            dontTranslateYourLang = value;
            debug/* default */.Z.log(
              "dontTranslateYourLang value changed. New value: ",
              dontTranslateYourLang
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbAutoSetVolumeYandexStyle !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAutoSetVolume")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTAutoSetVolume",
            dbAutoSetVolumeYandexStyle,
            localizationProvider.get("VOTAutoSetVolume") +
              `${config/* autoVolume */.IM * 100}%`
          );

          checkbox.querySelector("#VOTAutoSetVolume").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ autoSetVolumeYandexStyle: value });
            dbAutoSetVolumeYandexStyle = value;
            debug/* default */.Z.log(
              "autoSetVolumeYandexStyle value changed. New value: ",
              dbAutoSetVolumeYandexStyle
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbShowVideoSlider !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTShowVideoSlider")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTShowVideoSlider",
            dbShowVideoSlider,
            localizationProvider.get("VOTShowVideoSlider")
          );

          checkbox.querySelector("#VOTShowVideoSlider").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ showVideoSlider: value });
            dbShowVideoSlider = value;
            debug/* default */.Z.log(
              "showVideoSlider value changed. New value: ",
              dbShowVideoSlider
            );
            if (
              dbShowVideoSlider === 1 &&
              document.querySelector(".translationBtn").dataset.state ===
                "success"
            ) {
              addVideoSlider();
            } else {
              document.querySelector("#VOTVideoSlider")?.parentElement.remove();
            }
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          window.location.hostname.includes("youtube.com") &&
          !window.location.hostname.includes("m.youtube.com") &&
          dbSyncVolume !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTSyncVolume")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTSyncVolume",
            dbSyncVolume,
            localizationProvider.get("VOTSyncVolume")
          );

          checkbox.querySelector("#VOTSyncVolume").onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ syncVolume: value });
            dbSyncVolume = value;
            debug/* default */.Z.log("syncVolume value changed. New value: ", dbSyncVolume);
          };

          menuOptions.appendChild(checkbox);
        }

        // cf version only
        if (
          false
        ) {}
      }
    }

    transformBtn("none", localizationProvider.get("translateVideo"));

    if (
      window.location.hostname.includes("youtube.com") &&
      !window.location.hostname.includes("m.youtube.com")
    ) {
      const syncVolumeObserver = new MutationObserver(async function (
        mutations
      ) {
        mutations.forEach(async function (mutation) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "aria-valuenow" &&
            document.querySelector("#VOTVideoSlider")
          ) {
            syncVideoVolumeSlider();
          }
        });
      });

      const ytpVolumePanel = document.querySelector(".ytp-volume-panel");
      if (ytpVolumePanel) {
        syncVolumeObserver.observe(ytpVolumePanel, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeOldValue: true,
        });
      }
    }

    async function setSelectMenuValues(from, to) {
      if (!document.querySelector("#VOTSelectLanguages")) {
        return;
      }
      document.querySelector("#VOTTranslateFromLang").value = from;
      document.querySelector("#VOTTranslateToLang").value = to;
      console.log(`[VOT] Set translation from ${from} to ${to}`);
      videoData.detectedLanguage = from;
      videoData.responseLanguage = to;
    }

    async function stopTraslate() {
      // Default actions on stop translate
      audio.pause();
      video.removeEventListener(".translate", stopTraslate, false);
      await deleteAudioSrc();
      document.querySelector("#VOTVideoSlider")?.parentElement.remove();
      document.querySelector("#VOTTranslationSlider")?.parentElement.remove();
      const downloadBtn = document.querySelector(".translationDownload");
      downloadBtn.href = "";
      downloadBtn.style.display = "none";
      transformBtn("none", localizationProvider.get("translateVideo"));
      // temp fix
      if (window.location.hostname.includes("youtube.com")) {
        document.querySelector(".html5-video-player").setVolume(100);
      }
      if (volumeOnStart) {
        video.volume = volumeOnStart;
      }
    }

    async function syncVideoVolumeSlider() {
      // Sync volume slider with original video (youtube only)
      const newSlidersVolume = document
        .querySelector(".ytp-volume-panel")
        .getAttribute("aria-valuenow");

      const videoSlider = document.querySelector("#VOTVideoSlider");

      if (!videoSlider) {
        return;
      }
      videoSlider.value = newSlidersVolume;

      const videoVolumeLabel = document.querySelector("#VOTVideoVolume");

      if (videoVolumeLabel) {
        videoVolumeLabel.innerText = `${newSlidersVolume}%`;
      }

      if (dbSyncVolume === 1) {
        tempOriginalVolume = Number(newSlidersVolume);
      }
    }

    async function getVideoData() {
      const videoData = {};

      videoData.duration = video?.duration || 343; // ! if 0 - we get 400 error

      videoData.videoId = getVideoId(siteHostname);

      videoData.detectedLanguage = translateFromLang;

      videoData.responseLanguage = translateToLang;

      if (window.location.hostname.includes("youtube.com")) {
        ytData = await youtubeUtils.getVideoData();
        if (ytData.author !== "") {
          videoData.detectedLanguage = ytData.detectedLanguage;
          videoData.responseLanguage = translateToLang;
        }
      } else if (
        window.location.hostname.includes("rutube") ||
        window.location.hostname.includes("my.mail.ru")
      ) {
        videoData.detectedLanguage = "ru";
        videoData.responseLanguage = "en";
      } else if (window.location.hostname.includes("bilibili.com")) {
        videoData.detectedLanguage = "zh";
      }

      return videoData;
    }

    const lipSync = async (mode = false) => {
      debug/* default */.Z.log("lipsync video", video);
      if (!video) {
        return;
      }
      audio.currentTime = video.currentTime;
      audio.playbackRate = video.playbackRate;

      if (!mode) {
        debug/* default */.Z.log("lipsync mode is not set");
        return;
      }

      if (mode === "play") {
        debug/* default */.Z.log("lipsync mode is play");
        const audioPromise = audio.play();
        if (audioPromise !== undefined) {
          audioPromise.catch((e) => {
            console.error("[VOT]", e);
            if (e.name === "NotAllowedError") {
              transformBtn(
                "error",
                localizationProvider.get("grantPermissionToAutoPlay")
              );
              throw new VOTLocalizedError("grantPermissionToAutoPlay");
            } else if (e.name === "NotSupportedError") {
              transformBtn(
                "error",
                sitesChromiumBlocked.includes(window.location.hostname)
                  ? localizationProvider.get("neededAdditionalExtension")
                  : localizationProvider.get("audioFormatNotSupported")
              );
              throw sitesChromiumBlocked.includes(window.location.hostname)
                ? new VOTLocalizedError("neededAdditionalExtension")
                : new VOTLocalizedError("audioFormatNotSupported");
            }
          });
        }
        return;
      }
      if (mode === "pause") {
        debug/* default */.Z.log("lipsync mode is pause");
        audio.pause();
      }
      if (mode === "stop") {
        debug/* default */.Z.log("lipsync mode is stop");
        audio.pause();
      }
      if (mode === "waiting") {
        debug/* default */.Z.log("lipsync mode is waiting");
        audio.pause();
      }
      if (mode === "playing") {
        debug/* default */.Z.log("lipsync mode is playing");
        audio.play();
      }
    };

    function addVideoSlider() {
      if (
        dbShowVideoSlider !== 1 ||
        document.querySelector("#VOTVideoSlider") ||
        document.querySelector(".translationBtn").dataset.state !== "success"
      ) {
        return;
      }

      const newVolume =
        window.location.hostname.includes("youtube.com") &&
        !dbAutoSetVolumeYandexStyle
          ? document
              .querySelector(".ytp-volume-panel")
              ?.getAttribute("aria-valuenow")
          : Math.round(video.volume * 100);
      tempOriginalVolume = newVolume;

      const slider = createMenuSlider(
        "VOTVideoSlider",
        newVolume,
        `${localizationProvider.get(
          "VOTVolume"
        )}: <b class = "volumePercent" id="VOTOriginalVolume">${newVolume}%</b>`
      );

      slider.querySelector("#VOTVideoSlider").oninput = async (event) => {
        const { value } = event.target;
        video.volume = value / 100;
        slider.querySelector("#VOTOriginalVolume").innerText = `${value}%`;

        if (dbSyncVolume !== 1) {
          return;
        }

        // Sync translation volume slider with video volume slider
        const translateVolumeSlider = document.querySelector(
          "#VOTTranslationSlider"
        );

        if (!translateVolumeSlider) {
          return;
        }
        const translateVolume = Number(translateVolumeSlider.value);
        const finalValue = syncVolume(
          audio,
          value,
          translateVolume,
          tempOriginalVolume
        );

        translateVolumeSlider.value = finalValue;

        const translateVolumeLabel = document.querySelector(
          "#VOTTranslationVolume"
        );

        if (translateVolumeLabel) {
          translateVolumeLabel.innerText = `${finalValue}%`;
        }

        tempVolume = finalValue;
        tempOriginalVolume = value;
      };

      const menuOptions = document.querySelector(".translationMenuOptions");
      menuOptions.appendChild(slider);
    }

    async function addTranslationSlider() {
      // Return early if slider already exists or translation is not successful
      if (
        document.querySelector("#VOTTranslationSlider") ||
        document.querySelector(".translationBtn").dataset.state !== "success"
      ) {
        return;
      }

      // Use dbDefaultVolume or 100 as the default translation volume
      const defaultTranslateVolume =
        typeof dbDefaultVolume === "number" ? dbDefaultVolume : 100;
      tempOriginalVolume = defaultTranslateVolume;

      // Create a slider element with the default volume and label
      const slider = createMenuSlider(
        "VOTTranslationSlider",
        defaultTranslateVolume,
        `${localizationProvider.get(
          "VOTVolumeTranslation"
        )}: <b class = "volumePercent" id="VOTTranslationVolume">${defaultTranslateVolume}%</b>`
      );

      // Add an input event listener to the slider
      slider.querySelector("#VOTTranslationSlider").oninput = async ({
        target: { value },
      }) => {
        // Set the audio volume to the slider value
        audio.volume = value / 100;

        // Update the volume label
        document.querySelector("#VOTTranslationVolume").innerText = `${value}%`;

        // Update the database with the new volume value
        await updateDB({ defaultVolume: Number(value) });
        dbDefaultVolume = Number(value);

        // Sync translation volume with video volume if dbSyncVolume is 1
        if (dbSyncVolume === 1) {
          syncTranslationWithVideo(value);
        }
      };

      // Append the slider to the menu options
      const menuOptions = document.querySelector(".translationMenuOptions");
      menuOptions.appendChild(slider);
    }

    // A helper function to sync translation volume with video volume
    function syncTranslationWithVideo(translationValue) {
      // Get the video volume slider element
      const videoVolumeSlider = document.querySelector("#VOTVideoSlider");

      if (!videoVolumeSlider) {
        return;
      }
      // Get the video volume value
      const videoVolume = Number(videoVolumeSlider.value);

      // Calculate the synced video volume based on the translation volume
      const finalValue = syncVolume(
        video,
        translationValue,
        videoVolume,
        tempVolume
      );

      // Set the video volume slider value to the synced value
      videoVolumeSlider.value = finalValue;

      // Update the video volume label
      const videoVolumeLabel = document.querySelector("#VOTOriginalVolume");
      if (videoVolumeLabel) videoVolumeLabel.innerText = `${finalValue}%`;

      // Update the temp variables for future syncing
      tempOriginalVolume = finalValue;
      tempVolume = translationValue;
    }

    async function videoValidator() {
      if (window.location.hostname.includes("youtube.com")) {
        debug/* default */.Z.log("VideoValidator videoData: ", videoData);
        if (
          dontTranslateYourLang === 1 &&
          videoData.detectedLanguage === lang &&
          videoData.responseLanguage === lang
        ) {
          throw new VOTLocalizedError("VOTDisableFromYourLang");
        }
        if (ytData.isPremiere) {
          throw new VOTLocalizedError("VOTPremiere");
        }
        if (ytData.isLive) {
          throw new VOTLocalizedError("VOTLiveNotSupported");
        }
        if (videoData.duration > 14_400) {
          throw new VOTLocalizedError("VOTVideoIsTooLong");
        }
      }
      return true;
    }

    const translateExecutor = async (VIDEO_ID) => {
      if (!videoData.detectedLanguage) {
        videoData = await getVideoData();
        await setSelectMenuValues(
          videoData.detectedLanguage,
          videoData.responseLanguage
        );
      }
      debug/* default */.Z.log("Run videoValidator");
      await videoValidator();
      debug/* default */.Z.log("Run translateFunc");
      await translateFunc(
        VIDEO_ID,
        videoData.detectedLanguage,
        videoData.responseLanguage
      );
    };

    // Define a function to handle common events
    async function handleVideoEvent(event) {
      debug/* default */.Z.log(`video ${event.type}`);
      await lipSync(event.type);
    }

    // Define a function to stop translation and clean up
    async function stopTranslation() {
      await stopTraslate();
      await syncVideoVolumeSlider();
    }

    // Define a function to translate a video and handle the callback
    async function translateFunc(VIDEO_ID, requestLang, responseLang) {
      console.log("[VOT] Video Data: ", videoData);
      const videoURL = `${siteTranslates[siteHostname]}${VIDEO_ID}`;
      translateVideo(
        videoURL,
        videoData.duration,
        requestLang,
        responseLang,
        async (success, urlOrError) => {
          debug/* default */.Z.log("[exec callback] translateVideo");
          if (getVideoId(siteHostname) !== VIDEO_ID) return;
          if (!success) {
            if (urlOrError?.name === "VOTLocalizedError") {
              transformBtn("error", urlOrError.localizedMessage);
            } else {
              transformBtn("error", urlOrError);
            }
            // if the error line contains information that the translation is being performed, then we wait
            if (
              urlOrError.includes(localizationProvider.get("translationTake"))
            ) {
              clearTimeout(autoRetry);
              autoRetry = setTimeout(
                () => translateFunc(VIDEO_ID, requestLang, responseLang),
                60_000
              );
            }
            throw urlOrError;
          }

          audio.src = urlOrError;

          // cf version only
          if (
            false
          ) {}

          volumeOnStart = video?.volume;
          if (typeof dbDefaultVolume === "number") {
            audio.volume = dbDefaultVolume / 100;
          }
          if (
            typeof dbAutoSetVolumeYandexStyle === "number" &&
            dbAutoSetVolumeYandexStyle
          ) {
            video.volume = config/* autoVolume */.IM;
            // temp fix
            if (window.location.hostname.includes("youtube.com")) {
              document
                .querySelector(".html5-video-player")
                .setVolume(config/* autoVolume */.IM * 100);
            }
          }

          switch (siteHostname) {
            case "twitter":
              document
                .querySelector('div[data-testid="app-bar-back"][role="button"]')
                .addEventListener("click", stopTranslation);
              break;
            case "invidious":
            case "piped":
              break;
            default:
              if (siteEvent !== null) {
                document.body.addEventListener(siteEvent, stopTranslation);
              }
              break;
          }

          const siteHostnames = [
            "twitch",
            "vimeo",
            "facebook",
            "rutube",
            "twitter",
            "bilibili.com",
            "mail.ru",
          ];
          for (let i = 0; i < siteHostnames.length; i++) {
            if (siteHostname === siteHostnames[i]) {
              const mutationObserver = new MutationObserver(
                async (mutations) => {
                  mutations.forEach(async (mutation) => {
                    if (
                      mutation.type === "attributes" &&
                      mutation.attributeName === "src" &&
                      mutation.target === video &&
                      mutation.target.src !== ""
                    ) {
                      stopTranslation();
                      firstPlay = true;
                    }
                  });
                }
              );
              mutationObserver.observe(videoContainer, {
                attributes: true,
                childList: false,
                subtree: true,
                attributeOldValue: true,
              });
              break;
            }
          }

          if (video && !video.paused) lipSync("play");
          const videos = document.querySelectorAll("video");
          const events = ["playing", "ratechange", "play", "waiting", "pause"];
          videos.forEach((v) =>
            events.forEach((e) => v.addEventListener(e, handleVideoEvent))
          );
          transformBtn("success", localizationProvider.get("disableTranslate"));
          addVideoSlider();
          await addTranslationSlider();

          const VOTVideoSlider = document.querySelector("#VOTVideoSlider");
          if (VOTVideoSlider) VOTVideoSlider.value = config/* autoVolume */.IM * 100;

          const VOTOriginalVolume =
            document.querySelector("#VOTOriginalVolume");
          if (VOTOriginalVolume) {
            VOTOriginalVolume.innerText = `${config/* autoVolume */.IM * 100}%`;
          }

          const downloadBtn = document.querySelector(".translationDownload");
          downloadBtn.href = urlOrError;
          downloadBtn.style.display = "initial";
        }
      );
    }

    document.addEventListener("click", async (event) => {
      const block = document.querySelector(".translationBlock");
      const menuContainer = document.querySelector(".translationMenuContent");
      const isBlock =
        block || event.target === block ? block.contains(event.target) : false;
      const isContent =
        menuContainer || event.target === menuContainer
          ? menuContainer.contains(event.target)
          : false;
      const isVideo =
        videoContainer || event.target === videoContainer
          ? videoContainer.contains(event.target)
          : false;

      debug/* default */.Z.log(`[document click] ${isBlock} ${isContent} ${isVideo}`);
      if (!(!isBlock && !isContent)) return;
      if (!isVideo) logout(0);

      menuContainer.style.display = "none";
      openedMenu = false;
    });

    const addEventListeners = (element, events, handler) => {
      events.forEach((event) =>
        element.addEventListener(event, async (event) => {
          await handler(event);
        })
      );
    };

    if (siteHostname === "pornhub") {
      if (window.location.pathname.includes("view_video.php")) {
        const videoElement = document.querySelector(
          ".original.mainPlayerDiv > video-element > div"
        );
        addEventListeners(videoElement, ["mousemove", "mouseout"], resetTimer);
      } else if (window.location.pathname.includes("embed/")) {
        const playerElement = document.querySelector("#player");
        addEventListeners(playerElement, ["mousemove", "mouseout"], resetTimer);
      }
    } else if (siteHostname === "twitter") {
      const videoPlayerElement = document.querySelector(
        'div[data-testid="videoPlayer"'
      );
      addEventListeners(
        videoPlayerElement,
        ["mousemove", "mouseout"],
        resetTimer
      );
    } else {
      addEventListeners(videoContainer, ["mousemove", "mouseout"], resetTimer);
    }

    document
      .querySelector(".translationBlock")
      .addEventListener("mousemove", (event) =>
        changeOpacityOnEvent(event, timer, opacityRatio)
      );
    document
      .querySelector(".translationMenuContent")
      .addEventListener("mousemove", (event) =>
        changeOpacityOnEvent(event, timer, opacityRatio)
      );

    document.addEventListener("touchstart", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.addEventListener("touchmove", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.addEventListener("touchend", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.querySelectorAll("video").forEach((video) => {
      video.addEventListener("abort", async () => {
        debug/* default */.Z.log("lipsync mode is abort");
        await stopTranslation();
        videoData = "";
      });
    });

    document
      .querySelector(".translationBtn")
      .addEventListener("click", async (event) => {
        debug/* default */.Z.log("[click translationBtn] before all functions & methods");
        event.stopPropagation();
        event.stopImmediatePropagation();

        // check if the audio source is not empty
        if (audio.src) {
          debug/* default */.Z.log("[click translationBtn] audio.src is not empty");
          await stopTraslate();
          return;
        }

        try {
          debug/* default */.Z.log("[click translationBtn] trying execute translation");
          const VIDEO_ID = getVideoId(siteHostname);

          if (!VIDEO_ID) {
            throw new VOTLocalizedError("VOTNoVideoIDFound");
          }

          await translateExecutor(VIDEO_ID);
        } catch (err) {
          console.error("[VOT]", err);
          if (err?.name === "VOTLocalizedError") {
            transformBtn("error", err.localizedMessage);
          } else {
            transformBtn("error", err);
          }
        }
      });

    video.addEventListener("progress", async (event) => {
      event.stopPropagation();

      if (!(firstPlay && dbAutoTranslate === 1)) {
        return;
      }
      const VIDEO_ID = getVideoId(siteHostname);

      if (!VIDEO_ID) {
        throw new VOTLocalizedError("VOTNoVideoIDFound");
      }

      try {
        await translateExecutor(VIDEO_ID);
        firstPlay = false;
      } catch (err) {
        console.error("[VOT]", err);
        if (err?.name === "VOTLocalizedError") {
          transformBtn("error", err.localizedMessage);
        } else {
          transformBtn("error", err);
        }
        firstPlay = false;
      }
    });

    document
      .querySelector(".translationMenu")
      .addEventListener("click", async (event) => {
        event.stopPropagation();

        const select = document
          .querySelector(".translationMenuOptions")
          ?.querySelector("#VOTSubtitlesLang");

        if (!openedMenu || !select) {
          return;
        }

        const VIDEO_ID = getVideoId(siteHostname);

        if (!VIDEO_ID) {
          console.error(
            `[VOT] ${localizationProvider.getDefault("VOTNoVideoIDFound")}`
          );
          subtitlesList = [];
          subtitlesListVideoId = null;
          await updateSubtitlesLangSelect();
          return;
        }

        if (subtitlesListVideoId === VIDEO_ID) {
          return;
        }

        if (!videoData.detectedLanguage) {
          videoData = await getVideoData();
          await setSelectMenuValues(
            videoData.detectedLanguage,
            videoData.responseLanguage
          );
        }

        subtitlesList = await subtitles_getSubtitles(
          siteHostname,
          VIDEO_ID,
          videoData.detectedLanguage
        );
        if (!subtitlesList) {
          await changeSubtitlesLang("disabled");
        } else {
          subtitlesListVideoId = VIDEO_ID;
        }
        await updateSubtitlesLangSelect();
      });
  }

  async function initWebsite() {
    debug/* default */.Z.log("Runned initWebsite function");
    if (config_regexes.youtubeRegex.test(window.location.hostname)) {
      if (window.location.pathname.includes("embed")) {
        const videoContainer = document.querySelector(".html5-video-container");
        await translateProccessor(videoContainer, "youtube", null);
        return;
      }

      debug/* default */.Z.log("[initWebsite] Found a match with youtube hostname");
      const ytPageEnter = () => {
        const videoContainer = document.querySelector(
          config_selectors.youtubeSelector
        );
        if (videoContainer) {
          debug/* default */.Z.log("[exec] translateProccessor youtube on page enter");
          translateProccessor(videoContainer, "youtube", "yt-translate-stop");
        } else {
          if (!ytplayer || !ytplayer.config) {
            debug/* default */.Z.log("[exec] ytplayer is null");
            return;
          }
          ytplayer.config.args.jsapicallback = () => {
            debug/* default */.Z.log(
              "[exec] translateProccessor youtube on page enter (ytplayer.config.args.jsapicallback)"
            );
            translateProccessor(videoContainer, "youtube", "yt-translate-stop");
          };
        }
      };

      document.addEventListener("spfdone", ytPageEnter);
      document.addEventListener("yt-navigate-finish", ytPageEnter);

      const ytPageLeave = () => {
        document.body.dispatchEvent(new Event("yt-translate-stop"));
      };

      document.addEventListener("spfrequest", ytPageLeave);
      document.addEventListener("yt-navigate-start", ytPageLeave);

      if (window.location.hostname.includes("m.youtube.com")) {
        let ytmobile = await waitForElm("#player");
        if (ytmobile) {
          await sleep(2300);
          await translateProccessor(ytmobile, "youtube", "yt-translate-stop");

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src"
              ) {
                ytmobile = await waitForElm("#player");
                await sleep(2300);
                await translateProccessor(
                  ytmobile,
                  "youtube",
                  "yt-translate-stop"
                );
              }
            }
          });

          mutationObserver.observe(ytmobile, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
        const ytPageLeave = () => {
          document.body.dispatchEvent(new Event("yt-translate-stop"));
        };
        document.addEventListener("spfdone", ytPageLeave);
        document.addEventListener("yt-navigate-finish", ytPageLeave);
        document.addEventListener("spfrequest", ytPageLeave);
        document.addEventListener("yt-navigate-start", ytPageLeave);
      }
      return;
    }
    if (window.location.hostname.includes("twitch.tv")) {
      debug/* default */.Z.log("[initWebsite] Found a match with twitch.tv");
      if (
        window.location.hostname.includes("m.twitch.tv") &&
        (window.location.pathname.includes("/videos/") ||
          window.location.pathname.includes("/clip/"))
      ) {
        debug/* default */.Z.log("[initWebsite] Matched Twitch Mobile");
        const el = await waitForElm(config_selectors.twitchMobileSelector);
        if (el) {
          await sleep(200);
          const twitchMobileSelector = document.querySelector(
            config_selectors.twitchMobileSelector
          );
          await translateProccessor(twitchMobileSelector, "twitch", null);

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src" &&
                mutation.target === twitchMobileSelector?.querySelector("video")
              ) {
                await sleep(1000);
                await translateProccessor(twitchMobileSelector, "twitch", null);
              }
            }
          });

          mutationObserver.observe(twitchMobileSelector, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
      } else if (
        window.location.hostname.includes("player.twitch.tv") ||
        window.location.hostname.includes("clips.twitch.tv") ||
        window.location.pathname.includes("/videos/") ||
        window.location.pathname.includes("/clip/")
      ) {
        debug/* default */.Z.log("[initWebsite] Matched Twitch Desktop");
        const el = await waitForElm(config_selectors.twitchSelector);
        if (el) {
          await sleep(200);
          await translateProccessor(el, "twitch", null);
        }
      }
      debug/* default */.Z.log("[initWebsite] Exit function in the twitch section");
      return;
    }
    if (window.location.hostname.includes("xvideos.com")) {
      debug/* default */.Z.log("[entered] xvideos");
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".video-bg-pic"),
        "xvideos",
        null
      );
      return;
    }
    if (window.location.hostname.includes("pornhub.com")) {
      debug/* default */.Z.log("[entered] pornhub");
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".mgp_videoWrapper"),
        "pornhub",
        null
      );
      return;
    }
    if (sitesInvidious.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      debug/* default */.Z.log("[entered] invidious");
      await translateProccessor(
        document.querySelector("#player"),
        "youtube",
        null
      );
    } else if (sitesPiped.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      debug/* default */.Z.log("[entered] piped");
      const el = await waitForElm(config_selectors.pipedSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("youtube");
        await translateProccessor(el, "youtube", "piped");
        setInterval(async () => {
          videoIDNew = getVideoId("youtube");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.pipedSelector),
                "youtube",
                "piped"
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (/^(www.|m.)?vk.(com|ru)$/.test(window.location.hostname)) {
      debug/* default */.Z.log("[entered] vk.com");
      const el = await waitForElm(config_selectors.vkSelector);
      if (el) {
        await translateProccessor(
          document.querySelector(config_selectors.vkSelector),
          "vk",
          null
        );
        let videoIDVKNew;
        let videoIDVK = getVideoId("vk");
        setInterval(async () => {
          videoIDVKNew = getVideoId("vk");
          if (videoIDVK !== videoIDVKNew) {
            if (videoIDVKNew) {
              const el = await waitForElm(config_selectors.vkSelector);
              if (el) {
                await translateProccessor(el, "vk", null);
              }
            }
            videoIDVK = videoIDVKNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("vimeo.com")) {
      debug/* default */.Z.log("[entered] vimeo.com");
      const el = await waitForElm(config_selectors.vimeoSelector);
      if (el) {
        await sleep(1000);
        await translateProccessor(
          document.querySelector(config_selectors.vimeoSelector),
          "vimeo",
          null
        );
      }
    } else if (window.location.hostname.includes("9gag.com")) {
      await sleep(1000);
      await translateProccessor(
        document.querySelector(config_selectors.gagSelector),
        "9gag",
        null
      );
    } else if (window.location.hostname.includes("coub.com")) {
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".viewer__player"),
        "coub",
        null
      );
    } else if (window.location.hostname.includes("bitchute.com")) {
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".plyr__video-wrapper"),
        "bitchute",
        null
      );
    } else if (window.location.hostname.includes("rutube.ru")) {
      const elementSelector = window.location.pathname.includes("/play/embed")
        ? "#app > div > div"
        : ".video-player > div > div > div:nth-child(2)";

      const el = await waitForElm(elementSelector);
      if (el) {
        await translateProccessor(el, "rutube", null);
      }
    } else if (window.location.hostname.includes("bilibili.com")) {
      if (window.location.pathname.includes("/video/")) {
        const el = await waitForElm(config_selectors.bilibilicomSelector);
        if (el) {
          await translateProccessor(el, "bilibili.com", null);
        }
      } else if (
        window.location.pathname.includes(
          "/blackboard/webplayer/embed-old.html"
        )
      ) {
        const el = await waitForElm("video");
        if (el) {
          await translateProccessor(el.parentElement, "bilibili.com", null);
        }
      }
    } else if (window.location.hostname.includes("twitter.com")) {
      const el = await waitForElm(config_selectors.twitterSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("twitter");
        await translateProccessor(el, "twitter", null);
        setInterval(async () => {
          videoIDNew = getVideoId("twitter");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.twitterSelector),
                "twitter",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("my.mail.ru")) {
      const el = await waitForElm(config_selectors.mailSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("mail.ru");
        await translateProccessor(el, "mail.ru", null);
        setInterval(async () => {
          videoIDNew = getVideoId("mail.ru");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.mailSelector),
                "mail.ru",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    }
  }

  await initWebsite();
}

localizationProvider.update();

window.addEventListener("DOMContentLoaded", () => {
  src_main().catch((e) => {
    console.error("[VOT]", e);
  });
});

})();

/******/ })()
;
