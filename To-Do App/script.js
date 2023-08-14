const taskInput = document.getElementById('taskInput');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    pendingTasks.appendChild(taskItem);
    taskInput.value = '';
  }
}

function completeTask(button) {
  const taskItem = button.parentNode;
  taskItem.classList.add('completed');
  completedTasks.appendChild(taskItem);
  button.remove();
}

function deleteTask(button) {
  const taskItem = button.parentNode;
  taskItem.remove();
}
