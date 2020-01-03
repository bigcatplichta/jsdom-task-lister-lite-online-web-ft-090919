document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  
  const taskList = document.getElementById("tasks");
  
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });
  
});
