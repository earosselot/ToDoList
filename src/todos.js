// import { compareDesc } from 'date-fns';
import { v1 as uuidv1 } from 'uuid';

const Note = (title, description, _dueDate, priority, projectId, id = uuidv1(), completeStatus = false) => {
    // Note Factory

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

    // todo: toggleComplete method does not works, it does not change completeStatus in the object.
    // const toggleComplete = () => {
    //     completeStatus = !completeStatus;
    // }

    return {id, title, description, creationDate, dueDate, priority, projectId, completeStatus}
}

const Project = (title, id = uuidv1()) => {
    // Project Factory

    let notes = {};
    return {id, title, notes}
}

export { Note, Project };
