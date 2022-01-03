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
})(["display:flex;flex-direction:column;padding:2rem;border-right:1px solid grey;"]);
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
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;flex-direction:column;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], function (props) {
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


/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; },
/* harmony export */   "allTags": function() { return /* binding */ allTags; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  "name": "Algorithmic CryptoCurrency Scanner",
  "description": ["A script running on a EC2 instance that scans the cryptocurrency markets hourly. It fetches data from exchanges and analyzes the data for potential bullish indicators.", "The results are compared with previously issued alerts to reduce redundancy, and are texted to my number."],
  "tech": ["Python", "AWS (Hosting)", "CCXT Library (Data)", "Twilio (Messaging)"],
  "link": "https://github.com/ShaishavShah04/Crypto-Scanner",
  "img": "./media/scanner.png"
}, {
  "name": "Cash Flow Management App",
  "description": ["This is an android app that utilizes Firebase's OCR model to scan reciepts and summarize the spending habits in form of a pie chart."],
  "tech": ["Java", "Firebase", "Machine Learning (OCR)"],
  "link": "https://github.com/ShaishavShah04/Cash-Flow-Management-App",
  "img": "/media/app.png"
}, {
  "name": "Stock Widget",
  "description": ["Search up any stock you want and find relevant information such as live prices, change, dividend yield, etc.", "The widget also contains an animated graph with the stock price, stock-specific news articles links, and trending stocks worldwide. Just enter the stock ticker you want into the search bar!"],
  "tech": ["Python", "BeautifulSoup4", "Matplotlib"],
  "link": "https://github.com/ShaishavShah04/Stock-Widget",
  "img": "media/stock-widget.png"
}, {
  "name": "Memories - A Social Platform",
  "description": ["A fully responsive MERN stack application where users can create, view, update, delete, and interact with memories shared by other users.", "The backend (created using Express) can handle all CRUD requests sent by the client-side form."],
  "tech": ["MongoDB Cloud", "Express JS", "React JS", "Redux", "Node JS", "Heroku", "Netlify"],
  "link": "https://github.com/ShaishavShah04/MERN-Memories-Project",
  "img": "media/ss.png"
}, {
  "name": "Personal Portfolio",
  "description": ["My personal portfolio website created using React. The website is coded to read data from a JSON file to ease updating. This is purely front-end."],
  "tech": ["React JS", "HTML", "CSS"],
  "link": "https://github.com/ShaishavShah04/Portfolio-Website",
  "img": "media/website.PNG"
}];
var TimeLineData = [{
  year: 2020,
  text: 'Started my Computing Science/Business degree'
}, {
  year: 2021,
  text: 'Worked as a freelance developer'
}, {
  year: 2022,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2023,
  text: 'Shared my projects with the world'
}, {
  year: 2024,
  text: 'Started my own platform'
}]; // Set of projects

var allTags = new Set();
projects.forEach(function (p) {
  p.tech.forEach(function (t) {
    return allTags.add(t);
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkNhcm91c2VsQ29udGFpbmVyIiwic3R5bGVkIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJDYXJvdXNlbEl0ZW0iLCJtZCIsIlJpZ2h0U2lkZUJveCIsIkxlZnRTaWRlQm94IiwiVGhlT3RoZXJUaXRsZSIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiYWN0aXZlIiwiaW5kZXgiLCJDYXJvdXNlbEJ1dHRvbkRvdCIsInByb2plY3RzIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiLCJhbGxUYWdzIiwiU2V0IiwiZm9yRWFjaCIsInAiLCJ0ZWNoIiwidCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRMQVVuQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FWYyxDQUF2QjtBQWVBLElBQU1DLFlBQVksR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsbU9BTWQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRyxFQUE1QjtBQUFBLENBTlMsRUFTZCxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FUUyxDQUFsQjtBQW9CQSxJQUFNRyxZQUFZLEdBQUdQLHFFQUFIO0FBQUE7QUFB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cGFnZXMvaW5kZXguZGVlODVkY2M5M2VkNWZjMzI4OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XG4gIHBhZGRpbmc6IDByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBiYWNrZ3JvdW5kOiAjMEUxMzFGO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZUJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXkgO1xuYDtcblxuZXhwb3J0IGNvbnN0IExlZnRTaWRlQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBUaGVPdGhlclRpdGxlID0gc3R5bGVkLmg1YFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiBncmV5O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRpdGxlID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogVGhpcyBncmFkaWVudCBpcyBkaWZmZXJlbnQgZHVlIHRvIHRoZSBzaXplIG9mIHRoZSBUaXRsZSBjb250YWluZXIsIGl0IG11c3QgdHJhbnNpdGlvbiBzb29uZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdGV4dCAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApKTtcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5gXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDI4OHB4O1xuXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGAxYCA6IGAuMzNgfTtcbiAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBzY2FsZSgxLjYpYCA6IGBzY2FsZSgxKWB9O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uRG90ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAzcHg7XG5gXG4iLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICAgIFwibmFtZVwiOiBcIkFsZ29yaXRobWljIENyeXB0b0N1cnJlbmN5IFNjYW5uZXJcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpbXCJBIHNjcmlwdCBydW5uaW5nIG9uIGEgRUMyIGluc3RhbmNlIHRoYXQgc2NhbnMgdGhlIGNyeXB0b2N1cnJlbmN5IG1hcmtldHMgaG91cmx5LiBJdCBmZXRjaGVzIGRhdGEgZnJvbSBleGNoYW5nZXMgYW5kIGFuYWx5emVzIHRoZSBkYXRhIGZvciBwb3RlbnRpYWwgYnVsbGlzaCBpbmRpY2F0b3JzLlwiLFwiVGhlIHJlc3VsdHMgYXJlIGNvbXBhcmVkIHdpdGggcHJldmlvdXNseSBpc3N1ZWQgYWxlcnRzIHRvIHJlZHVjZSByZWR1bmRhbmN5LCBhbmQgYXJlIHRleHRlZCB0byBteSBudW1iZXIuXCJdLFxuICAgICAgXCJ0ZWNoXCI6W1wiUHl0aG9uXCIsIFwiQVdTIChIb3N0aW5nKVwiLCBcIkNDWFQgTGlicmFyeSAoRGF0YSlcIiwgXCJUd2lsaW8gKE1lc3NhZ2luZylcIl0sXG4gICAgICBcImxpbmtcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFpc2hhdlNoYWgwNC9DcnlwdG8tU2Nhbm5lclwiLFxuICAgICAgXCJpbWdcIjogXCIuL21lZGlhL3NjYW5uZXIucG5nXCJcbiAgfSwgXG4gIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhc2ggRmxvdyBNYW5hZ2VtZW50IEFwcFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOltcIlRoaXMgaXMgYW4gYW5kcm9pZCBhcHAgdGhhdCB1dGlsaXplcyBGaXJlYmFzZSdzIE9DUiBtb2RlbCB0byBzY2FuIHJlY2llcHRzIGFuZCBzdW1tYXJpemUgdGhlIHNwZW5kaW5nIGhhYml0cyBpbiBmb3JtIG9mIGEgcGllIGNoYXJ0LlwiXSxcbiAgICAgIFwidGVjaFwiOiBbXCJKYXZhXCIsXCJGaXJlYmFzZVwiLFwiTWFjaGluZSBMZWFybmluZyAoT0NSKVwiXSxcbiAgICAgIFwibGlua1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWlzaGF2U2hhaDA0L0Nhc2gtRmxvdy1NYW5hZ2VtZW50LUFwcFwiLFxuICAgICAgXCJpbWdcIjogXCIvbWVkaWEvYXBwLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICAgIFwibmFtZVwiOiBcIlN0b2NrIFdpZGdldFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOltcIlNlYXJjaCB1cCBhbnkgc3RvY2sgeW91IHdhbnQgYW5kIGZpbmQgcmVsZXZhbnQgaW5mb3JtYXRpb24gc3VjaCBhcyBsaXZlIHByaWNlcywgY2hhbmdlLCBkaXZpZGVuZCB5aWVsZCwgZXRjLlwiLFwiVGhlIHdpZGdldCBhbHNvIGNvbnRhaW5zIGFuIGFuaW1hdGVkIGdyYXBoIHdpdGggdGhlIHN0b2NrIHByaWNlLCBzdG9jay1zcGVjaWZpYyBuZXdzIGFydGljbGVzIGxpbmtzLCBhbmQgdHJlbmRpbmcgc3RvY2tzIHdvcmxkd2lkZS4gSnVzdCBlbnRlciB0aGUgc3RvY2sgdGlja2VyIHlvdSB3YW50IGludG8gdGhlIHNlYXJjaCBiYXIhXCJdLFxuICAgICAgXCJ0ZWNoXCI6W1wiUHl0aG9uXCIsIFwiQmVhdXRpZnVsU291cDRcIiwgXCJNYXRwbG90bGliXCJdLFxuICAgICAgXCJsaW5rXCI6XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaXNoYXZTaGFoMDQvU3RvY2stV2lkZ2V0XCIsXG4gICAgICBcImltZ1wiOiBcIm1lZGlhL3N0b2NrLXdpZGdldC5wbmdcIlxuICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJNZW1vcmllcyAtIEEgU29jaWFsIFBsYXRmb3JtXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6W1wiQSBmdWxseSByZXNwb25zaXZlIE1FUk4gc3RhY2sgYXBwbGljYXRpb24gd2hlcmUgdXNlcnMgY2FuIGNyZWF0ZSwgdmlldywgdXBkYXRlLCBkZWxldGUsIGFuZCBpbnRlcmFjdCB3aXRoIG1lbW9yaWVzIHNoYXJlZCBieSBvdGhlciB1c2Vycy5cIixcIlRoZSBiYWNrZW5kIChjcmVhdGVkIHVzaW5nIEV4cHJlc3MpIGNhbiBoYW5kbGUgYWxsIENSVUQgcmVxdWVzdHMgc2VudCBieSB0aGUgY2xpZW50LXNpZGUgZm9ybS5cIl0sXG4gICAgICBcInRlY2hcIjpbXCJNb25nb0RCIENsb3VkXCIsIFwiRXhwcmVzcyBKU1wiLCBcIlJlYWN0IEpTXCIsIFwiUmVkdXhcIiwgXCJOb2RlIEpTXCIsIFwiSGVyb2t1XCIsIFwiTmV0bGlmeVwiXSxcbiAgICAgIFwibGlua1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWlzaGF2U2hhaDA0L01FUk4tTWVtb3JpZXMtUHJvamVjdFwiLFxuICAgICAgXCJpbWdcIjogXCJtZWRpYS9zcy5wbmdcIlxuICB9LCB7XG4gICAgXCJuYW1lXCI6IFwiUGVyc29uYWwgUG9ydGZvbGlvXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOltcIk15IHBlcnNvbmFsIHBvcnRmb2xpbyB3ZWJzaXRlIGNyZWF0ZWQgdXNpbmcgUmVhY3QuIFRoZSB3ZWJzaXRlIGlzIGNvZGVkIHRvIHJlYWQgZGF0YSBmcm9tIGEgSlNPTiBmaWxlIHRvIGVhc2UgdXBkYXRpbmcuIFRoaXMgaXMgcHVyZWx5IGZyb250LWVuZC5cIl0sXG4gICAgXCJ0ZWNoXCI6W1wiUmVhY3QgSlNcIiwgXCJIVE1MXCIsIFwiQ1NTXCJdLFxuICAgIFwibGlua1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWlzaGF2U2hhaDA0L1BvcnRmb2xpby1XZWJzaXRlXCIsXG4gICAgXCJpbWdcIjogXCJtZWRpYS93ZWJzaXRlLlBOR1wiXG4gIH0gICAgICAgIFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU3RhcnRlZCBteSBDb21wdXRpbmcgU2NpZW5jZS9CdXNpbmVzcyBkZWdyZWUnIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXG4gIHsgeWVhcjogMjAyMywgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXG4gIHsgeWVhcjogMjAyNCwgdGV4dDogJ1N0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtJywgfSxcbl07XG5cbi8vIFNldCBvZiBwcm9qZWN0c1xuZXhwb3J0IGNvbnN0IGFsbFRhZ3MgPSBuZXcgU2V0KCk7XG5cbnByb2plY3RzLmZvckVhY2goIHAgPT4ge1xuICBwLnRlY2guZm9yRWFjaCggdCA9PiBhbGxUYWdzLmFkZCh0KSlcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==