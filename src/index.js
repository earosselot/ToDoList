import * as todos from './todos.js';
import * as dom from './dom.js';
import { compareDesc, format } from 'date-fns';
// todo: agregar el tema de las fechas

// notes object have keys as projects and values are note objects.
let projects = {};
if (localStorage.getItem('projects')) {
    // todo: no funciona el parse ( y quizás tampoco el stringify). Buscar: guardar "nested objects" en localStorage
    projects = JSON.parse(localStorage.getItem('projects'));
    console.log(projects);
} else {
    console.log('narnia');
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
    projects[projectId]['notes'][noteId]['completeStatus'] = !projects[projectId]['notes'][noteId]['completeStatus'];
    // this method does nothing
    // projects[projectId]['notes'][noteId].toggleComplete();

    const checkboxLabel = event.target.nextElementSibling;
    const description = event.target.parentElement.nextElementSibling;
    checkboxLabel.classList.toggle('completed');
    description.classList.toggle('completed');

    // Prevents opening edit note on clicking the checkbox
    event.stopPropagation();
}

function fillFormWithNoteData(note) {
    document.getElementById('edit-note-title').value = note.title;
    document.getElementById('edit-note-description').value = note.description;
    document.getElementById('edit-due-date').value = format(note.dueDate, 'yyyy-MM-dd');

    const priorityRadios = document.getElementsByName('priority');
    priorityRadios.forEach(radioElement => {
        if (radioElement.getAttribute('value') === note.priority) {
            radioElement.checked = true;
        }
    });
}

function launchEditNote(event) {
    // 'this'(== event.currentTarget) points to the element that launched the event (The note div)
    const noteId = this.getAttribute('note');
    const projectId = this.getAttribute('project');
    const note = projects[projectId]['notes'][noteId];
    fillFormWithNoteData(note);
    editNoteModal.style.display = 'block';
}

function createNote(data) {
    const note = todos.Note(data.title, data.description, data.dueDate, data.priority, currentProjectId);
    return note;
}

function saveNote(note) {
    projects[currentProjectId].notes[note.id] = note;
    localStorage.setItem('projects', JSON.stringify(projects))
}

function createAndSaveNote(data) {
    const note = createNote(data);
    saveNote(note);
    return note
}

// -------------------- ADD NOTE FORM SUBMIT ---------------------
function noteSubmit(event) {

    const data = getNoteFormData(this);
    const note = createAndSaveNote(data);

    // create DOM note
    const noteDom = dom.Note(note.id, note.title, note.description, note.priority, note.projectId);

    // Checkbox event listener
    const  completeNoteCheckbox = noteDom.note.querySelector('.complete-checkbox');
    completeNoteCheckbox.addEventListener('click', toggleComplete);

    // Edit note event listener
    noteDom.note.addEventListener('click', launchEditNote);

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
addPrjModalSpan.onclick = () => addPrjModal.style.display = 'none';


// ------------------------ EDIT NOTE MODAL -----------------------
const editNoteModal = document.getElementById('edit-note-modal');
const editNoteModalSpan = document.getElementById('edit-note-modal-close');
editNoteModalSpan.onclick = () => editNoteModal.style.display = 'none';


// ------------------------ ADD NOTE MODAL ------------------------
const addNoteModal = document.getElementById('add-note-modal');
const addNoteModalSpan = document.getElementById('add-note-modal-close');
addNoteModalSpan.onclick = () => addNoteModal.style.display = 'none';


// when btn click opens the modal, closes it when click span or outside modal
addPrjModalBtn.onclick = () => {
    addPrjForm.reset();
    addPrjModal.style.display = 'block'
};

window.onclick = (event) => {
    if (event.target == addPrjModal || event.target == editNoteModal || event.target == addNoteModal) {
        addPrjModal.style.display = 'none';
        addNoteModal.style.display = 'none';
        editNoteModal.style.display = 'none';
    }
}


// ------------------- ADD PROJECT FORM SUBMIT -------------------
// project container selection
const projectContainer = document.querySelector('.project-container');


// this variable will store the Id of the project where the last note is being added
let currentProjectId;


function launchAddNote (event) {
    addNoteForm.reset();
    addNoteModal.style.display = 'block';
    // project id handling, in order to know in which project was launched
    currentProjectId = event.target.getAttribute('project');
}

function addProjectToDom(todoProject) {
    const projectDom = dom.Project(todoProject.id, todoProject.name);
    const addNoteBtn = projectDom.project.querySelector('.add-note-button');
    addNoteBtn.addEventListener('click', launchAddNote);
    projectContainer.appendChild(projectDom.project);
}

function createProject(prjTitle) {
    const todoProject = todos.Project(prjTitle);
    return todoProject;
}

function saveProject(todoProject) {
    projects[todoProject.id] = todoProject;
    localStorage.setItem('projects', projects);
}

function createAndSaveProject(prjTitle) {
    const todoProject = createProject(prjTitle);
    saveProject(todoProject);
    return todoProject;
}

function getProjectTitleFromForm(eventTarget) {
    const formData = new FormData(eventTarget);
    const prjTitle = formData.get('prj-title');
    return prjTitle;
}

// New Project Submit handler
function prjSubmit(event) {
    const prjTitle = getProjectTitleFromForm(event.target);
    const todoProject = createAndSaveProject(prjTitle);
    addProjectToDom(todoProject);

    // todo: preventDefault is not preventing default :(
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
