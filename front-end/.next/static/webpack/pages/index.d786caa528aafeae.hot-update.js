"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [exerciseOneData, setExerciseOneData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [exerciseTwoData, setExerciseTwoData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [exerciseThreeData, setExerciseThreeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [exerciseFourData, setExerciseFourData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        one: false,\n        two: false,\n        three: false\n    });\n    // Manually crafting raw JSON string\n    const requestBody = {\n        datasetId: \"00000000-0000-0000-0000-000000000001\",\n        apiKey: \"test-api-key\",\n        jobConfiguration: {\n            config1: \"value1\",\n            config2: \"value2\"\n        }\n    };\n    // Function to make a POST request with body\n    const fetchData = async (url, setData, setLoadingKey)=>{\n        console.log(\"Starting fetch for \".concat(url)); // Log URL being fetched\n        setLoading((prev)=>({\n                ...prev,\n                [setLoadingKey]: true\n            }));\n        console.log(\"Request body:\", JSON.stringify(requestBody)); // Log the request body\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(requestBody)\n            });\n            console.log(\"Response status for \".concat(url, \":\"), response.status); // Log the response status\n            if (!response.ok) {\n                console.error(\"Failed to fetch data from \".concat(url, \", status: \").concat(response.status));\n                setData(\"Error fetching data\");\n                return;\n            }\n            const data = await response.json();\n            console.log(\"Received data:\", data); // Log the received data\n            const displayMessage = data.message || JSON.stringify(data, null, 2) || \"No message received\";\n            setData(displayMessage);\n        } catch (error) {\n            console.error(\"Error fetching data from \".concat(url, \":\"), error); // Log any error that occurs\n            setData(\"Error fetching data\");\n        } finally{\n            setLoading((prev)=>({\n                    ...prev,\n                    [setLoadingKey]: false\n                }));\n            console.log(\"Finished fetch for \".concat(url)); // Log when the fetch is complete\n        }\n    };\n    // Fetch data for Exercise 1\n    const fetchExerciseOne = ()=>fetchData(\"http://localhost:5000/api/exerciseone/execute\", setExerciseOneData, \"one\");\n    // Fetch data for Exercise 2\n    const fetchExerciseTwo = ()=>fetchData(\"http://localhost:5000/api/exercisetwo/execute\", setExerciseTwoData, \"two\");\n    // Fetch data for Exercise 3\n    const fetchExerciseThree = ()=>fetchData(\"http://localhost:5000/api/exercisethree/execute\", setExerciseThreeData, \"three\");\n    // Fetch data for Exercise 4\n    const fetchExerciseFour = ()=>fetchData(\"http://localhost:4000/api/exercisefour/execute\", setExerciseFourData, \"four\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-screen h-screen min-h-screen bg-blue-500 flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl text-white mt-10 mb-10 font-semibold\",\n                children: \"API Data Showcase\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseOne,\n                                        disabled: loading.one,\n                                        children: loading.one ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseOneData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col p-2 bg-blue-100 text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-md font-semibold\",\n                                                children: \"API Address: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    \"Method: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        children: \"GET\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: \"http://localhost:5000/api/exerciseone/execute\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseTwo,\n                                        disabled: loading.two,\n                                        children: loading.two ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseTwoData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 3\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseThree,\n                                        disabled: loading.three,\n                                        children: loading.three ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseThreeData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 1 In Express.JS\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseFour,\n                                        disabled: loading.three,\n                                        children: loading.three ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseFourData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"YlzWnlvm2tV9N30lqlMFoRIc9iw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxHQUFHLGVBQWU7Ozs7OztrREFFaEMsOERBQUN1QztrREFBSzdDLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxEO0dBL0d3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbZXhlcmNpc2VPbmVEYXRhLCBzZXRFeGVyY2lzZU9uZURhdGFdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbZXhlcmNpc2VUd29EYXRhLCBzZXRFeGVyY2lzZVR3b0RhdGFdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbZXhlcmNpc2VUaHJlZURhdGEsIHNldEV4ZXJjaXNlVGhyZWVEYXRhXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2V4ZXJjaXNlRm91ckRhdGEsIHNldEV4ZXJjaXNlRm91ckRhdGFdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh7IG9uZTogZmFsc2UsIHR3bzogZmFsc2UsIHRocmVlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAvLyBNYW51YWxseSBjcmFmdGluZyByYXcgSlNPTiBzdHJpbmdcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICAgIGRhdGFzZXRJZDogXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDFcIixcclxuICAgICAgICBhcGlLZXk6IFwidGVzdC1hcGkta2V5XCIsXHJcbiAgICAgICAgam9iQ29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICBjb25maWcxOiBcInZhbHVlMVwiLFxyXG4gICAgICAgICAgICBjb25maWcyOiBcInZhbHVlMlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBtYWtlIGEgUE9TVCByZXF1ZXN0IHdpdGggYm9keVxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybDogc3RyaW5nLCBzZXREYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj4sIHNldExvYWRpbmdLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTdGFydGluZyBmZXRjaCBmb3IgJHt1cmx9YCk7IC8vIExvZyBVUkwgYmVpbmcgZmV0Y2hlZFxyXG4gICAgICAgIHNldExvYWRpbmcoKHByZXYpID0+ICh7IC4uLnByZXYsIFtzZXRMb2FkaW5nS2V5XTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgYm9keTonLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSkpOyAvLyBMb2cgdGhlIHJlcXVlc3QgYm9keVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksIC8vIENvbnZlcnQgdGhlIEpTIG9iamVjdCB0byBKU09OIHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZXNwb25zZSBzdGF0dXMgZm9yICR7dXJsfTpgLCByZXNwb25zZS5zdGF0dXMpOyAvLyBMb2cgdGhlIHJlc3BvbnNlIHN0YXR1c1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIGRhdGEgZnJvbSAke3VybH0sIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBkYXRhOicsIGRhdGEpOyAvLyBMb2cgdGhlIHJlY2VpdmVkIGRhdGFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlNZXNzYWdlID0gZGF0YS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpIHx8ICdObyBtZXNzYWdlIHJlY2VpdmVkJztcclxuICAgICAgICAgICAgc2V0RGF0YShkaXNwbGF5TWVzc2FnZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tICR7dXJsfTpgLCBlcnJvcik7IC8vIExvZyBhbnkgZXJyb3IgdGhhdCBvY2N1cnNcclxuICAgICAgICAgICAgc2V0RGF0YSgnRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoKHByZXYpID0+ICh7IC4uLnByZXYsIFtzZXRMb2FkaW5nS2V5XTogZmFsc2UgfSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRmluaXNoZWQgZmV0Y2ggZm9yICR7dXJsfWApOyAvLyBMb2cgd2hlbiB0aGUgZmV0Y2ggaXMgY29tcGxldGVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEZldGNoIGRhdGEgZm9yIEV4ZXJjaXNlIDFcclxuICAgIGNvbnN0IGZldGNoRXhlcmNpc2VPbmUgPSAoKSA9PiBmZXRjaERhdGEoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZXhlcmNpc2VvbmUvZXhlY3V0ZScsIHNldEV4ZXJjaXNlT25lRGF0YSwgJ29uZScpO1xyXG5cclxuICAgIC8vIEZldGNoIGRhdGEgZm9yIEV4ZXJjaXNlIDJcclxuICAgIGNvbnN0IGZldGNoRXhlcmNpc2VUd28gPSAoKSA9PiBmZXRjaERhdGEoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZXhlcmNpc2V0d28vZXhlY3V0ZScsIHNldEV4ZXJjaXNlVHdvRGF0YSwgJ3R3bycpO1xyXG5cclxuICAgIC8vIEZldGNoIGRhdGEgZm9yIEV4ZXJjaXNlIDNcclxuICAgIGNvbnN0IGZldGNoRXhlcmNpc2VUaHJlZSA9ICgpID0+IGZldGNoRGF0YSgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9leGVyY2lzZXRocmVlL2V4ZWN1dGUnLCBzZXRFeGVyY2lzZVRocmVlRGF0YSwgJ3RocmVlJyk7XHJcblxyXG4gICAgIC8vIEZldGNoIGRhdGEgZm9yIEV4ZXJjaXNlIDRcclxuICAgICBjb25zdCBmZXRjaEV4ZXJjaXNlRm91ciA9ICgpID0+IGZldGNoRGF0YSgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9leGVyY2lzZWZvdXIvZXhlY3V0ZScsIHNldEV4ZXJjaXNlRm91ckRhdGEsICdmb3VyJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LXNjcmVlbiBoLXNjcmVlbiBtaW4taC1zY3JlZW4gYmctYmx1ZS01MDAgZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgdGV4dC13aGl0ZSBtdC0xMCBtYi0xMCBmb250LXNlbWlib2xkJz5BUEkgRGF0YSBTaG93Y2FzZTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy05Nic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+RXhlcmNpc2UgMTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS04MDAgcC0yIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSB3LTcyXCIgb25DbGljaz17ZmV0Y2hFeGVyY2lzZU9uZX0gZGlzYWJsZWQ9e2xvYWRpbmcub25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcub25lID8gJ0xvYWRpbmcuLi4nIDogJ0ZldGNoIERhdGEg8J+agCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPntleGVyY2lzZU9uZURhdGEgfHwgJ05vIGRhdGEgeWV0IPCfmJQnfTwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwLTIgYmctYmx1ZS0xMDAgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1tZCBmb250LXNlbWlib2xkJz5BUEkgQWRkcmVzczogPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5NZXRob2Q6IDxoMT5HRVQ8L2gxPjwvaDI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPmh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZXhlcmNpc2VvbmUvZXhlY3V0ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy05Nic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+RXhlcmNpc2UgMjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTgwMCBwLTIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHctNzInIG9uQ2xpY2s9e2ZldGNoRXhlcmNpc2VUd299IGRpc2FibGVkPXtsb2FkaW5nLnR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZy50d28gPyAnTG9hZGluZy4uLicgOiAnRmV0Y2ggRGF0YSDwn5qAJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e2V4ZXJjaXNlVHdvRGF0YSB8fCAnTm8gZGF0YSB5ZXQg8J+YlCd9PC9wcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy05Nic+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPkV4ZXJjaXNlIDM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS04MDAgcC0yIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSB3LTcyJyBvbkNsaWNrPXtmZXRjaEV4ZXJjaXNlVGhyZWV9IGRpc2FibGVkPXtsb2FkaW5nLnRocmVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcudGhyZWUgPyAnTG9hZGluZy4uLicgOiAnRmV0Y2ggRGF0YSDwn5qAJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e2V4ZXJjaXNlVGhyZWVEYXRhIHx8ICdObyBkYXRhIHlldCDwn5iUJ308L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTMgdy05Nic+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPkV4ZXJjaXNlIDEgSW4gRXhwcmVzcy5KUzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTgwMCBwLTIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHctNzInIG9uQ2xpY2s9e2ZldGNoRXhlcmNpc2VGb3VyfSBkaXNhYmxlZD17bG9hZGluZy50aHJlZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nLnRocmVlID8gJ0xvYWRpbmcuLi4nIDogJ0ZldGNoIERhdGEg8J+agCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPntleGVyY2lzZUZvdXJEYXRhIHx8ICdObyBkYXRhIHlldCDwn5iUJ308L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiZXhlcmNpc2VPbmVEYXRhIiwic2V0RXhlcmNpc2VPbmVEYXRhIiwiZXhlcmNpc2VUd29EYXRhIiwic2V0RXhlcmNpc2VUd29EYXRhIiwiZXhlcmNpc2VUaHJlZURhdGEiLCJzZXRFeGVyY2lzZVRocmVlRGF0YSIsImV4ZXJjaXNlRm91ckRhdGEiLCJzZXRFeGVyY2lzZUZvdXJEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbmUiLCJ0d28iLCJ0aHJlZSIsInJlcXVlc3RCb2R5IiwiZGF0YXNldElkIiwiYXBpS2V5Iiwiam9iQ29uZmlndXJhdGlvbiIsImNvbmZpZzEiLCJjb25maWcyIiwiZmV0Y2hEYXRhIiwidXJsIiwic2V0RGF0YSIsInNldExvYWRpbmdLZXkiLCJjb25zb2xlIiwibG9nIiwicHJldiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJzdGF0dXMiLCJvayIsImVycm9yIiwiZGF0YSIsImpzb24iLCJkaXNwbGF5TWVzc2FnZSIsIm1lc3NhZ2UiLCJmZXRjaEV4ZXJjaXNlT25lIiwiZmV0Y2hFeGVyY2lzZVR3byIsImZldGNoRXhlcmNpc2VUaHJlZSIsImZldGNoRXhlcmNpc2VGb3VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInByZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});