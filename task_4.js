const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.text} (Due: ${task.date})`;

    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li); 
    });
}


function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if (taskText && taskDueDate) {
        tasks.push({ text: taskText, date: taskDueDate });
        taskInput.value = '';
        taskDate.value = '';
        renderTasks();
    } else {
        alert("Please enter a task and a due date.");
    }
}


addTaskBtn.addEventListener("click", addTask);
