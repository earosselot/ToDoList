import { compareDesc } from 'date-fns';


class ToDoNote {
    // Class for create and edit to do notes.

    constructor(title, description, dueDate, priority, project = 'default') {
        this.title = title;
        this.description = description;
        this.creationDate = new Date;
        this.dueDate = dueDate;
        this.priority = priority;  // integer from 1 to 3, being 1 the highest
        this.project = [project];
        this.complete = false;
    }

    set title(value) {
        if (value.length < 4) {
            console.log('title too short');
            return;
        }
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set dueDate(value) {
        try {
            let date = new Date(value);
            if (compareDesc(this.creationDate, date)) {
                this._dueDate = date;
            } else {
                return 'invalid due date, must be in the future';
            }
        } catch(e) {
            console.log('invalid date format');
        }
    }

    get dueDate() {
        return this._dueDate;  // aca se puede importar el format de date-fns y darle el formato que sea necesario
    }
    
    set priority(value) {
        if (value < 1 || 3 < value) {
            console.log('priority not valid, must be an integer between 1 and 3.');
            return;
        }
        this._priority = value;
    }

    get priority() {
        return this._priority;
    }

    addProject(project) {
        if (this.project.includes(project)) {
            return "You're trying to add an existing project again";
        }
        this.project.push(project);
    }

    _deleteProject(project) {
        const index = this.project.indexOf(project)
        if (index > -1) {
            this.project.splice(index, 1);
        }
    }

    deleteProject(project) {
        if (!(this.project.includes(project))) {
            return "You're trying to remove a non existing project";
        }
        this._deleteProject(project)
    }

    toggleComplete() {
        this.complete = this.complete === false;
    }
} 

export { ToDoNote };

// creating new to-dos, setting to-dos as complete, changing to-do priority
