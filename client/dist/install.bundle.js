/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n\nvar butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\n// Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', function (event) {\n  // Prevent the default browser install prompt from appearing\n  event.preventDefault();\n\n  // Store the `beforeinstallprompt` event for later use\n  var deferredPrompt = event;\n\n  // Show your own custom install prompt or button\n  butInstall.style.display = 'block';\n\n  // Add a click event listener to the custom install button\n  butInstall.addEventListener('click', function () {\n    // Hide the custom install button\n    butInstall.style.display = 'none';\n\n    // Show the browser install prompt programmatically\n    deferredPrompt.prompt();\n\n    // Wait for the user to respond to the install prompt\n    deferredPrompt.userChoice.then(function (choiceResult) {\n      if (choiceResult.outcome === 'accepted') {\n        console.log('User accepted the install prompt');\n      } else {\n        console.log('User dismissed the install prompt');\n      }\n      // Clear the deferred prompt reference\n      null, (0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"deferredPrompt\");\n    });\n  });\n});\n\n// Add a handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', function (event) {\n  console.log('App was installed.');\n});\nif ('serviceWorker' in navigator) {\n  // Register the service worker\n  navigator.serviceWorker.register('/sw.js').then(function (registration) {\n    console.log('Service worker registered:', registration);\n\n    // Listen for the 'updatefound' event\n    registration.addEventListener('updatefound', function () {\n      // Handle updates when a new service worker is found\n      var newWorker = registration.installing;\n      console.log('New service worker found:', newWorker);\n      newWorker.addEventListener('statechange', function () {\n        // Handle different states of the new service worker\n        console.log('Service worker state:', newWorker.state);\n      });\n    });\n\n    // Listen for the 'controllerchange' event\n    navigator.serviceWorker.addEventListener('controllerchange', function () {\n      // Handle when the service worker becomes the active worker\n      console.log('Controller changed:', navigator.serviceWorker.controller);\n    });\n  })[\"catch\"](function (error) {\n    console.error('Error registering service worker:', error);\n  });\n}\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _readOnlyError)\n/* harmony export */ });\nfunction _readOnlyError(name) {\n  throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\");\n}\n\n//# sourceURL=webpack://JATE/./node_modules/@babel/runtime/helpers/esm/readOnlyError.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/install.js");
/******/ 	
/******/ })()
;