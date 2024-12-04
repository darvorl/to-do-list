const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const tasksContainer = document.getElementById("tasksContainer");

// Add btn logic
addBtn.addEventListener("click", () => {
    if (taskInput.value === "") {
        alert("Type in a task!");
    } else {
        // Create the task div
        const task = document.createElement("div");
        task.classList.add("task");

        // Create the delete div
        const deleteBtn = document.createElement("div");
        deleteBtn.classList.add("task__deleter", "btn", "btn__light");
        deleteBtn.textContent = "X";

        task.appendChild(deleteBtn);

        // Create the content div
        const taskContent = document.createElement("div");
        taskContent.classList.add("task__content", "btn", "btn__light");
        taskContent.textContent = taskInput.value;

        task.appendChild(taskContent);

        // Create the checkbox div
        const checkboxBtn = document.createElement("div");
        checkboxBtn.classList.add("task__checkbox", "btn", "btn__light");
        checkboxBtn.textContent = "✔";

        task.appendChild(checkboxBtn);

        // Append the div to the container, and then clear the input value
        tasksContainer.appendChild(task);
        taskInput.value = "";
    }
});

tasksContainer.addEventListener("click", (event) => {
    const target = event.target

    if (target.classList.contains("task__deleter")) {
        const task = target.parentElement;
        task.remove()
    }

    if (target.classList.contains("task__checkbox")) {
        const task = target.parentElement;
        task.classList.add("task--completed")
    }
})
