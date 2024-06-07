import "./styles/style.css";

import { logo } from "./components/logo";
import { newTaskBtn } from "./components/new-task-btn";
import { NewTaskForm } from "./components/new-task-form";
import { renderTasks, tasksList } from "./components/render-tasks";
import { Sidebar } from "./components/sidebar";
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

window.addEventListener("DOMContentLoaded", () => {
  const form = NewTaskForm();
  form.style.marginTop = "1rem";

  renderTasks(tasks);

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
    const priority = formData.get("priority");

    if (!title) return;

    tasks.createTask({
      title,
      description,
      priority,
      date: date ? new Date(date) : new Date(),
    });

    renderTasks(tasks);
    form.reset();

    tasksContent.removeChild(form);
    newTaskBtn.classList.remove("hidden");
  });

  app.appendChild(sidebar.render());
  app.appendChild(tasksContainer);
});
