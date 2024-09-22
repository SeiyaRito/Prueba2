document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete');
    
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
    
    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    taskInput.value = '';
});
