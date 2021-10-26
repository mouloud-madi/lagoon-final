"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_about_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      youtube: this.$store.state.siteInfo.youtube,
      facebook: this.$store.state.siteInfo.facebook,
      instagram: this.$store.state.siteInfo.instagram,
      linkedin: this.$store.state.siteInfo.linkedin
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      app_url: "http://127.0.0.1:8000"
    };
  },
  methods: {
    goToHome: function goToHome() {
      this.$router.push({
        name: 'home'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar */ "./resources/js/components/navbar.vue");
/* harmony import */ var _components_appFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/appFooter */ "./resources/js/components/appFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppFooter: _components_appFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navbar: _components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      url: "http://127.0.0.1:8000",
      clients: this.$store.state.siteInfo.clients,
      projects: this.$store.state.siteInfo.projects,
      projects_in_progress: this.$store.state.siteInfo.projects_in_progress
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-link[data-v-a9f4693e] {\n    background-color: #f3f3f3;\n    color: #b99658;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.section-title h2[data-v-6ba873a1] {\n    color: #0d0d0e;\n}\n.section-title h2[data-v-6ba873a1]::after {\n    left: 48%;\n}\n.card[data-v-6ba873a1] {\n    border: 1px solid rgba(67, 62, 62, 0.06);\n}\n.card-text[data-v-6ba873a1] {\n    color: #4f5050;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_style_index_0_id_a9f4693e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_style_index_0_id_a9f4693e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_style_index_0_id_a9f4693e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba873a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba873a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba873a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/appFooter.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/appFooter.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appFooter_vue_vue_type_template_id_a9f4693e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appFooter.vue?vue&type=template&id=a9f4693e&scoped=true& */ "./resources/js/components/appFooter.vue?vue&type=template&id=a9f4693e&scoped=true&");
/* harmony import */ var _appFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/appFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _appFooter_vue_vue_type_style_index_0_id_a9f4693e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& */ "./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _appFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _appFooter_vue_vue_type_template_id_a9f4693e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _appFooter_vue_vue_type_template_id_a9f4693e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a9f4693e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/navbar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar_vue_vue_type_template_id_11e733ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=11e733ca& */ "./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&");
/* harmony import */ var _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_vue_vue_type_template_id_11e733ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _navbar_vue_vue_type_template_id_11e733ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/about/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/about/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_6ba873a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6ba873a1&scoped=true& */ "./resources/js/views/about/index.vue?vue&type=template&id=6ba873a1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/about/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_6ba873a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css& */ "./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6ba873a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_6ba873a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ba873a1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/about/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/appFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/appFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/about/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/about/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_style_index_0_id_a9f4693e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ba873a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=style&index=0&id=6ba873a1&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/appFooter.vue?vue&type=template&id=a9f4693e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/appFooter.vue?vue&type=template&id=a9f4693e&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_template_id_a9f4693e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_template_id_a9f4693e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_template_id_a9f4693e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appFooter.vue?vue&type=template&id=a9f4693e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=template&id=a9f4693e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/navbar.vue?vue&type=template&id=11e733ca& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_11e733ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_11e733ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_11e733ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./navbar.vue?vue&type=template&id=11e733ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&");


/***/ }),

/***/ "./resources/js/views/about/index.vue?vue&type=template&id=6ba873a1&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/about/index.vue?vue&type=template&id=6ba873a1&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ba873a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ba873a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6ba873a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=6ba873a1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=template&id=6ba873a1&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=template&id=a9f4693e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=template&id=a9f4693e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6 p-3" }, [
          _vm._v(
            "\n                © Copyright 2021 - All Rights Reserved\n            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 p-3", attrs: { align: "right" } }, [
          _c("div", { staticClass: "flex-column" }, [
            _vm.facebook
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-link",
                    attrs: { href: _vm.facebook, target: "_blank" }
                  },
                  [_c("i", { staticClass: "bi bi-facebook" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.instagram
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-link",
                    attrs: { href: _vm.instagram, target: "_blank" }
                  },
                  [_c("i", { staticClass: "bi bi-instagram" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.linkedin
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-link",
                    attrs: { href: _vm.linkedin, target: "_blank" }
                  },
                  [_c("i", { staticClass: "bi bi-linkedin" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.youtube
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-link",
                    attrs: { href: _vm.youtube, target: "_blank" }
                  },
                  [_c("i", { staticClass: "bi bi-youtube" })]
                )
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/navbar.vue?vue&type=template&id=11e733ca& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      {
        staticClass:
          "navbar navbar-expand-lg navbar-light bg-white fixed-top shadow"
      },
      [
        _c("div", { staticClass: "container-fluid" }, [
          _c(
            "a",
            { staticClass: "navbar-brand", on: { click: _vm.goToHome } },
            [
              _c("img", {
                attrs: { src: _vm.app_url + "/images/logo.png", width: "100" }
              })
            ]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarSupportedContent" }
            },
            [
              _c("ul", { staticClass: "navbar-nav me-auto mb-4 mb-lg-0" }),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex" }, [
                _c("ul", { staticClass: "navbar-nav me-auto mb-4 mb-lg-0" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/" } },
                        [
                          _vm._v(
                            "\n                                Home\n                            "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/about-us" } },
                        [
                          _vm._v(
                            "\n                                About Us\n                            "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/our-services" }
                        },
                        [
                          _vm._v(
                            "\n                                Our Services\n                            "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/gallery" } },
                        [
                          _vm._v(
                            "\n                                Gallery\n                            "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/contact-us" }
                        },
                        [
                          _vm._v(
                            "\n                                Contact Us\n                            "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _c("img", {
                        staticClass: "flag",
                        attrs: { src: _vm.app_url + "/images/flagar.png" }
                      }),
                      _vm._v(
                        "\n                                AR\n                            "
                      )
                    ])
                  ])
                ])
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("span", { staticClass: "nav-link" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=template&id=6ba873a1&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/about/index.vue?vue&type=template&id=6ba873a1&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navbar"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "portfolio section-bg",
          staticStyle: { "min-height": "100vh" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("br"),
            _c("br"),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("img", {
                  attrs: {
                    src: _vm.url + "/images/about/about1.jpg",
                    "data-aos": "fade-left",
                    "data-aos-delay": "100",
                    width: "100%"
                  }
                })
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row my-5" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c("img", {
                staticStyle: { width: "100%" },
                attrs: {
                  src: _vm.url + "/images/03.jpg",
                  "data-aos": "fade-right",
                  "data-aos-delay": "100"
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "section-bg" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5 my-5" }, [
              _c("img", {
                staticStyle: { width: "100%" },
                attrs: {
                  src: _vm.url + "/images/02.jpg",
                  "data-aos": "fade-left",
                  "data-aos-delay": "100"
                }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("div", { staticClass: "section-bg" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row no-gutters justify-content-center" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-lg-4 my-5 col-md-6 d-md-flex justify-content-center",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
              },
              [
                _c("div", { staticClass: "text-center" }, [
                  _c("i", {
                    staticClass: "bi bi-journal-richtext",
                    staticStyle: { "font-size": "44px", color: "#b99658" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "purecounter my-2",
                      staticStyle: {
                        "font-size": "48px",
                        "line-height": "40px",
                        display: "block",
                        "font-weight": "700"
                      }
                    },
                    [_vm._v(_vm._s(_vm.projects) + " +")]
                  ),
                  _vm._v(" "),
                  _vm._m(5)
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-lg-4 col-md-6 my-5 d-md-flex justify-content-center",
                attrs: { "data-aos": "fade-up" }
              },
              [
                _c("div", { staticClass: "text-center" }, [
                  _c("i", {
                    staticClass: "bi bi-emoji-smile",
                    staticStyle: { "font-size": "44px", color: "#b99658" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "purecounter my-2",
                      staticStyle: {
                        "font-size": "48px",
                        "line-height": "40px",
                        display: "block",
                        "font-weight": "700"
                      }
                    },
                    [_vm._v(_vm._s(_vm.clients) + " +")]
                  ),
                  _vm._v(" "),
                  _vm._m(6)
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-lg-4 col-md-6 my-5 d-md-flex justify-content-center",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "200" }
              },
              [
                _c("div", { staticClass: "text-center" }, [
                  _c("i", {
                    staticClass: "bi bi-journal-richtext",
                    staticStyle: { "font-size": "44px", color: "#b99658" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "purecounter my-2",
                      staticStyle: {
                        "font-size": "48px",
                        "line-height": "40px",
                        display: "block",
                        "font-weight": "700"
                      }
                    },
                    [_vm._v(_vm._s(_vm.projects_in_progress) + " +")]
                  ),
                  _vm._v(" "),
                  _vm._m(7)
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-center" }, [
      _c("h2", [_vm._v("About Us")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7" }, [
      _c("h2", { attrs: { "data-aos": "fade-right" } }, [
        _vm._v("A REFLECTION OF YOU")
      ]),
      _vm._v(" "),
      _c(
        "h5",
        { attrs: { "data-aos": "fade-right", "data-aos-delay": "200" } },
        [_vm._v("EXCEPTIONAL AND UNIQUE DESIGNS")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { attrs: { "data-aos": "fade-right", "data-aos-delay": "200" } },
        [
          _vm._v(
            "Lagoon Design is a premium interior design\n                        studio in Qatar\n                        specialized in quality,"
          ),
          _c("br"),
          _vm._v(
            " innovative solutions\n                        and\n                        efficient performance."
          )
        ]
      ),
      _vm._v(" "),
      _c("h2", { attrs: { "data-aos": "fade-right" } }, [
        _vm._v("OUR HISTORY")
      ]),
      _vm._v(" "),
      _c("p", { attrs: { "data-aos": "fade-right" } }, [
        _vm._v(
          "\n                        We have built solid, trustworthy relationships with our partners, who will be happy to\n                        reassure you\n                        that\n                        we will exceed your needs and expectations in delivering your project in a timely and\n                        professional\n                        manner.\n                    "
        )
      ]),
      _vm._v(" "),
      _c("p", { attrs: { "data-aos": "fade-right" } }, [
        _vm._v(
          "\n                        We are proud to be one of the leading studios in the GCC, always committed to major\n                        international\n                        standards in the industry. "
        ),
        _c("br"),
        _vm._v(
          "\n                        Our history includes many complex projects, in many designing fields:\n                    "
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: { "font-weight": "bold" },
          attrs: { "data-aos": "fade-up" }
        },
        [
          _c("i", {
            staticClass: "bi  bi-check2-circle",
            staticStyle: { color: "#b99658" }
          }),
          _vm._v(
            " Interior designing, styling\n                        and\n                        decorating\n                        "
          ),
          _c("br"),
          _vm._v(" "),
          _c("i", {
            staticClass: "bi  bi-check2-circle",
            staticStyle: { color: "#b99658" }
          }),
          _vm._v(" Outdoor space design "),
          _c("br"),
          _vm._v(" "),
          _c("i", {
            staticClass: "bi  bi-check2-circle",
            staticStyle: { color: "#b99658" }
          }),
          _vm._v(" Exterior designing and\n                        detailing "),
          _c("br"),
          _vm._v(" "),
          _c("i", {
            staticClass: "bi  bi-check2-circle",
            staticStyle: { color: "#b99658" }
          }),
          _vm._v(" Fitout projects "),
          _c("br"),
          _vm._v(" "),
          _c("i", {
            staticClass: "bi  bi-check2-circle",
            staticStyle: { color: "#b99658" }
          }),
          _vm._v(
            " Material suppliers from many\n                        reputed\n                        firms\n                    "
          )
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-7", staticStyle: { "margin-top": "50px" } },
      [
        _c(
          "h1",
          { attrs: { "data-aos": "fade-left", "data-aos-delay": "100" } },
          [_vm._v("Mission")]
        ),
        _vm._v(" "),
        _c(
          "p",
          { attrs: { "data-aos": "fade-left", "data-aos-delay": "300" } },
          [
            _vm._v(
              "\n                        Our mission is to go\n                        beyond our clients "
            ),
            _c("br"),
            _vm._v(
              " expectations and\n                        deliver the most luxury yet cozy designs.\n                    "
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 my-5" }, [
      _c(
        "h1",
        {
          staticStyle: { "margin-top": "50px" },
          attrs: { "data-aos": "fade-right", "data-aos-delay": "100" }
        },
        [_vm._v("Vision")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { attrs: { "data-aos": "fade-right", "data-aos-delay": "200" } },
        [
          _vm._v(
            "\n                        Our vision is to design\n                        and execute with simplicity and\n                        refinement combining the best materials with our own\n                        style.\n                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-white" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row my-5" }, [
          _c("div", { staticClass: "col-md-6 mb-4" }, [
            _c(
              "h4",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _c("i", {
                  staticClass: "bi bi-exclude",
                  staticStyle: { color: "#b99658" }
                }),
                _vm._v(
                  "\n                        Design progress\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _vm._v(
                  "\n                        We use the latest 2D & 3D imaging technology to demonstrate our ideas to clients\n                        throughout the\n                        progression of projects.\n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 mb-4" }, [
            _c(
              "h4",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _c("i", {
                  staticClass: "bi bi-exclude",
                  staticStyle: { color: "#b99658" }
                }),
                _vm._v(
                  "\n                        Specialized design\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _vm._v(
                  "\n                        As one of the most specialized top interior design studios, creativity and development are\n                        both at\n                        the forefront of what we do.\n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 mb-4" }, [
            _c(
              "h4",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _c("i", {
                  staticClass: "bi bi-exclude",
                  staticStyle: { color: "#b99658" }
                }),
                _vm._v(
                  "\n                        Unique sense of taste\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _vm._v(
                  "\n                        Our taste comes from our long history and experience in the use of design tools."
                ),
                _c("br"),
                _vm._v(
                  " We use\n                        sketches\n                        to demonstrate\n                        our understanding of our clients’ thoughts and imagination during meetings. "
                ),
                _c("br"),
                _vm._v(
                  "\n                        Having a house is normal, but having a home is something special. This is what we aim to\n                        create for\n                        you..\n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 mb-4" }, [
            _c(
              "h4",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _c("i", {
                  staticClass: "bi bi-exclude",
                  staticStyle: { color: "#b99658" }
                }),
                _vm._v(
                  "\n                        With design & conceptual decisions , we create value for our projects\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _vm._v(
                  "\n                        Everyone is unique and sees things differently, we work on understanding each client’s\n                        unique sense\n                        of how they want their home to be."
                ),
                _c("br"),
                _vm._v(
                  "\n                        Our main goal is to reflect your vision. That’s why we take care of every detail. No matter\n                        how\n                        small it is, we treat every detail with concern to make sure we create a wholesome\n                        experience for\n                        you.\n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 mb-4" }, [
            _c(
              "h4",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _c("i", {
                  staticClass: "bi bi-exclude",
                  staticStyle: { color: "#b99658" }
                }),
                _vm._v(
                  "\n                        It’s all about Subtle, Discreet, Hidden details.\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _vm._v(
                  "\n                        It’s all about what looks good. A calculated and balanced blend of form and function that\n                        serves a\n                        specific purpose and ultimately results in a final outcome that is modern, stylish and\n                        unique.\n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 mb-4" }, [
            _c(
              "h4",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _c("i", {
                  staticClass: "bi bi-exclude",
                  staticStyle: { color: "#b99658" }
                }),
                _vm._v(
                  "\n                        Professional team\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { attrs: { "data-aos": "fade-up", "data-aos-delay": "100" } },
              [
                _vm._v(
                  "\n                        We gathered a team of professionals in the field who can provide you with the design of your\n                        dreams.\n                    "
                )
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Completed Projects")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Happy Clients")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Projects in Progress")])])
  }
]
render._withStripped = true



/***/ })

}]);