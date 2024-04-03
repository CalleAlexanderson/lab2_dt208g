interface todo {
  task: string;
  completed: boolean;
  priority: number;
}

export class todoList implements todo {
  task: string;
  completed: boolean;
  priority: number;
  todos: todo[] = [];

  // skapar nya todo object, completed sätts alltid till false när objektet skapas
  addTodo(taskAdd: string, priorityAdd: number): boolean {
    if (taskAdd != "") {
      let newTodo: todo = {
        task: taskAdd,
        completed: false,
        priority: priorityAdd,
      };
      this.todos.push(newTodo);
      console.log(this.todos);
      this.saveToLocalStorage();
      return true;
    } else {
      return false;
    }
  }

  // en funktion som tar in ett nummer(index) och markerar den som complete genom att ändra completed till true
  markTodoCompleted(todoIndexMark: number): void {}

  // en funktion som tar in ett nummer(index) och tar bort det indexet från todos array
  removeTodo(todoIndex: number): void {}

  getTodos(): todo[] {
    return this.todos;
  }

  // lägger todos arrayen i localstorage i form av en string
  saveToLocalStorage(): void {
    console.log("sparat i storage");
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(localStorage.getItem("todos"));
  }

  // hämtar todos arrayen från local storage
  loadFromLocalStorage(): void {
    if (localStorage.getItem("todos") != null) {
      const storedTodos: any = localStorage.getItem("todos");
      this.todos = JSON.parse(storedTodos);
      console.log(this.todos);
    }
  }
}
