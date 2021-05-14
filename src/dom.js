
const domNote = (id, title, description, priority) => {
    const note = document.createElement('div');
    note.className = 'todo-note';

    const completeChkbx = document.createElement('input');
    completeChkbx.setAttribute('type', 'checkbox');
    completeChkbx.setAttribute('id', id);
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

    return {note}
}

// todo: agregar un boton de eliminar nota
// todo: agregar event listeners


        // method binded to the object (every object has his own) this prevent this "loosing" on event listeners
        // this.element.onclick = this.onClick.bind(this);


    // onClick() {
    //     this.element.classList.toggle('clicked');
    //
    // }

    // This will also prevent "this loosing"
    // toggleComplete = (event) => {
    //     // this.complete = checked (?)
    //     event.stopPropagation();  // this line will prevent triggereing card event
    // }


export { domNote };

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