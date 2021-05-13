
class ToDoCard {
    constructor(title, description) {
        this.card = document.createElement('div');
        this.card.className = 'card';
        this.card.style.width = '18rem';

        this.header = document.createElement('div');
        this.header.className = 'card-header';
        this.header.textContent = title;

        this.body = document.createElement('div');
        this.body.className = 'card-body';

        this.bodyText = document.createElement('p');
        this.bodyText.className = 'card-text';
        this.bodyText.textContent = description;

        this.completeBtn = document.createElement('input');
        this.completeBtn.className = 'btn-check';
        this.completeBtn.setAttribute('type', 'checkbox');
        this.completeBtn.setAttribute('id', 'complete-btn');
        this.completeBtn.setAttribute('autocomplete', 'off');

        this.completeBtnLabel = document.createElement('label');
        this.completeBtnLabel.className = 'btn btn-outline-success';
        this.completeBtnLabel.setAttribute('for', 'complete-btn');
        this.completeBtnLabel.textContent = 'Done';

        this.body.appendChild(this.bodyText);
        this.body.appendChild(this.completeBtn);
        this.body.appendChild(this.completeBtnLabel);

        this.card.appendChild(this.header);
        this.card.appendChild(this.body);

        // this.element.innerHTML = something;

        // method binded to the object (every object has his own) this prevent this "loosing" on event listeners
        // this.element.onclick = this.onClick.bind(this);
    }

    // onClick() {
    //     this.element.classList.toggle('clicked');
    //
    // }

    // This will also prevent "this loosing"
    // toggleComplete = (event) => {
    //     // this.complete = checked (?)
    //     event.stopPropagation();  // this line will prevent triggereing card event
    // }
}

export { ToDoCard };

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