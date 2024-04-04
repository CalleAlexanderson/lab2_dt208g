import { todoList } from "./todo";
// localStorage.setItem('todos', "");

document.addEventListener("DOMContentLoaded", () => {
  let todoObj = new todoList();
  todoObj.loadFromLocalStorage();

  showTodos();

  const form = document.getElementById("add_form") as HTMLFormElement;
  console.log(form);
  form.onsubmit = (event) => {
    event.preventDefault();

    let newTaskInput = (
      document.getElementById("task_input") as HTMLInputElement
    );
    let newPrioInput = (
      document.getElementById("prio_input") as HTMLInputElement
    ).value;
    let prio: number = parseInt(newPrioInput);

    let d: boolean = todoObj.addTodo(newTaskInput.value, prio);
    if (d == false) {
      alert("Du måste fylla i uppgift fältet för att skapa en uppgift");
    }

    console.log("formulär inlämmat");
    newTaskInput.value = "";
    showTodos();
  };

  function showTodos() {
    const todoDiv = document.getElementById("list_div") as HTMLDivElement;
    todoDiv.innerHTML = "";
    let todoArr = todoObj.getTodos();

    for (let index = 0; index < todoArr.length; index++) {
      let todoArticle = document.createElement("article") as HTMLElement;

      let pTask = document.createElement("p") as HTMLParagraphElement;
      pTask.innerHTML = todoArr[index].task;

      let imgComplete = document.createElement("img") as HTMLImageElement;
      if (todoArr[index].completed == true) {
        imgComplete.src = "";
      } else {
        imgComplete.src = "";
      }

      let pDate = document.createElement("p") as HTMLParagraphElement;
      pDate.innerHTML = todoArr[index].date;

      let pPrio = document.createElement("p") as HTMLParagraphElement;
      pPrio.innerHTML = todoArr[index].priority.toString();

      let btnRemove = document.createElement("button") as HTMLButtonElement;
      btnRemove.innerHTML = "Ta bort uppgift";
      btnRemove.addEventListener("click", () => {
        if (btnRemove.parentElement != null) {
          btnRemove.parentElement.remove();
          todoObj.removeTodo(index);
          showTodos();
        }
      });

      todoArticle.appendChild(pTask);
      todoArticle.appendChild(pDate);
      todoArticle.appendChild(imgComplete);
      todoArticle.appendChild(pPrio);
      todoArticle.appendChild(btnRemove);
      todoDiv.appendChild(todoArticle);
    }
  }
});
