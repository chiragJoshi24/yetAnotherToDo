let taskList = [];
const add = document.getElementById('AddTask');
const taskInput = document.getElementById('newTask');
add.onclick = handleAdding;
taskInput.onkeydown = handleKeyDown;

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        handleAdding();
    }
}

function handleAdding() {
    const task = taskInput.value.trim(); 
    if (!task) {
        alert('Enter a task first.');
        return;
    }
    taskList.push(task);
    updateTaskList();
    taskInput.value = ''; 
}

function updateTaskList() {
    const taskContainer = document.getElementById('ListOfTasks');
    taskContainer.innerHTML = ''; 
    taskList.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task', 'flex', 'justify-between', 'items-center', 'bg-white', 'p-2', 'rounded-lg', 'my-2', 'shadow-md');
        taskElement.innerHTML = `
            <span>${task}</span>
            <button class="delete-task bg-red-500 text-white px-2 py-1 rounded-lg" data-index="${index}">Delete</button>
        `;
        taskContainer.appendChild(taskElement);
    });

    const deleteButtons = document.querySelectorAll('.delete-task');
    deleteButtons.forEach(button => {
        button.onclick = handleDelete;
    });
}

function handleDelete(event) {
    const index = event.target.getAttribute('data-index');
    taskList.splice(index, 1); 
    updateTaskList(); 
}
