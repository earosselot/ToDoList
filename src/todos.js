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


export { Note, Project };

// Requeriments
// creating new to-dos changing to-do priority
