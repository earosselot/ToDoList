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


const createDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div
}


const createCheckBox = (id, title, priority, projectId) => {
    const checkboxDiv = createDiv('note-box');

    const completeChekbox = document.createElement('input');
    completeChekbox.setAttribute('type', 'checkbox');
    // im going to put id on note div as note attribute
    completeChekbox.setAttribute('note', `${id}`);
    completeChekbox.setAttribute('project', `${projectId}`);
    completeChekbox.setAttribute('name', 'complete');
    completeChekbox.className = 'complete-checkbox';

    const completeChekboxLabel = document.createElement('label');
    completeChekboxLabel.setAttribute('for', id);
    completeChekboxLabel.className = 'todo-title';
    completeChekboxLabel.className = `priority${priority}`;
    completeChekboxLabel.textContent = title;

    checkboxDiv.appendChild(completeChekbox)
    checkboxDiv.appendChild(completeChekboxLabel)

    return checkboxDiv
}


const Note = (id, title, description, priority, project) => {
    // DOM Note Factory
    // Creates an object containing a note DOM element

    const note = createDiv('todo-note');
    note.setAttribute('note', `${id}`);

    const completeCheckBox = createCheckBox(id, title, priority, project)

    const descriptionDiv = createDiv('todo-description')
    descriptionDiv.textContent = description;

    note.appendChild(completeCheckBox);
    note.appendChild(descriptionDiv);

    // todo: agregar un boton de eliminar nota
    // todo: agregar event listeners

    return {note}
}


const Project = (id, name) => {
    // DOM Project Factory
    // creates an object containing a Project DOM element

    const createAddNoteBtn = (id) => {
        const addNoteBtn = document.createElement('button');
        addNoteBtn.className = 'add-note-button'
        addNoteBtn.setAttribute('project', id);
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
// import { compareDesc } from 'date-fns';

let nextId = 0;

const Note = (title, description, _dueDate, priority, projectId) => {
    // Note Factory

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

    const toggleComplete = () => {
        if (complete === true) {
            complete = false;
        } else {
            complete = true;
        }
    }

    return {id, title, description, creationDate, dueDate, priority, projectId, complete, toggleComplete}
}

let projId = 0;

const Project = (name) => {
    // Project Factory

    let id = projId++;
    let notes = {};
    return {id, name, notes}
}




// Requeriments
// creating new to-dos changing to-do priority


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


// ------------------------ ADD NOTE MODAL ------------------------
const addNoteModal = document.getElementById('add-note-modal');
const addNoteModalSpan = document.getElementById('add-note-modal-close');

addNoteModalSpan.onclick = () => addNoteModal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == addNoteModal) {
        addNoteModal.style.display = 'none';
    }
}


// ------------------ ADD NOTE FORM SUBMIT AUX -------------------
function getParameters(formData) {
    let data = {};
    data['title'] = formData.get('note-title');
    data['description'] = formData.get('note-description');
    data['dueDate'] = formData.get('due-date');
    data['priority'] = formData.get('priority');
    return data;
}

function getNoteFormData(eventTarget) {
    const formData = new FormData(eventTarget);
    const data = getParameters(formData);
    return data
}


function toggleComplete(event) {
    const noteId = event.target.getAttribute('note');
    const projectId = event.target.getAttribute('project');

    // todo: implement this logic as todos.note method--- not working yet
    if (projects[projectId]['notes'][noteId]['complete'] === false) {
        projects[projectId]['notes'][noteId]['complete'] = true;
    } else {
        projects[projectId]['notes'][noteId]['complete'] = false;
    }
    console.log(projects[projectId]['notes'][noteId]['complete']);
    // this method does nothing
    projects[projectId]['notes'][noteId].toggleComplete();
    console.log(projects[projectId]['notes'][noteId]['complete']);

    const checkboxLabel = event.target.nextElementSibling;
    const description = event.target.parentElement.nextElementSibling;
    checkboxLabel.classList.toggle('completed');
    description.classList.toggle('completed');
}

// -------------------- ADD NOTE FORM SUBMIT ---------------------
function noteSubmit(event) {

    const data = getNoteFormData(event.target);
    const note = _todos_js__WEBPACK_IMPORTED_MODULE_0__.Note(data.title, data.description, data.dueDate, data.priority, currentProjectId);

    // save note on project
    projects[currentProjectId].notes[note.id] = note;

    // create DOM note
    const noteDom = _dom_js__WEBPACK_IMPORTED_MODULE_1__.Note(note.id, note.title, note.description, note.priority, note.projectId);

    // Add event listeners
    const  completeNoteCheckbox = noteDom.note.querySelector('.complete-checkbox');
    console.log(completeNoteCheckbox);
    completeNoteCheckbox.addEventListener('click', toggleComplete);

    // Add note to DOM
    const noteDivProjectDom = document.querySelector(`#proj-${currentProjectId} .project-notes`);
    noteDivProjectDom.appendChild(noteDom.note);

    // set as complete on checkbox click


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


// ------------------- ADD PROJECT FORM SUBMIT -------------------
// project container selection
const projectContainer = document.querySelector('.project-container');

// this variable will store the Id of the project where the last note is being added
let currentProjectId;

function createProject(eventTarget) {
    const formData = new FormData(eventTarget);
    const prjTitle = formData.get('prj-title');
    return _todos_js__WEBPACK_IMPORTED_MODULE_0__.Project(prjTitle);
}

// New Project Submit handler
function prjSubmit(event) {

    const todoProject = createProject(event.target);

    // save the projects inside an object
    projects[todoProject.id] = todoProject;
    const projectDom = _dom_js__WEBPACK_IMPORTED_MODULE_1__.Project(todoProject.id, todoProject.name);

    const addNoteBtn = projectDom.project.querySelector('.add-note-button');
    addNoteBtn.addEventListener('click', (event) => {
        addNoteModal.style.display = 'block';
        // project id handling, in order to know in which project was launched
        currentProjectId = event.target.getAttribute('project');
    })

    projectContainer.appendChild(projectDom.project);
    event.preventDefault();
    // hide modal after submit
    addPrjModal.style.display = 'none';
}


const addPrjForm = document.forms['new-prj'];
addPrjForm.addEventListener('submit', prjSubmit);


// 5. The look of the User Interface is up to you, but it should be able to do the following:
//      c. expand a single to-do to see/edit its details
//      d. delete a to-do
// changing to-do priority

})();

/******/ })()
;
//# sourceMappingURL=main.js.map