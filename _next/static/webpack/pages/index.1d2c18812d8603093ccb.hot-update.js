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
  text: 'Started my degree at University of Alberta',
  subtitle: 'Specialization in Computing Science with Business Minor || 2020 - 2024',
  details: ['Relevant Courses: Practical Programming Methadology, Software Engineering, Databases, Algorithms and Data Structures', 'GPA: 4.0 / 4.0']
}, {
  year: 2021,
  text: 'Worked as a Programming Instructor',
  subtitle: 'Discover Coding || Apr 2021 - Sep 2021',
  details: ['Working as a Coding Instructor at a local academy, I strengthened programming fundamentals of students by delivering lesson plans relating to HTML, CSS, JS, and block coding (varying by age).', 'I leveraged my skills to further the academy\'s vision of equipping youth for the digital economy.']
}, {
  year: 2020,
  text: 'Started my Computing Science/Business degree',
  subtitle: 'Specialization in Computing Science with Business Minor || 2020 - 2024',
  details: ['Relevant Courses: Practical Programming Methadology, Software Engineering, Databases, Algorithms and Data Structures', 'GPA: 4.0 / 4.0']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCIsInN1YnRpdGxlIiwiZGV0YWlscyIsImFsbFRhZ3MiLCJTZXQiLCJmb3JFYWNoIiwicCIsInRlY2giLCJ0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0ksVUFBUSxvQ0FEWjtBQUVJLGlCQUFjLENBQUMseUtBQUQsRUFBMkssMkdBQTNLLENBRmxCO0FBR0ksVUFBTyxDQUFDLFFBQUQsRUFBVyxlQUFYLEVBQTRCLHFCQUE1QixFQUFtRCxvQkFBbkQsQ0FIWDtBQUlJLFVBQU8sa0RBSlg7QUFLSSxTQUFPO0FBTFgsQ0FEc0IsRUFRdEI7QUFDSSxVQUFRLDBCQURaO0FBRUksaUJBQWMsQ0FBQyxzSUFBRCxDQUZsQjtBQUdJLFVBQVEsQ0FBQyxNQUFELEVBQVEsVUFBUixFQUFtQix3QkFBbkIsQ0FIWjtBQUlJLFVBQU8sNERBSlg7QUFLSSxTQUFPO0FBTFgsQ0FSc0IsRUFldEI7QUFDSSxVQUFRLGNBRFo7QUFFSSxpQkFBYyxDQUFDLDhHQUFELEVBQWdILCtMQUFoSCxDQUZsQjtBQUdJLFVBQU8sQ0FBQyxRQUFELEVBQVcsZ0JBQVgsRUFBNkIsWUFBN0IsQ0FIWDtBQUlJLFVBQU8sZ0RBSlg7QUFLSSxTQUFPO0FBTFgsQ0Fmc0IsRUFxQm5CO0FBQ0MsVUFBUSw4QkFEVDtBQUVDLGlCQUFjLENBQUMsMklBQUQsRUFBNkksZ0dBQTdJLENBRmY7QUFHQyxVQUFPLENBQUMsZUFBRCxFQUFrQixZQUFsQixFQUFnQyxVQUFoQyxFQUE0QyxPQUE1QyxFQUFxRCxTQUFyRCxFQUFnRSxRQUFoRSxFQUEwRSxTQUExRSxDQUhSO0FBSUMsVUFBTyx5REFKUjtBQUtDLFNBQU87QUFMUixDQXJCbUIsRUEyQm5CO0FBQ0QsVUFBUSxvQkFEUDtBQUVELGlCQUFjLENBQUMsbUpBQUQsQ0FGYjtBQUdELFVBQU8sQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixLQUFyQixDQUhOO0FBSUQsVUFBTyxxREFKTjtBQUtELFNBQU87QUFMTixDQTNCbUIsQ0FBakI7QUFvQ0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRSw0Q0FBcEI7QUFBa0VDLFVBQVEsRUFBRSx3RUFBNUU7QUFBc0pDLFNBQU8sRUFBRSxDQUFDLHNIQUFELEVBQXdILGdCQUF4SDtBQUEvSixDQUQwQixFQUUxQjtBQUFFSCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUUsb0NBQXBCO0FBQTBEQyxVQUFRLEVBQUUsd0NBQXBFO0FBQThHQyxTQUFPLEVBQUUsQ0FBQyxpTUFBRCxFQUFtTSxvR0FBbk07QUFBdkgsQ0FGMEIsRUFHMUI7QUFBRUgsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFLDhDQUFwQjtBQUFvRUMsVUFBUSxFQUFFLHdFQUE5RTtBQUF3SkMsU0FBTyxFQUFFLENBQUMsc0hBQUQsRUFBd0gsZ0JBQXhIO0FBQWpLLENBSDBCLENBQXJCLEMsQ0FNUDs7QUFDTyxJQUFNQyxPQUFPLEdBQUcsSUFBSUMsR0FBSixFQUFoQjtBQUVQUCxRQUFRLENBQUNRLE9BQVQsQ0FBa0IsVUFBQUMsQ0FBQyxFQUFJO0FBQ3JCQSxHQUFDLENBQUNDLElBQUYsQ0FBT0YsT0FBUCxDQUFnQixVQUFBRyxDQUFDO0FBQUEsV0FBSUwsT0FBTyxDQUFDTSxHQUFSLENBQVlELENBQVosQ0FBSjtBQUFBLEdBQWpCO0FBQ0QsQ0FGRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDJjMTg4MTJkODYwMzA5M2NjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgICBcIm5hbWVcIjogXCJBbGdvcml0aG1pYyBDcnlwdG9DdXJyZW5jeSBTY2FubmVyXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6W1wiQSBzY3JpcHQgcnVubmluZyBvbiBhIEVDMiBpbnN0YW5jZSB0aGF0IHNjYW5zIHRoZSBjcnlwdG9jdXJyZW5jeSBtYXJrZXRzIGhvdXJseS4gSXQgZmV0Y2hlcyBkYXRhIGZyb20gZXhjaGFuZ2VzIGFuZCBhbmFseXplcyB0aGUgZGF0YSBmb3IgcG90ZW50aWFsIGJ1bGxpc2ggaW5kaWNhdG9ycy5cIixcIlRoZSByZXN1bHRzIGFyZSBjb21wYXJlZCB3aXRoIHByZXZpb3VzbHkgaXNzdWVkIGFsZXJ0cyB0byByZWR1Y2UgcmVkdW5kYW5jeSwgYW5kIGFyZSB0ZXh0ZWQgdG8gbXkgbnVtYmVyLlwiXSxcbiAgICAgIFwidGVjaFwiOltcIlB5dGhvblwiLCBcIkFXUyAoSG9zdGluZylcIiwgXCJDQ1hUIExpYnJhcnkgKERhdGEpXCIsIFwiVHdpbGlvIChNZXNzYWdpbmcpXCJdLFxuICAgICAgXCJsaW5rXCI6XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaXNoYXZTaGFoMDQvQ3J5cHRvLVNjYW5uZXJcIixcbiAgICAgIFwiaW1nXCI6IFwiLi9tZWRpYS9zY2FubmVyLnBuZ1wiXG4gIH0sIFxuICB7XG4gICAgICBcIm5hbWVcIjogXCJDYXNoIEZsb3cgTWFuYWdlbWVudCBBcHBcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpbXCJUaGlzIGlzIGFuIGFuZHJvaWQgYXBwIHRoYXQgdXRpbGl6ZXMgRmlyZWJhc2UncyBPQ1IgbW9kZWwgdG8gc2NhbiByZWNpZXB0cyBhbmQgc3VtbWFyaXplIHRoZSBzcGVuZGluZyBoYWJpdHMgaW4gZm9ybSBvZiBhIHBpZSBjaGFydC5cIl0sXG4gICAgICBcInRlY2hcIjogW1wiSmF2YVwiLFwiRmlyZWJhc2VcIixcIk1hY2hpbmUgTGVhcm5pbmcgKE9DUilcIl0sXG4gICAgICBcImxpbmtcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFpc2hhdlNoYWgwNC9DYXNoLUZsb3ctTWFuYWdlbWVudC1BcHBcIixcbiAgICAgIFwiaW1nXCI6IFwiL21lZGlhL2FwcC5wbmdcIlxuICB9LFxuICB7XG4gICAgICBcIm5hbWVcIjogXCJTdG9jayBXaWRnZXRcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpbXCJTZWFyY2ggdXAgYW55IHN0b2NrIHlvdSB3YW50IGFuZCBmaW5kIHJlbGV2YW50IGluZm9ybWF0aW9uIHN1Y2ggYXMgbGl2ZSBwcmljZXMsIGNoYW5nZSwgZGl2aWRlbmQgeWllbGQsIGV0Yy5cIixcIlRoZSB3aWRnZXQgYWxzbyBjb250YWlucyBhbiBhbmltYXRlZCBncmFwaCB3aXRoIHRoZSBzdG9jayBwcmljZSwgc3RvY2stc3BlY2lmaWMgbmV3cyBhcnRpY2xlcyBsaW5rcywgYW5kIHRyZW5kaW5nIHN0b2NrcyB3b3JsZHdpZGUuIEp1c3QgZW50ZXIgdGhlIHN0b2NrIHRpY2tlciB5b3Ugd2FudCBpbnRvIHRoZSBzZWFyY2ggYmFyIVwiXSxcbiAgICAgIFwidGVjaFwiOltcIlB5dGhvblwiLCBcIkJlYXV0aWZ1bFNvdXA0XCIsIFwiTWF0cGxvdGxpYlwiXSxcbiAgICAgIFwibGlua1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWlzaGF2U2hhaDA0L1N0b2NrLVdpZGdldFwiLFxuICAgICAgXCJpbWdcIjogXCJtZWRpYS9zdG9jay13aWRnZXQucG5nXCJcbiAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTWVtb3JpZXMgLSBBIFNvY2lhbCBQbGF0Zm9ybVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOltcIkEgZnVsbHkgcmVzcG9uc2l2ZSBNRVJOIHN0YWNrIGFwcGxpY2F0aW9uIHdoZXJlIHVzZXJzIGNhbiBjcmVhdGUsIHZpZXcsIHVwZGF0ZSwgZGVsZXRlLCBhbmQgaW50ZXJhY3Qgd2l0aCBtZW1vcmllcyBzaGFyZWQgYnkgb3RoZXIgdXNlcnMuXCIsXCJUaGUgYmFja2VuZCAoY3JlYXRlZCB1c2luZyBFeHByZXNzKSBjYW4gaGFuZGxlIGFsbCBDUlVEIHJlcXVlc3RzIHNlbnQgYnkgdGhlIGNsaWVudC1zaWRlIGZvcm0uXCJdLFxuICAgICAgXCJ0ZWNoXCI6W1wiTW9uZ29EQiBDbG91ZFwiLCBcIkV4cHJlc3MgSlNcIiwgXCJSZWFjdCBKU1wiLCBcIlJlZHV4XCIsIFwiTm9kZSBKU1wiLCBcIkhlcm9rdVwiLCBcIk5ldGxpZnlcIl0sXG4gICAgICBcImxpbmtcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFpc2hhdlNoYWgwNC9NRVJOLU1lbW9yaWVzLVByb2plY3RcIixcbiAgICAgIFwiaW1nXCI6IFwibWVkaWEvc3MucG5nXCJcbiAgfSwge1xuICAgIFwibmFtZVwiOiBcIlBlcnNvbmFsIFBvcnRmb2xpb1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjpbXCJNeSBwZXJzb25hbCBwb3J0Zm9saW8gd2Vic2l0ZSBjcmVhdGVkIHVzaW5nIFJlYWN0LiBUaGUgd2Vic2l0ZSBpcyBjb2RlZCB0byByZWFkIGRhdGEgZnJvbSBhIEpTT04gZmlsZSB0byBlYXNlIHVwZGF0aW5nLiBUaGlzIGlzIHB1cmVseSBmcm9udC1lbmQuXCJdLFxuICAgIFwidGVjaFwiOltcIlJlYWN0IEpTXCIsIFwiSFRNTFwiLCBcIkNTU1wiXSxcbiAgICBcImxpbmtcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFpc2hhdlNoYWgwNC9Qb3J0Zm9saW8tV2Vic2l0ZVwiLFxuICAgIFwiaW1nXCI6IFwibWVkaWEvd2Vic2l0ZS5QTkdcIlxuICB9ICAgICAgICBcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1N0YXJ0ZWQgbXkgZGVncmVlIGF0IFVuaXZlcnNpdHkgb2YgQWxiZXJ0YScsIHN1YnRpdGxlOiAnU3BlY2lhbGl6YXRpb24gaW4gQ29tcHV0aW5nIFNjaWVuY2Ugd2l0aCBCdXNpbmVzcyBNaW5vciB8fCAyMDIwIC0gMjAyNCcsIGRldGFpbHM6IFsnUmVsZXZhbnQgQ291cnNlczogUHJhY3RpY2FsIFByb2dyYW1taW5nIE1ldGhhZG9sb2d5LCBTb2Z0d2FyZSBFbmdpbmVlcmluZywgRGF0YWJhc2VzLCBBbGdvcml0aG1zIGFuZCBEYXRhIFN0cnVjdHVyZXMnLCdHUEE6IDQuMCAvIDQuMCddIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1dvcmtlZCBhcyBhIFByb2dyYW1taW5nIEluc3RydWN0b3InLCBzdWJ0aXRsZTogJ0Rpc2NvdmVyIENvZGluZyB8fCBBcHIgMjAyMSAtIFNlcCAyMDIxJywgZGV0YWlsczogWydXb3JraW5nIGFzIGEgQ29kaW5nIEluc3RydWN0b3IgYXQgYSBsb2NhbCBhY2FkZW15LCBJIHN0cmVuZ3RoZW5lZCBwcm9ncmFtbWluZyBmdW5kYW1lbnRhbHMgb2Ygc3R1ZGVudHMgYnkgZGVsaXZlcmluZyBsZXNzb24gcGxhbnMgcmVsYXRpbmcgdG8gSFRNTCwgQ1NTLCBKUywgYW5kIGJsb2NrIGNvZGluZyAodmFyeWluZyBieSBhZ2UpLicsJ0kgbGV2ZXJhZ2VkIG15IHNraWxscyB0byBmdXJ0aGVyIHRoZSBhY2FkZW15XFwncyB2aXNpb24gb2YgZXF1aXBwaW5nIHlvdXRoIGZvciB0aGUgZGlnaXRhbCBlY29ub215LiddIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1N0YXJ0ZWQgbXkgQ29tcHV0aW5nIFNjaWVuY2UvQnVzaW5lc3MgZGVncmVlJywgc3VidGl0bGU6ICdTcGVjaWFsaXphdGlvbiBpbiBDb21wdXRpbmcgU2NpZW5jZSB3aXRoIEJ1c2luZXNzIE1pbm9yIHx8IDIwMjAgLSAyMDI0JywgZGV0YWlsczogWydSZWxldmFudCBDb3Vyc2VzOiBQcmFjdGljYWwgUHJvZ3JhbW1pbmcgTWV0aGFkb2xvZ3ksIFNvZnR3YXJlIEVuZ2luZWVyaW5nLCBEYXRhYmFzZXMsIEFsZ29yaXRobXMgYW5kIERhdGEgU3RydWN0dXJlcycsJ0dQQTogNC4wIC8gNC4wJ10gfSxcbl07XG5cbi8vIFNldCBvZiBwcm9qZWN0c1xuZXhwb3J0IGNvbnN0IGFsbFRhZ3MgPSBuZXcgU2V0KCk7XG5cbnByb2plY3RzLmZvckVhY2goIHAgPT4ge1xuICBwLnRlY2guZm9yRWFjaCggdCA9PiBhbGxUYWdzLmFkZCh0KSlcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==