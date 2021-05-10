
class ToDoNote {
    
    constructor(title, description, dueDate, priority, project = 'default') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;  // integer from 1 to 3, being 1 the highest
        this.project = project;
    }

    set title(value) {
        if (value.lenght < 4) {
            return 'title too short';
        }
        this._title = value;
    }

    set description(value) {
        this._description = value;
    }

    set dueDate(value) {
        this._dueDate = value;
    }
    
    setPriority(value = 3) {
        this._priority = value;
    }

    set project(value) {
        this._project = value;
    }
} 

export { ToDoNote }
