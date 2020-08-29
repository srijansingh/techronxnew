webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_baseurl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/baseurl */ "./config/baseurl.js");
/* harmony import */ var _component_Solution_Intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/Solution/Intro */ "./component/Solution/Intro.js");
/* harmony import */ var _component_Solution_Solution__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/Solution/Solution */ "./component/Solution/Solution.js");
/* harmony import */ var _component_Home_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/Home/Contact */ "./component/Home/Contact.js");



var _this = undefined,
    _jsxFileName = "C:\\javascript\\techronx\\techronxnew\\pages\\home.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var Service = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(_c = function _c(props) {
  console.log(props.data.intro.data[0].heading);
  var ourservice = props.data.totalRes.data.map(function (service, index) {
    return __jsx(_component_Solution_Solution__WEBPACK_IMPORTED_MODULE_9__["default"], {
      thumbnail: service.imageurl,
      heading: service.heading,
      content: service.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    });
  });
  var heading = props.data.intro.data[0].heading;
  var imageurl = props.data.intro.data[0].imageurl;
  var content = props.data.intro.data[0].content;
  var serviceid = props.data.intro.data[0].serviceid;
  var url = "https://techronx.com/home?id=" + serviceid;
  return __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("meta", {
    name: "title",
    content: heading,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: content,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:title",
    content: heading,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: content,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: imageurl,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: url,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: heading,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: content,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: imageurl,
    className: "jsx-3106475822",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx(_component_Solution_Intro__WEBPACK_IMPORTED_MODULE_8__["default"], {
    heading: heading,
    imageurl: imageurl,
    content: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 12
    }
  }), __jsx("header", {
    className: "jsx-3106475822" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "jsx-3106475822" + " " + "grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 16
    }
  }, ourservice)), __jsx("div", {
    className: "jsx-3106475822" + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_component_Home_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2381225193",
    __self: _this
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxqYXZhc2NyaXB0XFx0ZWNocm9ueFxcdGVjaHJvbnhuZXdcXHBhZ2VzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREK0IsQUFHa0IsU0FHRyxzSkFDdUIsbUNBQ0Qsa0NBRXJDLGtCQUFDIiwiZmlsZSI6IkM6XFxqYXZhc2NyaXB0XFx0ZWNocm9ueFxcdGVjaHJvbnhuZXdcXHBhZ2VzXFxob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSBcIi4uL2NvbmZpZy9iYXNldXJsXCI7XHJcbmltcG9ydCBJbnRybyBmcm9tIFwiLi4vY29tcG9uZW50L1NvbHV0aW9uL0ludHJvXCI7XHJcbmltcG9ydCBTb2x1dGlvbnMgZnJvbSBcIi4uL2NvbXBvbmVudC9Tb2x1dGlvbi9Tb2x1dGlvblwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50L0hvbWUvQ29udGFjdFwiO1xyXG5jb25zdCBTZXJ2aWNlID0gd2l0aFJvdXRlcigocHJvcHMpPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuZGF0YS5pbnRyby5kYXRhWzBdLmhlYWRpbmcpXHJcblxyXG5cclxuICAgIGNvbnN0IG91cnNlcnZpY2UgPSBwcm9wcy5kYXRhLnRvdGFsUmVzLmRhdGEubWFwKChzZXJ2aWNlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8U29sdXRpb25zIHRodW1ibmFpbD17c2VydmljZS5pbWFnZXVybH0gaGVhZGluZz17c2VydmljZS5oZWFkaW5nfSBjb250ZW50PXtzZXJ2aWNlLmRlc2NyaXB0aW9ufSAgLz5cclxuICAgICAgICApXHJcbiAgICAgfSlcclxuXHJcbiAgICAgY29uc3QgaGVhZGluZyA9IHByb3BzLmRhdGEuaW50cm8uZGF0YVswXS5oZWFkaW5nO1xyXG4gICAgIGNvbnN0IGltYWdldXJsID0gcHJvcHMuZGF0YS5pbnRyby5kYXRhWzBdLmltYWdldXJsO1xyXG4gICAgIGNvbnN0IGNvbnRlbnQgPSBwcm9wcy5kYXRhLmludHJvLmRhdGFbMF0uY29udGVudDtcclxuICAgICBjb25zdCBzZXJ2aWNlaWQgPSBwcm9wcy5kYXRhLmludHJvLmRhdGFbMF0uc2VydmljZWlkO1xyXG5cclxuICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vdGVjaHJvbnguY29tL2hvbWU/aWQ9XCIrc2VydmljZWlkXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcblxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD17aGVhZGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2hlYWRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZXVybH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtoZWFkaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2ltYWdldXJsfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgPEludHJvIGhlYWRpbmc9e2hlYWRpbmd9IGltYWdldXJsPXtpbWFnZXVybH0gY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj57b3Vyc2VydmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcclxuICAgICAgICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcclxuICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICBvdmVyZmxvdy14OmhpZGRlblxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgIFxyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6NTBweCAwO1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYigyMzQsIDI0NywgMjUxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZ3JpZHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDoxMDAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLCAxZnIpO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1nYXA6NDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFjdHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiKDIzNCwgMjQ3LCAyNTEpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjgwMHB4KXtcclxuICAgICAgICAgICAgICAgIC5ncmlke1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC13aWR0aDo4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH0pXHJcbiAgXHJcbiAgU2VydmljZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICAgIFxyXG4gIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFzZVVybCsnL3NlcnZpY2VzLycrY29udGV4dC5xdWVyeS5pZCk7XHJcbiAgICBjb25zdCBpbnRybyA9IGF3YWl0IGZldGNoKGJhc2VVcmwrJy9zZXJ2aWNlaW50cm8vJytjb250ZXh0LnF1ZXJ5LmlkKTtcclxuICAgICBcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdG90YWxSZXMgOiBhd2FpdCByZXMuanNvbigpLFxyXG4gICAgICAgIGludHJvIDogYXdhaXQgaW50cm8uanNvbigpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxuICBcclxuICAgXHJcbn1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VydmljZSJdfQ== */\n/*@ sourceURL=C:\\\\javascript\\\\techronx\\\\techronxnew\\\\pages\\\\home.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4022857198",
    __self: _this
  }, ".container.jsx-3106475822{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 0;background:rgb(234,247,251);}.grid.jsx-3106475822{max-width:1000px;width:100%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:40px;}.contact.jsx-3106475822{background:rgb(234,247,251);width:100%;height:100vh;padding-top:200px;}@media(max-width:800px){.grid.jsx-3106475822{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-gap:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxqYXZhc2NyaXB0XFx0ZWNocm9ueFxcdGVjaHJvbnhuZXdcXHBhZ2VzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFUyxBQUsyQixBQVVNLEFBT2EsQUFTZixXQXpCRixBQTBCSSxNQWhCTixXQUNFLEFBTUYsV0FDRSxFQU53QixXQU9uQixrQkFDckIsT0FQaUIsUUFaUSxBQTBCSSxNQWI3Qix3RUFaZ0MsQUEwQkksMkhBekJkLEFBMEJBLDZGQXpCSixBQTBCRyxjQUVDLENBMUJ2Qiw0QkFBQyxnRUEyQkkiLCJmaWxlIjoiQzpcXGphdmFzY3JpcHRcXHRlY2hyb254XFx0ZWNocm9ueG5ld1xccGFnZXNcXGhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGJhc2VVcmwgfSBmcm9tIFwiLi4vY29uZmlnL2Jhc2V1cmxcIjtcclxuaW1wb3J0IEludHJvIGZyb20gXCIuLi9jb21wb25lbnQvU29sdXRpb24vSW50cm9cIjtcclxuaW1wb3J0IFNvbHV0aW9ucyBmcm9tIFwiLi4vY29tcG9uZW50L1NvbHV0aW9uL1NvbHV0aW9uXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnQvSG9tZS9Db250YWN0XCI7XHJcbmNvbnN0IFNlcnZpY2UgPSB3aXRoUm91dGVyKChwcm9wcyk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhLmludHJvLmRhdGFbMF0uaGVhZGluZylcclxuXHJcblxyXG4gICAgY29uc3Qgb3Vyc2VydmljZSA9IHByb3BzLmRhdGEudG90YWxSZXMuZGF0YS5tYXAoKHNlcnZpY2UsaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIDxTb2x1dGlvbnMgdGh1bWJuYWlsPXtzZXJ2aWNlLmltYWdldXJsfSBoZWFkaW5nPXtzZXJ2aWNlLmhlYWRpbmd9IGNvbnRlbnQ9e3NlcnZpY2UuZGVzY3JpcHRpb259ICAvPlxyXG4gICAgICAgIClcclxuICAgICB9KVxyXG5cclxuICAgICBjb25zdCBoZWFkaW5nID0gcHJvcHMuZGF0YS5pbnRyby5kYXRhWzBdLmhlYWRpbmc7XHJcbiAgICAgY29uc3QgaW1hZ2V1cmwgPSBwcm9wcy5kYXRhLmludHJvLmRhdGFbMF0uaW1hZ2V1cmw7XHJcbiAgICAgY29uc3QgY29udGVudCA9IHByb3BzLmRhdGEuaW50cm8uZGF0YVswXS5jb250ZW50O1xyXG4gICAgIGNvbnN0IHNlcnZpY2VpZCA9IHByb3BzLmRhdGEuaW50cm8uZGF0YVswXS5zZXJ2aWNlaWQ7XHJcblxyXG4gICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly90ZWNocm9ueC5jb20vaG9tZT9pZD1cIitzZXJ2aWNlaWRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtoZWFkaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17Y29udGVudH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17aGVhZGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdldXJsfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2hlYWRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17aW1hZ2V1cmx9IC8+XHJcblxyXG5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICA8SW50cm8gaGVhZGluZz17aGVhZGluZ30gaW1hZ2V1cmw9e2ltYWdldXJsfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPntvdXJzZXJ2aWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxyXG4gICAgICAgICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgIG92ZXJmbG93LXg6aGlkZGVuXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzo1MHB4IDA7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiKDIzNCwgMjQ3LCAyNTEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5ncmlke1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjEwMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgICBncmlkLWdhcDo0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWN0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjM0LCAyNDcsIDI1MSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgLmdyaWR7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOjgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfSlcclxuICBcclxuICBTZXJ2aWNlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgICAgXHJcbiAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChiYXNlVXJsKycvc2VydmljZXMvJytjb250ZXh0LnF1ZXJ5LmlkKTtcclxuICAgIGNvbnN0IGludHJvID0gYXdhaXQgZmV0Y2goYmFzZVVybCsnL3NlcnZpY2VpbnRyby8nK2NvbnRleHQucXVlcnkuaWQpO1xyXG4gICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB0b3RhbFJlcyA6IGF3YWl0IHJlcy5qc29uKCksXHJcbiAgICAgICAgaW50cm8gOiBhd2FpdCBpbnRyby5qc29uKClcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG4gIFxyXG4gICBcclxufVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBTZXJ2aWNlIl19 */\n/*@ sourceURL=C:\\\\javascript\\\\techronx\\\\techronxnew\\\\pages\\\\home.js */"));
});
_c2 = Service;

Service.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var res, intro, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(_config_baseurl__WEBPACK_IMPORTED_MODULE_7__["baseUrl"] + '/services/' + context.query.id);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return fetch(_config_baseurl__WEBPACK_IMPORTED_MODULE_7__["baseUrl"] + '/serviceintro/' + context.query.id);

          case 5:
            intro = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            _context.t0 = _context.sent;
            _context.next = 11;
            return intro.json();

          case 11:
            _context.t1 = _context.sent;
            data = {
              totalRes: _context.t0,
              intro: _context.t1
            };
            return _context.abrupt("return", {
              data: data
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Service);

var _c, _c2;

$RefreshReg$(_c, "Service$withRouter");
$RefreshReg$(_c2, "Service");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJTZXJ2aWNlIiwid2l0aFJvdXRlciIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpbnRybyIsImhlYWRpbmciLCJvdXJzZXJ2aWNlIiwidG90YWxSZXMiLCJtYXAiLCJzZXJ2aWNlIiwiaW5kZXgiLCJpbWFnZXVybCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInNlcnZpY2VpZCIsInVybCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJmZXRjaCIsImJhc2VVcmwiLCJxdWVyeSIsImlkIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDhEQUFVLE1BQUMsWUFBQ0MsS0FBRCxFQUFVO0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJELElBQWpCLENBQXNCLENBQXRCLEVBQXlCRSxPQUFyQztBQUdBLE1BQU1DLFVBQVUsR0FBR04sS0FBSyxDQUFDRyxJQUFOLENBQVdJLFFBQVgsQ0FBb0JKLElBQXBCLENBQXlCSyxHQUF6QixDQUE2QixVQUFDQyxPQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDL0QsV0FDRyxNQUFDLG9FQUFEO0FBQVcsZUFBUyxFQUFFRCxPQUFPLENBQUNFLFFBQTlCO0FBQXdDLGFBQU8sRUFBRUYsT0FBTyxDQUFDSixPQUF6RDtBQUFrRSxhQUFPLEVBQUVJLE9BQU8sQ0FBQ0csV0FBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURIO0FBR0YsR0FKaUIsQ0FBbkI7QUFNQyxNQUFNUCxPQUFPLEdBQUdMLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLENBQWlCRCxJQUFqQixDQUFzQixDQUF0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LENBdEJMLEVBNEJNO0FBQUEsd0NBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsQ0E1Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMHRQQUhGO0FBOEZELENBOUd1QixDQUExQjtNQUFNUixPOztBQWdISkEsT0FBTyxDQUFDa0IsZUFBUjtBQUFBLDhMQUEwQixpQkFBZUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdOQyxLQUFLLENBQUNDLHVEQUFPLEdBQUMsWUFBUixHQUFxQkYsT0FBTyxDQUFDRyxLQUFSLENBQWNDLEVBQXBDLENBSEM7O0FBQUE7QUFHbEJDLGVBSGtCO0FBQUE7QUFBQSxtQkFJSkosS0FBSyxDQUFDQyx1REFBTyxHQUFDLGdCQUFSLEdBQXlCRixPQUFPLENBQUNHLEtBQVIsQ0FBY0MsRUFBeEMsQ0FKRDs7QUFBQTtBQUlsQmpCLGlCQUprQjtBQUFBO0FBQUEsbUJBT0hrQixHQUFHLENBQUNDLElBQUosRUFQRzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFRTm5CLEtBQUssQ0FBQ21CLElBQU4sRUFSTTs7QUFBQTtBQUFBO0FBTWxCcEIsZ0JBTmtCO0FBT3BCSSxzQkFQb0I7QUFRcEJILG1CQVJvQjtBQUFBO0FBQUEsNkNBWWpCO0FBQ0hELGtCQUFJLEVBQUpBO0FBREcsYUFaaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUJlTCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmViMzVlN2ZiMmVlODk0YTlkMWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGJhc2VVcmwgfSBmcm9tIFwiLi4vY29uZmlnL2Jhc2V1cmxcIjtcclxuaW1wb3J0IEludHJvIGZyb20gXCIuLi9jb21wb25lbnQvU29sdXRpb24vSW50cm9cIjtcclxuaW1wb3J0IFNvbHV0aW9ucyBmcm9tIFwiLi4vY29tcG9uZW50L1NvbHV0aW9uL1NvbHV0aW9uXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnQvSG9tZS9Db250YWN0XCI7XHJcbmNvbnN0IFNlcnZpY2UgPSB3aXRoUm91dGVyKChwcm9wcyk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhLmludHJvLmRhdGFbMF0uaGVhZGluZylcclxuXHJcblxyXG4gICAgY29uc3Qgb3Vyc2VydmljZSA9IHByb3BzLmRhdGEudG90YWxSZXMuZGF0YS5tYXAoKHNlcnZpY2UsaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIDxTb2x1dGlvbnMgdGh1bWJuYWlsPXtzZXJ2aWNlLmltYWdldXJsfSBoZWFkaW5nPXtzZXJ2aWNlLmhlYWRpbmd9IGNvbnRlbnQ9e3NlcnZpY2UuZGVzY3JpcHRpb259ICAvPlxyXG4gICAgICAgIClcclxuICAgICB9KVxyXG5cclxuICAgICBjb25zdCBoZWFkaW5nID0gcHJvcHMuZGF0YS5pbnRyby5kYXRhWzBdLmhlYWRpbmc7XHJcbiAgICAgY29uc3QgaW1hZ2V1cmwgPSBwcm9wcy5kYXRhLmludHJvLmRhdGFbMF0uaW1hZ2V1cmw7XHJcbiAgICAgY29uc3QgY29udGVudCA9IHByb3BzLmRhdGEuaW50cm8uZGF0YVswXS5jb250ZW50O1xyXG4gICAgIGNvbnN0IHNlcnZpY2VpZCA9IHByb3BzLmRhdGEuaW50cm8uZGF0YVswXS5zZXJ2aWNlaWQ7XHJcblxyXG4gICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly90ZWNocm9ueC5jb20vaG9tZT9pZD1cIitzZXJ2aWNlaWRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtoZWFkaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17Y29udGVudH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17aGVhZGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdldXJsfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2hlYWRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17aW1hZ2V1cmx9IC8+XHJcblxyXG5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICA8SW50cm8gaGVhZGluZz17aGVhZGluZ30gaW1hZ2V1cmw9e2ltYWdldXJsfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPntvdXJzZXJ2aWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxyXG4gICAgICAgICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgIG92ZXJmbG93LXg6aGlkZGVuXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzo1MHB4IDA7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiKDIzNCwgMjQ3LCAyNTEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5ncmlke1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjEwMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgICBncmlkLWdhcDo0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWN0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjM0LCAyNDcsIDI1MSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgLmdyaWR7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOjgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfSlcclxuICBcclxuICBTZXJ2aWNlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgICAgXHJcbiAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChiYXNlVXJsKycvc2VydmljZXMvJytjb250ZXh0LnF1ZXJ5LmlkKTtcclxuICAgIGNvbnN0IGludHJvID0gYXdhaXQgZmV0Y2goYmFzZVVybCsnL3NlcnZpY2VpbnRyby8nK2NvbnRleHQucXVlcnkuaWQpO1xyXG4gICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB0b3RhbFJlcyA6IGF3YWl0IHJlcy5qc29uKCksXHJcbiAgICAgICAgaW50cm8gOiBhd2FpdCBpbnRyby5qc29uKClcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG4gIFxyXG4gICBcclxufVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBTZXJ2aWNlIl0sInNvdXJjZVJvb3QiOiIifQ==