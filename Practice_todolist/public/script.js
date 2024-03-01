// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
      const li = document.createElement('li');
      li.className = 'task-item';
  
      const span = document.createElement('span');
      span.className = 'task-item-text';
      span.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'task-delete-button';
      deleteButton.textContent = '❌';
      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };
  
      li.appendChild(span);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  // Bind the addTask() function to the form submission event
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', addTask);
  