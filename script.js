let tasks = [];

function addTask() {
	const taskInput = document.getElementById('task');
	const taskText = taskInput.value.trim();
	if (taskText) {
		const task = {
			text: taskText,
			completed: false
		};
		tasks.push(task);
		displayTasks();
		taskInput.value = '';
	}
}

function displayTasks() {
	const taskList = document.getElementById('taskList');
	taskList.innerHTML = '';
	tasks.forEach((task, index) => {
		const taskItem = document.createElement('li');
		taskItem.className = 'task-item';
		const taskCheckbox = document.createElement('input');
		taskCheckbox.type = 'checkbox';
		taskCheckbox.checked = task.completed;
		taskCheckbox.onclick = () => toggleCompleted(index);
		const taskText = document.createElement('span');
		taskText.innerText = task.text;
		taskText.className = 'task-text' + (task.completed ? ' completed' : '');
		const taskEditButton = document.createElement('button');
		taskEditButton.innerText = 'Edit';
		taskEditButton.onclick = () => editTask(index);
		const taskDeleteButton = document.createElement('button');
		taskDeleteButton.innerText = 'Delete';
		taskDeleteButton.onclick = () => deleteTask(index);
		taskItem.appendChild(taskCheckbox);
		taskItem.appendChild(taskText);
		taskItem.appendChild(taskEditButton);
		taskItem.appendChild(taskDeleteButton);
		taskList.appendChild(taskItem);
	});
}

function toggleCompleted(index) {
	tasks[index].completed = !tasks[index].completed;
	displayTasks();
}

function editTask(index) {
	const task = tasks[index];
	const newTaskText = prompt('Enter new task text:', task.text);
	if (newTaskText !== null && newTaskText.trim() !== '') {
		task.text = newTaskText.trim();
		displayTasks();
	}
}

function deleteTask(index) {
	tasks.splice(index, 1);
	displayTasks();
}
