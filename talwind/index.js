document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
    const clearAllBtn = document.querySelector(".footer button");
  
    // Add a new task
    addTaskBtn.addEventListener("click", function () {
       const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            newTaskInput.value = "";
        }
    });
  
    // Function to create a new task element
    function addTask(text) {
        const li = document.createElement("li");
        li.className = "list-none h-6 list-outside leading-3 space-x-20";
  
        const span = document.createElement("span");
        span.textContent = text;
        li.appendChild(span);
  
        const editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square";
        editIcon.style.cursor = "pointer";
        li.appendChild(editIcon);
  
        const trashIcon = document.createElement("i");
        trashIcon.className = "fas fa-trash";
        trashIcon.style.cursor = "pointer";
        li.appendChild(trashIcon);
  
        taskList.appendChild(li);
  
        // Event listener for the edit button
        editIcon.addEventListener("click", function () {
            const newText = prompt("Edit your task:", span.textContent);
              if (newText !== null && newText.trim() !== "") {
                span.textContent = newText;
            }
        });
  
        // Event listener for the delete button
          trashIcon.addEventListener("click", function () {
              taskList.removeChild(li);
          });
    }
  
    // Clear all tasks
    clearAllBtn.addEventListener("click", function () {
        taskList.innerHTML = "";
    });
});