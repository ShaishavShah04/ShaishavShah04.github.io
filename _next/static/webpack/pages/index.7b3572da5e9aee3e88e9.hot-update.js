self["webpackHotUpdate_N_E"]("pages/index",{

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
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCIsImFsbFRhZ3MiLCJTZXQiLCJmb3JFYWNoIiwicCIsInRlY2giLCJ0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0ksVUFBUSxvQ0FEWjtBQUVJLGlCQUFjLENBQUMseUtBQUQsRUFBMkssMkdBQTNLLENBRmxCO0FBR0ksVUFBTyxDQUFDLFFBQUQsRUFBVyxlQUFYLEVBQTRCLHFCQUE1QixFQUFtRCxvQkFBbkQsQ0FIWDtBQUlJLFVBQU8sa0RBSlg7QUFLSSxTQUFPO0FBTFgsQ0FEc0IsRUFRdEI7QUFDSSxVQUFRLDBCQURaO0FBRUksaUJBQWMsQ0FBQyxzSUFBRCxDQUZsQjtBQUdJLFVBQVEsQ0FBQyxNQUFELEVBQVEsVUFBUixFQUFtQix3QkFBbkIsQ0FIWjtBQUlJLFVBQU8sNERBSlg7QUFLSSxTQUFPO0FBTFgsQ0FSc0IsRUFldEI7QUFDSSxVQUFRLGNBRFo7QUFFSSxpQkFBYyxDQUFDLDhHQUFELEVBQWdILCtMQUFoSCxDQUZsQjtBQUdJLFVBQU8sQ0FBQyxRQUFELEVBQVcsZ0JBQVgsRUFBNkIsWUFBN0IsQ0FIWDtBQUlJLFVBQU8sZ0RBSlg7QUFLSSxTQUFPO0FBTFgsQ0Fmc0IsRUFxQm5CO0FBQ0MsVUFBUSw4QkFEVDtBQUVDLGlCQUFjLENBQUMsMklBQUQsRUFBNkksZ0dBQTdJLENBRmY7QUFHQyxVQUFPLENBQUMsZUFBRCxFQUFrQixZQUFsQixFQUFnQyxVQUFoQyxFQUE0QyxPQUE1QyxFQUFxRCxTQUFyRCxFQUFnRSxRQUFoRSxFQUEwRSxTQUExRSxDQUhSO0FBSUMsVUFBTyx5REFKUjtBQUtDLFNBQU87QUFMUixDQXJCbUIsRUEyQm5CO0FBQ0QsVUFBUSxvQkFEUDtBQUVELGlCQUFjLENBQUMsbUpBQUQsQ0FGYjtBQUdELFVBQU8sQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixLQUFyQixDQUhOO0FBSUQsVUFBTyxxREFKTjtBQUtELFNBQU87QUFMTixDQTNCbUIsQ0FBakI7QUFvQ0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsQ0FBckIsQyxDQVFQOztBQUNPLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxHQUFKLEVBQWhCO0FBRVBMLFFBQVEsQ0FBQ00sT0FBVCxDQUFrQixVQUFBQyxDQUFDLEVBQUk7QUFDckJBLEdBQUMsQ0FBQ0MsSUFBRixDQUFPRixPQUFQLENBQWdCLFVBQUFHLENBQUM7QUFBQSxXQUFJTCxPQUFPLENBQUNNLEdBQVIsQ0FBWUQsQ0FBWixDQUFKO0FBQUEsR0FBakI7QUFDRCxDQUZEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiMzU3MmRhNWU5YWVlM2U4OGU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICAgIFwibmFtZVwiOiBcIkFsZ29yaXRobWljIENyeXB0b0N1cnJlbmN5IFNjYW5uZXJcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpbXCJBIHNjcmlwdCBydW5uaW5nIG9uIGEgRUMyIGluc3RhbmNlIHRoYXQgc2NhbnMgdGhlIGNyeXB0b2N1cnJlbmN5IG1hcmtldHMgaG91cmx5LiBJdCBmZXRjaGVzIGRhdGEgZnJvbSBleGNoYW5nZXMgYW5kIGFuYWx5emVzIHRoZSBkYXRhIGZvciBwb3RlbnRpYWwgYnVsbGlzaCBpbmRpY2F0b3JzLlwiLFwiVGhlIHJlc3VsdHMgYXJlIGNvbXBhcmVkIHdpdGggcHJldmlvdXNseSBpc3N1ZWQgYWxlcnRzIHRvIHJlZHVjZSByZWR1bmRhbmN5LCBhbmQgYXJlIHRleHRlZCB0byBteSBudW1iZXIuXCJdLFxuICAgICAgXCJ0ZWNoXCI6W1wiUHl0aG9uXCIsIFwiQVdTIChIb3N0aW5nKVwiLCBcIkNDWFQgTGlicmFyeSAoRGF0YSlcIiwgXCJUd2lsaW8gKE1lc3NhZ2luZylcIl0sXG4gICAgICBcImxpbmtcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFpc2hhdlNoYWgwNC9DcnlwdG8tU2Nhbm5lclwiLFxuICAgICAgXCJpbWdcIjogXCIuL21lZGlhL3NjYW5uZXIucG5nXCJcbiAgfSwgXG4gIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhc2ggRmxvdyBNYW5hZ2VtZW50IEFwcFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOltcIlRoaXMgaXMgYW4gYW5kcm9pZCBhcHAgdGhhdCB1dGlsaXplcyBGaXJlYmFzZSdzIE9DUiBtb2RlbCB0byBzY2FuIHJlY2llcHRzIGFuZCBzdW1tYXJpemUgdGhlIHNwZW5kaW5nIGhhYml0cyBpbiBmb3JtIG9mIGEgcGllIGNoYXJ0LlwiXSxcbiAgICAgIFwidGVjaFwiOiBbXCJKYXZhXCIsXCJGaXJlYmFzZVwiLFwiTWFjaGluZSBMZWFybmluZyAoT0NSKVwiXSxcbiAgICAgIFwibGlua1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWlzaGF2U2hhaDA0L0Nhc2gtRmxvdy1NYW5hZ2VtZW50LUFwcFwiLFxuICAgICAgXCJpbWdcIjogXCIvbWVkaWEvYXBwLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICAgIFwibmFtZVwiOiBcIlN0b2NrIFdpZGdldFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOltcIlNlYXJjaCB1cCBhbnkgc3RvY2sgeW91IHdhbnQgYW5kIGZpbmQgcmVsZXZhbnQgaW5mb3JtYXRpb24gc3VjaCBhcyBsaXZlIHByaWNlcywgY2hhbmdlLCBkaXZpZGVuZCB5aWVsZCwgZXRjLlwiLFwiVGhlIHdpZGdldCBhbHNvIGNvbnRhaW5zIGFuIGFuaW1hdGVkIGdyYXBoIHdpdGggdGhlIHN0b2NrIHByaWNlLCBzdG9jay1zcGVjaWZpYyBuZXdzIGFydGljbGVzIGxpbmtzLCBhbmQgdHJlbmRpbmcgc3RvY2tzIHdvcmxkd2lkZS4gSnVzdCBlbnRlciB0aGUgc3RvY2sgdGlja2VyIHlvdSB3YW50IGludG8gdGhlIHNlYXJjaCBiYXIhXCJdLFxuICAgICAgXCJ0ZWNoXCI6W1wiUHl0aG9uXCIsIFwiQmVhdXRpZnVsU291cDRcIiwgXCJNYXRwbG90bGliXCJdLFxuICAgICAgXCJsaW5rXCI6XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaXNoYXZTaGFoMDQvU3RvY2stV2lkZ2V0XCIsXG4gICAgICBcImltZ1wiOiBcIm1lZGlhL3N0b2NrLXdpZGdldC5wbmdcIlxuICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJNZW1vcmllcyAtIEEgU29jaWFsIFBsYXRmb3JtXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6W1wiQSBmdWxseSByZXNwb25zaXZlIE1FUk4gc3RhY2sgYXBwbGljYXRpb24gd2hlcmUgdXNlcnMgY2FuIGNyZWF0ZSwgdmlldywgdXBkYXRlLCBkZWxldGUsIGFuZCBpbnRlcmFjdCB3aXRoIG1lbW9yaWVzIHNoYXJlZCBieSBvdGhlciB1c2Vycy5cIixcIlRoZSBiYWNrZW5kIChjcmVhdGVkIHVzaW5nIEV4cHJlc3MpIGNhbiBoYW5kbGUgYWxsIENSVUQgcmVxdWVzdHMgc2VudCBieSB0aGUgY2xpZW50LXNpZGUgZm9ybS5cIl0sXG4gICAgICBcInRlY2hcIjpbXCJNb25nb0RCIENsb3VkXCIsIFwiRXhwcmVzcyBKU1wiLCBcIlJlYWN0IEpTXCIsIFwiUmVkdXhcIiwgXCJOb2RlIEpTXCIsIFwiSGVyb2t1XCIsIFwiTmV0bGlmeVwiXSxcbiAgICAgIFwibGlua1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWlzaGF2U2hhaDA0L01FUk4tTWVtb3JpZXMtUHJvamVjdFwiLFxuICAgICAgXCJpbWdcIjogXCJtZWRpYS9zcy5wbmdcIlxuICB9LCB7XG4gICAgXCJuYW1lXCI6IFwiUGVyc29uYWwgUG9ydGZvbGlvXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOltcIk15IHBlcnNvbmFsIHBvcnRmb2xpbyB3ZWJzaXRlIGNyZWF0ZWQgdXNpbmcgUmVhY3QuIFRoZSB3ZWJzaXRlIGlzIGNvZGVkIHRvIHJlYWQgZGF0YSBmcm9tIGEgSlNPTiBmaWxlIHRvIGVhc2UgdXBkYXRpbmcuIFRoaXMgaXMgcHVyZWx5IGZyb250LWVuZC5cIl0sXG4gICAgXCJ0ZWNoXCI6W1wiUmVhY3QgSlNcIiwgXCJIVE1MXCIsIFwiQ1NTXCJdLFxuICAgIFwibGlua1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWlzaGF2U2hhaDA0L1BvcnRmb2xpby1XZWJzaXRlXCIsXG4gICAgXCJpbWdcIjogXCJtZWRpYS93ZWJzaXRlLlBOR1wiXG4gIH0gICAgICAgIFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU3RhcnRlZCBteSBDb21wdXRpbmcgU2NpZW5jZS9CdXNpbmVzcyBkZWdyZWUnIH0sXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtJywgfSxcbl07XG5cbi8vIFNldCBvZiBwcm9qZWN0c1xuZXhwb3J0IGNvbnN0IGFsbFRhZ3MgPSBuZXcgU2V0KCk7XG5cbnByb2plY3RzLmZvckVhY2goIHAgPT4ge1xuICBwLnRlY2guZm9yRWFjaCggdCA9PiBhbGxUYWdzLmFkZCh0KSlcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==