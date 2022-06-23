/*!
 * process-data-attr-as-func
 * process data attr as func
 * https://github.com/kamem/scroll-parallax-effect.git
 * @version 0.1.0
 * @license Released under MIT license
 * @author kamem
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scroll-parallax-effect"] = factory();
	else
		root["scroll-parallax-effect"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ProcessDataAttrAsFunc": () => (/* binding */ process_data_attr_as_func_ProcessDataAttrAsFunc)
});

;// CONCATENATED MODULE: ./src/utils/utils.ts
const ERRROR_PREFIX = '[process-data-attr-as-func]';
const generateError = (errorName, message) => {
    throw new Error(`${ERRROR_PREFIX} [${errorName}] ${message}`);
};
const getElement = (element) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el)
        return generateError(getElement.name, ` undefined element "${element}"`);
    return el;
};

;// CONCATENATED MODULE: ./src/process-data-attr-as-func/ProcessDataAttrAsFunc.ts

class ProcessDataAttrAsFunc_ProcessDataAttrAsFunc {
    #element;
    #functions;
    #plugin;
    dataset = {};
    constructor(options) {
        this.#element = getElement(options.element);
        this.#functions = options.functions || {};
        this.#plugin = options.plugin;
    }
    #convertFromString(value) {
        if (/^[+,-]?([1-9]\d*|0)(\.\d+)?$/.test(value)) {
            return parseFloat(value);
        }
        if (/^(\[|\{)/g.test(value)) {
            try {
                return JSON.parse(value.replace(/\'/g, '\"'));
            }
            catch (e) {
            }
        }
        if (value === 'true' || value === 'false') {
            return value === 'true';
        }
        const functions = this.#functions || globalThis;
        if (typeof functions[value] === 'function') {
            return functions[value];
        }
        return value;
    }
    #generateData(data) {
        const newData = {};
        for (const key in data) {
            newData[key] = this.#convertFromString(data[key]);
        }
        return newData;
    }
    startPlugin() {
        this.dataset = this.#generateData(this.#element.dataset);
        return this.#plugin(this.#element, this.dataset);
    }
}
/* harmony default export */ const ProcessDataAttrAsFunc = ((/* unused pure expression or super */ null && (ProcessDataAttrAsFunc_ProcessDataAttrAsFunc)));

;// CONCATENATED MODULE: ./src/process-data-attr-as-func/index.ts

class process_data_attr_as_func_ProcessDataAttrAsFunc {
    elements;
    processDataAttrAsFuncPlugins;
    constructor(element, opt, functions) {
        const el = typeof element === 'string' ? document.querySelectorAll(element) : element;
        const arrayEl = Array.from(el);
        if (typeof element === 'string' && arrayEl.length === 0) {
            return;
        }
        this.elements = arrayEl.length > 0 ?
            Array.from(el) : [el];
        let params = {
            plugin: () => { }
        };
        if (typeof opt === 'function') {
            params.plugin = opt;
        }
        else {
            params = opt;
        }
        this.processDataAttrAsFuncPlugins = this.elements.map((element) => {
            const processDataAttrAsFunc = new ProcessDataAttrAsFunc_ProcessDataAttrAsFunc({
                element,
                ...params,
                functions
            });
            processDataAttrAsFunc.startPlugin();
            return processDataAttrAsFunc;
        });
    }
}
window.ProcessDataAttrAsFunc = process_data_attr_as_func_ProcessDataAttrAsFunc;


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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _process_data_attr_as_func_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);

const body = new _process_data_attr_as_func_index__WEBPACK_IMPORTED_MODULE_0__.ProcessDataAttrAsFunc('body', (element, props) => {
    element.style.backgroundColor = props.color;
});
const menu = new _process_data_attr_as_func_index__WEBPACK_IMPORTED_MODULE_0__.ProcessDataAttrAsFunc('.menu-item', (element, props) => {
    element.style.backgroundColor = props.color;
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});