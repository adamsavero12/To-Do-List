document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('button-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.classList.add('task-text');

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.classList.add('complete-button');

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            completeButton.addEventListener('click', () => {
                taskSpan.classList.toggle('completed');
            });

            editButton.addEventListener('click', () => {
                const newTaskText = prompt('Edit your task:', taskSpan.textContent);
                if (newTaskText !== null && newTaskText.trim() !== '') {
                    taskSpan.textContent = newTaskText.trim();
                }
            });

            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(taskSpan);
            listItem.appendChild(completeButton);
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            taskInput.value = '';
            taskInput.focus();
        }
    }
});