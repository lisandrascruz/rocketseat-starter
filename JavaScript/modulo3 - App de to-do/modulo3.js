const listElements = document.querySelector("#app ul#listTodo");
const inputElement = document.querySelector("#app input#elementTodo");
const buttonElement = document.querySelector("#app button#addTodo");

const todosList = JSON.parse(localStorage.getItem("todosList")) || [
    'Item 1',
    'Item 2',
    'Item 3'
];

function renderTodos(){
    listElements.innerHTML = '';
    for (let todo of todosList) {
        const todoElement = document.createElement('li');
        const textElement = document.createTextNode(todo + " ");
        const elementLink = document.createElement('a');
        elementLink.setAttribute("href", "#");
        // elementLink.href = "#";
        const textLink = document.createTextNode('excluir');
        
        let pos = todosList.indexOf(todo);
        elementLink.setAttribute('onclick', 'deleteTodo('+ pos +')');
        
        todoElement.appendChild(textElement);
        listElements.appendChild(todoElement);
        elementLink.appendChild(textLink);
        todoElement.appendChild(elementLink);
    }
}
renderTodos();

function addTodo() {
    const todoText = inputElement.value; 
    todosList.push(todoText);

    inputElement.value="";
    saveToStorage();
    renderTodos();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todosList.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todosList', JSON.stringify(todosList));
}