import { todoList } from "./todo";

console.log("heel");


document.addEventListener("DOMContentLoaded", () => {
  let todoObj = new todoList();
  todoObj.loadFromLocalStorage();

  
  const form = document.getElementById("add_form") as HTMLFormElement;
  console.log(form);
  form.onsubmit = (event) => {
    event.preventDefault();

    let newTaskInput = (
      document.getElementById("task_input") as HTMLInputElement
    ).value;
    let newPrioInput = (
      document.getElementById("prio_input") as HTMLInputElement
    ).value;
    let prio: number = parseInt(newPrioInput);

    let d: boolean = todoObj.addTodo(newTaskInput, prio)
    if (d == false) {
      alert("Du måste fylla i uppgift fältet för att skapa en uppgift");
    }

    console.log("formulär inlämmat");
  };
});
