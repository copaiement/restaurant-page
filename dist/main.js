/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// create the about page
function about() {
  console.log('about test');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// create the contact page
function contact() {
  console.log('contact test');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// create the menu page
function menu() {
  console.log('menu test');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
// import functions from each js file for pages



// set up event listeners to call the appropriate js function to switch tabs
const buildPage = (() => {
  const content = document.getElementById('content');

  function buildHeader() {
    // create header structure
    const header = content.appendChild(document.createElement('div'));
    const logo = header.appendChild(document.createElement('div'));
    const subtext = header.appendChild(document.createElement('div'));
    const btnsContainer = header.appendChild(document.createElement('div'));
    const aboutBtn = btnsContainer.appendChild(document.createElement('div'));
    const menuBtn = btnsContainer.appendChild(document.createElement('div'));
    const contactBtn = btnsContainer.appendChild(document.createElement('div'));
    header.setAttribute('class', 'header');
    logo.setAttribute('id', 'logo');
    logo.textContent = 'The Blue Leaf';
    subtext.setAttribute('id', 'subtext');
    subtext.textContent = 'American Contemporary Dining';
    btnsContainer.setAttribute('class', 'btns-container');
    aboutBtn.setAttribute('class', 'button');
    aboutBtn.textContent = 'About';
    menuBtn.setAttribute('class', 'button');
    menuBtn.textContent = 'Menu';
    contactBtn.setAttribute('class', 'button');
    contactBtn.textContent = 'Contact';
  }

  function buildFooter() {
    // create footer structure
    const footer = content.appendChild(document.createElement('div'));
    const footerText = footer.appendChild(document.createElement('div'));
    footer.setAttribute('class', 'footer');
    footerText.setAttribute('class', 'footer-text');
    footerText.textContent = 'Designed by C. Paiement, 2023';
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  buildHeader();
  buildFooter();

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTHZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ0xwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUM0QjtBQUNGO0FBQ007QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNyZWF0ZSB0aGUgYWJvdXQgcGFnZVxuZnVuY3Rpb24gYWJvdXQoKSB7XG4gIGNvbnNvbGUubG9nKCdhYm91dCB0ZXN0Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwiLy8gY3JlYXRlIHRoZSBjb250YWN0IHBhZ2VcbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnNvbGUubG9nKCdjb250YWN0IHRlc3QnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsIi8vIGNyZWF0ZSB0aGUgbWVudSBwYWdlXG5mdW5jdGlvbiBtZW51KCkge1xuICBjb25zb2xlLmxvZygnbWVudSB0ZXN0Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBmdW5jdGlvbnMgZnJvbSBlYWNoIGpzIGZpbGUgZm9yIHBhZ2VzXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0Jztcbi8vIHNldCB1cCBldmVudCBsaXN0ZW5lcnMgdG8gY2FsbCB0aGUgYXBwcm9wcmlhdGUganMgZnVuY3Rpb24gdG8gc3dpdGNoIHRhYnNcbmNvbnN0IGJ1aWxkUGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICAgIC8vIGNyZWF0ZSBoZWFkZXIgc3RydWN0dXJlXG4gICAgY29uc3QgaGVhZGVyID0gY29udGVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgY29uc3QgbG9nbyA9IGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgY29uc3Qgc3VidGV4dCA9IGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgY29uc3QgYnRuc0NvbnRhaW5lciA9IGhlYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgY29uc3QgYWJvdXRCdG4gPSBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBjb25zdCBtZW51QnRuID0gYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdUaGUgQmx1ZSBMZWFmJztcbiAgICBzdWJ0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VidGV4dCcpO1xuICAgIHN1YnRleHQudGV4dENvbnRlbnQgPSAnQW1lcmljYW4gQ29udGVtcG9yYXJ5IERpbmluZyc7XG4gICAgYnRuc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0bnMtY29udGFpbmVyJyk7XG4gICAgYWJvdXRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcbiAgICBhYm91dEJ0bi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgICAvLyBjcmVhdGUgZm9vdGVyIHN0cnVjdHVyZVxuICAgIGNvbnN0IGZvb3RlciA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGNvbnN0IGZvb3RlclRleHQgPSBmb290ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvb3RlcicpO1xuICAgIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb290ZXItdGV4dCcpO1xuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnRGVzaWduZWQgYnkgQy4gUGFpZW1lbnQsIDIwMjMnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRIZWFkZXIoKTtcbiAgYnVpbGRGb290ZXIoKTtcblxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==