import { compareDesc } from 'date-fns';

let nextId = 0;

const createNote = (title, description, _dueDate, priority, project) => {

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

    return {id, title, description, creationDate, dueDate, priority, project, complete}
}


export { createNote };

// creating new to-dos, setting to-dos as complete, changing to-do priority
