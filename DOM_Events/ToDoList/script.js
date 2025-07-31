document.addEventListener("DOMContentLoaded", () => {
  let TextInput = document.getElementById("todo_input");
  let addTask = document.getElementById("addTask");
  let taskList = document.getElementById("taskList");
  let optional = document.getElementById("optional");
  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  // Render existing tasks
  tasks.forEach((task) => renderTask(task));

  addTask.addEventListener("click", function () {
    const TaskText = TextInput.value.trim();
    if (TaskText === "") return;

    let taskCreated = {
      id: Date.now(),
      text: TaskText,
      completed: false,
    };

    tasks.push(taskCreated);
    saveTask();
    renderTask(taskCreated); // Render new task
    TextInput.value = "";
  });

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }

  function renderTask(task) {
    
    let div = document.createElement("div");
    div.setAttribute("data-id", task.id);

    div.className =
      "flex items-center space-x-3 p-4 bg-neutral-800 border border-neutral-700 rounded-lg";

    div.innerHTML = `
      <button
        class="check-btn w-5 h-5 rounded border-2 ${
          task.completed
            ? "bg-green-600 border-green-600"
            : "border-neutral-500 hover:border-neutral-400"
        } text-white flex items-center justify-center"
      >
        ${
          task.completed
            ? `
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>`
            : ""
        }
      </button>
      <span class="flex-1 ${
        task.completed ? "text-neutral-500 line-through" : "text-white"
      }">${task.text}</span>
      <button class="delete-btn text-neutral-500 hover:text-red-400 transition-colors duration-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    `;

    div.addEventListener("click", function (e) {
      const id = parseInt(div.getAttribute("data-id"));

      if (e.target.closest(".check-btn")) {
        // Toggle completed
        const index = tasks.findIndex((t) => t.id === id);
        tasks[index].completed = !tasks[index].completed;
        saveTask();

        // Re-render
        div.remove();
        renderTask(tasks[index]);
      }

      if (e.target.closest(".delete-btn")) {
        tasks = tasks.filter((t) => t.id !== id);
        saveTask();
        div.remove();
      }
    });

    taskList.appendChild(div);
  }
});
