import * as todos from './todos.js';
import * as dom from './dom.js';
import { compareDesc, format } from 'date-fns';
// todo: agregar el tema de las fechas
// todo: agregar condiciones a los forms para que no se pueda submitir cualquier cosa

function getParameters(formData) {
    let data = {};
    data['title'] = formData.get('note-title');
    data['description'] = formData.get('note-description');
    data['dueDate'] = formData.get('due-date');
    data['priority'] = formData.get('priority');
    data['noteId'] = formData.get('note-id');
    data['projectId'] = formData.get('project-id');
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
    updateLocalStorage();
    // this method does nothing
    // projects[projectId]['notes'][noteId].toggleComplete();

    // todo: esta clase podría aplicarse al div directamente. hay que var si no jode con el boton de borrar
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
    console.log(note.creationDate);
    document.getElementById('edit-creation-date').value = format(note.creationDate, 'yyyy-MM-dd');
    document.getElementById('edit-note-note-id').value = note.id;
    document.getElementById('edit-note-project-id').value = note.projectId;

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

function createNote(data, projectId) {
    const note = todos.Note(data.title, data.description, data.dueDate, data.priority, projectId);
    return note;
}

function updateLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects))
}

function saveNote(note) {
    projects[note.projectId].notes[note.id] = note;
    updateLocalStorage()
}

function createAndSaveNote(data, projectId) {
    const note = createNote(data, projectId);
    saveNote(note);
    return note
}

function deleteNote(event) {
    const noteId = event.target.getAttribute('note');
    const projectId = event.target.getAttribute('project');
    delete projects[projectId]['notes'][noteId];
    updateLocalStorage();

    event.target.closest('.todo-note').remove();
    event.stopPropagation();

}

function createDomNote(note) {
    // create DOM note
    const noteDom = dom.Note(note);
    // Checkbox event listener
    const  completeNoteCheckbox = noteDom.note.querySelector('.complete-checkbox');
    completeNoteCheckbox.addEventListener('click', toggleComplete);
    const deleteNoteButton = noteDom.note.querySelector('.delete-note-button');
    deleteNoteButton.addEventListener('click', deleteNote);
    // Edit note event listener
    noteDom.note.addEventListener('click', launchEditNote);
    return noteDom;
}

function createDomNoteAndAddToDom(note) {
    const noteDom = createDomNote(note);
    // Add note to DOM
    const noteDivProjectDom = document.querySelector(`#proj-${note.projectId} .project-notes`);
    noteDivProjectDom.appendChild(noteDom.note);
}

// -------------------- ADD NOTE FORM SUBMIT ---------------------
function noteSubmit(event) {
    const data = getNoteFormData(this);
    const note = createAndSaveNote(data, currentProjectId);

    createDomNoteAndAddToDom(note);

    event.preventDefault();
    // hide modal after submit
    addNoteModal.style.display = 'none';
}

function changeNote(data) {
    projects[data.projectId]['notes'][data.noteId]['title'] = data.title;
    projects[data.projectId]['notes'][data.noteId]['description'] = data.description;
    projects[data.projectId]['notes'][data.noteId]['dueDate'] = new Date(data.dueDate);
    projects[data.projectId]['notes'][data.noteId]['priority'] = data.priority;
}

function editNote(event) {
    const data = getNoteFormData(this);
    changeNote(data);
    updateLocalStorage();
    editNoteModal.style.display = 'none';
}

const addNoteForm = document.forms['new-note'];
addNoteForm.addEventListener('submit', noteSubmit);

const editNoteForm = document.forms['edit-note'];
editNoteForm.addEventListener('submit', editNote);

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
    const projectDom = dom.Project(todoProject.id, todoProject.title);
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
    updateLocalStorage();
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

function restoreProject(prjTitle, prjId) {
    const todoProject = todos.Project(prjTitle, prjId);
    return todoProject;
}

function restoreNote(data, projectId) {
    const note = todos.Note(data.title, data.description, data.dueDate, data.priority, projectId, data.id, data.completeStatus, data.creationDate);
    return note;
}

let projects = {};
if (localStorage.getItem('projects')) {
    const loadedProjects = JSON.parse(localStorage.getItem('projects'));
    for (let [projectId, project] of Object.entries(loadedProjects)) {
        const todoProject = restoreProject(project.title, projectId);
        saveProject(todoProject);
        addProjectToDom(todoProject);
        for (let [noteId, noteData] of Object.entries(project.notes)) {
            const note = restoreNote(noteData, noteData.projectId);
            saveNote(note);
            createDomNoteAndAddToDom(note);
        }
    }
}

// 5. The look of the User Interface is up to you, but it should be able to do the following:
//      c. expand a single to-do to see/edit its details
//      d. delete a to-do
// changing to-do priority
