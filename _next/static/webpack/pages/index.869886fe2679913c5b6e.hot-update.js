self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Card/Card.js":
/*!**********************************************!*\
  !*** ./src/components/Projects/Card/Card.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animate-height */ "./node_modules/react-animate-height/lib/AnimateHeight.js");
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\react-website\\react-website\\src\\components\\Projects\\Card\\Card.js",
    _this = undefined,
    _s = $RefreshSig$();






var Card = function Card(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isExtended = _useState[0],
      setExtended = _useState[1];

  var p = props.project;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {
    onMouseEnter: function onMouseEnter(e) {
      return setExtended(true);
    },
    onMouseLeave: function onMouseLeave(e) {
      return setExtended(false);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Img, {
      src: p.img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TitleContent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.HeaderThree, {
        children: p.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animate_height__WEBPACK_IMPORTED_MODULE_2__.default, {
      height: isExtended ? "auto" : 0,
      duration: 500,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), p.description.map(function (sentence, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.CardInfo, {
          children: [sentence, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 82
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 87
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 54
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        href: p.link,
        style: {
          color: 'whitesmoke'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaLink, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 82
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Hr, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.TagList, {
      children: p.tech.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_3__.Tag, {
          children: item
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_s(Card, "6A2fLZmClHvdM8TM5Po3l5cWdq0=");

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvQ2FyZC9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNFeHRlbmRlZCIsInNldEV4dGVuZGVkIiwicCIsInByb2plY3QiLCJlIiwiaW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFwIiwic2VudGVuY2UiLCJpIiwibGluayIsImNvbG9yIiwidGVjaCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRWNDLCtDQUFRLENBQUMsS0FBRCxDQUZ0QjtBQUFBLE1BRWJDLFVBRmE7QUFBQSxNQUVEQyxXQUZDOztBQUdwQixNQUFNQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssT0FBaEI7QUFFQSxzQkFFSSw4REFBQyxxREFBRDtBQUFVLGdCQUFZLEVBQUUsc0JBQUFDLENBQUM7QUFBQSxhQUFJSCxXQUFXLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FBekI7QUFBZ0QsZ0JBQVksRUFBRSxzQkFBQUcsQ0FBQztBQUFBLGFBQUlILFdBQVcsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUEvRDtBQUFBLDRCQUVJLDhEQUFDLGdEQUFEO0FBQUssU0FBRyxFQUFFQyxDQUFDLENBQUNHO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0ksOERBQUMseURBQUQ7QUFBQSw2QkFDSSw4REFBQyx3REFBRDtBQUFBLGtCQUFjSCxDQUFDLENBQUNJO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFPSSw4REFBQyx5REFBRDtBQUFlLFlBQU0sRUFBR04sVUFBVSxHQUFHLE1BQUgsR0FBWSxDQUE5QztBQUFrRCxjQUFRLEVBQUUsR0FBNUQ7QUFBQSw4QkFDSSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS0UsQ0FBQyxDQUFDSyxXQUFGLENBQWNDLEdBQWQsQ0FBbUIsVUFBQ0MsUUFBRCxFQUFXQyxDQUFYO0FBQUEsNEJBQWlCLDhEQUFDLHFEQUFEO0FBQUEscUJBQW1CRCxRQUFuQixlQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE1QixlQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFqQztBQUFBLFdBQWVDLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBakI7QUFBQSxPQUFuQixDQUZMLGVBR0k7QUFBRyxjQUFNLEVBQUMsUUFBVjtBQUFtQixZQUFJLEVBQUVSLENBQUMsQ0FBQ1MsSUFBM0I7QUFBaUMsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXhDO0FBQUEsK0JBQWlFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBSUksOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBYUksOERBQUMsb0RBQUQ7QUFBQSxnQkFDS1YsQ0FBQyxDQUFDVyxJQUFGLENBQU9MLEdBQVAsQ0FBVyxVQUFDTSxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDUiw4REFBQyxnREFBRDtBQUFBLG9CQUFrQkQ7QUFBbEIsV0FBVUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBWDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQXdCSCxDQTdCRDs7R0FBTWxCLEk7O0tBQUFBLEk7QUErQk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODY5ODg2ZmUyNjc5OTEzYzViNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFMaW5rIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCJcclxuaW1wb3J0IEFuaW1hdGVIZWlnaHQgZnJvbSAncmVhY3QtYW5pbWF0ZS1oZWlnaHQnO1xyXG5cclxuaW1wb3J0IHsgQmxvZ0NhcmQsIENhcmRJbmZvLCBIZWFkZXJUaHJlZSwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBJbWcgfSBmcm9tICcuLi9Qcm9qZWN0c1N0eWxlcyc7XHJcblxyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtpc0V4dGVuZGVkLCBzZXRFeHRlbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBwID0gcHJvcHMucHJvamVjdDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCbG9nQ2FyZCBvbk1vdXNlRW50ZXI9e2UgPT4gc2V0RXh0ZW5kZWQodHJ1ZSl9IG9uTW91c2VMZWF2ZT17ZSA9PiBzZXRFeHRlbmRlZChmYWxzZSl9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEltZyBzcmM9e3AuaW1nfSAvPlxyXG4gICAgICAgICAgICA8VGl0bGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclRocmVlPntwLm5hbWV9PC9IZWFkZXJUaHJlZT5cclxuICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICA8QW5pbWF0ZUhlaWdodCBoZWlnaHQ9eyBpc0V4dGVuZGVkID8gXCJhdXRvXCIgOiAwIH0gZHVyYXRpb249ezUwMH0+XHJcbiAgICAgICAgICAgICAgICA8SHIgLz5cclxuICAgICAgICAgICAgICAgIHtwLmRlc2NyaXB0aW9uLm1hcCggKHNlbnRlbmNlLCBpKSA9PiA8Q2FyZEluZm8ga2V5PXtpfT57c2VudGVuY2V9PGJyLz48YnIvPjwvQ2FyZEluZm8+ICApfVxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17cC5saW5rfSBzdHlsZT17eyBjb2xvcjogJ3doaXRlc21va2UnIH19PjxGYUxpbmsgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8SHIgLz5cclxuICAgICAgICAgICAgPC9BbmltYXRlSGVpZ2h0PlxyXG4gICAgICAgICAgICA8VGFnTGlzdD5cclxuICAgICAgICAgICAgICAgIHtwLnRlY2gubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWcga2V5PXtpbmRleH0+e2l0ZW19PC9UYWc+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UYWdMaXN0PlxyXG4gICAgICAgIDwvQmxvZ0NhcmQ+XHJcblxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=