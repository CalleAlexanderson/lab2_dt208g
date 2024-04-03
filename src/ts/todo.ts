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

  // constructor som tar in värden när klassen skapas, om priority inte sätts till 1, 2 eller 3 sätts den till 3
  constructor(t: string, comp: boolean, prio: number) {
    this.task = t;
    this.completed = comp;
    if (prio == 1 || prio == 2 || prio == 3) {
      this.priority = prio;
    } else {
      this.priority = 3;
      console.log("priotet kan bara vara 1, 2 eller 3");
    }
  }

  // skapar nya todo object, completed sätts alltid till false när objektet skapas
  addTodo(taskAdd: string, priorityAdd: number): boolean {
    if (true) {
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
    return [];
  }

  // lägger todos arrayen i localstorage i form av en string
  saveToLocalStorage(): void {}

  // hämtar todos arrayen från local storage
  loadFromLocalStorage(): void {}
}
