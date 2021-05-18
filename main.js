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
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
// todo: agregar fechas



const Note = (id, title, description, priority) => {
    // Creates an object containing a note DOM element

    const note = document.createElement('div');
    note.className = 'todo-note';

    const completeChkbx = document.createElement('input');
    completeChkbx.setAttribute('type', 'checkbox');
    completeChkbx.setAttribute('id', `note-${id}`);
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

    // todo: agregar un boton de eliminar nota
    // todo: agregar event listeners

    return {note}
}


const Project = (id, name) => {
    // creates an object containing a Project DOM element

     const createDiv = (className) => {
        const div = document.createElement('div');
        div.className = className;
        return div
    }

    const createAddNoteBtn = (id) => {
        const addNoteBtn = document.createElement('button');
        addNoteBtn.setAttribute('id', `add-note-proj-${id}`);
        addNoteBtn.textContent = 'Add Note';
        return addNoteBtn;
    }

    const createProject = (projectDiv, projectTitle, projectNotes, addNoteContainer, addNoteBtn) => {
        addNoteContainer.appendChild(addNoteBtn);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectNotes);
        projectDiv.appendChild(addNoteContainer);
        return projectDiv;
    }
    const projectDiv = createDiv('project');
    projectDiv.setAttribute('id', `proj-${id}`);

    const projectTitle = createDiv('project-title');
    projectTitle.innerText = name;

    const projectNotes = createDiv('project-notes');
    const addNoteContainer = createDiv('add-note-container');
    const addNoteBtn = createAddNoteBtn(id);

    const project = createProject(projectDiv, projectTitle, projectNotes, addNoteContainer, addNoteBtn);

    return {project}
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
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });


let nextId = 0;

const Note = (title, description, _dueDate, priority, project) => {

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

let projId = 0;

const Project = (name) => {
    let id = projId++;
    let notes = [];
    // todo: cambiar notes por objeto con key ID y value note
    return {id, name, notes}
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
// todo: agregar el tema de las fechas

// notes dictionary have keys as projects and values are note objects.
let projects = {};

// projects = [{
//     'id': projectObject.id,
//     'project': projectObject,
//     'notes': [note1, note2, note3,...]
//     },
//     {
//     'id': projectObject.id,
//     'project': projectObject,
//     'notes': [note1, note2, note3,...]
//     },
// ]

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

// note creation
const note1 = _todos_js__WEBPACK_IMPORTED_MODULE_0__.Note('title1', 'description', '10/05/2022', 2, 'default');

// project creation
const project1 = _todos_js__WEBPACK_IMPORTED_MODULE_0__.Project('default');

// add note to project
project1.notes.push(note1);

// create DOM Project
const project1Dom = _dom_js__WEBPACK_IMPORTED_MODULE_1__.Project(project1.id, project1.name);

// create DOM notes
const note1Dom = _dom_js__WEBPACK_IMPORTED_MODULE_1__.Note(note1.id, note1.title, note1.description, note1.priority);

// add dom-note to dom-project
project1Dom.project.appendChild(note1Dom.note);

// add dom-project (with notes) to project container in the last position
const projectContainer = document.querySelector('.project-container');
projectContainer.appendChild(project1Dom.project);

// ------------------------ ADD NOTE MODAL ------------------------
const addNoteModal = document.getElementById('add-note-modal');
const addNoteModalSpan = document.getElementById('add-note-modal-close');

addNoteModalSpan.onclick = () => addNoteModal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == addNoteModal) {
        addNoteModal.style.display = 'none';
    }
}

function getNoteFormData(formData) {
    const title = formData.get('note-title');
    const description = formData.get('note-description');
    const dueDate = formData.get('due-date');
    const priority = formData.get('priority');
    return {title, description, dueDate, priority}
}


// -------------------- ADD NOTE FORM SUBMIT ---------------------
function noteSubmit(event) {
    const formData = new FormData(event.target);
    const data = getNoteFormData(formData);
    const note = _todos_js__WEBPACK_IMPORTED_MODULE_0__.Note(data.title, data.description, data.dueDate, data.priority, currentProjectId);

    // project.notes.push(note); todo: arreglar esto para que siga la estructura seteada al principio
    // todo: agregar nota al dom. para esto hay que seleccionar de alguna manera el proyecto (currentProjectId)

    event.preventDefault();
    addNoteModal.style.display = 'none';
}

const addNoteForm = document.forms['new-note'];
addNoteForm.addEventListener('submit', noteSubmit);


// ---------------------- ADD PROJECT MODAL ----------------------
const addPrjModal = document.getElementById('add-prj-modal');
const addPrjModalBtn = document.getElementById('open-add-prj-modal-btn');
const addPrjModalSpan = document.getElementById('add-project-modal-close');

// when btn click opens the modal, closes it when click span or outside modal
addPrjModalBtn.onclick = () => addPrjModal.style.display = 'block';
addPrjModalSpan.onclick = () => addPrjModal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == addPrjModal) {
        addPrjModal.style.display = 'none';
    }
}

// this variable will store the Id of the project where the last note is being added
let currentProjectId;

// ------------------- ADD PROJECT FORM SUBMIT -------------------
// New Project Submit handler
function prjSubmit(event) {
    // creates an instance of FormData
    const formData = new FormData(event.target);
    // the get method from the class FormData returns the input by HTML name property
    const prjTitle = formData.get('prj-title');
    const todoProject = _todos_js__WEBPACK_IMPORTED_MODULE_0__.Project(prjTitle);
    // save the projects inside an object
    projects[todoProject.id] = todoProject;
    const projectDom = _dom_js__WEBPACK_IMPORTED_MODULE_1__.Project(todoProject.id, todoProject.name);

    const addNoteBtn = projectDom.project.querySelector(`#add-note-proj-${todoProject.id}`);
    addNoteBtn.addEventListener('click', (event) => {
        addNoteModal.style.display = 'block';
        // project id handling, in order to know in which project was launched
        // todo: cambiar id por un  atributo html project
        const projDomId = event.target.getAttribute('id').split('-');
        currentProjectId = projDomId[3];
    })

    projectContainer.appendChild(projectDom.project);
    event.preventDefault();
    // hide modal after submit
    addPrjModal.style.display = 'none';
}

const addPrjForm = document.forms['new-prj'];
addPrjForm.addEventListener('submit', prjSubmit);



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