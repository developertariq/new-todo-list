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

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ 654);
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.js */ 136);
/* harmony import */ var _loadlist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadlist.js */ 511);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ 682);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_3__);
/* eslint no-unused-vars: "error" */
/* eslint no-unsafe-optional-chaining: ["error", { "disallowArithmeticOperators": false }] */






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
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ 682);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDZCQUE2QixvQkFBb0I7QUFDakQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvbG9hZGxpc3QuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy90b2RvbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdMdWNpZGEgR3JhbmRlJywgdGFob21hLCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYyZjU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNSU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBwYWRkaW5nIDMwMG1zIGVhc2UtaW4tb3V0LCBtYXgtaGVpZ2h0IDUwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAzMDBtcyBlYXNlLWluLW91dCwgbWF4LWhlaWdodCA1MDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUge1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDBzO1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwcztcXHJcXG4gIG1heC1oZWlnaHQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgY3Vyc29yOiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbGlzdCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIycHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWhlYWQgaDIge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA0NnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzLFxcclxcbi5mYXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3ItZ3JlZW46aG92ZXIge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1pdGVtLFxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1pdGVtIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjYWRkLWJ0bi13cmFwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDZweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuI3N1Ym1pdC1uZXctdGFzayB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWl0ZW0ge1xcclxcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA4cHggNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtaXRlbSBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCA0MHB4IDAgMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWl0ZW0gaW5wdXRbdHlwZT10ZXh0XTo6YWZ0ZXIge1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAudG9kby51aS1zb3J0YWJsZS1oZWxwZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC45OCk7XFxyXFxuICB0cmFuc2Zvcm06c2NhbGUoMC45OCk7XFxyXFxuICBvcGFjaXR5Ojk1O1xcclxcbiAgYm9yZGVyOjFweCBzb2xpZCAjMmU4YWU2O1xcclxcbiAgYm9yZGVyLXJhZGl1czoycHg7XFxyXFxuICB6LWluZGV4OjEwMDAwMDtcXHJcXG4gIGJveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsMC4zNSk7XFxyXFxufSAqL1xcclxcblxcclxcbi50b2RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbG9yLXBpbmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjRlYjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29sb3Itd2hpdGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyOjpiZWZvcmUsXFxyXFxuLmNsZWFyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyOjphZnRlciB7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2MxYzFjMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBtYXJnaW46IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzcmlwdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5kZXNyaXB0aW9uOmZvY3VzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLnRvZG8gLmRlc3Ryb3kge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxLjRyZW07XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDAuMjVyZW07XFxyXFxuICBtYXJnaW46IDAgMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gLm1vdmUge1xcclxcbiAgb3BhY2l0eTogLjI7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0zZW07XFxyXFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ucmVtb3ZlLXNlbGVjdGVkIHtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLXNlbGVjdGVkOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1pbnB1dCB7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZFQUE2RTtFQUM3RSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJFQUEyRTtFQUMzRSxtRUFBbUU7RUFDbkUsdUNBQXVDO0VBQ3ZDLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtFQUNqRCx5Q0FBeUM7RUFDekMsdUNBQXVDO0VBQ3ZDLCtCQUErQjtFQUMvQixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0x1Y2lkYSBHcmFuZGUnLCB0YWhvbWEsIHZlcmRhbmEsIGFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjJmNTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgcGFkZGluZzogMjBweCA1JTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmcgMzAwbXMgZWFzZS1pbi1vdXQsIG1heC1oZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDMwMG1zIGVhc2UtaW4tb3V0LCBtYXgtaGVpZ2h0IDUwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZSB7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMHM7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDBzO1xcclxcbiAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1saXN0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjJweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaGVhZCBoMiB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDQ2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5mYXMsXFxyXFxuLmZhciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5jb2xvci1ncmVlbjpob3ZlciB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWl0ZW0sXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWl0ZW0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbi8qICNhZGQtYnRuLXdyYXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0NnB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4jc3VibWl0LW5ldy10YXNrIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtbmV3LXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtaXRlbSB7XFxyXFxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDhweCA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1pdGVtIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHggMCAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbiNhZGQtaXRlbSBpbnB1dFt0eXBlPXRleHRdOjphZnRlciB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qIC50b2RvLnVpLXNvcnRhYmxlLWhlbHBlciB7XFxyXFxuICBib3JkZXItYm90dG9tOm5vbmU7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjk4KTtcXHJcXG4gIHRyYW5zZm9ybTpzY2FsZSgwLjk4KTtcXHJcXG4gIG9wYWNpdHk6OTU7XFxyXFxuICBib3JkZXI6MXB4IHNvbGlkICMyZThhZTY7XFxyXFxuICBib3JkZXItcmFkaXVzOjJweDtcXHJcXG4gIHotaW5kZXg6MTAwMDAwO1xcclxcbiAgYm94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwwLjM1KTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29sb3ItcGluayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNGViO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb2xvci13aGl0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6OmJlZm9yZSxcXHJcXG4uY2xlYXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6OmFmdGVyIHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjYzFjMWMzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIG1hcmdpbjogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5kZXNyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3JpcHRpb246Zm9jdXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4udG9kbyAuZGVzdHJveSB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEuNHJlbTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyAubW92ZSB7XFxyXFxuICBvcGFjaXR5OiAuMjtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTNlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufSAqL1xcclxcblxcclxcbi5yZW1vdmUtc2VsZWN0ZWQge1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtc2VsZWN0ZWQ6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWlucHV0IHtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcImVycm9yXCIgKi9cbi8qIGVzbGludCBuby11bnNhZmUtb3B0aW9uYWwtY2hhaW5pbmc6IFtcImVycm9yXCIsIHsgXCJkaXNhbGxvd0FyaXRobWV0aWNPcGVyYXRvcnNcIjogZmFsc2UgfV0gKi9cblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBhZGROZXdUYXNrLCBkZWxldGVUYXNrLCBlZGl0VGFzaywgZGlzcGxheVRhc2tMaXN0LCBjb21wbGV0ZVRhc2ssXG59IGZyb20gJy4vdG9kb2xpc3QuanMnO1xuaW1wb3J0IG1haW5MaXN0IGZyb20gJy4vbG9hZGxpc3QuanMnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xuXG5sZXQgbmV3RGVzY3JpcHRpb24gPSAnJztcblxuZnVuY3Rpb24gY2hhbmdlVGFza0Rlc2NyaXB0aW9uKGEgPSAnJykge1xuICBuZXdEZXNjcmlwdGlvbiA9IGE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld1Rhc2tEZXNjcmlwdGlvbigpIHtcbiAgcmV0dXJuIG5ld0Rlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBsaXN0Q29udGFpbmVyKCkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RDb250YWluZXIuaWQgPSAnbGlzdC1jb250YWluZXInO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScsICdjb21wbGV0ZScpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5MaXN0KCkpO1xuICByZXR1cm4gbGlzdENvbnRhaW5lcjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKCkpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLWZvcm0nKTtcbmNvbnN0IGFkZE5ld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtbmV3LXRhc2snKTtcbmNvbnN0IHNlbGVjdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1saXN0Jyk7XG5jb25zdCB0YXNrRGVzY3JpcHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNyaXB0aW9uJyk7XG5jb25zdCByZWZyZXNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LWhlYWQnKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3dGFzaycpLnZhbHVlICE9PSAnJykge1xuICAgIGFkZE5ld1Rhc2soZm9ybS5lbGVtZW50cy5uZXd0YXNrLnZhbHVlKTtcbiAgfVxuICBkaXNwbGF5VGFza0xpc3QoKTtcbn0pO1xuXG5hZGROZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3dGFzaycpLnZhbHVlICE9PSAnJykge1xuICAgIGFkZE5ld1Rhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3Rhc2snKS52YWx1ZSk7XG4gIH1cbiAgZGlzcGxheVRhc2tMaXN0KCk7XG59KTtcblxuc2VsZWN0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWNhbicpKSB7XG4gICAgY29uc3Qgbm9kID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBkaXYgPSBub2QucGFyZW50RWxlbWVudDtcbiAgICBkZWxldGVUYXNrKHBhcnNlSW50KG5vZC5uYW1lLCAxMCkpO1xuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrRGVzY3JpcHRvbi5sZW5ndGg7IGkgKz0gMSkge1xuICB0YXNrRGVzY3JpcHRvbltpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29sb3ItcGluaycpO1xuICAgIGNvbnN0IHRyYXNoQ2FuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRyYXNoLWNhbicpO1xuICAgIGNvbnN0IGNoZWNrID0gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IG5vZGVMaXN0ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGROb2RlcztcbiAgICBjb25zdCBbcmVtb3ZlXSA9IG5vZGVMaXN0O1xuICAgIGlmIChsYWJlbCAhPT0gbnVsbCkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb2xvci1waW5rJyk7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbG9yLXdoaXRlJyk7XG4gICAgfVxuICAgIGlmICh0cmFzaENhbiAhPT0gbnVsbCkge1xuICAgICAgdHJhc2hDYW4uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XG4gICAgICB0cmFzaENhbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXInLCAnZmEtdHJhc2gtYWx0Jyk7XG4gICAgfVxuICAgIGlmIChjaGVjayAhPT0gbnVsbCkge1xuICAgICAgY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbG9yLXdoaXRlJyk7XG4gICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29sb3ItcGluaycpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtdHJhc2gtYWx0Jyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvbicpO1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfTtcblxuICB0YXNrRGVzY3JpcHRvbltpXS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5nZVRhc2tEZXNjcmlwdGlvbih0aGlzLmlubmVyVGV4dCk7XG4gIH07XG5cbiAgdGFza0Rlc2NyaXB0b25baV0ub25ibHVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChnZXROZXdUYXNrRGVzY3JpcHRpb24oKSAhPT0gJycpIHtcbiAgICAgIGVkaXRUYXNrKGdldE5ld1Rhc2tEZXNjcmlwdGlvbigpLCBwYXJzZUludCh0aGlzLm5hbWUsIDEwKSk7XG4gICAgICBjaGFuZ2VUYXNrRGVzY3JpcHRpb24oKTtcbiAgICB9XG4gIH07XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb2xvci1waW5rJyk7XG4gIGNvbnN0IHRyYXNoQ2FuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRyYXNoLWNhbicpO1xuICBpZiAoZGl2ICE9PSBudWxsKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29sb3ItcGluaycpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbG9yLXdoaXRlJyk7XG4gIH1cbiAgaWYgKHRyYXNoQ2FuICE9PSBudWxsKSB7XG4gICAgdHJhc2hDYW4uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XG4gICAgdHJhc2hDYW4uY2xhc3NMaXN0LnJlbW92ZSgnZmFyJywgJ2ZhLXRyYXNoLWFsdCcpO1xuICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1pdGVtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbG9yLXBpbmsnKTtcbiAgaWYgKGRpdiAhPT0gbnVsbCkge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWNvbG9yLXBpbmsnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1jb2xvci13aGl0ZScpO1xuICB9XG59KTtcblxucmVmcmVzaExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1yb3RhdGUnKSkge1xuICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufSk7XG5cbmNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2subGVuZ3RoOyBpICs9IDEpIHtcbiAgY2hlY2tbaV0ub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgdHJhc2hDYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtdHJhc2gtY2FuJyk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbG9yLXBpbmsnKTtcbiAgICBpZiAodHJhc2hDYW4gIT09IG51bGwpIHtcbiAgICAgIHRyYXNoQ2FuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xuICAgICAgdHJhc2hDYW4uY2xhc3NMaXN0LnJlbW92ZSgnZmFyJywgJ2ZhLXRyYXNoLWFsdCcpO1xuICAgIH1cblxuICAgIGlmIChzcGFuICE9PSBudWxsKSB7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29sb3ItcGluaycpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbG9yLXdoaXRlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWl0ZW0nKTtcbnJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgdGV4dGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gIGNvbnN0IGVtcHR5ID0gW10uZmlsdGVyLmNhbGwodGV4dGlucHV0cywgKGVsKSA9PiBlbC5jaGVja2VkKTtcbiAgZW1wdHkuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbXBsZXRlVGFzayhwYXJzZUludChlLm5hbWUsIDEwKSk7XG4gIH0pO1xuICBkaXNwbGF5VGFza0xpc3QoKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG4iLCJpbXBvcnQge1xuICBpdGVtTGlzdCxcbn0gZnJvbSAnLi90b2RvbGlzdC5qcyc7XG5cbmNvbnN0IGxpc3RIZWFkID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gJ2xpc3QtaGVhZCc7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWhlYWQnKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lclRleHQgPSAnVG9kYXlcXCdzIFRvIERvJztcbiAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZWZyZXNoLmNsYXNzTGlzdC5hZGQoJ3JlZnJlc2gnKTtcbiAgY29uc3QgYnRuUmVmcmVzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgYnRuUmVmcmVzaC5jbGFzc0xpc3QuYWRkKCdjb2xvci1ncmVlbicsICdmYXMnLCAnZmEtc3luYy1hbHQnKTtcbiAgcmVmcmVzaC5hcHBlbmRDaGlsZChidG5SZWZyZXNoKTtcbiAgZGl2LmFwcGVuZENoaWxkKHJlZnJlc2gpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pZCA9ICdhZGQtaXRlbSc7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdjbGVhcicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLmlkID0gJ25ldy10YXNrLWZvcm0nO1xuICBmb3JtLmFjdGlvbiA9ICcjJztcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRleHQuaWQgPSAnbmV3dGFzayc7XG4gIHRleHQubmFtZSA9ICduZXd0YXNrJztcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1pdGVtJyk7XG4gIHRleHQudHlwZSA9ICd0ZXh0JztcbiAgdGV4dC5wbGFjZWhvbGRlciA9ICdBZGQgdG8geW91ciBsaXN0Li4uJztcbiAgdGV4dC5yZXF1aXJlZCA9IHRydWU7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHN1Ym1pdC5pZCA9ICdzdWJtaXQtbmV3LXRhc2snO1xuICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtaXRlbScsICdmYXMnLCAnZmEtbGV2ZWwtZG93bi1hbHQnKTtcbiAgc3VibWl0LnN0eWxlLnJvdGF0ZSA9ICc5MGRlZyc7XG4gIHN1Ym1pdC5zdHlsZS5mb250U2l6ZSA9ICcxOHB4JztcbiAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgc3VibWl0LnRhYkluZGV4ID0gLTE7XG4gIHN1Ym1pdC52YWx1ZSA9ICcnO1xuICBzdWJtaXQudGl0bGUgPSAnY2xpY2sgdGhpcyBvciBwcmVzcyBlbnRlciB0byBzdWJtaXQnO1xuICBjb25zdCBidG5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuZGl2LmlkID0gJ2FkZC1idG4td3JhcCc7XG4gIGJ0bmRpdi5jbGFzc0xpc3QuYWRkKCdyZWZyZXNoJyk7XG4gIGJ0bmRpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ0bmRpdik7XG4gIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IHJlbW92ZVNlbGVjdGVkID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gJ3JlbW92ZS1pdGVtJztcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtc2VsZWN0ZWQnKTtcbiAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgYnV0dG9uLmlubmVyVGV4dCA9ICdDbGVhciBhbGwgY29tcGxldGVkJztcbiAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBsaXN0cyA9ICgpID0+IHtcbiAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlzdHMuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICBsaXN0cy5hcHBlbmRDaGlsZChhZGRJdGVtKCkpO1xuICBsaXN0cy5hcHBlbmRDaGlsZChpdGVtTGlzdCgpKTtcbiAgbGlzdHMuYXBwZW5kQ2hpbGQocmVtb3ZlU2VsZWN0ZWQoKSk7XG4gIHJldHVybiBsaXN0cztcbn07XG5cbmNvbnN0IG1haW5MaXN0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluTGlzdC5jbGFzc0xpc3QuYWRkKCdtYWluLWxpc3QnKTtcbiAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQobGlzdEhlYWQoKSk7XG4gIG1haW5MaXN0LmFwcGVuZENoaWxkKGxpc3RzKCkpO1xuICByZXR1cm4gbWFpbkxpc3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluTGlzdDsiLCJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG5cbmxldCB0YXNrTGlzdCA9IFtdO1xuXG5leHBvcnQgY29uc3QgYWRkTmV3VGFzayA9IChkZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCB0YXNrID0ge307XG4gIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgaWYgKHRhc2tMaXN0ICE9PSBudWxsKSB7XG4gICAgdGFzay5pbmRleCA9IHRhc2tMaXN0Lmxlbmd0aCArIDE7XG4gIH0gZWxzZSB7XG4gICAgdGFzay5pbmRleCA9IDE7XG4gIH1cbiAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGluZGV4KSB7XG4gIGNvbnN0IG5ld0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKGEpID0+IHtcbiAgICBpZiAoYS5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGlmIChhLmluZGV4ID4gaW5kZXgpIHsgYS5pbmRleCAtPSAxOyB9IHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICB0YXNrTGlzdCA9IG5ld0xpc3Q7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG59XG5cbmV4cG9ydCBjb25zdCBlZGl0VGFzayA9IChkZXNjcmlwdGlvbiwgaW5kZXgpID0+IHtcbiAgY29uc3QgbmV3TGlzdCA9IHRhc2tMaXN0LmZpbHRlcigoYSkgPT4ge1xuICAgIGlmIChhLmluZGV4ID09PSBpbmRleCkgeyBhLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IHJldHVybiBhOyB9XG4gICAgcmV0dXJuIGE7XG4gIH0pO1xuICB0YXNrTGlzdCA9IG5ld0xpc3Q7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2tMaXN0KCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykgIT09IG51bGwpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb2xpc3QnKSB8fCBbXSk7XG4gICAgdGFza0xpc3QgPSBuZXdMaXN0O1xuICAgIHRhc2tMaXN0ID0gdGFza0xpc3QuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAoYS5jb21wbGV0ZWQgIT09IHRydWUpIHsgcmV0dXJuIGE7IH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpdGVtTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgaXRlbWRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtZGl2LmlkID0gJ2l0ZW0tbGlzdCc7XG4gIGRpc3BsYXlUYXNrTGlzdCgpO1xuICB0YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NsZWFyJywgJ3RvZG8nLCAndGFzay1jb2xvci13aGl0ZScpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3gubmFtZSA9IHRhc2suaW5kZXg7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdkZXNyaXB0aW9uJyk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gO1xuICAgIGxhYmVsLm5hbWUgPSB0YXNrLmluZGV4O1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmVmcmVzaC5jbGFzc0xpc3QuYWRkKCdyZWZyZXNoJyk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1lbGxpcHNpcy12Jyk7XG4gICAgcmVmcmVzaC5uYW1lID0gdGFzay5pbmRleDtcbiAgICByZWZyZXNoLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHJlZnJlc2gpO1xuICAgIGl0ZW1kaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG4gIHJldHVybiBpdGVtZGl2O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICBjb25zdCBuZXdMaXN0ID0gdGFza0xpc3QuZmlsdGVyKChhKSA9PiB7XG4gICAgaWYgKGEuaW5kZXggPT09IGluZGV4KSB7IGEuY29tcGxldGVkID0gdHJ1ZTsgcmV0dXJuIGE7IH1cbiAgICByZXR1cm4gYTtcbiAgfSk7XG4gIHRhc2tMaXN0ID0gbmV3TGlzdDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=