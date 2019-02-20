/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./step2-01/demo/src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./step2-01/demo/src/async/index.ts":
/*!******************************************!*\
  !*** ./step2-01/demo/src/async/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nfunction fetchSomething() {\n    return __awaiter(this, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch('http://localhost:3000/hello')];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.text()];\n                case 2: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\n// Async functions always returns Promise\nfetchSomething().then(function (text) {\n    console.log('hello ' + text);\n});\n// adding an export to turn this into a \"module\"\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/async/index.ts?");

/***/ }),

/***/ "./step2-01/demo/src/generics/index.ts":
/*!*********************************************!*\
  !*** ./step2-01/demo/src/generics/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Generics for classes\nvar Stack = /** @class */ (function () {\n    function Stack() {\n        this.data = [];\n    }\n    Stack.prototype.push = function (item) {\n        this.data.push(item);\n    };\n    Stack.prototype.pop = function () {\n        return this.data.pop();\n    };\n    return Stack;\n}());\nvar numberStack = new Stack();\nvar stringStack = new Stack();\n// Generics for functions\nfunction reverse(arg) {\n    // TODO: implement the logic to reverse the array\n    return arg;\n}\n// adding an export to turn this into a \"module\"\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/generics/index.ts?");

/***/ }),

/***/ "./step2-01/demo/src/index.tsx":
/*!*************************************!*\
  !*** ./step2-01/demo/src/index.tsx ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./step2-01/demo/src/types/index.ts\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ \"./step2-01/demo/src/interfaces/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ \"./step2-01/demo/src/modules/index.ts\");\n/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generics */ \"./step2-01/demo/src/generics/index.ts\");\n/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ \"./step2-01/demo/src/async/index.ts\");\n/* harmony import */ var _spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spread */ \"./step2-01/demo/src/spread/index.ts\");\n// Interesting Typescript Topics\n// types\n\n// interface\n\n// modularity\n\n// generics\n\n// await / async\n\n// spread syntax\n\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/index.tsx?");

/***/ }),

/***/ "./step2-01/demo/src/interfaces/index.ts":
/*!***********************************************!*\
  !*** ./step2-01/demo/src/interfaces/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar MyCar = /** @class */ (function () {\n    function MyCar() {\n    }\n    return MyCar;\n}());\nvar myCar = {\n    make: 'Honda',\n    model: 'Accord'\n};\n// adding an export to turn this into a \"module\"\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/interfaces/index.ts?");

/***/ }),

/***/ "./step2-01/demo/src/modules/default.ts":
/*!**********************************************!*\
  !*** ./step2-01/demo/src/modules/default.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar DefaultClass = /** @class */ (function () {\n    function DefaultClass() {\n        this.hello = 'world';\n    }\n    return DefaultClass;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultClass);\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/modules/default.ts?");

/***/ }),

/***/ "./step2-01/demo/src/modules/index.ts":
/*!********************************************!*\
  !*** ./step2-01/demo/src/modules/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _named__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./named */ \"./step2-01/demo/src/modules/named.ts\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ \"./step2-01/demo/src/modules/default.ts\");\n\n\n// Print out the exports\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedConst\"]);\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedConst\"]);\nconsole.log(Object(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedFn\"])());\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedObj\"]);\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedConstBracket\"]);\n// Print out exports through module level import\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedConst\"]);\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedFn\"]());\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedObj\"]);\nconsole.log(_named__WEBPACK_IMPORTED_MODULE_0__[\"namedConstBracket\"]);\n\nconsole.log(new _default__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().hello);\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/modules/index.ts?");

/***/ }),

/***/ "./step2-01/demo/src/modules/named.ts":
/*!********************************************!*\
  !*** ./step2-01/demo/src/modules/named.ts ***!
  \********************************************/
/*! exports provided: namedConst, namedFn, namedObj, namedConstBracket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"namedConst\", function() { return namedConst; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"namedFn\", function() { return namedFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"namedObj\", function() { return namedObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"namedConstBracket\", function() { return namedConstBracket; });\nvar namedConst = 5;\nfunction namedFn() {\n    return 5;\n}\nvar namedObj = {\n    hello: 'world'\n};\nvar namedConstBracket = 10;\n\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/modules/named.ts?");

/***/ }),

/***/ "./step2-01/demo/src/spread/index.ts":
/*!*******************************************!*\
  !*** ./step2-01/demo/src/spread/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n// Destructuring\nvar _a = [1, 2, 3, 4], a = _a[0], b = _a[1], rest = _a.slice(2);\nconsole.log(a, b, rest); // 1,2,[3,4]\n// Array assignment\nvar list = [1, 2];\nlist = list.concat([3, 4]);\nconsole.log(list); // [1,2,3,4]\n// Object assignment\nvar point2D = { x: 1, y: 2 };\nvar point3D = __assign({}, point2D, { z: 3 });\n// Concat two objects\nvar obj1 = { x: 1 };\nvar obj2 = { y: 2 };\nvar obj3 = __assign({}, obj1, obj2);\n// Destructuring object\nvar x = obj3.x;\n// adding an export to turn this into a \"module\"\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/spread/index.ts?");

/***/ }),

/***/ "./step2-01/demo/src/types/index.ts":
/*!******************************************!*\
  !*** ./step2-01/demo/src/types/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n// Basic Types\nvar isDone = false;\nvar decimal = 6;\nvar color = 'blue';\nvar sky = \"the sky is \" + color;\n// casting\nvar choose1 = { common: '5' };\n// Classes\nvar Animal = /** @class */ (function () {\n    function Animal() {\n    }\n    return Animal;\n}());\n// Illustration purposes only\n// In real apps, avoid inheritance if possible\n// noted exception: React.Component with react@<16.8.0\nvar Cat = /** @class */ (function (_super) {\n    __extends(Cat, _super);\n    function Cat() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return Cat;\n}(Animal));\nvar Dog = /** @class */ (function (_super) {\n    __extends(Dog, _super);\n    function Dog() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return Dog;\n}(Animal));\n// adding an export to turn this into a \"module\"\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n\n//# sourceURL=webpack:///./step2-01/demo/src/types/index.ts?");

/***/ })

/******/ });