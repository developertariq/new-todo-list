"use strict";
(self["webpackChunknew_todo_list"] = self["webpackChunknew_todo_list"] || []).push([["index"],{

/***/ 426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\r\n  background: #f1f2f5;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  margin: 0;\r\n}\r\n\r\n#list-container {\r\n  width: 60%;\r\n  padding: 20px 5%;\r\n  height: auto;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  -webkit-transition: padding 300ms ease-in-out, max-height 500ms ease-in-out;\r\n  transition: padding 300ms ease-in-out, max-height 500ms ease-in-out;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n  -webkit-perspective: 1000px;\r\n  perspective: 1000px;\r\n}\r\n\r\n.complete {\r\n  -webkit-transition: max-height 0s;\r\n  transition: max-height 0s;\r\n  max-height: none;\r\n}\r\n\r\n.active {\r\n  cursor: auto;\r\n  max-height: 1000px;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.main-list {\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  margin: 0 auto;\r\n  top: 0;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  text-align: left;\r\n  position: relative;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.list-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 22px;\r\n  height: 50px;\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.list-head h2 {\r\n  font-size: 18px;\r\n  color: #333;\r\n}\r\n\r\n.refresh {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 46px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n  color: #333;\r\n}\r\n\r\n.fas,\r\n.far {\r\n  display: block;\r\n  margin: auto;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  font-size: 18px;\r\n  opacity: 0.5;\r\n  color: #333;\r\n}\r\n\r\n.color-green:hover {\r\n  color: green;\r\n}\r\n\r\n.items {\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n#add-item,\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0;\r\n  background: white;\r\n  width: 100%;\r\n}\r\n\r\n#add-item {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* #add-btn-wrap {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 46px;\r\n  padding: 0;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n} */\r\n\r\n#submit-new-task {\r\n  border: none;\r\n  background-color: transparent;\r\n  z-index: 0;\r\n  width: 18px;\r\n  height: 18px;\r\n  cursor: pointer;\r\n  color: #333;\r\n}\r\n\r\n#submit-new-task:hover {\r\n  color: green;\r\n}\r\n\r\n.input-item {\r\n  border: none !important;\r\n  outline: none;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  resize: none;\r\n}\r\n\r\ninput[type=text] {\r\n  padding: 8px 5px;\r\n  border: 1px solid #ddd;\r\n  line-height: 20px;\r\n  height: 20px;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n#add-item input[type=text] {\r\n  width: 100%;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n#add-item input[type=text]::after {\r\n  font-style: normal;\r\n}\r\n\r\n/* .todo.ui-sortable-helper {\r\n  border-bottom:none;\r\n  -webkit-transform:scale(0.98);\r\n  transform:scale(0.98);\r\n  opacity:95;\r\n  border:1px solid #2e8ae6;\r\n  border-radius:2px;\r\n  z-index:100000;\r\n  box-shadow:0 1px 3px rgba(0,0,0,0.35);\r\n} */\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 50px;\r\n  padding: 0;\r\n  font-size: 1rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  font-weight: 300;\r\n  -webkit-transition: background-color 200ms linear;\r\n  transition: background-color 200ms linear;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -webkit-perspective: 1000px;\r\n  perspective: 1000px;\r\n}\r\n\r\n.task-color-pink {\r\n  background-color: #faf4eb;\r\n}\r\n\r\n.task-color-white {\r\n  background-color: #fff;\r\n}\r\n\r\n.clear::before,\r\n.clear::after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.clear::after {\r\n  clear: both;\r\n}\r\n\r\n.checkbox {\r\n  background-color: transparent;\r\n  border: 4px solid #c1c1c3;\r\n  cursor: pointer;\r\n  float: left;\r\n  height: 16px;\r\n  width: 16px;\r\n  border-radius: 2px;\r\n  margin: 17px;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.desription {\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  line-height: 20px;\r\n  display: block;\r\n  font-size: 1em;\r\n  font-weight: 300;\r\n}\r\n\r\n.desription:focus {\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  line-height: 20px;\r\n  word-wrap: break-word;\r\n  display: block;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n/*\r\n.todo .destroy {\r\n  opacity: 0.5;\r\n  display: none;\r\n  position: absolute;\r\n  width: 1.4rem;\r\n  height: 50px;\r\n  padding: 0 0.25rem;\r\n  margin: 0 0.5rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  top: 0;\r\n  color: #333;\r\n  right: 0;\r\n  -webkit-transition: all 200ms ease-in-out;\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n.todo .move {\r\n  opacity: .2;\r\n  float: right;\r\n  margin-right: -3em;\r\n  padding: 0 0.5rem;\r\n  height: 50px;\r\n  line-height: 0;\r\n  cursor: move;\r\n} */\r\n\r\n.remove-selected {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n  margin: 1rem auto;\r\n  display: block;\r\n  color: #000;\r\n  font-size: 1em;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  line-height: 20px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.remove-selected:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.edit-input {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  margin: auto;\r\n  display: block;\r\n  color: #000;\r\n  font-size: 1.05em;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  line-height: 20px;\r\n  border: none !important;\r\n  outline: none;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  resize: none;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\r\n  background: #f1f2f5;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  margin: 0;\r\n}\r\n\r\n#list-container {\r\n  width: 60%;\r\n  padding: 20px 5%;\r\n  height: auto;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  -webkit-transition: padding 300ms ease-in-out, max-height 500ms ease-in-out;\r\n  transition: padding 300ms ease-in-out, max-height 500ms ease-in-out;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n  -webkit-perspective: 1000px;\r\n  perspective: 1000px;\r\n}\r\n\r\n.complete {\r\n  -webkit-transition: max-height 0s;\r\n  transition: max-height 0s;\r\n  max-height: none;\r\n}\r\n\r\n.active {\r\n  cursor: auto;\r\n  max-height: 1000px;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.main-list {\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  margin: 0 auto;\r\n  top: 0;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  text-align: left;\r\n  position: relative;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.list-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 22px;\r\n  height: 50px;\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.list-head h2 {\r\n  font-size: 18px;\r\n  color: #333;\r\n}\r\n\r\n.refresh {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 46px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n  color: #333;\r\n}\r\n\r\n.fas,\r\n.far {\r\n  display: block;\r\n  margin: auto;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  font-size: 18px;\r\n  opacity: 0.5;\r\n  color: #333;\r\n}\r\n\r\n.color-green:hover {\r\n  color: green;\r\n}\r\n\r\n.items {\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n#add-item,\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0;\r\n  background: white;\r\n  width: 100%;\r\n}\r\n\r\n#add-item {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* #add-btn-wrap {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 46px;\r\n  padding: 0;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n} */\r\n\r\n#submit-new-task {\r\n  border: none;\r\n  background-color: transparent;\r\n  z-index: 0;\r\n  width: 18px;\r\n  height: 18px;\r\n  cursor: pointer;\r\n  color: #333;\r\n}\r\n\r\n#submit-new-task:hover {\r\n  color: green;\r\n}\r\n\r\n.input-item {\r\n  border: none !important;\r\n  outline: none;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  resize: none;\r\n}\r\n\r\ninput[type=text] {\r\n  padding: 8px 5px;\r\n  border: 1px solid #ddd;\r\n  line-height: 20px;\r\n  height: 20px;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n#add-item input[type=text] {\r\n  width: 100%;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n#add-item input[type=text]::after {\r\n  font-style: normal;\r\n}\r\n\r\n/* .todo.ui-sortable-helper {\r\n  border-bottom:none;\r\n  -webkit-transform:scale(0.98);\r\n  transform:scale(0.98);\r\n  opacity:95;\r\n  border:1px solid #2e8ae6;\r\n  border-radius:2px;\r\n  z-index:100000;\r\n  box-shadow:0 1px 3px rgba(0,0,0,0.35);\r\n} */\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 50px;\r\n  padding: 0;\r\n  font-size: 1rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  font-weight: 300;\r\n  -webkit-transition: background-color 200ms linear;\r\n  transition: background-color 200ms linear;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -webkit-perspective: 1000px;\r\n  perspective: 1000px;\r\n}\r\n\r\n.task-color-pink {\r\n  background-color: #faf4eb;\r\n}\r\n\r\n.task-color-white {\r\n  background-color: #fff;\r\n}\r\n\r\n.clear::before,\r\n.clear::after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.clear::after {\r\n  clear: both;\r\n}\r\n\r\n.checkbox {\r\n  background-color: transparent;\r\n  border: 4px solid #c1c1c3;\r\n  cursor: pointer;\r\n  float: left;\r\n  height: 16px;\r\n  width: 16px;\r\n  border-radius: 2px;\r\n  margin: 17px;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.desription {\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  line-height: 20px;\r\n  display: block;\r\n  font-size: 1em;\r\n  font-weight: 300;\r\n}\r\n\r\n.desription:focus {\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  line-height: 20px;\r\n  word-wrap: break-word;\r\n  display: block;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n/*\r\n.todo .destroy {\r\n  opacity: 0.5;\r\n  display: none;\r\n  position: absolute;\r\n  width: 1.4rem;\r\n  height: 50px;\r\n  padding: 0 0.25rem;\r\n  margin: 0 0.5rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  top: 0;\r\n  color: #333;\r\n  right: 0;\r\n  -webkit-transition: all 200ms ease-in-out;\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n.todo .move {\r\n  opacity: .2;\r\n  float: right;\r\n  margin-right: -3em;\r\n  padding: 0 0.5rem;\r\n  height: 50px;\r\n  line-height: 0;\r\n  cursor: move;\r\n} */\r\n\r\n.remove-selected {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n  margin: 1rem auto;\r\n  display: block;\r\n  color: #000;\r\n  font-size: 1em;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  line-height: 20px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.remove-selected:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.edit-input {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  margin: auto;\r\n  display: block;\r\n  color: #000;\r\n  font-size: 1.05em;\r\n  font-weight: 300;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  line-height: 20px;\r\n  border: none !important;\r\n  outline: none;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  overflow: hidden;\r\n  resize: none;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ 537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 426);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ 216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ 565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ 795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  } // For old IE

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

/***/ 589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ 654);
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.js */ 136);
/* harmony import */ var _loadlist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadlist.js */ 511);
/* eslint no-unused-vars: "error" */
/* eslint no-unsafe-optional-chaining: ["error", { "disallowArithmeticOperators": false }] */




// import '@fortawesome/fontawesome-free/js/all.js';

let newDescription = '';

function changeTaskDescription(a = '') {
  newDescription = a;
}

function getNewTaskDescription() {
  return newDescription;
}

function listContainer() {
  const listContainer = document.createElement('div');
  listContainer.id = 'list-container';
  listContainer.classList.add('active', 'complete');
  listContainer.appendChild((0,_loadlist_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  return listContainer;
}

document.body.appendChild(listContainer());

const form = document.getElementById('new-task-form');
const addNewButton = document.querySelector('#submit-new-task');
const selectTask = document.querySelector('#item-list');
const taskDescripton = document.querySelectorAll('.desription');
const refreshList = document.querySelector('#list-head');

form.addEventListener('submit', () => {
  if (document.getElementById('newtask').value !== '') {
    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(form.elements.newtask.value);
  }
  (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.displayTaskList)();
});

addNewButton.addEventListener('click', () => {
  if (document.getElementById('newtask').value !== '') {
    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(document.getElementById('newtask').value);
  }
  (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.displayTaskList)();
});

selectTask.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    const nod = e.target.parentNode;
    const div = nod.parentElement;
    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(parseInt(nod.name, 10));
    div.style.display = 'none';
  }
});

for (let i = 0; i < taskDescripton.length; i += 1) {
  taskDescripton[i].onclick = function () {
    const label = document.querySelector('.task-color-pink');
    const trashCan = document.querySelector('.fa-trash-can');
    const check = this.previousElementSibling;
    const nodeList = this.nextElementSibling.childNodes;
    const [remove] = nodeList;
    if (label !== null) {
      label.classList.remove('task-color-pink');
      label.classList.add('task-color-white');
    }
    if (trashCan !== null) {
      trashCan.classList.add('fas', 'fa-ellipsis-vertical');
      trashCan.classList.remove('far', 'fa-trash-alt');
    }
    if (check !== null) {
      check.checked = false;
      this.classList.remove('checked');
    }
    this.parentNode.classList.remove('task-color-white');
    this.parentNode.classList.add('task-color-pink');
    remove.classList.add('far', 'fa-trash-alt');
    this.setAttribute('contenteditable', 'true');
    this.setAttribute('autocomplete', 'on');
    this.focus();
  };

  taskDescripton[i].oninput = function () {
    changeTaskDescription(this.innerText);
  };

  taskDescripton[i].onblur = function () {
    if (getNewTaskDescription() !== '') {
      (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(getNewTaskDescription(), parseInt(this.name, 10));
      changeTaskDescription();
    }
  };
}

document.querySelector('#add-item').addEventListener('click', () => {
  const div = document.querySelector('.task-color-pink');
  const trashCan = document.querySelector('.fa-trash-can');
  if (div !== null) {
    div.classList.remove('task-color-pink');
    div.classList.add('task-color-white');
  }
  if (trashCan !== null) {
    trashCan.classList.add('fas', 'fa-ellipsis-vertical');
    trashCan.classList.remove('far', 'fa-trash-alt');
  }
});

document.querySelector('#remove-item').addEventListener('click', () => {
  const div = document.querySelector('.task-color-pink');
  if (div !== null) {
    div.classList.remove('task-color-pink');
    div.classList.add('task-color-white');
  }
});

refreshList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-rotate')) {
    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.displayTaskList)();
    window.location.reload();
  }
});

const check = document.querySelectorAll('input[type=checkbox]');
for (let i = 0; i < check.length; i += 1) {
  check[i].onchange = function () {
    const div = this.nextElementSibling;
    const trashCan = document.querySelector('.fa-trash-can');
    const span = document.querySelector('.task-color-pink');
    if (trashCan !== null) {
      trashCan.classList.add('fas', 'fa-ellipsis-vertical');
      trashCan.classList.remove('far', 'fa-trash-alt');
    }

    if (span !== null) {
      span.classList.remove('task-color-pink');
      span.classList.add('task-color-white');
    }
    if (this.checked === true) {
      div.classList.add('checked');
    } else {
      div.classList.remove('checked');
    }
  };
}

const remove = document.getElementById('remove-item');
remove.addEventListener('click', () => {
  const textinputs = document.querySelectorAll('input[type=checkbox]');
  const empty = [].filter.call(textinputs, (el) => el.checked);
  empty.forEach((e) => {
    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.completeTask)(parseInt(e.name, 10));
  });
  (0,_todolist_js__WEBPACK_IMPORTED_MODULE_1__.displayTaskList)();
  window.location.reload();
});


/***/ }),

/***/ 511:
/*!*************************!*\
  !*** ./src/loadlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ 136);


const listHead = () => {
  const div = document.createElement('div');
  div.id = 'list-head';
  div.classList.add('list-head');
  const h2 = document.createElement('h2');
  h2.innerText = 'Today\'s To Do';
  div.appendChild(h2);
  const refresh = document.createElement('div');
  refresh.classList.add('refresh');
  const btnRefresh = document.createElement('i');
  btnRefresh.classList.add('color-green', 'fas', 'fa-sync-alt');
  refresh.appendChild(btnRefresh);
  div.appendChild(refresh);
  return div;
};

const addItem = () => {
  const div = document.createElement('div');
  div.id = 'add-item';
  div.classList.add('clear');
  const form = document.createElement('form');
  form.id = 'new-task-form';
  form.action = '#';
  const text = document.createElement('input');
  text.id = 'newtask';
  text.name = 'newtask';
  text.classList.add('input-item');
  text.type = 'text';
  text.placeholder = 'Add to your list...';
  text.required = true;
  form.appendChild(text);
  const submit = document.createElement('input');
  submit.id = 'submit-new-task';
  submit.classList.add('input-item', 'fas', 'fa-level-down-alt');
  submit.style.rotate = '90deg';
  submit.style.fontSize = '18px';
  submit.type = 'submit';
  submit.tabIndex = -1;
  submit.value = '';
  submit.title = 'click this or press enter to submit';
  const btndiv = document.createElement('div');
  btndiv.id = 'add-btn-wrap';
  btndiv.classList.add('refresh');
  btndiv.appendChild(submit);
  form.appendChild(btndiv);
  div.appendChild(form);
  return div;
};

const removeSelected = () => {
  const div = document.createElement('div');
  div.id = 'remove-item';
  const button = document.createElement('button');
  button.classList.add('remove-selected');
  button.type = 'button';
  button.innerText = 'Clear all completed';
  div.appendChild(button);
  return div;
};

const lists = () => {
  const lists = document.createElement('div');
  lists.classList.add('list');
  lists.appendChild(addItem());
  lists.appendChild((0,_todolist_js__WEBPACK_IMPORTED_MODULE_0__.itemList)());
  lists.appendChild(removeSelected());
  return lists;
};

const mainList = () => {
  const mainList = document.createElement('div');
  mainList.classList.add('main-list');
  mainList.appendChild(listHead());
  mainList.appendChild(lists());
  return mainList;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainList);

/***/ }),

/***/ 136:
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "completeTask": () => (/* binding */ completeTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "displayTaskList": () => (/* binding */ displayTaskList),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "itemList": () => (/* binding */ itemList)
/* harmony export */ });
// import '@fortawesome/fontawesome-free/js/all.js';

let taskList = [];

const addNewTask = (description) => {
  const task = {};
  task.description = description;
  task.completed = false;
  if (taskList !== null) {
    task.index = taskList.length + 1;
  } else {
    task.index = 1;
  }
  taskList.push(task);
  localStorage.setItem('todolist', JSON.stringify(taskList));
};

function deleteTask(index) {
  const newList = taskList.filter((a) => {
    if (a.index !== index) {
      if (a.index > index) { a.index -= 1; } return a;
    }
    return false;
  });
  taskList = newList;
  localStorage.setItem('todolist', JSON.stringify(taskList));
}

const editTask = (description, index) => {
  const newList = taskList.filter((a) => {
    if (a.index === index) { a.description = description; return a; }
    return a;
  });
  taskList = newList;
  localStorage.setItem('todolist', JSON.stringify(taskList));
};

function displayTaskList() {
  if (localStorage.getItem('todolist') !== null) {
    const newList = JSON.parse(localStorage.getItem('todolist') || []);
    taskList = newList;
    taskList = taskList.filter((a) => {
      if (a.completed !== true) { return a; }
      return 0;
    });
  }
}

const itemList = () => {
  const itemdiv = document.createElement('div');
  itemdiv.id = 'item-list';
  displayTaskList();
  taskList.forEach((task) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('span');
    const refresh = document.createElement('div');
    const remove = document.createElement('i');
    div.classList.add('clear', 'todo', 'task-color-white');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.name = task.index;
    div.appendChild(checkbox);
    label.classList.add('desription');
    label.innerText = `${task.description}`;
    label.name = task.index;
    div.appendChild(label);
    refresh.classList.add('refresh');
    remove.classList.add('fas', 'fa-ellipsis-v');
    refresh.name = task.index;
    refresh.appendChild(remove);
    div.appendChild(refresh);
    itemdiv.appendChild(div);
  });
  return itemdiv;
};

const completeTask = (index) => {
  const newList = taskList.filter((a) => {
    if (a.index === index) { a.completed = true; return a; }
    return a;
  });
  taskList = newList;
  localStorage.setItem('todolist', JSON.stringify(taskList));
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9sb2FkbGlzdC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3RvZG9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0x1Y2lkYSBHcmFuZGUnLCB0YWhvbWEsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjJmNTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgcGFkZGluZzogMjBweCA1JTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmcgMzAwbXMgZWFzZS1pbi1vdXQsIG1heC1oZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDMwMG1zIGVhc2UtaW4tb3V0LCBtYXgtaGVpZ2h0IDUwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZSB7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMHM7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDBzO1xcclxcbiAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1saXN0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjJweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaGVhZCBoMiB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDQ2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5mYXMsXFxyXFxuLmZhciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5jb2xvci1ncmVlbjpob3ZlciB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWl0ZW0sXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWl0ZW0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbi8qICNhZGQtYnRuLXdyYXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0NnB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy10YXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtbmV3LXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtaXRlbSB7XFxyXFxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDhweCA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1pdGVtIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHggMCAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbiNhZGQtaXRlbSBpbnB1dFt0eXBlPXRleHRdOjphZnRlciB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qIC50b2RvLnVpLXNvcnRhYmxlLWhlbHBlciB7XFxyXFxuICBib3JkZXItYm90dG9tOm5vbmU7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjk4KTtcXHJcXG4gIHRyYW5zZm9ybTpzY2FsZSgwLjk4KTtcXHJcXG4gIG9wYWNpdHk6OTU7XFxyXFxuICBib3JkZXI6MXB4IHNvbGlkICMyZThhZTY7XFxyXFxuICBib3JkZXItcmFkaXVzOjJweDtcXHJcXG4gIHotaW5kZXg6MTAwMDAwO1xcclxcbiAgYm94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwwLjM1KTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29sb3ItcGluayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNGViO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb2xvci13aGl0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6OmJlZm9yZSxcXHJcXG4uY2xlYXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6OmFmdGVyIHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjYzFjMWMzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIG1hcmdpbjogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5kZXNyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3JpcHRpb246Zm9jdXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4udG9kbyAuZGVzdHJveSB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEuNHJlbTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyAubW92ZSB7XFxyXFxuICBvcGFjaXR5OiAuMjtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTNlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufSAqL1xcclxcblxcclxcbi5yZW1vdmUtc2VsZWN0ZWQge1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtc2VsZWN0ZWQ6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWlucHV0IHtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJd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WCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7O0FBRUg7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnTHVjaWRhIEdyYW5kZScsIHRhaG9tYSwgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMmY1O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3QtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDUlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogcGFkZGluZyAzMDBtcyBlYXNlLWluLW91dCwgbWF4LWhlaWdodCA1MDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMzAwbXMgZWFzZS1pbi1vdXQsIG1heC1oZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwcztcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMHM7XFxyXFxuICBtYXgtaGVpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxpc3Qge1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1oZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1oZWFkIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogNDZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmZhcyxcXHJcXG4uZmFyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG9yLWdyZWVuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtaXRlbSxcXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtaXRlbSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogI2FkZC1idG4td3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQ2cHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufSAqL1xcclxcblxcclxcbiNzdWJtaXQtbmV3LXRhc2sge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctdGFzazpob3ZlciB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1pdGVtIHtcXHJcXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogOHB4IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWl0ZW0gaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweCAwIDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1pdGVtIGlucHV0W3R5cGU9dGV4dF06OmFmdGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLnRvZG8udWktc29ydGFibGUtaGVscGVyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206bm9uZTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuOTgpO1xcclxcbiAgdHJhbnNmb3JtOnNjYWxlKDAuOTgpO1xcclxcbiAgb3BhY2l0eTo5NTtcXHJcXG4gIGJvcmRlcjoxcHggc29saWQgIzJlOGFlNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6MnB4O1xcclxcbiAgei1pbmRleDoxMDAwMDA7XFxyXFxuICBib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMzUpO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb2xvci1waW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY0ZWI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbG9yLXdoaXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcjo6YmVmb3JlLFxcclxcbi5jbGVhcjo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcjo6YWZ0ZXIge1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNjMWMxYzM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgbWFyZ2luOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzcmlwdGlvbjpmb2N1cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbi50b2RvIC5kZXN0cm95IHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMS40cmVtO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMCAwLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0b3A6IDA7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvIC5tb3ZlIHtcXHJcXG4gIG9wYWNpdHk6IC4yO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtM2VtO1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnJlbW92ZS1zZWxlY3RlZCB7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1zZWxlY3RlZDpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtaW5wdXQge1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXNpemU6IDEuMDVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJlcnJvclwiICovXG4vKiBlc2xpbnQgbm8tdW5zYWZlLW9wdGlvbmFsLWNoYWluaW5nOiBbXCJlcnJvclwiLCB7IFwiZGlzYWxsb3dBcml0aG1ldGljT3BlcmF0b3JzXCI6IGZhbHNlIH1dICovXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgYWRkTmV3VGFzaywgZGVsZXRlVGFzaywgZWRpdFRhc2ssIGRpc3BsYXlUYXNrTGlzdCwgY29tcGxldGVUYXNrLFxufSBmcm9tICcuL3RvZG9saXN0LmpzJztcbmltcG9ydCBtYWluTGlzdCBmcm9tICcuL2xvYWRsaXN0LmpzJztcbi8vIGltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcblxubGV0IG5ld0Rlc2NyaXB0aW9uID0gJyc7XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tEZXNjcmlwdGlvbihhID0gJycpIHtcbiAgbmV3RGVzY3JpcHRpb24gPSBhO1xufVxuXG5mdW5jdGlvbiBnZXROZXdUYXNrRGVzY3JpcHRpb24oKSB7XG4gIHJldHVybiBuZXdEZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gbGlzdENvbnRhaW5lcigpIHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0Q29udGFpbmVyLmlkID0gJ2xpc3QtY29udGFpbmVyJztcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnLCAnY29tcGxldGUnKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTGlzdCgpKTtcbiAgcmV0dXJuIGxpc3RDb250YWluZXI7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcigpKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1mb3JtJyk7XG5jb25zdCBhZGROZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LW5ldy10YXNrJyk7XG5jb25zdCBzZWxlY3RUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tbGlzdCcpO1xuY29uc3QgdGFza0Rlc2NyaXB0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzcmlwdGlvbicpO1xuY29uc3QgcmVmcmVzaExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1oZWFkJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3Rhc2snKS52YWx1ZSAhPT0gJycpIHtcbiAgICBhZGROZXdUYXNrKGZvcm0uZWxlbWVudHMubmV3dGFzay52YWx1ZSk7XG4gIH1cbiAgZGlzcGxheVRhc2tMaXN0KCk7XG59KTtcblxuYWRkTmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3Rhc2snKS52YWx1ZSAhPT0gJycpIHtcbiAgICBhZGROZXdUYXNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXd0YXNrJykudmFsdWUpO1xuICB9XG4gIGRpc3BsYXlUYXNrTGlzdCgpO1xufSk7XG5cbnNlbGVjdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS10cmFzaC1jYW4nKSkge1xuICAgIGNvbnN0IG5vZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgY29uc3QgZGl2ID0gbm9kLnBhcmVudEVsZW1lbnQ7XG4gICAgZGVsZXRlVGFzayhwYXJzZUludChub2QubmFtZSwgMTApKTtcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Rlc2NyaXB0b24ubGVuZ3RoOyBpICs9IDEpIHtcbiAgdGFza0Rlc2NyaXB0b25baV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbG9yLXBpbmsnKTtcbiAgICBjb25zdCB0cmFzaENhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10cmFzaC1jYW4nKTtcbiAgICBjb25zdCBjaGVjayA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBjb25zdCBub2RlTGlzdCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgW3JlbW92ZV0gPSBub2RlTGlzdDtcbiAgICBpZiAobGFiZWwgIT09IG51bGwpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29sb3ItcGluaycpO1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndGFzay1jb2xvci13aGl0ZScpO1xuICAgIH1cbiAgICBpZiAodHJhc2hDYW4gIT09IG51bGwpIHtcbiAgICAgIHRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xuICAgICAgdHJhc2hDYW4uY2xhc3NMaXN0LnJlbW92ZSgnZmFyJywgJ2ZhLXRyYXNoLWFsdCcpO1xuICAgIH1cbiAgICBpZiAoY2hlY2sgIT09IG51bGwpIHtcbiAgICAgIGNoZWNrLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb2xvci13aGl0ZScpO1xuICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbG9yLXBpbmsnKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgnZmFyJywgJ2ZhLXRyYXNoLWFsdCcpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb24nKTtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH07XG5cbiAgdGFza0Rlc2NyaXB0b25baV0ub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjaGFuZ2VUYXNrRGVzY3JpcHRpb24odGhpcy5pbm5lclRleHQpO1xuICB9O1xuXG4gIHRhc2tEZXNjcmlwdG9uW2ldLm9uYmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZ2V0TmV3VGFza0Rlc2NyaXB0aW9uKCkgIT09ICcnKSB7XG4gICAgICBlZGl0VGFzayhnZXROZXdUYXNrRGVzY3JpcHRpb24oKSwgcGFyc2VJbnQodGhpcy5uYW1lLCAxMCkpO1xuICAgICAgY2hhbmdlVGFza0Rlc2NyaXB0aW9uKCk7XG4gICAgfVxuICB9O1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29sb3ItcGluaycpO1xuICBjb25zdCB0cmFzaENhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10cmFzaC1jYW4nKTtcbiAgaWYgKGRpdiAhPT0gbnVsbCkge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbG9yLXBpbmsnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1jb2xvci13aGl0ZScpO1xuICB9XG4gIGlmICh0cmFzaENhbiAhPT0gbnVsbCkge1xuICAgIHRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xuICAgIHRyYXNoQ2FuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcicsICdmYS10cmFzaC1hbHQnKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtaXRlbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb2xvci1waW5rJyk7XG4gIGlmIChkaXYgIT09IG51bGwpIHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb2xvci1waW5rJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29sb3Itd2hpdGUnKTtcbiAgfVxufSk7XG5cbnJlZnJlc2hMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtcm90YXRlJykpIHtcbiAgICBkaXNwbGF5VGFza0xpc3QoKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gIGNoZWNrW2ldLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHRyYXNoQ2FuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRyYXNoLWNhbicpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb2xvci1waW5rJyk7XG4gICAgaWYgKHRyYXNoQ2FuICE9PSBudWxsKSB7XG4gICAgICB0cmFzaENhbi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcbiAgICAgIHRyYXNoQ2FuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcicsICdmYS10cmFzaC1hbHQnKTtcbiAgICB9XG5cbiAgICBpZiAoc3BhbiAhPT0gbnVsbCkge1xuICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbG9yLXBpbmsnKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndGFzay1jb2xvci13aGl0ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1pdGVtJyk7XG5yZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHRleHRpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICBjb25zdCBlbXB0eSA9IFtdLmZpbHRlci5jYWxsKHRleHRpbnB1dHMsIChlbCkgPT4gZWwuY2hlY2tlZCk7XG4gIGVtcHR5LmZvckVhY2goKGUpID0+IHtcbiAgICBjb21wbGV0ZVRhc2socGFyc2VJbnQoZS5uYW1lLCAxMCkpO1xuICB9KTtcbiAgZGlzcGxheVRhc2tMaXN0KCk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIiwiaW1wb3J0IHtcbiAgaXRlbUxpc3QsXG59IGZyb20gJy4vdG9kb2xpc3QuanMnO1xuXG5jb25zdCBsaXN0SGVhZCA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pZCA9ICdsaXN0LWhlYWQnO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnbGlzdC1oZWFkJyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuaW5uZXJUZXh0ID0gJ1RvZGF5XFwncyBUbyBEbyc7XG4gIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVmcmVzaC5jbGFzc0xpc3QuYWRkKCdyZWZyZXNoJyk7XG4gIGNvbnN0IGJ0blJlZnJlc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGJ0blJlZnJlc2guY2xhc3NMaXN0LmFkZCgnY29sb3ItZ3JlZW4nLCAnZmFzJywgJ2ZhLXN5bmMtYWx0Jyk7XG4gIHJlZnJlc2guYXBwZW5kQ2hpbGQoYnRuUmVmcmVzaCk7XG4gIGRpdi5hcHBlbmRDaGlsZChyZWZyZXNoKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaWQgPSAnYWRkLWl0ZW0nO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnY2xlYXInKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5pZCA9ICduZXctdGFzay1mb3JtJztcbiAgZm9ybS5hY3Rpb24gPSAnIyc7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0ZXh0LmlkID0gJ25ld3Rhc2snO1xuICB0ZXh0Lm5hbWUgPSAnbmV3dGFzayc7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtaXRlbScpO1xuICB0ZXh0LnR5cGUgPSAndGV4dCc7XG4gIHRleHQucGxhY2Vob2xkZXIgPSAnQWRkIHRvIHlvdXIgbGlzdC4uLic7XG4gIHRleHQucmVxdWlyZWQgPSB0cnVlO1xuICBmb3JtLmFwcGVuZENoaWxkKHRleHQpO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXQuaWQgPSAnc3VibWl0LW5ldy10YXNrJztcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWl0ZW0nLCAnZmFzJywgJ2ZhLWxldmVsLWRvd24tYWx0Jyk7XG4gIHN1Ym1pdC5zdHlsZS5yb3RhdGUgPSAnOTBkZWcnO1xuICBzdWJtaXQuc3R5bGUuZm9udFNpemUgPSAnMThweCc7XG4gIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gIHN1Ym1pdC50YWJJbmRleCA9IC0xO1xuICBzdWJtaXQudmFsdWUgPSAnJztcbiAgc3VibWl0LnRpdGxlID0gJ2NsaWNrIHRoaXMgb3IgcHJlc3MgZW50ZXIgdG8gc3VibWl0JztcbiAgY29uc3QgYnRuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bmRpdi5pZCA9ICdhZGQtYnRuLXdyYXAnO1xuICBidG5kaXYuY2xhc3NMaXN0LmFkZCgncmVmcmVzaCcpO1xuICBidG5kaXYuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidG5kaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCByZW1vdmVTZWxlY3RlZCA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pZCA9ICdyZW1vdmUtaXRlbSc7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXNlbGVjdGVkJyk7XG4gIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSAnQ2xlYXIgYWxsIGNvbXBsZXRlZCc7XG4gIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgbGlzdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgbGlzdHMuYXBwZW5kQ2hpbGQoYWRkSXRlbSgpKTtcbiAgbGlzdHMuYXBwZW5kQ2hpbGQoaXRlbUxpc3QoKSk7XG4gIGxpc3RzLmFwcGVuZENoaWxkKHJlbW92ZVNlbGVjdGVkKCkpO1xuICByZXR1cm4gbGlzdHM7XG59O1xuXG5jb25zdCBtYWluTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkxpc3QuY2xhc3NMaXN0LmFkZCgnbWFpbi1saXN0Jyk7XG4gIG1haW5MaXN0LmFwcGVuZENoaWxkKGxpc3RIZWFkKCkpO1xuICBtYWluTGlzdC5hcHBlbmRDaGlsZChsaXN0cygpKTtcbiAgcmV0dXJuIG1haW5MaXN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbkxpc3Q7IiwiLy8gaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xuXG5sZXQgdGFza0xpc3QgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Rhc2sgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdGFzayA9IHt9O1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gIGlmICh0YXNrTGlzdCAhPT0gbnVsbCkge1xuICAgIHRhc2suaW5kZXggPSB0YXNrTGlzdC5sZW5ndGggKyAxO1xuICB9IGVsc2Uge1xuICAgIHRhc2suaW5kZXggPSAxO1xuICB9XG4gIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICBjb25zdCBuZXdMaXN0ID0gdGFza0xpc3QuZmlsdGVyKChhKSA9PiB7XG4gICAgaWYgKGEuaW5kZXggIT09IGluZGV4KSB7XG4gICAgICBpZiAoYS5pbmRleCA+IGluZGV4KSB7IGEuaW5kZXggLT0gMTsgfSByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgdGFza0xpc3QgPSBuZXdMaXN0O1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xufVxuXG5leHBvcnQgY29uc3QgZWRpdFRhc2sgPSAoZGVzY3JpcHRpb24sIGluZGV4KSA9PiB7XG4gIGNvbnN0IG5ld0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKGEpID0+IHtcbiAgICBpZiAoYS5pbmRleCA9PT0gaW5kZXgpIHsgYS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyByZXR1cm4gYTsgfVxuICAgIHJldHVybiBhO1xuICB9KTtcbiAgdGFza0xpc3QgPSBuZXdMaXN0O1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrTGlzdCgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvbGlzdCcpICE9PSBudWxsKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykgfHwgW10pO1xuICAgIHRhc2tMaXN0ID0gbmV3TGlzdDtcbiAgICB0YXNrTGlzdCA9IHRhc2tMaXN0LmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKGEuY29tcGxldGVkICE9PSB0cnVlKSB7IHJldHVybiBhOyB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaXRlbUxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbWRpdi5pZCA9ICdpdGVtLWxpc3QnO1xuICBkaXNwbGF5VGFza0xpc3QoKTtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCByZWZyZXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjbGVhcicsICd0b2RvJywgJ3Rhc2stY29sb3Itd2hpdGUnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94Lm5hbWUgPSB0YXNrLmluZGV4O1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZGVzcmlwdGlvbicpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICBsYWJlbC5uYW1lID0gdGFzay5pbmRleDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJlZnJlc2guY2xhc3NMaXN0LmFkZCgncmVmcmVzaCcpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtZWxsaXBzaXMtdicpO1xuICAgIHJlZnJlc2gubmFtZSA9IHRhc2suaW5kZXg7XG4gICAgcmVmcmVzaC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChyZWZyZXNoKTtcbiAgICBpdGVtZGl2LmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xuICByZXR1cm4gaXRlbWRpdjtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgbmV3TGlzdCA9IHRhc2tMaXN0LmZpbHRlcigoYSkgPT4ge1xuICAgIGlmIChhLmluZGV4ID09PSBpbmRleCkgeyBhLmNvbXBsZXRlZCA9IHRydWU7IHJldHVybiBhOyB9XG4gICAgcmV0dXJuIGE7XG4gIH0pO1xuICB0YXNrTGlzdCA9IG5ld0xpc3Q7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9