self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Filter/Filter.js":
/*!**************************************************!*\
  !*** ./src/components/Projects/Filter/Filter.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_react_website_react_website_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FilterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterStyles */ "./src/components/Projects/Filter/FilterStyles.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _FilterButton_FilterButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterButton/FilterButton */ "./src/components/Projects/Filter/FilterButton/FilterButton.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\react-website\\react-website\\src\\components\\Projects\\Filter\\Filter.js",
    _this = undefined;






var Filter = function Filter(props) {
  var addTag = function addTag(tag) {
    props.setCurrent([].concat((0,D_react_website_react_website_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(props.current), [tag]));
  };

  var deleteTag = function deleteTag(tag) {
    props.setCurrent(props.current.filter(function (e) {
      return e != tag;
    }));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterStyles__WEBPACK_IMPORTED_MODULE_3__.FilterContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterStyles__WEBPACK_IMPORTED_MODULE_3__.FilterText, {
      children: "Click the following tags to filter out the projects!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterStyles__WEBPACK_IMPORTED_MODULE_3__.FilterText, {
      children: "Hover over each project for more info and links!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterStyles__WEBPACK_IMPORTED_MODULE_3__.FilterTagsContainer, {
      children: (0,D_react_website_react_website_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(_constants_constants__WEBPACK_IMPORTED_MODULE_4__.allTags).map(function (tag, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterButton_FilterButton__WEBPACK_IMPORTED_MODULE_5__.default, {
          tag: tag,
          addTag: addTag,
          deleteTag: deleteTag
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_c = Filter;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

var _c;

$RefreshReg$(_c, "Filter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvRmlsdGVyL0ZpbHRlci5qcyJdLCJuYW1lcyI6WyJGaWx0ZXIiLCJwcm9wcyIsImFkZFRhZyIsInRhZyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwiZGVsZXRlVGFnIiwiZmlsdGVyIiwiZSIsImFsbFRhZ3MiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUVwQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDcEJGLFNBQUssQ0FBQ0csVUFBTiwySUFBcUJILEtBQUssQ0FBQ0ksT0FBM0IsSUFBb0NGLEdBQXBDO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxHQUFELEVBQVM7QUFDdkJGLFNBQUssQ0FBQ0csVUFBTixDQUFpQkgsS0FBSyxDQUFDSSxPQUFOLENBQWNFLE1BQWQsQ0FBc0IsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsSUFBSUwsR0FBVDtBQUFBLEtBQXZCLENBQWpCO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSw4REFBQywwREFBRDtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBT0ksOERBQUMsOERBQUQ7QUFBQSxnQkFDSyxnSUFBSU0seURBQUosRUFBYUMsR0FBYixDQUFpQixVQUFDUCxHQUFELEVBQU1RLEtBQU47QUFBQSw0QkFDViw4REFBQywrREFBRDtBQUNJLGFBQUcsRUFBRVIsR0FEVDtBQUdJLGdCQUFNLEVBQUVELE1BSFo7QUFJSSxtQkFBUyxFQUFFSTtBQUpmLFdBRVNLLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBOUJEOztLQUFNWCxNO0FBaUNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwZmExNDM1YjJkOTQ0ZWZhODY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXIsIEZpbHRlclRleHQsIEZpbHRlclRhZ3NDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJy4vRmlsdGVyU3R5bGVzJztcclxuaW1wb3J0IHsgYWxsVGFncyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgRmlsdGVyQnV0dG9uIGZyb20gJy4vRmlsdGVyQnV0dG9uL0ZpbHRlckJ1dHRvbic7XHJcblxyXG5jb25zdCBGaWx0ZXIgPSBwcm9wcyA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZFRhZyA9ICh0YWcpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXRDdXJyZW50KFsuLi5wcm9wcy5jdXJyZW50LCB0YWddKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFnID0gKHRhZykgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldEN1cnJlbnQocHJvcHMuY3VycmVudC5maWx0ZXIoIGUgPT4gZSAhPSB0YWcpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmlsdGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8RmlsdGVyVGV4dD5cclxuICAgICAgICAgICAgICAgIENsaWNrIHRoZSBmb2xsb3dpbmcgdGFncyB0byBmaWx0ZXIgb3V0IHRoZSBwcm9qZWN0cyFcclxuICAgICAgICAgICAgPC9GaWx0ZXJUZXh0PlxyXG4gICAgICAgICAgICA8RmlsdGVyVGV4dD5cclxuICAgICAgICAgICAgICAgIEhvdmVyIG92ZXIgZWFjaCBwcm9qZWN0IGZvciBtb3JlIGluZm8gYW5kIGxpbmtzIVxyXG4gICAgICAgICAgICA8L0ZpbHRlclRleHQ+XHJcbiAgICAgICAgICAgIDxGaWx0ZXJUYWdzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge1suLi5hbGxUYWdzXS5tYXAoKHRhZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZz17dGFnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnPXthZGRUYWd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFnPXtkZWxldGVUYWd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0ZpbHRlclRhZ3NDb250YWluZXI+XHJcbiAgICAgICAgPC9GaWx0ZXJDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=