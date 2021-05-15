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

    const project = document.createElement('div');
    project.className = 'project';
    project.setAttribute('id', `proj-${id}`);

    const projectTitle = document.createElement('div');
    projectTitle.className = 'project-title';
    projectTitle.innerText = name;

    const projectNotes = document.createElement('div');
    projectNotes.className = 'project-notes';

    const addNoteContainer = document.createElement('div');
    addNoteContainer.className = 'add-note-container';

    const addNoteBtn = document.createElement('button');
    addNoteBtn.setAttribute('id', `add-note-proj-${id}`);
    addNoteBtn.textContent = 'Add Note';

    addNoteContainer.appendChild(addNoteBtn);

    project.appendChild(projectTitle);
    project.appendChild(projectNotes);
    project.appendChild(addNoteContainer);

    return {project}
}


export { Note, Project };

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