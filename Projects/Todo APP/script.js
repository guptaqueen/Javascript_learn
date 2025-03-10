let todoList = [
  {
    item:'Buy Milk',
    dueDate:'4/10/2023'
  },
  {
    item:"Go to clz",
    dueDate:'4/10/1023'
  }
]; //global structure (make object)

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item:todoItem , dueDate:todoDate});
  inputElement.value = "";

  displayItems();
  // console.log(todoItem);
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i <= todoList.length; i++) {
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let (item,dueDate) = todoList[i];
    newHtml += `
   
      <span> ${item} </span>
      <span> ${dueDate} </span>
      <button class='btn-delete' onclick="todoList.splice(${i} ,1);
      displayItems();">Delete</button>
     
 `;
  }

  containerElement.innerHTML = newHtml;
}
