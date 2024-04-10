//Exercise 4: Todo List using ES6 module syntax
//In todo.js, define an ES6 module that exports a TodoList class.
//The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
//Export the TodoList class.
export class TodoList {
    constructor() {
      this.tasks = [];
    }
    add(task) {
      this.tasks.push({ task, completed: false });
    }
    complete(taskName) {
      const task = this.tasks.find(t => t.task === taskName);
      if (task) task.completed = true;
    }
    list() {
      return this.tasks;
    }
  }