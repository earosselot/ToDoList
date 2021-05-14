import * as todos from './todos.js';
import * as dom from './dom.js';
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

const note1 = todos.createNote('title1', 'description', '10/05/2022', 2, 'default');

const note2 = todos.createNote('title2', 'descriasdadption', '10/05/2022', 2, 'default1');

const note1Dom = dom.domNote('23', 'newnote', 'things', '2');
const div = document.querySelector('.project-notes');


// 5. The look of the User Interface is up to you, but it should be able to do the following:
//      a. view all projects
//      b. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
//      c. expand a single to-do to see/edit its details
//      d. delete a to-do

// todo: agregar un modal para agregar nuevas notas.
// https://www.w3schools.com/howto/howto_css_modals.asp
