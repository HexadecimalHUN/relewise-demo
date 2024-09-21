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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [exerciseOneData, setExerciseOneData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [exerciseTwoData, setExerciseTwoData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [exerciseThreeData, setExerciseThreeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [exerciseFourData, setExerciseFourData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        one: false,\n        two: false,\n        three: false\n    });\n    // Manually crafting raw JSON string\n    const requestBody = {\n        datasetId: \"00000000-0000-0000-0000-000000000001\",\n        apiKey: \"test-api-key\",\n        jobConfiguration: {\n            config1: \"value1\",\n            config2: \"value2\"\n        }\n    };\n    // Function to make a POST request with body\n    const fetchData = async (url, setData, setLoadingKey)=>{\n        console.log(\"Starting fetch for \".concat(url)); // Log URL being fetched\n        setLoading((prev)=>({\n                ...prev,\n                [setLoadingKey]: true\n            }));\n        console.log(\"Request body:\", JSON.stringify(requestBody)); // Log the request body\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(requestBody)\n            });\n            console.log(\"Response status for \".concat(url, \":\"), response.status); // Log the response status\n            if (!response.ok) {\n                console.error(\"Failed to fetch data from \".concat(url, \", status: \").concat(response.status));\n                setData(\"Error fetching data\");\n                return;\n            }\n            const data = await response.json();\n            console.log(\"Received data:\", data); // Log the received data\n            const displayMessage = data.message || JSON.stringify(data, null, 2) || \"No message received\";\n            setData(displayMessage);\n        } catch (error) {\n            console.error(\"Error fetching data from \".concat(url, \":\"), error); // Log any error that occurs\n            setData(\"Error fetching data\");\n        } finally{\n            setLoading((prev)=>({\n                    ...prev,\n                    [setLoadingKey]: false\n                }));\n            console.log(\"Finished fetch for \".concat(url)); // Log when the fetch is complete\n        }\n    };\n    // Fetch data for Exercise 1\n    const fetchExerciseOne = ()=>fetchData(\"http://localhost:5000/api/exerciseone/execute\", setExerciseOneData, \"one\");\n    // Fetch data for Exercise 2\n    const fetchExerciseTwo = ()=>fetchData(\"http://localhost:5000/api/exercisetwo/execute\", setExerciseTwoData, \"two\");\n    // Fetch data for Exercise 3\n    const fetchExerciseThree = ()=>fetchData(\"http://localhost:5000/api/exercisethree/execute\", setExerciseThreeData, \"three\");\n    // Fetch data for Exercise 4\n    const fetchExerciseFour = ()=>fetchData(\"http://localhost:4000/api/exercisefour/execute\", setExerciseFourData, \"four\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-screen h-screen min-h-screen bg-blue-500 flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl text-white mt-10 mb-10 font-semibold\",\n                children: \"API Data Showcase\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseOne,\n                                        disabled: loading.one,\n                                        children: loading.one ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseOneData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col p-2 bg-blue-100 text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-md font-semibold\",\n                                                children: \"API Address: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-row justify-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        children: \"Method:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 33\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        className: \"font-semibold\",\n                                                        children: \"GET\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 33\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: \"http://localhost:5000/api/exerciseone/execute\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseTwo,\n                                        disabled: loading.two,\n                                        children: loading.two ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseTwoData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 3\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseThree,\n                                        disabled: loading.three,\n                                        children: loading.three ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseThreeData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-white p-6 rounded-lg flex-col items-center gap-3 w-96\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: \"Exercise 1 In Express.JS\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white w-72\",\n                                        onClick: fetchExerciseFour,\n                                        disabled: loading.three,\n                                        children: loading.three ? \"Loading...\" : \"Fetch Data \\uD83D\\uDE80\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                        children: exerciseFourData || \"No data yet \\uD83D\\uDE14\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hexa\\\\Documents\\\\Relewise\\\\front-end\\\\pages\\\\index.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"YlzWnlvm2tV9N30lqlMFoRIc9iw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQW1CTyxVQUFVMUMsUUFBUUksS0FBSztrREFDbklKLFFBQVFJLEtBQUssR0FBRyxlQUFlOzs7Ozs7a0RBRWhDLDhEQUFDdUM7a0RBQUs3QyxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRDtHQWxId0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2V4ZXJjaXNlT25lRGF0YSwgc2V0RXhlcmNpc2VPbmVEYXRhXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2V4ZXJjaXNlVHdvRGF0YSwgc2V0RXhlcmNpc2VUd29EYXRhXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2V4ZXJjaXNlVGhyZWVEYXRhLCBzZXRFeGVyY2lzZVRocmVlRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtleGVyY2lzZUZvdXJEYXRhLCBzZXRFeGVyY2lzZUZvdXJEYXRhXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoeyBvbmU6IGZhbHNlLCB0d286IGZhbHNlLCB0aHJlZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gTWFudWFsbHkgY3JhZnRpbmcgcmF3IEpTT04gc3RyaW5nXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICBkYXRhc2V0SWQ6IFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxXCIsXHJcbiAgICAgICAgYXBpS2V5OiBcInRlc3QtYXBpLWtleVwiLFxyXG4gICAgICAgIGpvYkNvbmZpZ3VyYXRpb246IHtcclxuICAgICAgICAgICAgY29uZmlnMTogXCJ2YWx1ZTFcIixcclxuICAgICAgICAgICAgY29uZmlnMjogXCJ2YWx1ZTJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gbWFrZSBhIFBPU1QgcmVxdWVzdCB3aXRoIGJvZHlcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmw6IHN0cmluZywgc2V0RGF0YTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+LCBzZXRMb2FkaW5nS2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnRpbmcgZmV0Y2ggZm9yICR7dXJsfWApOyAvLyBMb2cgVVJMIGJlaW5nIGZldGNoZWRcclxuICAgICAgICBzZXRMb2FkaW5nKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbc2V0TG9hZGluZ0tleV06IHRydWUgfSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IGJvZHk6JywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpKTsgLy8gTG9nIHRoZSByZXF1ZXN0IGJvZHlcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLCAvLyBDb252ZXJ0IHRoZSBKUyBvYmplY3QgdG8gSlNPTiBzdHJpbmdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVzcG9uc2Ugc3RhdHVzIGZvciAke3VybH06YCwgcmVzcG9uc2Uuc3RhdHVzKTsgLy8gTG9nIHRoZSByZXNwb25zZSBzdGF0dXNcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhIGZyb20gJHt1cmx9LCBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSgnRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgZGF0YTonLCBkYXRhKTsgLy8gTG9nIHRoZSByZWNlaXZlZCBkYXRhXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5TWVzc2FnZSA9IGRhdGEubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB8fCAnTm8gbWVzc2FnZSByZWNlaXZlZCc7XHJcbiAgICAgICAgICAgIHNldERhdGEoZGlzcGxheU1lc3NhZ2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIGRhdGEgZnJvbSAke3VybH06YCwgZXJyb3IpOyAvLyBMb2cgYW55IGVycm9yIHRoYXQgb2NjdXJzXHJcbiAgICAgICAgICAgIHNldERhdGEoJ0Vycm9yIGZldGNoaW5nIGRhdGEnKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbc2V0TG9hZGluZ0tleV06IGZhbHNlIH0pKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEZpbmlzaGVkIGZldGNoIGZvciAke3VybH1gKTsgLy8gTG9nIHdoZW4gdGhlIGZldGNoIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGZXRjaCBkYXRhIGZvciBFeGVyY2lzZSAxXHJcbiAgICBjb25zdCBmZXRjaEV4ZXJjaXNlT25lID0gKCkgPT4gZmV0Y2hEYXRhKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2V4ZXJjaXNlb25lL2V4ZWN1dGUnLCBzZXRFeGVyY2lzZU9uZURhdGEsICdvbmUnKTtcclxuXHJcbiAgICAvLyBGZXRjaCBkYXRhIGZvciBFeGVyY2lzZSAyXHJcbiAgICBjb25zdCBmZXRjaEV4ZXJjaXNlVHdvID0gKCkgPT4gZmV0Y2hEYXRhKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2V4ZXJjaXNldHdvL2V4ZWN1dGUnLCBzZXRFeGVyY2lzZVR3b0RhdGEsICd0d28nKTtcclxuXHJcbiAgICAvLyBGZXRjaCBkYXRhIGZvciBFeGVyY2lzZSAzXHJcbiAgICBjb25zdCBmZXRjaEV4ZXJjaXNlVGhyZWUgPSAoKSA9PiBmZXRjaERhdGEoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZXhlcmNpc2V0aHJlZS9leGVjdXRlJywgc2V0RXhlcmNpc2VUaHJlZURhdGEsICd0aHJlZScpO1xyXG5cclxuICAgICAvLyBGZXRjaCBkYXRhIGZvciBFeGVyY2lzZSA0XHJcbiAgICAgY29uc3QgZmV0Y2hFeGVyY2lzZUZvdXIgPSAoKSA9PiBmZXRjaERhdGEoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvZXhlcmNpc2Vmb3VyL2V4ZWN1dGUnLCBzZXRFeGVyY2lzZUZvdXJEYXRhLCAnZm91cicpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1zY3JlZW4gaC1zY3JlZW4gbWluLWgtc2NyZWVuIGJnLWJsdWUtNTAwIGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIHRleHQtd2hpdGUgbXQtMTAgbWItMTAgZm9udC1zZW1pYm9sZCc+QVBJIERhdGEgU2hvd2Nhc2U8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0zIHctOTYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPkV4ZXJjaXNlIDE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwIHAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgdy03MlwiIG9uQ2xpY2s9e2ZldGNoRXhlcmNpc2VPbmV9IGRpc2FibGVkPXtsb2FkaW5nLm9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nLm9uZSA/ICdMb2FkaW5nLi4uJyA6ICdGZXRjaCBEYXRhIPCfmoAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57ZXhlcmNpc2VPbmVEYXRhIHx8ICdObyBkYXRhIHlldCDwn5iUJ308L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcC0yIGJnLWJsdWUtMTAwIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtbWQgZm9udC1zZW1pYm9sZCc+QVBJIEFkZHJlc3M6IDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1ldGhvZDo8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPkdFVDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+aHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9leGVyY2lzZW9uZS9leGVjdXRlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMyB3LTk2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5FeGVyY2lzZSAyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwIHAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgdy03Micgb25DbGljaz17ZmV0Y2hFeGVyY2lzZVR3b30gZGlzYWJsZWQ9e2xvYWRpbmcudHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nLnR3byA/ICdMb2FkaW5nLi4uJyA6ICdGZXRjaCBEYXRhIPCfmoAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57ZXhlcmNpc2VUd29EYXRhIHx8ICdObyBkYXRhIHlldCDwn5iUJ308L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMyB3LTk2Jz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+RXhlcmNpc2UgMzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTgwMCBwLTIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHctNzInIG9uQ2xpY2s9e2ZldGNoRXhlcmNpc2VUaHJlZX0gZGlzYWJsZWQ9e2xvYWRpbmcudGhyZWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZy50aHJlZSA/ICdMb2FkaW5nLi4uJyA6ICdGZXRjaCBEYXRhIPCfmoAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57ZXhlcmNpc2VUaHJlZURhdGEgfHwgJ05vIGRhdGEgeWV0IPCfmJQnfTwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMyB3LTk2Jz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+RXhlcmNpc2UgMSBJbiBFeHByZXNzLkpTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtODAwIHAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgdy03Micgb25DbGljaz17ZmV0Y2hFeGVyY2lzZUZvdXJ9IGRpc2FibGVkPXtsb2FkaW5nLnRocmVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcudGhyZWUgPyAnTG9hZGluZy4uLicgOiAnRmV0Y2ggRGF0YSDwn5qAJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e2V4ZXJjaXNlRm91ckRhdGEgfHwgJ05vIGRhdGEgeWV0IPCfmJQnfTwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJleGVyY2lzZU9uZURhdGEiLCJzZXRFeGVyY2lzZU9uZURhdGEiLCJleGVyY2lzZVR3b0RhdGEiLCJzZXRFeGVyY2lzZVR3b0RhdGEiLCJleGVyY2lzZVRocmVlRGF0YSIsInNldEV4ZXJjaXNlVGhyZWVEYXRhIiwiZXhlcmNpc2VGb3VyRGF0YSIsInNldEV4ZXJjaXNlRm91ckRhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uZSIsInR3byIsInRocmVlIiwicmVxdWVzdEJvZHkiLCJkYXRhc2V0SWQiLCJhcGlLZXkiLCJqb2JDb25maWd1cmF0aW9uIiwiY29uZmlnMSIsImNvbmZpZzIiLCJmZXRjaERhdGEiLCJ1cmwiLCJzZXREYXRhIiwic2V0TG9hZGluZ0tleSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0YXR1cyIsIm9rIiwiZXJyb3IiLCJkYXRhIiwianNvbiIsImRpc3BsYXlNZXNzYWdlIiwibWVzc2FnZSIsImZldGNoRXhlcmNpc2VPbmUiLCJmZXRjaEV4ZXJjaXNlVHdvIiwiZmV0Y2hFeGVyY2lzZVRocmVlIiwiZmV0Y2hFeGVyY2lzZUZvdXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwicHJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});