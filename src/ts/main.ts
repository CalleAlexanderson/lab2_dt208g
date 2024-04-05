import { todoList } from "./todo";

document.addEventListener("DOMContentLoaded", () => {
  let todoObj = new todoList();

  showTodos();

  const form = document.getElementById("add_form") as HTMLFormElement;
  form.onsubmit = (event) => { //när användaren trycker på "skapa ny uppgift" knappen körs det här
    event.preventDefault();

    let newTaskInput = document.getElementById(
      "task_input"
    ) as HTMLInputElement;
    let newPrioInput = (
      document.getElementById("prio_input") as HTMLInputElement
    ).value;
    let prio: number = parseInt(newPrioInput);

    let err: boolean = todoObj.addTodo(newTaskInput.value, prio);
    if (err == false) { // om task fältet inte är ifyllt får användaren en alert
      alert("Du måste fylla i uppgift fältet för att skapa en uppgift");
    }

    newTaskInput.value = "";
    showTodos();
  };

  // skapar artiklar med av de olika todo som finns i array todos
  function showTodos() {
    const todoDiv = document.getElementById("list_div") as HTMLDivElement;
    todoDiv.innerHTML = "";
    let todoArr = todoObj.getTodos();

    for (let index = 0; index < todoArr.length; index++) {
      let todoArticle = document.createElement("article") as HTMLElement;

      let pTask = document.createElement("p") as HTMLParagraphElement;
      pTask.innerHTML = todoArr[index].task;
      pTask.id = "artTask";

      let imgComplete = document.createElement("img") as HTMLImageElement;
      
      // gör så man kan klicka i en ruta för att checka av avklarade uppgifter
      imgComplete.addEventListener("click", () => {
        todoObj.markTodoCompleted(index);
        if (todoArr[index].completed == true) {
          console.log(this);
          this.src = "pictures/check.png"; // check.png fick det här namnet när den kördes igenom parcel
          showTodos();
        } else {
          console.log(this);
          this.src = "pictures/white.png";
          showTodos();
        }
      });

      // om complete är true så blir bilden i rutan en check annars bara vitt
      if (todoArr[index].completed == true) {
        imgComplete.src = "pictures/check.png";
      } else {
        imgComplete.src = "pictures/white.png";
      }

      let pDate = document.createElement("p") as HTMLParagraphElement;
      pDate.innerHTML = "Skapades: "+todoArr[index].date;
      pDate.id = "artDate";

      let pPrio = document.createElement("p") as HTMLParagraphElement;
      pPrio.innerHTML = "Prioritet: "+ todoArr[index].priority.toString();
      pPrio.id = "artPrio";

      // knapp som låter dig ta bort uppgifter från todos
      let btnRemove = document.createElement("button") as HTMLButtonElement;
      btnRemove.innerHTML = "Ta bort uppgift";
      btnRemove.addEventListener("click", () => {
        if (btnRemove.parentElement != null) { // if sats för annars blir TS sur
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
