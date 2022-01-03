self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "RightSideBox": function() { return /* binding */ RightSideBox; },
/* harmony export */   "LeftSideBox": function() { return /* binding */ LeftSideBox; },
/* harmony export */   "TheOtherTitle": function() { return /* binding */ TheOtherTitle; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "sc-34v01m-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;display:flex;flex-direction:column;justify-content:space-between;margin-left:32px;margin-bottom:80px;@media ", "{margin-left:0px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "sc-34v01m-1"
})(["display:flex;flex-direction:row;background:#0F1624;border-radius:3px;@media ", "{}@media ", "{background:#0E131F;padding:4px;align-content:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var RightSideBox = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__RightSideBox",
  componentId: "sc-34v01m-2"
})(["display:flex;flex-direction:column;padding:2rem;border-right:1px solid grey;@media ", "{width:100px;}"], function (props) {
  return props.theme.breakpoints.md;
});
var LeftSideBox = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__LeftSideBox",
  componentId: "sc-34v01m-3"
})(["display:flex;flex-direction:column;padding:2rem;width:100%;@media ", "{padding:10px;}"], function (props) {
  return props.theme.breakpoints.md;
});
var TheOtherTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h5.withConfig({
  displayName: "TimeLineStyles__TheOtherTitle",
  componentId: "sc-34v01m-4"
})(["font-weight:bold;font-size:20px;letter-spacing:0.02em;margin-bottom:8px;color:grey;@media ", "{font-size:18px;margin-bottom:4px;}@media ", "{font-size:14px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "sc-34v01m-5"
})(["text-align:center;font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;flex-direction:column;width:80px;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;width:50px;}@media ", "{font-size:16px;line-height:24px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "sc-34v01m-6"
})(["-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));@media ", "{-webkit-mask-image:none;overflow:visible;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "sc-34v01m-7"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "sc-34v01m-8"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "sc-34v01m-9"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], function (props) {
  return props.active === props.index ? "1" : ".33";
}, function (props) {
  return props.active === props.index ? "scale(1.6)" : "scale(1)";
});
var CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "sc-34v01m-10"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkNhcm91c2VsSXRlbSIsIm1kIiwiUmlnaHRTaWRlQm94IiwiTGVmdFNpZGVCb3giLCJUaGVPdGhlclRpdGxlIiwiQ2Fyb3VzZWxJdGVtVGl0bGUiLCJDYXJvdXNlbEl0ZW1JbWciLCJDYXJvdXNlbEl0ZW1UZXh0IiwiQ2Fyb3VzZWxCdXR0b25zIiwiQ2Fyb3VzZWxCdXR0b24iLCJhY3RpdmUiLCJpbmRleCIsIkNhcm91c2VsQnV0dG9uRG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNExBVW5CLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQVZjLENBQXZCO0FBZUEsSUFBTUMsWUFBWSxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtT0FNZCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JHLEVBQTVCO0FBQUEsQ0FOUyxFQVNkLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQVRTLENBQWxCO0FBb0JBLElBQU1HLFlBQVksR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsOEdBTWQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRyxFQUE1QjtBQUFBLENBTlMsQ0FBbEI7QUFXQSxJQUFNRSxXQUFXLEdBQUdSLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhGQU1iLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkcsRUFBNUI7QUFBQSxDQU5RLENBQWpCO0FBWUEsSUFBTUcsYUFBYSxHQUFHVCxvRUFBSDtBQUFBO0FBQUE7QUFBQSxzS0FPZixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JHLEVBQTVCO0FBQUEsQ0FQVSxFQVlmLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQVpVLENBQW5CO0FBaUJBLElBQU1NLGlCQUFpQixHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSwwYUFlbkIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRyxFQUE1QjtBQUFBLENBZmMsRUFzQm5CLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQXRCYyxDQUF2QjtBQTJCQSxJQUFNTyxlQUFlLEdBQUdYLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdJQUVqQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FGWSxDQUFyQjtBQVFBLElBQU1RLGdCQUFnQixHQUFHWixtRUFBSDtBQUFBO0FBQUE7QUFBQSw0T0FPbEIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRyxFQUE1QjtBQUFBLENBUGEsRUFZbEIsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBWmEsQ0FBdEI7QUFrQkEsSUFBTVMsZUFBZSxHQUFHYixxRUFBSDtBQUFBO0FBQUE7QUFBQSxvSEFNakIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBTlksQ0FBckI7QUFhQSxJQUFNVSxjQUFjLEdBQUdkLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHlKQU9kLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNjLE1BQU4sS0FBaUJkLEtBQUssQ0FBQ2UsS0FBdkIsY0FBWDtBQUFBLENBUGMsRUFRWixVQUFDZixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDYyxNQUFOLEtBQWlCZCxLQUFLLENBQUNlLEtBQXZCLDRCQUFYO0FBQUEsQ0FSWSxDQUFwQjtBQWVBLElBQU1DLGlCQUFpQixHQUFHakIscUVBQUg7QUFBQTtBQUFBO0FBQUEsbUZBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAwZDYzMGQwMDU0ODgzNzc2Y2JkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xuICBwYWRkaW5nOiAwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gIH1cbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgYmFja2dyb3VuZDogIzBFMTMxRjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSaWdodFNpZGVCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5IDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExlZnRTaWRlQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBUaGVPdGhlclRpdGxlID0gc3R5bGVkLmg1YFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiBncmV5O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRpdGxlID0gc3R5bGVkLmg0YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODBweDtcbiAgLyogVGhpcyBncmFkaWVudCBpcyBkaWZmZXJlbnQgZHVlIHRvIHRoZSBzaXplIG9mIHRoZSBUaXRsZSBjb250YWluZXIsIGl0IG11c3QgdHJhbnNpdGlvbiBzb29uZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdGV4dCAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApKTtcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5gXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDI4OHB4O1xuXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGAxYCA6IGAuMzNgfTtcbiAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBzY2FsZSgxLjYpYCA6IGBzY2FsZSgxKWB9O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uRG90ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAzcHg7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9