// import { compareDesc } from 'date-fns';
import { v1 as uuidv1 } from 'uuid';

const Note = (title, description, _dueDate, priority, projectId, id = uuidv1(), completeStatus = false, _creationDate = 0) => {
    // Note Factory

    // short title handler
    if (title.length < 4) {
        console.log('title must be at least 4 characters long.');
    }

    // due date handler
    let dueDate = new Date(_dueDate);

    // priority handler
    if (priority < 1 || 3 < priority) {
        console.log('priority not valid. Must be an integer between 1 and 3');
    }
    let creationDate;
    if (_creationDate === 0) {
        creationDate = new Date();
    } else {
        creationDate = new Date(_creationDate);
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
