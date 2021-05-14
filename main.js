/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domNote": () => (/* binding */ domNote)
/* harmony export */ });

const domNote = (id, title, description, priority) => {
    const note = document.createElement('div');
    note.className = 'todo-note';

    const completeChkbx = document.createElement('input');
    completeChkbx.setAttribute('type', 'checkbox');
    completeChkbx.setAttribute('id', id);
    // todo: ver cual de los dos que siguen es realmente necesario.
    completeChkbx.setAttribute('name', 'complete');
    completeChkbx.setAttribute('value', 'complete');

    const completeChkbxLabel = document.createElement('label');
    completeChkbxLabel.setAttribute('for', id);
    completeChkbxLabel.className = 'todo-title';
    completeChkbxLabel.className = `priority${priority}`;
    completeChkbxLabel.textContent = title;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'todo-description';
    descriptionDiv.textContent = description;

    note.appendChild(completeChkbx);
    note.appendChild(completeChkbxLabel);
    note.appendChild(descriptionDiv);

    return {note}
}

// todo: agregar un boton de eliminar nota
// todo: agregar event listeners


        // method binded to the object (every object has his own) this prevent this "loosing" on event listeners
        // this.element.onclick = this.onClick.bind(this);


    // onClick() {
    //     this.element.classList.toggle('clicked');
    //
    // }

    // This will also prevent "this loosing"
    // toggleComplete = (event) => {
    //     // this.complete = checked (?)
    //     event.stopPropagation();  // this line will prevent triggereing card event
    // }




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
/* harmony export */   "createNote": () => (/* binding */ createNote)
/* harmony export */ });


let nextId = 0;

const createNote = (title, description, _dueDate, priority, project) => {

    let id = nextId++;

    // short title handler
    if (title.length < 4) {
        console.log('title must be at least 4 characters long.');
    }

    // creation date handler
    let creationDate = new Date();  // now

    // due date handler
    let dueDate = new Date(_dueDate);

    // priority handler
    if (priority < 1 || 3 < priority) {
        console.log('priority not valid. Must be an integer between 1 and 3');
    }

    // complete default as not completed
    let complete = false;

    return {id, title, description, creationDate, dueDate, priority, project, complete}
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


// import { compareDesc } from 'date-fns';


// notes dictionary have keys as projects and values are note objects.
let notes = {};

// todo: hacer el form
// const form = document.querySelector('FORMULARIO');
// form.addEventListener('submit', () => {
//     // todo: 1-crearnota
//     const note = todos.createNote(atributos);
//     // todo: 2-agregar nota al diccionario
//     if (note.project in notes.keys) {
//         notes[note.project].push(note);
//     } else {
//         notes[note.project] = [note];
//     }
//     // todo: 3- crear objeto nota DOM
//
//     // todo: 4- agregar nota al DOM
// })

const note1 = _todos_js__WEBPACK_IMPORTED_MODULE_0__.createNote('title1', 'description', '10/05/2022', 2, 'default');

const note2 = _todos_js__WEBPACK_IMPORTED_MODULE_0__.createNote('title2', 'descriasdadption', '10/05/2022', 2, 'default1');

const note1Dom = _dom_js__WEBPACK_IMPORTED_MODULE_1__.domNote('23', 'newnote', 'things', '2');
const div = document.querySelector('.project-notes');


// 5. The look of the User Interface is up to you, but it should be able to do the following:
//      a. view all projects
//      b. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
//      c. expand a single to-do to see/edit its details
//      d. delete a to-do

// todo: agregar un modal para agregar nuevas notas.
// https://www.w3schools.com/howto/howto_css_modals.asp

})();

/******/ })()
;
//# sourceMappingURL=main.js.map