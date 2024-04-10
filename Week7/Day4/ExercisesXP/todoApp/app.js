//In app.js, import the TodoList class from the todo.js module.
//Create an instance of the TodoList class.
//Add a few tasks, mark some as complete, and list all tasks.

import { TodoList } from './todo.js';
  
const todo = new TodoList();
todo.add('Buy products');
todo.add('Cook Bolognese pasta');
todo.complete('Buy products');
console.log(todo.list());
//[{ task: 'Buy products', completed: true },{ task: 'Cook Bolognese pasta', completed: false }]