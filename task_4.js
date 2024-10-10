const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.text} (Due: ${task.date})`;
        if (task.completed) {
            li.classList.add("completed");
        }

        // Mark as completed
        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        // Edit task
        li.addEventListener("dblclick", () => {
            const newText = prompt("Edit task:", task.text);
            if (newText) {
                tasks[index].text = newText;
                renderTasks();
            }
        });

        taskList.appendChild(li);
    });
}

// Function to add task
function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if (taskText && taskDueDate) {
        tasks.push({ text: taskText, date: taskDueDate, completed: false });
        taskInput.value = '';
        taskDate.value = '';
        renderTasks();
    } else {
        alert("Please enter a task and a due date.");
    }
}

// Event listener for adding a task
addTaskBtn.addEventListener("click", addTask);
