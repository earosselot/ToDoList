// todo: agregar fechas


const createDiv = (className) => {
    const div = document.createElement('div');
    div.className = className;
    return div;
}


const createCheckBox = (noteData) => {
    const checkboxDiv = createDiv('note-box');

    const completeChekbox = document.createElement('input');
    completeChekbox.setAttribute('type', 'checkbox');
    // im going to put id on note div as note attribute
    completeChekbox.setAttribute('note', `${noteData.id}`);
    completeChekbox.setAttribute('project', `${noteData.projectId}`);
    completeChekbox.setAttribute('name', 'complete');
    completeChekbox.className = 'complete-checkbox';

    const completeCheckboxLabel = document.createElement('label');
    completeCheckboxLabel.setAttribute('for', noteData.id);
    completeCheckboxLabel.className = 'todo-title';
    completeCheckboxLabel.className = `priority${noteData.priority}`;
    completeCheckboxLabel.textContent = noteData.title;

    if (noteData.completeStatus) {
        completeChekbox.checked = true;
        completeCheckboxLabel.className = 'completed';
    }

    checkboxDiv.appendChild(completeChekbox);
    checkboxDiv.appendChild(completeCheckboxLabel);

    return checkboxDiv;
}


const Note = (noteData) => {
    // DOM Note Factory
    // Creates an object containing a note DOM element

    const note = createDiv('todo-note');
    note.setAttribute('note', noteData.id);
    note.setAttribute('project', noteData.projectId);

    const completeCheckBox = createCheckBox(noteData)

    const descriptionDiv = createDiv('todo-description');
    descriptionDiv.textContent = noteData.description;
    if (noteData.completeStatus) {
        descriptionDiv.className = 'completed';
    }

    const textDiv = createDiv('note-text');
    textDiv.appendChild(completeCheckBox);
    textDiv.appendChild(descriptionDiv);

    const deleteNoteDiv = createDiv('delete-note-div');
    const deleteNoteButton = document.createElement('button');
    deleteNoteButton.className = 'delete-note-button';
    deleteNoteButton.setAttribute('note', noteData.id);
    deleteNoteButton.setAttribute('project', noteData.projectId);
    const deleteNoteIcon = document.createElement('i');
    deleteNoteIcon.setAttribute('note', noteData.id);
    deleteNoteIcon.setAttribute('project', noteData.projectId);
    deleteNoteIcon.className = 'material-icons';
    deleteNoteIcon.textContent = 'delete';
    deleteNoteButton.appendChild(deleteNoteIcon);
    deleteNoteDiv.appendChild(deleteNoteButton);

    note.appendChild(textDiv);
    note.appendChild(deleteNoteDiv);

    // todo: agregar un boton de eliminar nota
    // todo: agregar event listeners

    return {note}
}


const Project = (id, name) => {
    // DOM Project Factory
    // creates an object containing a Project DOM element

    const createAddNoteBtn = (id) => {
        const addNoteBtn = document.createElement('button');
        addNoteBtn.className = 'add-note-button';
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
