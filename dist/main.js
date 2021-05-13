/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareDesc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoCard": () => (/* binding */ ToDoCard)
/* harmony export */ });

class ToDoCard {
    constructor(title, description) {
        this.card = document.createElement('div');
        this.card.className = 'card';
        this.card.style.width = '18rem';

        this.header = document.createElement('div');
        this.header.className = 'card-header';
        this.header.textContent = title;

        this.body = document.createElement('div');
        this.body.className = 'card-body';

        this.bodyText = document.createElement('p');
        this.bodyText.className = 'card-text';
        this.bodyText.textContent = description;

        this.completeBtn = document.createElement('input');
        this.completeBtn.className = 'btn-check';
        this.completeBtn.setAttribute('type', 'checkbox');
        this.completeBtn.setAttribute('id', 'complete-btn');
        this.completeBtn.setAttribute('autocomplete', 'off');

        this.completeBtnLabel = document.createElement('label');
        this.completeBtnLabel.className = 'btn btn-outline-success';
        this.completeBtnLabel.setAttribute('for', 'complete-btn');
        this.completeBtnLabel.textContent = 'Done';

        this.body.appendChild(this.bodyText);
        this.body.appendChild(this.completeBtn);
        this.body.appendChild(this.completeBtnLabel);

        this.card.appendChild(this.header);
        this.card.appendChild(this.body);

        // this.element.innerHTML = something;

        // method binded to the object (every object has his own) this prevent this "loosing" on event listeners
        // this.element.onclick = this.onClick.bind(this);
    }

    // onClick() {
    //     this.element.classList.toggle('clicked');
    //
    // }

    // This will also prevent "this loosing"
    // toggleComplete = (event) => {
    //     // this.complete = checked (?)
    //     event.stopPropagation();  // this line will prevent triggereing card event
    // }
}



// https://stackoverflow.com/questions/41894492/how-is-object-oriented-javascript-used-for-dom-manipulation/41896245

// const basicClassName = 'component';
// const basicTemplate = '<h1>This is my basic component</h1>';
//
// class MyComponent {
//     constructor(template = basicTemplate, className = basicClassName) {
//         this.template = template;
//         this.className = className;
//
//         this.element = document.createElement('div');
//         this.element.className = className;
//         this.element.innerHTML = template;
//         this.element.onclick = this.onClick.bind(this);
//         this.element.style.cursor = 'pointer';
//     }
//
//     onClick() {
//         this.element.classList.toggle('clicked');
//     }
// }
//
// const component = new MyComponent();
//
// const container = document.querySelector('.container');
//
// container.appendChild(component.element);

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoNote": () => (/* binding */ ToDoNote)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareDesc/index.js");



class ToDoNote {
    // Class for create and edit to do notes.

    constructor(title, description, dueDate, priority, project = 'default') {
        this.title = title;
        this.description = description;
        this.creationDate = new Date;
        this.dueDate = dueDate;
        this.priority = priority;  // integer from 1 to 3, being 1 the highest
        this.project = [project];
        this.complete = false;
    }

    set title(value) {
        if (value.length < 4) {
            console.log('title too short');
            return;
        }
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set dueDate(value) {
        try {
            let date = new Date(value);
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(this.creationDate, date)) {
                this._dueDate = date;
            } else {
                return 'invalid due date, must be in the future';
            }
        } catch(e) {
            console.log('invalid date format');
        }
    }

    get dueDate() {
        return this._dueDate;  // aca se puede importar el format de date-fns y darle el formato que sea necesario
    }
    
    set priority(value) {
        if (value < 1 || 3 < value) {
            console.log('priority not valid, must be an integer between 1 and 3.');
            return;
        }
        this._priority = value;
    }

    get priority() {
        return this._priority;
    }

    addProject(project) {
        if (this.project.includes(project)) {
            return "You're trying to add an existing project again";
        }
        this.project.push(project);
    }

    _deleteProject(project) {
        const index = this.project.indexOf(project)
        if (index > -1) {
            this.project.splice(index, 1);
        }
    }

    deleteProject(project) {
        if (!(this.project.includes(project))) {
            return "You're trying to remove a non existing project";
        }
        this._deleteProject(project)
    }

    toggleComplete() {
        if (this.complete === false) {
            this.complete = true;
        } else {
            this.complete = false;
        }
    }
} 



// creating new to-dos, setting to-dos as complete, changing to-do priority


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
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




// let note = new todos.ToDoNote('co', 'hola ke asen', '10/9/2018', 4, 'casa');

// let noteCard = new dom.ToDoCard('New note', 'this is a new note');
// document.getElementById("todo-container").appendChild(noteCard.card);
// document.getElementById("todo-container");
console.log('done');

// 5. The look of the User Interface is up to you, but it should be able to do the following:
//      a. view all projects
//      b. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
//      c. expand a single to-do to see/edit its details
//      d. delete a to-do

})();

/******/ })()
;
//# sourceMappingURL=main.js.map