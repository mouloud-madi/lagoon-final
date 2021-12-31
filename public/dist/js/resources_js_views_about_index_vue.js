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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      linkedin: this.$store.state.siteInfo.linkedin,
      whatsapp: this.$store.state.siteInfo.whatsapp,
      app_url: "https://demo.socialm.tv"
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
//
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
      app_url: "https://demo.socialm.tv"
    };
  },
  methods: {
    goToHome: function goToHome() {
      this.$router.push({
        name: 'home'
      });
    },
    changeUrl: function changeUrl() {
      window.history.replaceState(null, null, '?lang=' + this.$store.state.lang);
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
      url: "https://demo.socialm.tv",
      clients: this.$store.state.siteInfo.clients,
      projects: this.$store.state.siteInfo.projects,
      projects_in_progress: this.$store.state.siteInfo.projects_in_progress
    };
  },
  mounted: function mounted() {
    window.history.replaceState(null, null, '?lang=' + this.$store.state.lang);
    window.scrollTo(0, 0);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-link[data-v-a9f4693e] {\n    color: #B3965A;\n}\na[data-v-a9f4693e]:hover {\n    color: #b17c1f;\n}\nh5[data-v-a9f4693e]{\n    font-size: 1.4rem;\n}\na[data-v-a9f4693e] {\n    color: #808285;\n}\n.ft[data-v-a9f4693e] {\n    padding-left: 80px;\n}\n@media only screen and (max-width: 600px) {\n.ft[data-v-a9f4693e] {\n        padding-left: 13px;\n}\n}\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.section-title h2[data-v-6ba873a1] {\n    color: #4f5050;\n}\n.section-title h2[data-v-6ba873a1]::after {\n    left: 48%;\n}\n.card[data-v-6ba873a1] {\n    border: 1px solid rgba(67, 62, 62, 0.06);\n}\nh4[data-v-6ba873a1]{\n    font-size: 1.4rem;\n}\n.card-text[data-v-6ba873a1] {\n    color: #4f5050;\n}\n", ""]);
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
    _c(
      "div",
      {
        staticStyle: {
          background: "rgba(0, 0, 0, 0.01)",
          "margin-top": "100px"
        }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-md-3 my-3",
                attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
              },
              [
                _c("img", {
                  staticClass: "mb-4",
                  attrs: {
                    src: _vm.app_url + "/images/logo.png",
                    width: "100",
                    "data-aos": "fade-up"
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "200",
                      dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "لاجون ديزاين هو استديو تصميم داخلي رفيع المستوى في قطر، مختص في الحلول المبتكرة والجودة وفعالية الأداء."
                            : "Lagoon Design is a premium interior design studio in Qatar specialized in quality,innovative solutions and efficient performance."
                        ) +
                        "\n                    "
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3 my-5 ft",
                attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
              },
              [
                _c(
                  "h5",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: { "data-aos": "fade-up" }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.$store.state.lang === "ar" ? "التنقل" : "Navigation"
                      )
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "200",
                      to: "/"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "الصفحة الرئيسية"
                            : "Home"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "300",
                      to: "/about-us"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "عن لاجون ديزاين"
                            : "About Us"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "400",
                      to: "/our-services"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "خدماتنا"
                            : "Our Services"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "500",
                      to: "/gallery"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "معرض الصور"
                            : "Gallery"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "600",
                      to: "/contact-us"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "تواصل معنا"
                            : "Contact Us"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3 my-5",
                attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
              },
              [
                _c(
                  "h5",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: { "data-aos": "fade-up" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "تواصل معنا"
                            : "Contact Us"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { attrs: { "data-aos": "fade-up", "data-aos-delay": "200" } },
                  [
                    _c("i", { staticClass: "bi bi-telephone" }),
                    _vm._v("  " + _vm._s(this.$store.state.siteInfo.phone1))
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                this.$store.state.siteInfo.phone2
                  ? _c(
                      "span",
                      {
                        attrs: {
                          "data-aos": "fade-up",
                          "data-aos-delay": "300"
                        }
                      },
                      [
                        _c("i", { staticClass: "bi bi-telephone" }),
                        _vm._v(" " + _vm._s(this.$store.state.siteInfo.phone2))
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "span",
                  { attrs: { "data-aos": "fade-up", "data-aos-delay": "400" } },
                  [
                    _c("i", { staticClass: "bi bi-envelope" }),
                    _vm._v(
                      "  " + _vm._s(this.$store.state.siteInfo.contact_email1)
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                this.$store.state.siteInfo.contact_email2
                  ? _c(
                      "span",
                      {
                        attrs: {
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }
                      },
                      [
                        _c("i", { staticClass: "bi bi-envelope" }),
                        _vm._v(
                          "  " +
                            _vm._s(this.$store.state.siteInfo.contact_email2)
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("br")
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3 my-5",
                attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
              },
              [
                _c(
                  "h5",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: { "data-aos": "fade-up" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar" ? "العنوان" : "Address"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "100",
                      dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                    }
                  },
                  [
                    _c("i", { staticClass: "bi bi-pin-map" }),
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.$store.state.lang === "en"
                            ? this.$store.state.siteInfo.address_en
                            : this.$store.state.siteInfo.address_ar
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "flex-column",
                    attrs: {
                      "data-aos": "fade-up",
                      "data-aos-delay": "200",
                      dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                    }
                  },
                  [
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
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.whatsapp
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-link",
                            attrs: {
                              href: "https://wa.me/" + _vm.whatsapp,
                              target: "_blank"
                            }
                          },
                          [_c("i", { staticClass: "bi bi-whatsapp" })]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "container",
        staticStyle: { background: "rgba(0, 0, 0, 0.01)" }
      },
      [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            {
              staticClass: "col-12 p-3 text-center",
              style:
                _vm.$store.state.lang === "ar"
                  ? "font-family: 'Tajawal', sans-serif;"
                  : ""
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.$store.state.lang === "ar"
                      ? "© حقوق الطبع والنشر 2021 - جميع الحقوق محفوظة "
                      : " © Copyright 2021 - All Rights Reserved"
                  ) +
                  "\n            "
              )
            ]
          )
        ])
      ]
    )
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
          "navbar navbar-expand-lg navbar-light bg-white fixed-top shadow",
        style:
          _vm.$store.state.lang === "ar"
            ? "font-family: 'Tajawal', sans-serif;"
            : "",
        attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
      },
      [
        _c("div", { staticClass: "container" }, [
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
                        {
                          staticClass: "nav-link",
                          class: _vm.$route.name === "home" ? "active" : "",
                          attrs: { to: "/" }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.$store.state.lang === "ar"
                                  ? "الصفحة الرئيسية"
                                  : "Home"
                              ) +
                              "\n                            "
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
                          class: _vm.$route.name === "about-us" ? "active" : "",
                          attrs: { to: "/about-us" }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.$store.state.lang === "ar"
                                  ? "عن لاجون ديزاين"
                                  : "About Us"
                              ) +
                              "\n                            "
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
                          class:
                            _vm.$route.name === "our-services" ? "active" : "",
                          attrs: { to: "/our-services" }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.$store.state.lang === "ar"
                                  ? "خدماتنا"
                                  : "Our Services"
                              ) +
                              "\n                            "
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
                          class: _vm.$route.name === "gallery" ? "active" : "",
                          attrs: { to: "/gallery" }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.$store.state.lang === "ar"
                                  ? "معرض الصور"
                                  : "Gallery"
                              ) +
                              "\n                            "
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
                          class:
                            _vm.$route.name === "contact-us" ? "active" : "",
                          attrs: { to: "/contact-us" }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.$store.state.lang === "ar"
                                  ? "تواصل معنا"
                                  : "Contact Us"
                              ) +
                              "\n                            "
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
                    _vm.$store.state.lang === "en"
                      ? _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            staticStyle: {
                              "font-family": "'Tajawal', sans-serif"
                            },
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function($event) {
                                ;[
                                  _vm.$store.dispatch("lang", "ar"),
                                  _vm.changeUrl()
                                ]
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                العربية\n                            "
                            )
                          ]
                        )
                      : _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function($event) {
                                ;[
                                  _vm.$store.dispatch("lang", "en"),
                                  _vm.changeUrl()
                                ]
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                English\n                            "
                            )
                          ]
                        )
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
          staticClass: "portfolio",
          staticStyle: { "min-height": "100vh" },
          style:
            _vm.$store.state.lang === "ar"
              ? "font-family: 'Tajawal', sans-serif;"
              : "",
          attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("br"),
            _c("br"),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "section-title text-center" }, [
              _c(
                "h2",
                {
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : ""
                },
                [
                  _vm.$store.state.lang === "ar"
                    ? _c("span", [_vm._v(" عن لاجون ديزاين")])
                    : _c("img", {
                        attrs: { src: "/images/about.gif", width: "300" }
                      })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7" }, [
                _c(
                  "h4",
                  {
                    staticStyle: { color: "#B3965A" },
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: { "data-aos": "fade-right" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "انعكاس لذاتك"
                            : "A REFLECTION OF YOU"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: { "data-aos": "fade-right", "data-aos-delay": "200" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "تصاميم فريدة واستثنائية"
                            : "EXCEPTIONAL AND UNIQUE DESIGNS"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    attrs: { "data-aos": "fade-right", "data-aos-delay": "200" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "لاجون ديزاين هو استديو تصميم داخلي رفيع المستوى في قطر، مختص في الحلول المبتكرة والجودة وفعالية الأداء."
                            : "Lagoon Design is a premium interior design studio in Qatar specialized in quality,innovative solutions andefficient performance."
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _c(
                  "h4",
                  {
                    staticStyle: { color: "#B3965A" },
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: { "data-aos": "fade-right" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "تاريخنا"
                            : "OUR HISTORY"
                        )
                    )
                  ]
                ),
                _vm._v(" "),
                _c("p", { attrs: { "data-aos": "fade-right" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "تمكنا من بناء علاقات صلبة ووثيقة مع شركائنا، الذين يسرهم التأكيد على أن خدماتنا ستفوق احتياجاتك وتوقعاتك عند تسليم المشاريع، خاصة فيما يتعلق بالوقت والمهنية. "
                          : " We have built solid, trustworthy relationships with our partners, who will be happy to reassure you that we will exceed your needs and expectations in delivering your project in a timely and professional manner."
                      ) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("p", { attrs: { "data-aos": "fade-right" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "فخورون بأن نكون أحد الاستوديوهات الرائدة في دول مجلس التعاون الخليجي وذلك لالتزامنا بالمعايير العالمية للصناعة, تاريخنا يحتوي العديد من المشاريع في حقول التصميم المختلفة:"
                          : " We are proud to be one of the leading studios in the GCC, always committed to major international standards in the industry, Our history includes many complex projects, in many designing fields:"
                      ) +
                      "\n\n                    "
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
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "التصميم الداخلي والتزيين وإعداد الديكور"
                            : "Interior designing, styling and decorating"
                        ) +
                        "\n                        "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "تصميم المساحات الخارجية"
                            : "Outdoor space design"
                        ) +
                        "\n                        "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? 'مشاريع "الفيت أوت" '
                            : "Fitout projects"
                        ) +
                        "\n                        "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "ar"
                            ? "عدد كبير من مزودي المواد"
                            : "  Material suppliers from many reputed firms"
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br")
              ]),
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
      _c(
        "div",
        {
          staticClass: "bg-white",
          attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
        },
        [
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
              _c(
                "div",
                {
                  staticClass: "col-md-7",
                  staticStyle: { "margin-top": "70px" }
                },
                [
                  _c(
                    "h4",
                    {
                      staticStyle: { color: "#B3965A" },
                      style:
                        _vm.$store.state.lang === "ar"
                          ? "font-family: 'Tajawal', sans-serif;"
                          : "",
                      attrs: {
                        dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                      }
                    },
                    [
                      _vm.$store.state.lang === "ar"
                        ? _c("span", [_vm._v("مهمتنا")])
                        : _c("img", {
                            attrs: { src: "/images/mission.gif", width: "200" }
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.$store.state.lang === "ar"
                    ? _c(
                        "p",
                        {
                          staticStyle: {
                            "font-family": "'Tajawal', sans-serif"
                          },
                          attrs: {
                            dir: "rtl",
                            "data-aos": "fade-left",
                            "data-aos-delay": "300"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        مهمتنا هي تجاوز توقعات عملائنا ومنحهم تصاميم فخمة ومريحة فى ذات الوقت\n                    "
                          )
                        ]
                      )
                    : _c(
                        "p",
                        {
                          attrs: {
                            "data-aos": "fade-left",
                            "data-aos-delay": "300"
                          }
                        },
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
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "bg-white",
          attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-7 my-5",
                  attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
                },
                [
                  _c(
                    "h4",
                    {
                      staticStyle: { "margin-top": "70px", color: "#B3965A" },
                      style:
                        _vm.$store.state.lang === "ar"
                          ? "font-family: 'Tajawal', sans-serif;"
                          : ""
                    },
                    [
                      _vm.$store.state.lang === "ar"
                        ? _c("span", [_vm._v("رؤيتنا")])
                        : _c("img", {
                            attrs: { src: "/images/vision.gif", width: "200" }
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.$store.state.lang === "ar"
                    ? _c(
                        "p",
                        {
                          staticStyle: {
                            "font-family": "'Tajawal', sans-serif"
                          },
                          attrs: {
                            dir: "rtl",
                            "data-aos": "fade-left",
                            "data-aos-delay": "300"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        رؤيتنا هي أن نصمم وننفذ بسلاسة واتقان بالجمع بين أفضل الخامات و أسلوبنا الفني المميز.\n                    "
                          )
                        ]
                      )
                    : _c(
                        "p",
                        {
                          attrs: {
                            "data-aos": "fade-left",
                            "data-aos-delay": "300"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Our vision is to design\n                        and execute with simplicity and\n                        refinement, combining the best materials with our own\n                        style.\n                    "
                          )
                        ]
                      )
                ]
              ),
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
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row my-5" }, [
            _c("div", { staticClass: "col-md-6 mb-4" }, [
              _c(
                "h4",
                {
                  staticStyle: { color: "#B3965A" },
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                         " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "عملية التصميم"
                          : "Design progress"
                      ) +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "نستخدم أحدث تقنيات التخيل ثنائية وثلاثية الأبعاد، لتقريب الأفكار لعملائنا خلال المراحل المختلفة من تنفيذ المشروع."
                          : "We use the latest 2D & 3D imaging technology to demonstrate our ideas to clients throughout the progression of projects."
                      ) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 mb-4" }, [
              _c(
                "h4",
                {
                  staticStyle: { color: "#B3965A" },
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                         " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "تصاميم مخصصة"
                          : "Specialized design"
                      ) +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "كواحد من أنجح الاستديوهات المتخصصة في التصميم الداخلي، نضع الإبداع والتطوير نصب أعيننا في كل ما نقوم به."
                          : "As one of the most specialized top interior design studios, creativity and development are both at the forefront of what we do."
                      ) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 mb-4" }, [
              _c(
                "h4",
                {
                  staticStyle: { color: "#B3965A" },
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                         " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "ذوق فريد من نوعه"
                          : "Unique sense of taste "
                      ) +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _vm.$store.state.lang === "ar"
                ? _c(
                    "p",
                    {
                      staticStyle: { "font-family": "'Tajawal', sans-serif" },
                      attrs: {
                        dir: "rtl",
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        ذوقنا يأتي من تاريخنا الطويل وخبرتنا في استخدام أدوات التصميم. حيث نستخدم الرسوم الأولية للتعبير عن فهمنا لأفكار عملائنا وتخيلاتهم حين نجتمع بهم. "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                        أمر طبيعي أن يكون لديك منزل مؤقت، لكن بيت الأحلام يجب أن يكون مميزاً. وهذا تحديداً ما نريد أن نحققه لك..\n                    "
                      )
                    ]
                  )
                : _c(
                    "p",
                    {
                      attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
                    },
                    [
                      _vm._v(
                        "\n                        Our taste comes from our long history and experience in the use of design tools. We use sketches to demonstrate\n                        our understanding of our clients’ thoughts and imagination during meetings."
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                        Having a house is normal, but having a home is something special. This is what we aim to create for you.\n                    "
                      )
                    ]
                  )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 mb-4" }, [
              _c(
                "h4",
                {
                  staticStyle: { color: "#B3965A" },
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "عن طريق التصميم و القرارات، التصورية نصنع القيمة لمشاريعنا"
                          : "With design & conceptual decisions , we create value for our projects"
                      ) +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _vm.$store.state.lang === "ar"
                ? _c(
                    "p",
                    {
                      staticStyle: { "font-family": "'Tajawal', sans-serif" },
                      attrs: {
                        dir: "rtl",
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        كل شخص متفرد بذاته ويرى الأشياء بشكل مختلف، ونحن نعمل على فهم الذوق الخاص بكل عميل، حول الكيفية التي يريد أن يكون عليها منزله. "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                        هدفنا الأساسي هو أن نعكس رؤيتك على أرض الواقع، لهذا نهتم بكافة التفاصيل، مهما بلغت ضآلتها. ونعامل كل تفصيلة صغيرة باهتمام كبير، لنقدم لك تجربة متكاملة.\n                    "
                      )
                    ]
                  )
                : _c(
                    "p",
                    {
                      attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
                    },
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
                {
                  staticStyle: { color: "#B3965A" },
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "عن طريق التصميم و القرارات، التصورية نصنع القيمة لمشاريعنا"
                          : "It’s all about Subtle, Discreet, Hidden details."
                      ) +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _vm.$store.state.lang === "ar"
                ? _c(
                    "p",
                    {
                      staticStyle: { "font-family": "'Tajawal', sans-serif" },
                      attrs: {
                        dir: "rtl",
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        جمالية المظهر هي الأساس. مزيج متوازن ومحسوب بين الشكل والوظيفة، يخدم هدفاً محدداً وينتج عنه مخرجاً نهائياً يتسم بالحداثة والفرادة وجمالية الأسلوب\n                    "
                      )
                    ]
                  )
                : _c(
                    "p",
                    {
                      attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
                    },
                    [
                      _vm._v(
                        "\n                        It’s all about what looks good. A calculated and balanced blend of form and function that serves a specific purpose and ultimately results in an outcome that is modern, stylish, and unique.\n                    "
                      )
                    ]
                  )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 mb-4" }, [
              _c(
                "h4",
                {
                  staticStyle: { color: "#B3965A" },
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                          " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "فريق محترف"
                          : "Professional team"
                      ) +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  style:
                    _vm.$store.state.lang === "ar"
                      ? "font-family: 'Tajawal', sans-serif;"
                      : "",
                  attrs: {
                    dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl",
                    "data-aos": "fade-up",
                    "data-aos-delay": "100"
                  }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.$store.state.lang === "ar"
                          ? "جمعنا فريقاً من المحترفين في المجال، يمكنهم دائماً ابتكار التصاميم التي تلبي طموحاتك."
                          : "We gathered a team of professionals in the field who can provide you with the design of your dreams."
                      ) +
                      "\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);