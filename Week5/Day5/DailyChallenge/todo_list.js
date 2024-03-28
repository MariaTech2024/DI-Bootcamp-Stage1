let tasks = [];

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

taskForm.addEventListener('submit', addTask);
taskList.addEventListener('change', doneTask);
taskList.addEventListener('click', deleteTask);
clearButton.addEventListener('click', clearAllTasks);

function addTask(event) {
  event.preventDefault();
  
  const taskText = taskInput.value.trim();
  
  if (taskText === '') return;
  
  const task = {
    task_id: tasks.length,
    text: taskText,
    done: false
  };
  
  tasks.push(task);
  
  renderTask(task);
  
  taskInput.value = '';
}

function renderTask(task) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('taskItem');
  if (task.done) {
    taskItem.classList.add('done');
  }
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;
  checkbox.dataset.taskId = task.task_id;
  
  const label = document.createElement('label');
  label.textContent = task.text;
  
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '&times;';
  deleteButton.dataset.taskId = task.task_id;
  
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(deleteButton);
  
  taskList.appendChild(taskItem);
}

function doneTask(event) {
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    const taskId = parseInt(event.target.dataset.taskId);
    tasks[taskId].done = event.target.checked;
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('done', event.target.checked);
  }
}

function deleteTask(event) {
  if (event.target.tagName === 'BUTTON') {
    const taskId = parseInt(event.target.dataset.taskId);
    tasks.splice(taskId, 1);
    event.target.parentElement.remove();
    // Re-indexing task IDs after deletion
    tasks.forEach((task, index) => {
      task.task_id = index;
      taskList.querySelector(`[data-task-id="${index}"]`).dataset.taskId = index;
    });
  }
}

// Clear all tasks from the list
function clearAllTasks() {
  taskList.innerHTML = ''; 
  tasks = [];
}