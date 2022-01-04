"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_home_index_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navbar */ "./resources/js/components/navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: _components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      links: [{
        active: true,
        to: '#section1'
      }, {
        active: false,
        to: '#section2'
      }, {
        active: false,
        to: '#section3'
      }, {
        active: false,
        to: '#section4'
      }, {
        active: false,
        to: '#section5'
      }],
      app_url: "https://demo.socialm.tv",
      nav: false
    };
  },
  methods: {
    HideShowNavbar: function HideShowNavbar() {
      this.nav = !this.nav;

      if (this.nav) {
        document.getElementById('nav').style.display = 'none';
      } else {
        document.getElementById('nav').style.display = 'block';
      }
    },
    changeUrl: function changeUrl() {
      window.history.replaceState(null, null, '?lang=' + this.$store.state.lang);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sections_section1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/section1 */ "./resources/js/views/home/sections/section1.vue");
/* harmony import */ var _sections_section2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/section2 */ "./resources/js/views/home/sections/section2.vue");
/* harmony import */ var _sections_section3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/section3 */ "./resources/js/views/home/sections/section3.vue");
/* harmony import */ var _sections_section4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/section4 */ "./resources/js/views/home/sections/section4.vue");
/* harmony import */ var _sections_section5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/section5 */ "./resources/js/views/home/sections/section5.vue");
/* harmony import */ var _components_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/top */ "./resources/js/components/top.vue");
/* harmony import */ var _components_appFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/appFooter */ "./resources/js/components/appFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
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
    AppFooter: _components_appFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    Top: _components_top__WEBPACK_IMPORTED_MODULE_5__["default"],
    Section5: _sections_section5__WEBPACK_IMPORTED_MODULE_4__["default"],
    Section4: _sections_section4__WEBPACK_IMPORTED_MODULE_3__["default"],
    Section3: _sections_section3__WEBPACK_IMPORTED_MODULE_2__["default"],
    Section2: _sections_section2__WEBPACK_IMPORTED_MODULE_1__["default"],
    Section1: _sections_section1__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    window.history.replaceState(null, null, '?lang=' + this.$store.state.lang);
    setTimeout(function () {
      document.getElementById('loader').style.display = 'none';
    }, 2500);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      sliders: []
    };
  },
  methods: {
    getSliders: function getSliders() {
      var _this = this;

      axios.get('slider').then(function (res) {
        _this.sliders = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  created: function created() {
    this.getSliders();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#header[data-v-6e910eda] {\n    margin-top: 0;\n    background: url(/images/sidebar.png) right\n}\n.nav-menu a[data-v-6e910eda], .nav-menu a[data-v-6e910eda]:focus {\n    padding: 5px 22px;\n    margin-left: 5px;\n    border-radius: 50px;\n    background: white;\n}\na.is-active[data-v-6e910eda] {\n    background: #B3965A !important;\n}\n.nav-menu a[data-v-6e910eda]:hover {\n    background: #B3965A !important;\n}\n@media only screen and (max-width: 600px) {\n.mobile-navbar[data-v-6e910eda] {\n        display: block !important;\n        margin-bottom: 85px !important;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#section1[data-v-090c8688] {\r\n    height: 100vh;\n}\n.d-block[data-v-090c8688] {\r\n    height: 100vh;\n}\n@media only screen and (max-width: 600px) {\n.d-block[data-v-090c8688] {\r\n        height: 100% !important;\n}\n#section1[data-v-090c8688] {\r\n        height: 100% !important;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#section2[data-v-08f05786] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n.content-center[data-v-08f05786] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.gif[data-v-08f05786] {\n    width: 450px;\n}\nh4[data-v-08f05786] {\n    font-size: 1.4rem;\n    color: #B3965A;\n}\n@media only screen and (max-width: 600px) {\n#section2[data-v-08f05786] {\n        min-height: 0 !important;\n}\n.gif[data-v-08f05786] {\n        width: 300px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.text--primary[data-v-08d42884] {\n    color: #B3965A;\n}\nh4[data-v-08d42884]{\n    font-size: 1.4rem;\n    color: #B3965A;\n}\n#section3[data-v-08d42884] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n.content-center[data-v-08d42884]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.gif[data-v-08d42884] {\n    width: 450px;\n}\n@media only screen and (max-width: 600px) {\n#section3[data-v-08d42884] {\n        min-height: 0 !important;\n}\n.gif[data-v-08d42884] {\n        width: 300px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#section4[data-v-08b7f982] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\nh4[data-v-08b7f982] {\n    font-size: 1.4rem;\n    color: #B3965A;\n}\n@media only screen and (max-width: 600px) {\n#section4[data-v-08b7f982] {\n        min-height: 0;\n        margin-top: 20px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-089bca80] {\n    color: #808285;\n}\na[data-v-089bca80]:hover {\n    color: #B3965A;\n}\n#section5[data-v-089bca80] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    margin-top: 0;\n}\n.vedio[data-v-089bca80] {\n    height: 100vh;\n    width: 100%;\n    margin-right: -400px;\n    margin-top: -25px;\n}\n.about-content[data-v-089bca80] {\n    margin-top: 200px;\n    margin-left: 50px;\n}\n.about-content h4[data-v-089bca80] {\n    color: #B3965A;\n}\n@media only screen and (max-width: 600px) {\n#section5[data-v-089bca80] {\n        min-height: 0;\n        margin-top: 20px;\n}\n.vedio[data-v-089bca80] {\n        height: 100%;\n        width: 100%;\n        margin-bottom: 40px;\n}\n.about-content[data-v-089bca80] {\n        margin-top: 20px !important;\n        margin-left: 5px !important;\n}\n}\nh4[data-v-089bca80] {\n    font-size: 1.4rem;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_style_index_0_id_6e910eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_style_index_0_id_6e910eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_style_index_0_id_6e910eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_style_index_0_id_090c8688_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_style_index_0_id_090c8688_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_style_index_0_id_090c8688_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_style_index_0_id_08f05786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_style_index_0_id_08f05786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_style_index_0_id_08f05786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_style_index_0_id_08d42884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_style_index_0_id_08d42884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_style_index_0_id_08d42884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_style_index_0_id_08b7f982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_style_index_0_id_08b7f982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_style_index_0_id_08b7f982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_style_index_0_id_089bca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_style_index_0_id_089bca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_style_index_0_id_089bca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/top.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/top.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _top_vue_vue_type_template_id_6e910eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top.vue?vue&type=template&id=6e910eda&scoped=true& */ "./resources/js/components/top.vue?vue&type=template&id=6e910eda&scoped=true&");
/* harmony import */ var _top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top.vue?vue&type=script&lang=js& */ "./resources/js/components/top.vue?vue&type=script&lang=js&");
/* harmony import */ var _top_vue_vue_type_style_index_0_id_6e910eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css& */ "./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _top_vue_vue_type_template_id_6e910eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _top_vue_vue_type_template_id_6e910eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6e910eda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/top.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/home/index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3ce4d0e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3ce4d0e1&scoped=true& */ "./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3ce4d0e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3ce4d0e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3ce4d0e1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/sections/section1.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/home/sections/section1.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _section1_vue_vue_type_template_id_090c8688_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section1.vue?vue&type=template&id=090c8688&scoped=true& */ "./resources/js/views/home/sections/section1.vue?vue&type=template&id=090c8688&scoped=true&");
/* harmony import */ var _section1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section1.vue?vue&type=script&lang=js& */ "./resources/js/views/home/sections/section1.vue?vue&type=script&lang=js&");
/* harmony import */ var _section1_vue_vue_type_style_index_0_id_090c8688_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css& */ "./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _section1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _section1_vue_vue_type_template_id_090c8688_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _section1_vue_vue_type_template_id_090c8688_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "090c8688",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/sections/section1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/sections/section2.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/home/sections/section2.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _section2_vue_vue_type_template_id_08f05786_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section2.vue?vue&type=template&id=08f05786&scoped=true& */ "./resources/js/views/home/sections/section2.vue?vue&type=template&id=08f05786&scoped=true&");
/* harmony import */ var _section2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section2.vue?vue&type=script&lang=js& */ "./resources/js/views/home/sections/section2.vue?vue&type=script&lang=js&");
/* harmony import */ var _section2_vue_vue_type_style_index_0_id_08f05786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css& */ "./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _section2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _section2_vue_vue_type_template_id_08f05786_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _section2_vue_vue_type_template_id_08f05786_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "08f05786",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/sections/section2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/sections/section3.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/home/sections/section3.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _section3_vue_vue_type_template_id_08d42884_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section3.vue?vue&type=template&id=08d42884&scoped=true& */ "./resources/js/views/home/sections/section3.vue?vue&type=template&id=08d42884&scoped=true&");
/* harmony import */ var _section3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section3.vue?vue&type=script&lang=js& */ "./resources/js/views/home/sections/section3.vue?vue&type=script&lang=js&");
/* harmony import */ var _section3_vue_vue_type_style_index_0_id_08d42884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css& */ "./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _section3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _section3_vue_vue_type_template_id_08d42884_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _section3_vue_vue_type_template_id_08d42884_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "08d42884",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/sections/section3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/sections/section4.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/home/sections/section4.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _section4_vue_vue_type_template_id_08b7f982_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section4.vue?vue&type=template&id=08b7f982&scoped=true& */ "./resources/js/views/home/sections/section4.vue?vue&type=template&id=08b7f982&scoped=true&");
/* harmony import */ var _section4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section4.vue?vue&type=script&lang=js& */ "./resources/js/views/home/sections/section4.vue?vue&type=script&lang=js&");
/* harmony import */ var _section4_vue_vue_type_style_index_0_id_08b7f982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css& */ "./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _section4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _section4_vue_vue_type_template_id_08b7f982_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _section4_vue_vue_type_template_id_08b7f982_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "08b7f982",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/sections/section4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/sections/section5.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/home/sections/section5.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _section5_vue_vue_type_template_id_089bca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section5.vue?vue&type=template&id=089bca80&scoped=true& */ "./resources/js/views/home/sections/section5.vue?vue&type=template&id=089bca80&scoped=true&");
/* harmony import */ var _section5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section5.vue?vue&type=script&lang=js& */ "./resources/js/views/home/sections/section5.vue?vue&type=script&lang=js&");
/* harmony import */ var _section5_vue_vue_type_style_index_0_id_089bca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css& */ "./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _section5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _section5_vue_vue_type_template_id_089bca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _section5_vue_vue_type_template_id_089bca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "089bca80",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/sections/section5.vue"
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

/***/ "./resources/js/components/top.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/top.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./top.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/home/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home/sections/section1.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/home/sections/section1.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home/sections/section2.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/home/sections/section2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home/sections/section3.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/home/sections/section3.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home/sections/section4.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/home/sections/section4.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home/sections/section5.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/home/sections/section5.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section5.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appFooter_vue_vue_type_style_index_0_id_a9f4693e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/appFooter.vue?vue&type=style&index=0&id=a9f4693e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_style_index_0_id_6e910eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=style&index=0&id=6e910eda&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_style_index_0_id_090c8688_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=style&index=0&id=090c8688&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_style_index_0_id_08f05786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=style&index=0&id=08f05786&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_style_index_0_id_08d42884_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=style&index=0&id=08d42884&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_style_index_0_id_08b7f982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=style&index=0&id=08b7f982&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_style_index_0_id_089bca80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=style&index=0&id=089bca80&scoped=true&lang=css&");


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

/***/ "./resources/js/components/top.vue?vue&type=template&id=6e910eda&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/top.vue?vue&type=template&id=6e910eda&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_6e910eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_6e910eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_6e910eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./top.vue?vue&type=template&id=6e910eda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=template&id=6e910eda&scoped=true&");


/***/ }),

/***/ "./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3ce4d0e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3ce4d0e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3ce4d0e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3ce4d0e1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&scoped=true&");


/***/ }),

/***/ "./resources/js/views/home/sections/section1.vue?vue&type=template&id=090c8688&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section1.vue?vue&type=template&id=090c8688&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_template_id_090c8688_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_template_id_090c8688_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section1_vue_vue_type_template_id_090c8688_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section1.vue?vue&type=template&id=090c8688&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=template&id=090c8688&scoped=true&");


/***/ }),

/***/ "./resources/js/views/home/sections/section2.vue?vue&type=template&id=08f05786&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section2.vue?vue&type=template&id=08f05786&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_template_id_08f05786_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_template_id_08f05786_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section2_vue_vue_type_template_id_08f05786_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section2.vue?vue&type=template&id=08f05786&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=template&id=08f05786&scoped=true&");


/***/ }),

/***/ "./resources/js/views/home/sections/section3.vue?vue&type=template&id=08d42884&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section3.vue?vue&type=template&id=08d42884&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_template_id_08d42884_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_template_id_08d42884_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section3_vue_vue_type_template_id_08d42884_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section3.vue?vue&type=template&id=08d42884&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=template&id=08d42884&scoped=true&");


/***/ }),

/***/ "./resources/js/views/home/sections/section4.vue?vue&type=template&id=08b7f982&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section4.vue?vue&type=template&id=08b7f982&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_template_id_08b7f982_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_template_id_08b7f982_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section4_vue_vue_type_template_id_08b7f982_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section4.vue?vue&type=template&id=08b7f982&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=template&id=08b7f982&scoped=true&");


/***/ }),

/***/ "./resources/js/views/home/sections/section5.vue?vue&type=template&id=089bca80&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/home/sections/section5.vue?vue&type=template&id=089bca80&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_template_id_089bca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_template_id_089bca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_section5_vue_vue_type_template_id_089bca80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./section5.vue?vue&type=template&id=089bca80&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=template&id=089bca80&scoped=true&");


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
                            ? "لاجون ديزاين هو استديو تصميم داخلي رفيع المستوى يعمل في قطر، وهو مختص في الحلول المبتكرة والجودة وفعالية الأداء."
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=template&id=6e910eda&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/top.vue?vue&type=template&id=6e910eda&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("navbar", {
        staticClass: "mobile-navbar",
        staticStyle: { display: "none" }
      }),
      _vm._v(" "),
      _c(
        "nav",
        {
          staticClass:
            "navbar navbar-expand-lg navbar-light bg-white fixed-top shadow",
          staticStyle: {
            "z-index": "2",
            display: "block",
            transition: "all 5s ease-in"
          },
          style:
            _vm.$store.state.lang === "ar"
              ? "font-family: 'Tajawal', sans-serif;"
              : "",
          attrs: {
            id: "nav",
            dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
          }
        },
        [
          _c("div", { staticClass: "container" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "collapse navbar-collapse" }, [
              _c("ul", { staticClass: "navbar-nav me-auto mb-2 mb-lg-0" }),
              _vm._v(" "),
              _c("span", [
                _c("ul", { staticClass: "navbar-nav me-auto mb-2 mb-lg-0" }, [
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
                          [_vm._v("العربية")]
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
                          [_vm._v("English")]
                        )
                  ])
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("header", { staticClass: "shadow", attrs: { id: "header" } }, [
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c("div", { staticClass: "profile mt-4" }, [
            _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: {
                  click: function($event) {
                    return _vm.HideShowNavbar()
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "bi",
                  class: _vm.nav ? "bi-filter-left" : "bi-filter-right",
                  staticStyle: {
                    "font-size": "53px",
                    padding: "0px",
                    color: "#fff"
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "nav",
            {
              staticClass: "nav-menu navbar",
              staticStyle: { "margin-top": "140px" },
              attrs: { id: "navbar" }
            },
            [
              _c(
                "ul",
                [
                  _c(
                    "scrollactive",
                    { staticClass: "my-nav" },
                    _vm._l(_vm.links, function(link) {
                      return _c("a", {
                        staticClass: "scrollactive-item nav-link icon mt-4",
                        attrs: { href: link.to }
                      })
                    }),
                    0
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "navbar-brand", attrs: { href: "javascript:void(0)" } },
      [_c("img", { attrs: { src: "images/logo.png", width: "100" } })]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    {
      style:
        _vm.$store.state.lang === "ar"
          ? "font-family: 'Tajawal', sans-serif;"
          : ""
    },
    [
      _c("div", { staticClass: "loader", attrs: { id: "loader" } }),
      _vm._v(" "),
      _c("top"),
      _vm._v(" "),
      _c("section1"),
      _vm._v(" "),
      _c(
        "main",
        { attrs: { id: "main" } },
        [
          _c("section2"),
          _vm._v(" "),
          _c("section3"),
          _vm._v(" "),
          _c("section4"),
          _vm._v(" "),
          _c("section5"),
          _vm._v(" "),
          _c("app-footer")
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { attrs: { id: "footer" } }, [
      _c(
        "div",
        { staticClass: "container", staticStyle: { padding: "0 23px" } },
        [
          _c("a", { attrs: { href: "#section5" } }, [
            _c("i", { staticClass: "bi bi-chevron-double-down" })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=template&id=090c8688&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section1.vue?vue&type=template&id=090c8688&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { attrs: { id: "section1" } }, [
      _c(
        "div",
        {
          staticClass: "carousel slide",
          attrs: { "data-bs-ride": "carousel" }
        },
        [
          _c(
            "div",
            { staticClass: "carousel-inner" },
            _vm._l(_vm.sliders, function(slider, i) {
              return _c(
                "div",
                {
                  staticClass: "carousel-item",
                  class: i === 0 ? "active" : ""
                },
                [
                  _c("img", {
                    staticClass: "d-block w-100",
                    attrs: { src: slider.image_url }
                  })
                ]
              )
            }),
            0
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=template&id=08f05786&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section2.vue?vue&type=template&id=08f05786&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "my-4", attrs: { id: "section2" } }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        {
          staticClass: "row content-center",
          attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
        },
        [
          _c(
            "div",
            {
              staticClass: "col-lg-6 pt-4",
              attrs: {
                "data-aos":
                  _vm.$store.state.lang === "en" ? "fade-left" : "fade-right"
              }
            },
            [
              _vm.$store.state.lang === "ar"
                ? _c(
                    "h4",
                    {
                      style:
                        _vm.$store.state.lang === "ar"
                          ? "font-family: 'Tajawal', sans-serif;"
                          : "",
                      attrs: {
                        dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                      }
                    },
                    [
                      _vm._v(
                        "\n                    الشغف والتفاني\n                "
                      )
                    ]
                  )
                : _c("img", {
                    staticClass: "gif",
                    attrs: {
                      src:
                        _vm.$store.state.lang === "en"
                          ? _vm.$store.state.section.section_one_gif_en
                          : _vm.$store.state.section.section_one_gif_ar
                    }
                  }),
              _vm._v(" "),
              _c("p", { staticClass: "p-section mt-3" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.$store.state.lang === "ar"
                        ? _vm.$store.state.section.section_one_description_ar
                        : _vm.$store.state.section.section_one_description_en
                    ) +
                    "\n                "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-6",
              attrs: {
                "data-aos":
                  _vm.$store.state.lang === "en" ? "fade-right" : "fade-left"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "carousel slide carousel-fade",
                  attrs: { "data-bs-ride": "carousel" }
                },
                [
                  _c("div", { staticClass: "carousel-inner" }, [
                    _c(
                      "div",
                      {
                        staticClass: "carousel-item active",
                        attrs: { "data-bs-interval": "5000" }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: _vm.$store.state.section.section_one_image1,
                            width: "100%"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "carousel-item",
                        attrs: { "data-bs-interval": "5000" }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: _vm.$store.state.section.section_one_image2,
                            width: "100%"
                          }
                        })
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=template&id=08d42884&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section3.vue?vue&type=template&id=08d42884&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "section3" } }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        {
          staticClass: "row content-center",
          attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
        },
        [
          _c(
            "div",
            {
              staticClass: "col-lg-6",
              attrs: {
                "data-aos":
                  _vm.$store.state.lang === "en" ? "fade-left" : "fade-right"
              }
            },
            [
              _vm.$store.state.lang === "ar"
                ? _c(
                    "h4",
                    {
                      style:
                        _vm.$store.state.lang === "ar"
                          ? "font-family: 'Tajawal', sans-serif;"
                          : "",
                      attrs: {
                        dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                      }
                    },
                    [
                      _vm._v(
                        "\n                    معاييرنا العالية\n                "
                      )
                    ]
                  )
                : _c("img", {
                    staticClass: "gif",
                    attrs: {
                      src:
                        _vm.$store.state.lang === "en"
                          ? _vm.$store.state.section.section_two_gif_en
                          : _vm.$store.state.section.section_two_gif_ar
                    }
                  }),
              _vm._v(" "),
              _c("p", { staticClass: "mt-3" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.$store.state.lang === "ar"
                        ? _vm.$store.state.section.section_two_description_ar
                        : _vm.$store.state.section.section_two_description_en
                    ) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text--primary" }, [_vm._v("●")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.$store.state.lang === "en"
                      ? "Interior designing, styling and decorating"
                      : "التصميم الداخلي والتزيين وإعداد الديكور"
                  )
              ),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "text--primary" }, [_vm._v("●")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.$store.state.lang === "en"
                      ? "Outdoor space design"
                      : "تصميم المساحات الخارجية"
                  ) +
                  "  "
              ),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "text--primary" }, [_vm._v("●")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.$store.state.lang === "en" ? "Fit-out" : "الفيت أوت"
                  ) +
                  "  "
              ),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "text--primary" }, [_vm._v("●")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.$store.state.lang === "en"
                      ? "Material suppliers from many firms "
                      : "عدد كبير من مزودي المواد"
                  ) +
                  "  "
              ),
              _c("br")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-6",
              attrs: {
                "data-aos":
                  _vm.$store.state.lang === "en" ? "fade-right" : "fade-left"
              }
            },
            [
              _c("img", {
                staticClass: "image",
                attrs: {
                  src: _vm.$store.state.section.section_two_image,
                  width: "100%"
                }
              })
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=template&id=08b7f982&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section4.vue?vue&type=template&id=08b7f982&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "my-4", attrs: { id: "section4" } }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-lg-8",
            attrs: {
              "data-aos":
                _vm.$store.state.lang === "en" ? "fade-left" : "fade-right"
            }
          },
          [
            _c(
              "h4",
              {
                style:
                  _vm.$store.state.lang === "ar"
                    ? "font-family: 'Tajawal', sans-serif;"
                    : "",
                attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.$store.state.lang === "en"
                        ? _vm.$store.state.section.section_three_title_en
                        : _vm.$store.state.section.section_three_title_ar
                    ) +
                    "\n                "
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
                attrs: { dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl" }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.$store.state.lang === "en"
                        ? _vm.$store.state.section.section_three_description_en
                        : _vm.$store.state.section.section_three_description_ar
                    ) +
                    "\n                "
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-lg-8",
            attrs: {
              "data-aos":
                _vm.$store.state.lang === "en" ? "fade-right" : "fade-left"
            }
          },
          [
            _c("img", {
              attrs: {
                src: _vm.$store.state.section.section_three_image,
                width: "100%"
              }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=template&id=089bca80&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/sections/section5.vue?vue&type=template&id=089bca80&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "section5" } }, [
    _c(
      "div",
      { staticClass: "container-fluid", staticStyle: { "margin-top": "0" } },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-6",
              attrs: {
                "data-aos":
                  _vm.$store.state.lang === "en" ? "fade-left" : "fade-right"
              }
            },
            [
              _c("div", { staticClass: "about-content" }, [
                _c(
                  "h4",
                  {
                    style:
                      _vm.$store.state.lang === "ar"
                        ? "font-family: 'Tajawal', sans-serif;"
                        : "",
                    attrs: {
                      dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "en"
                            ? _vm.$store.state.section.section_four_title_en
                            : _vm.$store.state.section.section_four_title_ar
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "p-section",
                    attrs: {
                      dir: _vm.$store.state.lang === "en" ? "ltr" : "rtl"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.$store.state.lang === "en"
                            ? _vm.$store.state.section
                                .section_four_description_en
                            : _vm.$store.state.section
                                .section_four_description_ar
                        ) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.$store.state.lang === "ar"
                  ? _c(
                      "div",
                      { staticStyle: { float: "right" } },
                      [
                        _c("router-link", { attrs: { to: "/about-us" } }, [
                          _vm._v("\n                            اقرأ أكثر "),
                          _c("i", { staticClass: "bi bi-arrow-right" })
                        ])
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c("router-link", { attrs: { to: "/about-us" } }, [
                          _vm._v("\n                            Read more "),
                          _c("i", { staticClass: "bi bi-arrow-right" })
                        ])
                      ],
                      1
                    )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-6",
              attrs: {
                "data-aos":
                  _vm.$store.state.lang === "en" ? "fade-up" : "fade-up",
                "data-aos-delay": "100"
              }
            },
            [
              _c("iframe", {
                staticClass: "vedio",
                attrs: {
                  src:
                    "https://www.youtube.com/embed/" +
                    _vm.$store.state.section.section_four_vedio
                }
              })
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);