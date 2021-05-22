import * as todos from './todos.js';
import * as dom from './dom.js';
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
    const note = todos.Note(data.title, data.description, data.dueDate, data.priority, currentProjectId);

    // save note on project
    projects[currentProjectId].notes[note.id] = note;

    // create DOM note
    const noteDom = dom.Note(note.id, note.title, note.description, note.priority, note.projectId);

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
    return todos.Project(prjTitle);
}

// New Project Submit handler
function prjSubmit(event) {

    const todoProject = createProject(event.target);

    // save the projects inside an object
    projects[todoProject.id] = todoProject;
    const projectDom = dom.Project(todoProject.id, todoProject.name);

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
