/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\\r\\n  background: #f1f2f5;\\r\\n  text-align: center;\\r\\n  font-weight: 300;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#list-container {\\r\\n  width: 60%;\\r\\n  padding: 20px 5%;\\r\\n  height: auto;\\r\\n  overflow: hidden;\\r\\n  cursor: pointer;\\r\\n  -webkit-transition: padding 300ms ease-in-out, max-height 500ms ease-in-out;\\r\\n  transition: padding 300ms ease-in-out, max-height 500ms ease-in-out;\\r\\n  -webkit-transform: translate3d(0, 0, 0);\\r\\n  transform: translate3d(0, 0, 0);\\r\\n  -webkit-perspective: 1000px;\\r\\n  perspective: 1000px;\\r\\n}\\r\\n\\r\\n.complete {\\r\\n  -webkit-transition: max-height 0s;\\r\\n  transition: max-height 0s;\\r\\n  max-height: none;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  cursor: auto;\\r\\n  max-height: 1000px;\\r\\n  padding-top: 0;\\r\\n  padding-bottom: 0;\\r\\n}\\r\\n\\r\\n.main-list {\\r\\n  border-radius: 3px;\\r\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\r\\n  margin: 0 auto;\\r\\n  top: 0;\\r\\n  max-width: 500px;\\r\\n  width: 100%;\\r\\n  text-align: left;\\r\\n  position: relative;\\r\\n  padding-bottom: 1px;\\r\\n}\\r\\n\\r\\n.list-head {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-left: 22px;\\r\\n  height: 50px;\\r\\n  background: #fff;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n.list-head h2 {\\r\\n  font-size: 18px;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.refresh {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  right: 0;\\r\\n  height: 100%;\\r\\n  width: 46px;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  vertical-align: middle;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.fas,\\r\\n.far {\\r\\n  display: block;\\r\\n  margin: auto;\\r\\n  height: 50px;\\r\\n  line-height: 50px;\\r\\n  font-size: 18px;\\r\\n  opacity: 0.5;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.color-green:hover {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  position: relative;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n#add-item,\\r\\nform {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0;\\r\\n  background: white;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#add-item {\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n/* #add-btn-wrap {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 46px;\\r\\n  padding: 0;\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border: none;\\r\\n} */\\r\\n\\r\\n#submit-new-task {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  z-index: 0;\\r\\n  width: 18px;\\r\\n  height: 18px;\\r\\n  cursor: pointer;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n#submit-new-task:hover {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.input-item {\\r\\n  border: none !important;\\r\\n  outline: none;\\r\\n  background: transparent;\\r\\n  box-shadow: none;\\r\\n  overflow: hidden;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n  padding: 8px 5px;\\r\\n  border: 1px solid #ddd;\\r\\n  line-height: 20px;\\r\\n  height: 20px;\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  appearance: none;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n#add-item input[type=text] {\\r\\n  width: 100%;\\r\\n  padding: 0 40px 0 1rem;\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#add-item input[type=text]::after {\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n/* .todo.ui-sortable-helper {\\r\\n  border-bottom:none;\\r\\n  -webkit-transform:scale(0.98);\\r\\n  transform:scale(0.98);\\r\\n  opacity:95;\\r\\n  border:1px solid #2e8ae6;\\r\\n  border-radius:2px;\\r\\n  z-index:100000;\\r\\n  box-shadow:0 1px 3px rgba(0,0,0,0.35);\\r\\n} */\\r\\n\\r\\n.todo {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  height: 50px;\\r\\n  padding: 0;\\r\\n  font-size: 1rem;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n  font-weight: 300;\\r\\n  -webkit-transition: background-color 200ms linear;\\r\\n  transition: background-color 200ms linear;\\r\\n  -webkit-transform: translate3d(0, 0, 0);\\r\\n  transform: translate3d(0, 0, 0);\\r\\n  -webkit-backface-visibility: hidden;\\r\\n  backface-visibility: hidden;\\r\\n  -webkit-perspective: 1000px;\\r\\n  perspective: 1000px;\\r\\n}\\r\\n\\r\\n.task-color-pink {\\r\\n  background-color: #faf4eb;\\r\\n}\\r\\n\\r\\n.task-color-white {\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.clear::before,\\r\\n.clear::after {\\r\\n  content: \\\" \\\";\\r\\n  display: table;\\r\\n}\\r\\n\\r\\n.clear::after {\\r\\n  clear: both;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  background-color: transparent;\\r\\n  border: 4px solid #c1c1c3;\\r\\n  cursor: pointer;\\r\\n  float: left;\\r\\n  height: 16px;\\r\\n  width: 16px;\\r\\n  border-radius: 2px;\\r\\n  margin: 17px;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.desription {\\r\\n  width: 100%;\\r\\n  padding: 15px 0;\\r\\n  line-height: 20px;\\r\\n  display: block;\\r\\n  font-size: 1em;\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.desription:focus {\\r\\n  width: 100%;\\r\\n  padding: 15px 0;\\r\\n  line-height: 20px;\\r\\n  word-wrap: break-word;\\r\\n  display: block;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/*\\r\\n.todo .destroy {\\r\\n  opacity: 0.5;\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  width: 1.4rem;\\r\\n  height: 50px;\\r\\n  padding: 0 0.25rem;\\r\\n  margin: 0 0.5rem;\\r\\n  cursor: pointer;\\r\\n  overflow: hidden;\\r\\n  top: 0;\\r\\n  color: #333;\\r\\n  right: 0;\\r\\n  -webkit-transition: all 200ms ease-in-out;\\r\\n  transition: all 200ms ease-in-out;\\r\\n}\\r\\n\\r\\n.todo .move {\\r\\n  opacity: .2;\\r\\n  float: right;\\r\\n  margin-right: -3em;\\r\\n  padding: 0 0.5rem;\\r\\n  height: 50px;\\r\\n  line-height: 0;\\r\\n  cursor: move;\\r\\n} */\\r\\n\\r\\n.remove-selected {\\r\\n  -moz-appearance: none;\\r\\n  -webkit-appearance: none;\\r\\n  appearance: none;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  margin: 1rem auto;\\r\\n  display: block;\\r\\n  color: #000;\\r\\n  font-size: 1em;\\r\\n  font-weight: 300;\\r\\n  width: 100%;\\r\\n  cursor: pointer;\\r\\n  line-height: 20px;\\r\\n  word-wrap: break-word;\\r\\n}\\r\\n\\r\\n.remove-selected:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.edit-input {\\r\\n  -moz-appearance: none;\\r\\n  -webkit-appearance: none;\\r\\n  appearance: none;\\r\\n  margin: auto;\\r\\n  display: block;\\r\\n  color: #000;\\r\\n  font-size: 1.05em;\\r\\n  font-weight: 300;\\r\\n  width: 100%;\\r\\n  padding-top: 15px;\\r\\n  line-height: 20px;\\r\\n  border: none !important;\\r\\n  outline: none;\\r\\n  background: transparent;\\r\\n  box-shadow: none;\\r\\n  overflow: hidden;\\r\\n  resize: none;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://new-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://new-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://new-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://new-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://new-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://new-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://new-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://new-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://new-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist.js */ \"./src/todolist.js\");\n/* harmony import */ var _loadlist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadlist.js */ \"./src/loadlist.js\");\n/* eslint no-unsafe-optional-chaining: [\"error\", { \"disallowArithmeticOperators\": false }] */\n\n\n\n\n\n\nlet newDescription = '';\n\nfunction changeTaskDescription(a = '') {\n  newDescription = a;\n}\n\nfunction getNewTaskDescription() {\n  return newDescription;\n}\n\nfunction component() {\n  const element = document.createElement('div');\n  element.id = 'list-container';\n  element.classList.add('active', 'complete');\n  element.appendChild((0,_loadlist_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  return element;\n}\n\ndocument.body.appendChild(component());\n\nconst form = document.getElementById('new-task-form');\nconst addNewButton = document.querySelector('#submit-new-task');\nconst selectTask = document.querySelector('#item-list');\nconst taskDescripton = document.querySelectorAll('.desription');\nconst refreshList = document.querySelector('#list-head');\n\nform.addEventListener('submit', () => {\n  if (document.getElementById('newtask').value !== '') {\n    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__.addNewTask)(form.elements.newtask.value);\n  }\n  (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__.displayTaskList)();\n});\n\n// addNewButton.addEventListener('click', () => {\n//   if (document.getElementById('newtask').value !== '') {\n//     addNewTask(document.getElementById('newtask').value);\n//   }\n//   displayTaskList();\n// });\n\nselectTask.addEventListener('click', (e) => {\n  if (e.target.classList.contains('fa-trash-can')) {\n    const nod = e.target.parentNode;\n    const div = nod.parentElement;\n    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(parseInt(nod.name, 10));\n    div.style.display = 'none';\n  }\n});\n\nfor (let i = 0; i < taskDescripton.length; i += 1) {\n  taskDescripton[i].onclick = function () {\n    const label = document.querySelector('.task-color-pink');\n    const trashCan = document.querySelector('.fa-trash-can');\n    const check = this.previousElementSibling;\n    const nodeList = this.nextElementSibling.childNodes;\n    const [remove] = nodeList;\n    if (label !== null) {\n      label.classList.remove('task-color-pink');\n      label.classList.add('task-color-white');\n    }\n    if (trashCan !== null) {\n      trashCan.classList.add('fas', 'fa-ellipsis-vertical');\n      trashCan.classList.remove('far', 'fa-trash-alt');\n    }\n    if (check !== null) {\n      check.checked = false;\n      this.classList.remove('checked');\n    }\n    this.parentNode.classList.remove('task-color-white');\n    this.parentNode.classList.add('task-color-pink');\n    remove.classList.add('far', 'fa-trash-alt');\n    this.setAttribute('contenteditable', 'true');\n    this.setAttribute('autocomplete', 'on');\n    this.focus();\n  };\n\n  taskDescripton[i].oninput = function () {\n    changeTaskDescription(this.innerText);\n  };\n\n  taskDescripton[i].onblur = function () {\n    if (getNewTaskDescription() !== '') {\n      (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__.editTask)(getNewTaskDescription(), parseInt(this.name, 10));\n      changeTaskDescription();\n    }\n  };\n}\n\ndocument.querySelector('#add-item').addEventListener('click', () => {\n  const div = document.querySelector('.task-color-pink');\n  const trashCan = document.querySelector('.fa-trash-can');\n  if (div !== null) {\n    div.classList.remove('task-color-pink');\n    div.classList.add('task-color-white');\n  }\n  if (trashCan !== null) {\n    trashCan.classList.add('fas', 'fa-ellipsis-vertical');\n    trashCan.classList.remove('far', 'fa-trash-alt');\n  }\n});\n\ndocument.querySelector('#remove-item').addEventListener('click', () => {\n  const div = document.querySelector('.task-color-pink');\n  if (div !== null) {\n    div.classList.remove('task-color-pink');\n    div.classList.add('task-color-white');\n  }\n});\n\nrefreshList.addEventListener('click', (e) => {\n  if (e.target.classList.contains('fa-rotate')) {\n    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__.displayTaskList)();\n    window.location.reload();\n  }\n});\n\nconst check = document.querySelectorAll('input[type=checkbox]');\nfor (let i = 0; i < check.length; i += 1) {\n  check[i].onchange = function () {\n    const div = this.nextElementSibling;\n    const trashCan = document.querySelector('.fa-trash-can');\n    const span = document.querySelector('.task-color-pink');\n    if (trashCan !== null) {\n      trashCan.classList.add('fas', 'fa-ellipsis-vertical');\n      trashCan.classList.remove('far', 'fa-trash-alt');\n    }\n\n    if (span !== null) {\n      span.classList.remove('task-color-pink');\n      span.classList.add('task-color-white');\n    }\n    if (this.checked === true) {\n      div.classList.add('checked');\n    } else {\n      div.classList.remove('checked');\n    }\n  };\n}\n\nconst remove = document.getElementById('remove-item');\nremove.addEventListener('click', () => {\n  const textinputs = document.querySelectorAll('input[type=checkbox]');\n  const empty = [].filter.call(textinputs, (el) => el.checked);\n  empty.forEach((e) => {\n    (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__.completeTask)(parseInt(e.name, 10));\n  });\n  (0,_todolist_js__WEBPACK_IMPORTED_MODULE_2__.displayTaskList)();\n  window.location.reload();\n});\n\n\n//# sourceURL=webpack://new-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/loadlist.js":
/*!*************************!*\
  !*** ./src/loadlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ \"./src/todolist.js\");\n\n\nconst listHead = () => {\n  const div = document.createElement('div');\n  div.id = 'list-head';\n  div.classList.add('list-head');\n  const h2 = document.createElement('h2');\n  h2.innerText = 'Today\\'s To Do';\n  div.appendChild(h2);\n  const refresh = document.createElement('div');\n  refresh.classList.add('refresh');\n  const btnRefresh = document.createElement('i');\n  btnRefresh.classList.add('color-green', 'fas', 'fa-sync-alt');\n  refresh.appendChild(btnRefresh);\n  div.appendChild(refresh);\n  return div;\n};\n\nconst addItem = () => {\n  const div = document.createElement('div');\n  div.id = 'add-item';\n  div.classList.add('clear');\n  const form = document.createElement('form');\n  form.id = 'new-task-form';\n  form.action = '#';\n  const text = document.createElement('input');\n  text.id = 'newtask';\n  text.name = 'newtask';\n  text.classList.add('input-item');\n  text.type = 'text';\n  text.placeholder = 'Add to your list...';\n  text.required = true;\n  form.appendChild(text);\n  const submit = document.createElement('input');\n  submit.id = 'submit-new-task';\n  submit.classList.add('input-item', 'fas', 'fa-level-down-alt');\n  submit.style.rotate = '90deg';\n  submit.style.fontSize = '18px';\n  submit.type = 'submit';\n  submit.tabIndex = -1;\n  submit.value = '';\n  submit.title = 'click this or press enter to submit';\n  const btndiv = document.createElement('div');\n  btndiv.id = 'add-btn-wrap';\n  btndiv.classList.add('refresh');\n  btndiv.appendChild(submit);\n  form.appendChild(btndiv);\n  div.appendChild(form);\n  return div;\n};\n\nconst removeSelected = () => {\n  const div = document.createElement('div');\n  div.id = 'remove-item';\n  const button = document.createElement('button');\n  button.classList.add('remove-selected');\n  button.type = 'button';\n  button.innerText = 'Clear all completed';\n  div.appendChild(button);\n  return div;\n};\n\nconst lists = () => {\n  const lists = document.createElement('div');\n  lists.classList.add('list');\n  lists.appendChild(addItem());\n  lists.appendChild((0,_todolist_js__WEBPACK_IMPORTED_MODULE_0__.itemList)());\n  lists.appendChild(removeSelected());\n  return lists;\n};\n\nconst mainList = () => {\n  const mainList = document.createElement('div');\n  mainList.classList.add('main-list');\n  mainList.appendChild(listHead());\n  mainList.appendChild(lists());\n  return mainList;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainList);\n\n//# sourceURL=webpack://new-todo-list/./src/loadlist.js?");

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewTask\": () => (/* binding */ addNewTask),\n/* harmony export */   \"completeTask\": () => (/* binding */ completeTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"displayTaskList\": () => (/* binding */ displayTaskList),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"itemList\": () => (/* binding */ itemList)\n/* harmony export */ });\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet taskList = [];\n\nconst addNewTask = (description) => {\n  const task = {};\n  task.description = description;\n  task.completed = false;\n  if (taskList !== null) {\n    task.index = taskList.length + 1;\n  } else {\n    task.index = 1;\n  }\n  taskList.push(task);\n  localStorage.setItem('todolist', JSON.stringify(taskList));\n};\n\nfunction deleteTask(index) {\n  const newList = taskList.filter((a) => {\n    if (a.index !== index) {\n      if (a.index > index) { a.index -= 1; } return a;\n    }\n    return false;\n  });\n  taskList = newList;\n  localStorage.setItem('todolist', JSON.stringify(taskList));\n}\n\nconst editTask = (description, index) => {\n  const newList = taskList.filter((a) => {\n    if (a.index === index) { a.description = description; return a; }\n    return a;\n  });\n  taskList = newList;\n  localStorage.setItem('todolist', JSON.stringify(taskList));\n};\n\nfunction displayTaskList() {\n  if (localStorage.getItem('todolist') !== null) {\n    const newList = JSON.parse(localStorage.getItem('todolist') || []);\n    taskList = newList;\n    taskList = taskList.filter((a) => {\n      if (a.completed !== true) { return a; }\n      return 0;\n    });\n  }\n}\n\nconst itemList = () => {\n  const itemdiv = document.createElement('div');\n  itemdiv.id = 'item-list';\n  displayTaskList();\n  taskList.forEach((task) => {\n    const div = document.createElement('div');\n    const checkbox = document.createElement('input');\n    const label = document.createElement('span');\n    const refresh = document.createElement('div');\n    const remove = document.createElement('i');\n    div.classList.add('clear', 'todo', 'task-color-white');\n    checkbox.type = 'checkbox';\n    checkbox.classList.add('checkbox');\n    checkbox.name = task.index;\n    div.appendChild(checkbox);\n    label.classList.add('desription');\n    label.innerText = `${task.description}`;\n    label.name = task.index;\n    div.appendChild(label);\n    refresh.classList.add('refresh');\n    remove.classList.add('fas', 'fa-ellipsis-v');\n    refresh.name = task.index;\n    refresh.appendChild(remove);\n    div.appendChild(refresh);\n    itemdiv.appendChild(div);\n  });\n  return itemdiv;\n};\n\nconst completeTask = (index) => {\n  const newList = taskList.filter((a) => {\n    if (a.index === index) { a.completed = true; return a; }\n    return a;\n  });\n  taskList = newList;\n  localStorage.setItem('todolist', JSON.stringify(taskList));\n};\n\n\n//# sourceURL=webpack://new-todo-list/./src/todolist.js?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;