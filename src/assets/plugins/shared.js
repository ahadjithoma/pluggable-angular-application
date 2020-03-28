function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("ng.core"));else if (typeof define === 'function' && define.amd) define(["ng.core"], factory);else if (typeof exports === 'object') exports["shared"] = factory(require("ng.core"));else root["shared"] = factory(root["ng.core"]);
})(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE__angular_core__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../dist/shared/fesm2015/shared.js":
      /*!*****************************************************************!*\
        !*** C:/Synectics/pluggable-app/dist/shared/fesm2015/shared.js ***!
        \*****************************************************************/

      /*! exports provided: SharedComponent, SharedModule */

      /***/
      function distSharedFesm2015SharedJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SharedComponent", function () {
          return SharedComponent;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
          return SharedModule;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "@angular/core");
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

        var SharedComponent =
        /*#__PURE__*/
        function () {
          function SharedComponent() {
            _classCallCheck(this, SharedComponent);
          }

          _createClass(SharedComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return SharedComponent;
        }();

        SharedComponent.ɵfac = function SharedComponent_Factory(t) {
          return new (t || SharedComponent)();
        };

        SharedComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
          type: SharedComponent,
          selectors: [["lib-shared"]],
          decls: 2,
          vars: 0,
          template: function SharedComponent_Template(rf, ctx) {
            if (rf & 1) {
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "p");
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, " shared library works! ");
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            }
          },
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SharedComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              selector: 'lib-shared',
              template: "\n    <p>\n      shared library works!\n    </p>\n  ",
              styles: []
            }]
          }], function () {
            return [];
          }, null);
        })();

        var SharedModule = function SharedModule() {
          _classCallCheck(this, SharedModule);
        };

        SharedModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
          type: SharedModule
        });
        SharedModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)();
          },
          imports: [[]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(SharedModule, {
            declarations: [SharedComponent],
            exports: [SharedComponent]
          });
        })();
        /*@__PURE__*/


        (function () {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SharedModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
              declarations: [SharedComponent],
              imports: [],
              exports: [SharedComponent]
            }]
          }], null, null);
        })();
        /*
         * Public API Surface of shared
         */

        /**
         * Generated bundle index. Do not edit.
         */
        //# sourceMappingURL=shared.js.map

        /***/

      },

      /***/
      "./src/main.ts":
      /*!*********************!*\
        !*** ./src/main.ts ***!
        \*********************/

      /*! exports provided: default, SharedComponent, SharedModule */

      /***/
      function srcMainTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! shared */
        "../../dist/shared/fesm2015/shared.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "SharedComponent", function () {
          return shared__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
          return shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
        /***/
      },

      /***/
      0:
      /*!***************************!*\
        !*** multi ./src/main.ts ***!
        \***************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! C:\Synectics\pluggable-app\projects\plugins\src\main.ts */
        "./src/main.ts");
        /***/
      },

      /***/
      "@angular/core":
      /*!**************************!*\
        !*** external "ng.core" ***!
        \**************************/

      /*! no static exports found */

      /***/
      function angularCore(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=shared.js.map
//# sourceMappingURL=shared.js.map