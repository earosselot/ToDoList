// todo: agregar fechas


const createDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div
}


const createCheckBox = (id, title, priority) => {
    const checkBoxDiv = createDiv('note-box');

    const completeChkbx = document.createElement('input');
    completeChkbx.setAttribute('type', 'checkbox');
    completeChkbx.setAttribute('id', `note-${id}`);
    completeChkbx.setAttribute('name', 'complete');

    const completeChkbxLabel = document.createElement('label');
    completeChkbxLabel.setAttribute('for', id);
    completeChkbxLabel.className = 'todo-title';
    completeChkbxLabel.className = `priority${priority}`;
    completeChkbxLabel.textContent = title;

    checkBoxDiv.appendChild(completeChkbx)
    checkBoxDiv.appendChild(completeChkbxLabel)

    return checkBoxDiv
}


const Note = (id, title, description, priority) => {
    // DOM Note Factory
    // Creates an object containing a note DOM element

    const note = createDiv('todo-note');

    const completeCheckBox = createCheckBox(id, title, priority)

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

export { Note, Project };
