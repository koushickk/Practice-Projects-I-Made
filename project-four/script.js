let todoItems =[];

function addTodo(text){
 const todo = {
text,
checked:false,
id:Date.now(),
};

todoItems.push(todo);

const list = document.querySelector('.js-todo-list');

list.insertAdjacentHTML('beforeend',` <li class="todo-item" data-key="${todo.id}"> <input id="${todo.id}" type="checkbox"/> <label for="${todo.id}" class="tick js-tick"></label> <span>${todo.text}</span> <button class="delete-todo js-delete-todo"> <svg><use href="#delete-icon"></use></svg> </button> </li> `);
}

//toogle yction

function toggleDone(key){
const index = todoItems.findIndex(item => 

}