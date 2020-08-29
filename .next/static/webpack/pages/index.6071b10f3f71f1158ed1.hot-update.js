webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Home/Contact.js":
/*!***********************************!*\
  !*** ./component/Home/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_baseurl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/baseurl */ "./config/baseurl.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\javascript\\techronx\\techronxnew\\component\\Home\\Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Contact = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function (e) {
      e.preventDefault();
      fetch('https://api.techronx.com/user/customer', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_this.state)
      }).then(function (result) {
        result.json().then(function (response) {
          console.log(response);

          _this.setState({
            isLoading: false
          });

          alert('Message submitted');
          window.location.reload(false);
        });
      })["catch"](function (err) {
        _this.setState({
          isLoading: false,
          error: err
        });
      });
    });

    _this.state = {
      name: '',
      email: '',
      phonenum: '',
      occpation: '',
      isLoading: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width,minimum-scale=0.5,initial-scale=1",
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "jsx-828079052" + " " + "contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "jsx-828079052" + " " + "contact-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-828079052" + " " + "heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }, "Contact Us"), __jsx("div", {
        className: "jsx-828079052" + " " + "form-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }
      }, __jsx("form", {
        className: "jsx-828079052" + " " + "form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "jsx-828079052" + " " + "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }
      }, __jsx("label", {
        htmlFor: "name",
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 29
        }
      }, "Name"), __jsx("input", {
        type: "text",
        onChange: function onChange() {
          return _this2.setState({
            name: event.target.value
          });
        },
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "jsx-828079052" + " " + "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }
      }, __jsx("label", {
        htmlFor: "email",
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }
      }, "Email"), __jsx("input", {
        type: "email",
        onChange: function onChange() {
          return _this2.setState({
            email: event.target.value
          });
        },
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "jsx-828079052" + " " + "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }
      }, __jsx("label", {
        htmlFor: "phone",
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 29
        }
      }, "Phone Number"), __jsx("input", {
        type: "number",
        onChange: function onChange() {
          return _this2.setState({
            phonenum: event.target.value
          });
        },
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "jsx-828079052" + " " + "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, __jsx("label", {
        htmlFor: "message",
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }
      }, "Message"), __jsx("input", {
        type: "text",
        onChange: function onChange() {
          return _this2.setState({
            occpation: event.target.value
          });
        },
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "jsx-828079052" + " " + "form-group button-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, __jsx("button", {
        onClick: this.handleClick,
        className: "jsx-828079052",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }
      }, "SEND MESSAGE")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "828079052",
        __self: this
      }, ".contact.jsx-828079052{height:90vh;padding:1rem 2rem;background:rgb(234,247,251);}.contact-box.jsx-828079052{position:relative;max-width:600px;width:100%;height:100vh;top:0%;left:50%;-webkit-transform:translate(-50%,-26%);-ms-transform:translate(-50%,-26%);transform:translate(-50%,-26%);background:white;padding:0 1rem;box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12);}.heading.jsx-828079052{height:100px;width:100%;font-size:3rem;font-weight:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.form-box.jsx-828079052{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.form.jsx-828079052{max-width:450px;width:100%;height:80vh;padding:0 1rem;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.form-group.jsx-828079052{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}label.jsx-828079052{font-size:1rem;color:#a6a6a6;}input.jsx-828079052{border:none;outline:none;background:white;border-bottom:1px solid #a6a6a6;padding:0.4rem 0;font-size:1rem;}input.jsx-828079052:hover{border-color:#000;-webkit-transition:1s ease;transition:1s ease;}.button-group.jsx-828079052{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}button.jsx-828079052{text-align:center;width:200px;color:black;border:2px solid blue;background:white;padding:1rem;outline:none;cursor:pointer;}button.jsx-828079052:hover{border-color:none;background:linear-gradient(to left,blue,purple);-webkit-transition-duration:.3s;transition-duration:.3s;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxqYXZhc2NyaXB0XFx0ZWNocm9ueFxcdGVjaHJvbnhuZXdcXGNvbXBvbmVudFxcSG9tZVxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRm9CLEFBRzRCLEFBV00sQUFtQkwsQUFZQSxBQU1HLEFBYUgsQUFJRSxBQUlILEFBUU0sQUFJTCxBQUlJLEFBWUMsWUFoR0EsQUFxRUwsQ0F2Q0YsRUFtQ0csQ0FqQkgsRUFyQ0ssQUFrRUcsQUFRUCxBQVlzQyxNQWpFbkMsQ0FzQ0UsRUFyQkwsRUFpQmYsQ0FqRWlDLEFBcUZsQixJQTFFRCxLQXFCSyxBQWlCRCxHQXFCaUIsQUFnQlYsR0ExRVQsU0FzQ0UsQ0FqQkYsR0EzQmhCLEFBT1UsTUFnRVYsQUFVb0IsQ0F6RVIsQ0FtRmUsUUFsRk8sQUEwQlQsQUFtQkEsQUFXTCxBQVNFLE9BUU4sVUFoQkUsR0FpQkYsWUFoQmhCLENBa0JrQixJQXhDRixXQTBDaEIsQUFLZSxPQWhFTyxLQWlFdEIsa0JBekRnQyxBQW1CaEMsZUFvQkEsWUFqRW9CLE1Bb0NLLFdBbkNQLGVBUW5CLFdBVWlDLHlDQWtCQSxZQVZWLHNFQU50Qix1QkFPQSxrQkFZQSxtQ0EvQkEiLCJmaWxlIjoiQzpcXGphdmFzY3JpcHRcXHRlY2hyb254XFx0ZWNocm9ueG5ld1xcY29tcG9uZW50XFxIb21lXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Jhc2V1cmwnO1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lIDogJycsXHJcbiAgICAgICAgICAgIGVtYWlsIDonJyxcclxuICAgICAgICAgICAgcGhvbmVudW0gOicnLFxyXG4gICAgICAgICAgICBvY2NwYXRpb24gOicnLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnRlY2hyb254LmNvbS91c2VyL2N1c3RvbWVyJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQuanNvbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdNZXNzYWdlIHN1Ym1pdHRlZCcpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MC41LGluaXRpYWwtc2NhbGU9MVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+Q29udGFjdCBVczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eygpPT4gdGhpcy5zZXRTdGF0ZSh7bmFtZTpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9eygpPT4gdGhpcy5zZXRTdGF0ZSh7ZW1haWw6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17KCk9PiB0aGlzLnNldFN0YXRlKHtwaG9uZW51bTpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eygpPT4gdGhpcy5zZXRTdGF0ZSh7b2NjcGF0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+U0VORCBNRVNTQUdFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnRhY3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6OTB2aDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjM0LCAyNDcsIDI1MSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGlnbi10ZWVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhY3QtYm94e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICAgICAgdG9wOjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTI2JSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDFyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAgICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcclxuICAgICAgICAgICAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXHJcbiAgICAgICAgICAgICAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgICAgICAgICAgICAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXHJcbiAgICAgICAgICAgICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXHJcbiAgICAgICAgICAgICAgICAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6M3JlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZm9ybS1ib3h7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo4MHZoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDFyZW07XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTs7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojYTZhNmE2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2E2YTZhNjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MC40cmVtIDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dDpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoxcyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxcmVtO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjpub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgYmx1ZSwgcHVycGxlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246LjNzO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\javascript\\\\techronx\\\\techronxnew\\\\component\\\\Home\\\\Contact.js */"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0hvbWUvQ29udGFjdC5qcyJdLCJuYW1lcyI6WyJDb250YWN0IiwicHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImlzTG9hZGluZyIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJlcnJvciIsIm5hbWUiLCJlbWFpbCIsInBob25lbnVtIiwib2NjcGF0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCQSxPOzs7OztBQUNqQixtQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsS0FBTjs7QUFEZ0Isc05BWU4sVUFBQ0MsQ0FBRCxFQUFPO0FBQ2pCQSxPQUFDLENBQUNDLGNBQUY7QUFDQUMsV0FBSyxDQUFDLHdDQUFELEVBQTJDO0FBQzVDQyxjQUFNLEVBQUUsTUFEb0M7QUFFNUNDLGVBQU8sRUFBRTtBQUNMLG9CQUFVLGtCQURMO0FBRUwsMEJBQWdCO0FBRlgsU0FGbUM7QUFNNUNDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUsTUFBS0MsS0FBcEI7QUFOc0MsT0FBM0MsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQUMsTUFBTSxFQUFJO0FBQ2RBLGNBQU0sQ0FBQ0MsSUFBUCxHQUFjRixJQUFkLENBQW1CLFVBQUFHLFFBQVEsRUFBSTtBQUMzQkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaOztBQUNBLGdCQUFLRyxRQUFMLENBQWM7QUFDVkMscUJBQVMsRUFBRTtBQURELFdBQWQ7O0FBR0FDLGVBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0FDLGdCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCLEtBQXZCO0FBQ0gsU0FQRDtBQVFILE9BaEJELFdBZ0JTLFVBQUFDLEdBQUcsRUFBSTtBQUVaLGNBQUtOLFFBQUwsQ0FBYztBQUNWQyxtQkFBUyxFQUFFLEtBREQ7QUFFVk0sZUFBSyxFQUFFRDtBQUZHLFNBQWQ7QUFJSCxPQXRCRDtBQXVCSCxLQXJDbUI7O0FBRWhCLFVBQUtiLEtBQUwsR0FBYTtBQUNUZSxVQUFJLEVBQUcsRUFERTtBQUVUQyxXQUFLLEVBQUUsRUFGRTtBQUdUQyxjQUFRLEVBQUUsRUFIRDtBQUlUQyxlQUFTLEVBQUUsRUFKRjtBQUtUVixlQUFTLEVBQUM7QUFMRCxLQUFiO0FBRmdCO0FBU25COzs7OzZCQThCUTtBQUFBOztBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUMsc0RBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsRUFLRTtBQUFBLDJDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsMkNBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSwyQ0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFSTtBQUFBLDJDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUEsMkNBQWdCLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDJDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFO0FBQUEsaUJBQUssTUFBSSxDQUFDRCxRQUFMLENBQWM7QUFBQ1EsZ0JBQUksRUFBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBQW5CLFdBQWQsQ0FBTDtBQUFBLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBREosRUFNSTtBQUFBLDJDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBUSxFQUFFO0FBQUEsaUJBQUssTUFBSSxDQUFDZCxRQUFMLENBQWM7QUFBQ1MsaUJBQUssRUFBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBQXBCLFdBQWQsQ0FBTDtBQUFBLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBTkosRUFXSTtBQUFBLDJDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBUSxFQUFFO0FBQUEsaUJBQUssTUFBSSxDQUFDZCxRQUFMLENBQWM7QUFBQ1Usb0JBQVEsRUFBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBQXZCLFdBQWQsQ0FBTDtBQUFBLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBWEosRUFnQkk7QUFBQSwyQ0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRTtBQUFBLGlCQUFLLE1BQUksQ0FBQ2QsUUFBTCxDQUFjO0FBQUNXLHFCQUFTLEVBQUNDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQztBQUF4QixXQUFkLENBQUw7QUFBQSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQWhCSixFQXFCSTtBQUFBLDJDQUFlLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGVBQU8sRUFBRSxLQUFLQyxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosQ0FyQkosQ0FEQSxDQUZKLENBREYsQ0FMRjtBQUFBO0FBQUE7QUFBQSxvellBREo7QUFrSkg7Ozs7RUEzTGdDQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MDcxYjEwZjNmNzFmMTE1OGVkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Jhc2V1cmwnO1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lIDogJycsXHJcbiAgICAgICAgICAgIGVtYWlsIDonJyxcclxuICAgICAgICAgICAgcGhvbmVudW0gOicnLFxyXG4gICAgICAgICAgICBvY2NwYXRpb24gOicnLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnRlY2hyb254LmNvbS91c2VyL2N1c3RvbWVyJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQuanNvbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdNZXNzYWdlIHN1Ym1pdHRlZCcpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MC41LGluaXRpYWwtc2NhbGU9MVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+Q29udGFjdCBVczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eygpPT4gdGhpcy5zZXRTdGF0ZSh7bmFtZTpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9eygpPT4gdGhpcy5zZXRTdGF0ZSh7ZW1haWw6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17KCk9PiB0aGlzLnNldFN0YXRlKHtwaG9uZW51bTpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eygpPT4gdGhpcy5zZXRTdGF0ZSh7b2NjcGF0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+U0VORCBNRVNTQUdFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnRhY3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6OTB2aDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjM0LCAyNDcsIDI1MSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGlnbi10ZWVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhY3QtYm94e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICAgICAgdG9wOjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTI2JSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDFyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAgICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcclxuICAgICAgICAgICAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXHJcbiAgICAgICAgICAgICAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgICAgICAgICAgICAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXHJcbiAgICAgICAgICAgICAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXHJcbiAgICAgICAgICAgICAgICAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6M3JlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZm9ybS1ib3h7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo4MHZoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDFyZW07XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTs7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojYTZhNmE2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2E2YTZhNjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MC40cmVtIDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dDpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoxcyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxcmVtO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjpub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgYmx1ZSwgcHVycGxlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246LjNzO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9