import "./styles/style.css";

import { logo } from "./components/logo";
import { newTaskBtn } from "./components/new-task-btn";
import { NewTaskForm } from "./components/new-task-form";
import { Sidebar } from "./components/sidebar";
import { TaskRow } from "./components/task-row";
import { Task } from "./controllers/Task";
import { createElement } from "./utils/createElement";

const app = document.getElementById("app");
const tasks = new Task();

const sidebar = new Sidebar();

const allTasksBtn = createElement("button", "sidebar-item");
allTasksBtn.style.marginTop = "3rem";
allTasksBtn.innerText = "All";

const todayTasksBtn = createElement("button", "sidebar-item");
todayTasksBtn.innerText = "Today";

const projectsBtn = createElement("button", "sidebar-item");
projectsBtn.style.marginTop = "2rem";
projectsBtn.innerText = "Projects";

sidebar.addElements([logo, allTasksBtn, todayTasksBtn, projectsBtn]);

const tasksContainer = createElement("section", "tasks-container");
const tasksContent = createElement("div", "tasks-content");
const tasksList = createElement("div", "tasks-content__list");

const pageTitle = createElement("h2");
pageTitle.innerText = "Tasks";

tasksContent.appendChild(pageTitle);
tasksContent.appendChild(tasksList);

allTasksBtn.addEventListener("click", () => {
  pageTitle.innerText = "All tasks";
});

todayTasksBtn.addEventListener("click", () => {
  pageTitle.innerText = "Today tasks";
});

projectsBtn.addEventListener("click", () => {
  pageTitle.innerText = "Projects";
});

tasksContainer.appendChild(tasksContent);

const renderTasks = () => {
  tasksList.innerHTML = "";

  const allTasks = tasks.getTasks();

  const handleDeleteTask = (id, element) => {
    tasks.deleteTask(id);
    tasksList.removeChild(element);
  };

  if (allTasks.length > 0) {
    for (let task of allTasks) {
      const taskCard = TaskRow(task, () => handleDeleteTask(task.id, taskCard));
      tasksList.appendChild(taskCard);
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const form = NewTaskForm();
  form.style.marginTop = "1rem";

  renderTasks();

  newTaskBtn.style.marginTop = "2rem";
  tasksContent.appendChild(newTaskBtn);

  newTaskBtn.addEventListener("click", () => {
    tasksContent.appendChild(form);
    newTaskBtn.classList.add("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("due-date");

    tasks.createTask({
      title,
      description,
      date: date ? new Date(date) : new Date(),
    });

    renderTasks();
    form.reset();

    tasksContent.removeChild(form);
    newTaskBtn.classList.remove("hidden");
  });

  app.appendChild(sidebar.render());
  app.appendChild(tasksContainer);
});
