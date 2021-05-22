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

export { Note, Project };
