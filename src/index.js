import * as todos from './todos.js';
import * as dom from './dom.js';
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
const note1 = todos.Note('title1', 'description', '10/05/2022', 2, 'default');

// project creation
const project1 = todos.Project('default');

// add note to project
project1.notes.push(note1);

// create DOM Project
const project1Dom = dom.Project(project1.id, project1.name);

// create DOM notes
const note1Dom = dom.Note(note1.id, note1.title, note1.description, note1.priority);

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
    const note = todos.Note(data.title, data.description, data.dueDate, data.priority, currentProjectId);

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
    const todoProject = todos.Project(prjTitle);
    // save the projects inside an object
    projects[todoProject.id] = todoProject;
    const projectDom = dom.Project(todoProject.id, todoProject.name);

    const addNoteBtn = projectDom.project.querySelector(`#add-note-proj-${todoProject.id}`);
    addNoteBtn.addEventListener('click', (event) => {
        addNoteModal.style.display = 'block';
        // project id handling, in order to know in which project was launched
        const projDomId = event.target.getAttribute('id').split('-');
        currentProjectId = projDomId[3];
    })

    projectContainer.appendChild(projectDom.project);
    event.preventDefault();
    // hide modal after submit
    addPrjModal.style.display = 'none';
}

const addPrjForm = document.forms['new-prj'];
addPrjForm.addEventListener('submit', prjSubmit)



// 5. The look of the User Interface is up to you, but it should be able to do the following:
//      a. view all projects
//      b. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
//      c. expand a single to-do to see/edit its details
//      d. delete a to-do

// todo: agregar un modal para agregar nuevas notas.
// https://www.w3schools.com/howto/howto_css_modals.asp
