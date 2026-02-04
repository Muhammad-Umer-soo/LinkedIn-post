const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addButton");
const list = document.getElementById("todoList");

let todos = [];

addBtn.addEventListener("click", addTodo);

function addTodo() {
  let todoText = input.value.trim();

  if (todoText === "") {
    alert("Enter something");
    return;
  }

  todos.push({
    text: todoText,
    completed: false,
  });
  saveTodo();
  input.value = "";
  displayTodo();
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function displayTodo() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.className = "list";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    checkBox.checked = todo.completed;

    checkBox.addEventListener("change", () => {
      todos[index].completed = checkBox.checked;
      saveTodo();
      displayTodo();
    });

    let text = document.createElement("span");
    text.textContent = todo.text;
    text.className = "text";

    if (todo.completed) {
      text.style.textDecoration = "line-through";
      text.style.opacity = "0.6";
    }

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "✎";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
      editTodo(index);
    });

    if (!todo.completed) {
      editBtn.addEventListener("click", () => {
        editTodo(index);
      });
    } else {
      editBtn.disabled = true;
    }

    let del = document.createElement("button");
    del.innerHTML = "🗑️";
    del.className = "del-btn";

    del.addEventListener("click", () => {
      deleteTodo(index);
    });

    if (!todo.completed) {
      del.addEventListener("click", () => {
        deleteTodo(index);
      });
    } else {
      del.disabled = true;
    }

    li.appendChild(checkBox);
    li.appendChild(text);
    li.appendChild(editBtn);
    li.appendChild(del);
    list.appendChild(li);
  });
}

function editTodo(index) {
  let newText = prompt("Edit your task:", todos[index].text);

  if (newText !== null && newText.trim() !== "") {
    todos[index].text = newText.trim();
    saveTodo();
    displayTodo();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodo();
  saveTodo();
}

function loadTodo() {
  let data = localStorage.getItem("todos");
  if (data) {
    todos = JSON.parse(data);
    displayTodo();
  }
}
loadTodo();
