interface todo {
  task: string;
  completed: boolean;
  priority: number;
  date: string;
}

export class todoList implements todo {
  task: string;
  completed: boolean;
  priority: number;
  date: string;
  todos: todo[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  // skapar nya todo object, completed sätts alltid till false när objektet skapas
  addTodo(taskAdd: string, priorityAdd: number): boolean {
    if (taskAdd != "") {
      let dateAdded = new Date();
      let newTodo: todo = {
        task: taskAdd,
        completed: false,
        priority: priorityAdd,
        date: dateAdded.toISOString().slice(0, 10) //metod för date konversion hittade jag här: https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
      };
      this.todos.push(newTodo);
      this.saveToLocalStorage();
      return true;
    } else {
      return false;
    }
  }

  // en funktion som tar in ett nummer(index) och markerar den som complete genom att ändra completed till true
  markTodoCompleted(todoIndexMark: number): void {
    if (this.todos[todoIndexMark].completed == false) {
      this.todos[todoIndexMark].completed = true;
      this.saveToLocalStorage();
    } else {
      this.todos[todoIndexMark].completed = false;
      this.saveToLocalStorage();
    }
  }

  // en funktion som tar in ett nummer(index) och tar bort det indexet från todos array
  removeTodo(todoIndex: number): void {
    this.todos.splice(todoIndex, 1);
    this.saveToLocalStorage();
  }

  getTodos(): todo[] {
    return this.todos;
  }

  // lägger todos arrayen i localstorage i form av en string
  saveToLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  // hämtar todos arrayen från local storage
  loadFromLocalStorage(): void {
    if (localStorage.getItem("todos") != null && localStorage.getItem("todos") != "") {
      const storedTodos: any = localStorage.getItem("todos");
      this.todos = JSON.parse(storedTodos);
    }
  }
}
