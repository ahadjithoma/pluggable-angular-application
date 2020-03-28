function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("ng.common"), require("ng.core"), require("app.core"));else if (typeof define === 'function' && define.amd) define(["ng.common", "ng.core", "app.core"], factory);else if (typeof exports === 'object') exports["plugin1"] = factory(require("ng.common"), require("ng.core"), require("app.core"));else root["plugin1"] = factory(root["ng.common"], root["ng.core"], root["app.core"]);
})(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE_src_app_application_core_application_core_module__) {
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
      "../../src/app/application-core/button/button.component.ts":
      /*!**************************************************************************************!*\
        !*** C:/Synectics/pluggable-app/src/app/application-core/button/button.component.ts ***!
        \**************************************************************************************/

      /*! exports provided: ButtonComponent */

      /***/
      function srcAppApplicationCoreButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
          return ButtonComponent;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "@angular/core");
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

        var _c0 = ["sharedBtn", ""];
        var _c1 = ["*"];

        var ButtonComponent = function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);
        };

        ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
          return new (t || ButtonComponent)();
        };

        ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ButtonComponent,
          selectors: [["button", "sharedBtn", ""]],
          attrs: _c0,
          ngContentSelectors: _c1,
          decls: 1,
          vars: 0,
          template: function ButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
          },
          styles: ["[_nghost-%COMP%] {\n  padding: 0 15px;\n  border: 1px solid #d8dde6;\n  border-radius: 6px;\n  line-height: 40px;\n  cursor: pointer;\n  background: #fff;\n}\n[_nghost-%COMP%]:hover {\n  background: #f3f7fb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24tY29yZS9idXR0b24vQzpcXFN5bmVjdGljc1xccGx1Z2dhYmxlLWFwcC9zcmNcXGFwcFxcYXBwbGljYXRpb24tY29yZVxcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uLWNvcmUvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLWNvcmUvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGRlNjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmN2ZiO1xyXG4gIH1cclxufSIsIjpob3N0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkZGU2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG46aG9zdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmM2Y3ZmI7XG59Il19 */"]
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              // tslint:disable-next-line: component-selector
              selector: 'button[sharedBtn]',
              template: '<ng-content></ng-content>',
              styleUrls: ['./button.component.scss']
            }]
          }], null, null);
        })();
        /***/

      },

      /***/
      "../../src/app/application-core/tabs/tab.component.ts":
      /*!*********************************************************************************!*\
        !*** C:/Synectics/pluggable-app/src/app/application-core/tabs/tab.component.ts ***!
        \*********************************************************************************/

      /*! exports provided: TabComponent */

      /***/
      function srcAppApplicationCoreTabsTabComponentTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
          return TabComponent;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "@angular/core");
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./tabs.component */
        "../../src/app/application-core/tabs/tabs.component.ts");

        var _c0 = ["*"];

        var TabComponent = function TabComponent(tabsComponent) {
          _classCallCheck(this, TabComponent);

          this.hidden = true;
          tabsComponent.addTab(this);
        };

        TabComponent.ɵfac = function TabComponent_Factory(t) {
          return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"]));
        };

        TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TabComponent,
          selectors: [["shared-tab"]],
          hostVars: 1,
          hostBindings: function TabComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("hidden", ctx.hidden);
            }
          },
          inputs: {
            title: "title"
          },
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function TabComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            }
          },
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              selector: 'shared-tab',
              template: '<ng-content></ng-content>'
            }]
          }], function () {
            return [{
              type: _tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"]
            }];
          }, {
            title: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            hidden: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
              args: ['hidden']
            }]
          });
        })();
        /***/

      },

      /***/
      "../../src/app/application-core/tabs/tabs.component.ts":
      /*!**********************************************************************************!*\
        !*** C:/Synectics/pluggable-app/src/app/application-core/tabs/tabs.component.ts ***!
        \**********************************************************************************/

      /*! exports provided: TabsComponent */

      /***/
      function srcAppApplicationCoreTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
          return TabsComponent;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "@angular/core");
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @angular/common */
        "@angular/common");
        /* harmony import */


        var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);

        function TabsComponent_li_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var tab_r2 = ctx.$implicit;

              var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

              return ctx_r3.selectTab(tab_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tab_r2 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab--active", !tab_r2.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r2.title, " ");
          }
        }

        var _c0 = ["*"];

        var TabsComponent = /*#__PURE__*/function () {
          function TabsComponent() {
            _classCallCheck(this, TabsComponent);

            this.tabs = [];
            this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }

          _createClass(TabsComponent, [{
            key: "addTab",
            value: function addTab(tabComponent) {
              if (!this.tabs.length) {
                tabComponent.hidden = false;
              }

              this.tabs.push(tabComponent);
            }
          }, {
            key: "selectTab",
            value: function selectTab(tabComponent) {
              this.tabs.map(function (tab) {
                return tab.hidden = true;
              });
              tabComponent.hidden = false;
              this.selected.emit(tabComponent);
            }
          }]);

          return TabsComponent;
        }();

        TabsComponent.ɵfac = function TabsComponent_Factory(t) {
          return new (t || TabsComponent)();
        };

        TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TabsComponent,
          selectors: [["shared-tabs"]],
          outputs: {
            selected: "selected"
          },
          ngContentSelectors: _c0,
          decls: 4,
          vars: 1,
          consts: [[1, "tabs"], ["class", "tab", 3, "tab--active", "click", 4, "ngFor", "ngForOf"], [1, "tab-body"], [1, "tab", 3, "click"]],
          template: function TabsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 2, 3, "li", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
          styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid #ebeef2;\n}\n\n.tab[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px;\n  line-height: 40px;\n  cursor: pointer;\n}\n\n.tab-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.tab--active[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #03a9f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24tY29yZS90YWJzL0M6XFxTeW5lY3RpY3NcXHBsdWdnYWJsZS1hcHAvc3JjXFxhcHBcXGFwcGxpY2F0aW9uLWNvcmVcXHRhYnNcXHRhYnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uLWNvcmUvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLWNvcmUvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGFicyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZWYyO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJi1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmLS1hY3RpdmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDNhOWY0O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVlZjI7XG59XG5cbi50YWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udGFiLS1hY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogIzAzYTlmNDtcbn0iXX0= */"]
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              selector: 'shared-tabs',
              templateUrl: './tabs.component.html',
              styleUrls: ['./tabs.component.scss']
            }]
          }], null, {
            selected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }]
          });
        })();
        /***/

      },

      /***/
      "./src/main.ts":
      /*!*********************!*\
        !*** ./src/main.ts ***!
        \*********************/

      /*! exports provided: default, Plugin1Module */

      /***/
      function srcMainTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _plugin1_plugin1_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./plugin1/plugin1.module */
        "./src/plugin1/plugin1.module.ts");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Plugin1Module", function () {
          return _plugin1_plugin1_module__WEBPACK_IMPORTED_MODULE_0__["Plugin1Module"];
        });
        /* harmony default export */


        __webpack_exports__["default"] = _plugin1_plugin1_module__WEBPACK_IMPORTED_MODULE_0__["Plugin1Module"];
        /***/
      },

      /***/
      "./src/plugin1/plugin1.component.ts":
      /*!******************************************!*\
        !*** ./src/plugin1/plugin1.component.ts ***!
        \******************************************/

      /*! exports provided: Plugin1Component */

      /***/
      function srcPlugin1Plugin1ComponentTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Plugin1Component", function () {
          return Plugin1Component;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "@angular/core");
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @angular/common */
        "@angular/common");
        /* harmony import */


        var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _src_app_application_core_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../../src/app/application-core/button/button.component */
        "../../src/app/application-core/button/button.component.ts");
        /* harmony import */


        var _src_app_application_core_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../../../src/app/application-core/tabs/tabs.component */
        "../../src/app/application-core/tabs/tabs.component.ts");
        /* harmony import */


        var _src_app_application_core_tabs_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../../../src/app/application-core/tabs/tab.component */
        "../../src/app/application-core/tabs/tab.component.ts");

        function Plugin1Component_p_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hidden text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }

        var Plugin1Component = function Plugin1Component() {
          _classCallCheck(this, Plugin1Component);

          this.x = false;
        };

        Plugin1Component.ɵfac = function Plugin1Component_Factory(t) {
          return new (t || Plugin1Component)();
        };

        Plugin1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: Plugin1Component,
          selectors: [["app-plugin-1"]],
          decls: 12,
          vars: 1,
          consts: [[4, "ngIf"], ["sharedBtn", "", 3, "click"], ["title", "Tab 1"], ["title", "Tab 2"], ["title", "Tab 3"]],
          template: function Plugin1Component_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plugin 1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Plugin1Component_p_2_Template, 2, 0, "p", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Plugin1Component_Template_button_click_3_listener() {
                return ctx.x = !ctx.x;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shared Button Example");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "shared-tabs");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "shared-tab", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Tab 1 contents ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "shared-tab", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tab 2 contents ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "shared-tab", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tab 3 contents ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.x);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _src_app_application_core_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_app_application_core_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _src_app_application_core_tabs_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"]],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Plugin1Component, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              selector: 'app-plugin-1',
              templateUrl: './plugin1.component.html'
            }]
          }], null, null);
        })();
        /***/

      },

      /***/
      "./src/plugin1/plugin1.module.ts":
      /*!***************************************!*\
        !*** ./src/plugin1/plugin1.module.ts ***!
        \***************************************/

      /*! exports provided: Plugin1Module */

      /***/
      function srcPlugin1Plugin1ModuleTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Plugin1Module", function () {
          return Plugin1Module;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "@angular/core");
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @angular/common */
        "@angular/common");
        /* harmony import */


        var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _plugin1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./plugin1.component */
        "./src/plugin1/plugin1.component.ts");
        /* harmony import */


        var src_app_application_core_application_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! src/app/application-core/application-core.module */
        "src/app/application-core/application-core.module");
        /* harmony import */


        var src_app_application_core_application_core_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_app_application_core_application_core_module__WEBPACK_IMPORTED_MODULE_3__);

        var Plugin1Module = function Plugin1Module() {
          _classCallCheck(this, Plugin1Module);
        };

        Plugin1Module.entry = _plugin1_component__WEBPACK_IMPORTED_MODULE_2__["Plugin1Component"];
        Plugin1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: Plugin1Module
        });
        Plugin1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function Plugin1Module_Factory(t) {
            return new (t || Plugin1Module)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_application_core_application_core_module__WEBPACK_IMPORTED_MODULE_3__["ApplicationCoreModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Plugin1Module, {
            declarations: [_plugin1_component__WEBPACK_IMPORTED_MODULE_2__["Plugin1Component"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_application_core_application_core_module__WEBPACK_IMPORTED_MODULE_3__["ApplicationCoreModule"]]
          });
        })();
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Plugin1Module, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_application_core_application_core_module__WEBPACK_IMPORTED_MODULE_3__["ApplicationCoreModule"]],
              declarations: [_plugin1_component__WEBPACK_IMPORTED_MODULE_2__["Plugin1Component"]],
              entryComponents: [_plugin1_component__WEBPACK_IMPORTED_MODULE_2__["Plugin1Component"]]
            }]
          }], null, null);
        })();
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
      "@angular/common":
      /*!****************************!*\
        !*** external "ng.common" ***!
        \****************************/

      /*! no static exports found */

      /***/
      function angularCommon(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;
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
      },

      /***/
      "src/app/application-core/application-core.module":
      /*!***************************!*\
        !*** external "app.core" ***!
        \***************************/

      /*! no static exports found */

      /***/
      function srcAppApplicationCoreApplicationCoreModule(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_src_app_application_core_application_core_module__;
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=plugin1.js.map
//# sourceMappingURL=plugin1.js.map