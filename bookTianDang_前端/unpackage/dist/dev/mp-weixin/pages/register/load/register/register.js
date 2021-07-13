(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/register/load/register/register"],{

/***/ 25:
/*!************************************************************************************************************************!*\
  !*** C:/Users/tsb13/Documents/HBuilderProjects/demo1/main.js?{"page":"pages%2Fregister%2Fload%2Fregister%2Fregister"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _register = _interopRequireDefault(__webpack_require__(/*! ./pages/register/load/register/register.vue */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_register.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 26:
/*!*************************************************************************************************!*\
  !*** C:/Users/tsb13/Documents/HBuilderProjects/demo1/pages/register/load/register/register.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=6c11bbae& */ 27);
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ 29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/register/load/register/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/tsb13/Documents/HBuilderProjects/demo1/pages/register/load/register/register.vue?vue&type=template&id=6c11bbae& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=template&id=6c11bbae& */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_template_id_6c11bbae___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 28:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/tsb13/Documents/HBuilderProjects/demo1/pages/register/load/register/register.vue?vue&type=template&id=6c11bbae& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 29:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/tsb13/Documents/HBuilderProjects/demo1/pages/register/load/register/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Desktop/HBuilderX.3.1.13.20210514.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=script&lang=js& */ 30);
/* harmony import */ var _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_3_1_13_20210514_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 30:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/tsb13/Documents/HBuilderProjects/demo1/pages/register/load/register/register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      phone_number: '',
      password: '',
      confirm: '',
      confirm_true: '' };

  },
  methods: {
    Written1: function Written1(event) {
      var value = event.target.value;
      console.log(value);
      this.phone_number = value;
    },
    Written2: function Written2(event) {
      var value = event.target.value;
      console.log(value);
      this.password = value;
    },
    Written3: function Written3(event) {
      var value = event.target.value;
      console.log(value);
      this.confirm = value;
    },
    Clicked: function Clicked(event) {var _this = this;
      console.log(this.phone_number);
      uni.request({
        url: 'http://localhost:5000/register/confirm',

        data: {
          phone_number: this.phone_number },

        header: {
          //'content-type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Cache_Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': 0 },

        method: 'POST',
        success: function success(res) {
          console.log(res.data);
          _this.confirm_true = res.data.confirm;
        } });



    },
    Rigister: function Rigister(event) {
      if (this.confirm_true == this.confirm) {
        uni.request({
          url: 'http://localhost:5000/register/register',
          method: 'POST',
          data: {
            phone_number: this.phone_number,
            password: this.password },



          success: function success(res) {
            console.log(res.data.phone_number);
            console.log(res.data.password);
            if (res.statusCode == 200) {
              uni.redirectTo({
                url: '/pages/register/load/load' });

            }
          } });

      }


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[25,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/register/load/register/register.js.map