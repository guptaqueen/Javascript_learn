let todoList = [];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = '';
  displayItems();
  // console.log(todoItem);
}

function displayItems(){
  let containerElement = document.querySelector(
    '.todo-container');

let newHtml = '';

    displayElement.innerText = '';
    for(let i=0; i<=todoList.length; i++){
      displayElement.innerText = displayElement.innerText + "\n" + todoList[i];
    }
}