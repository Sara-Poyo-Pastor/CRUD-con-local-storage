document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Cargar tareas almacenadas en LocalStorage al iniciar la aplicación
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    // Mostrar las tareas almacenadas en la lista
    tasks.forEach(function (task) {
      addTaskToList(task);
    });
  
    // Agregar una nueva tarea al formulario
    taskForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        addTaskToList(taskText);
        taskInput.value = "";
        taskInput.focus();
      }
    });
  
    // Agregar una tarea a la lista y almacenarla en LocalStorage
    function addTaskToList(taskText) {
      const taskItem = document.createElement("li");
      taskItem.innerText = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.innerText = "Eliminar";
      removeButton.classList.add("remove-button");
      removeButton.addEventListener("click", function () {
        removeTask(taskItem);
      });
  
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      tasks.push(taskText);
      saveTasksToLocalStorage();
    }
  
    // Eliminar una tarea de la lista y actualizar LocalStorage
    function remove

