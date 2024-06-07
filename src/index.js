import "./styles/style.css";

import { logo } from "./components/logo";
import { newTaskBtn } from "./components/new-task-btn";
import { NewTaskForm } from "./components/new-task-form";
import { renderTasks } from "./components/render-tasks";
import { Sidebar } from "./components/sidebar";
import { Task } from "./controllers/Task";
import { createTask } from "./utils/create-task";
import { createElement } from "./utils/createElement";
import { DOMUtils } from "./utils/dom-utils";

const app = document.getElementById("app");
const tasks = new Task();
let allTasks = tasks.getTasks();

const handleDeleteTask = (id, element) => {
  tasks.deleteTask(id);
  tasksList.removeChild(element);
  allTasks = tasks.getTasks();
};

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
export const tasksList = DOMUtils.createElement("div", ["tasks-content__list"]);

const pageTitle = createElement("h2");
pageTitle.innerText = "Tasks";

tasksContent.appendChild(pageTitle);
tasksContent.appendChild(tasksList);

projectsBtn.addEventListener("click", () => {
  pageTitle.innerText = "Projects";
});

tasksContainer.appendChild(tasksContent);

window.addEventListener("DOMContentLoaded", () => {
  const form = NewTaskForm();
  form.style.marginTop = "1rem";

  renderTasks(allTasks, tasksList, handleDeleteTask);

  allTasksBtn.addEventListener("click", () => {
    pageTitle.innerText = "Tasks";
    renderTasks(allTasks, tasksList, handleDeleteTask);
  });

  todayTasksBtn.addEventListener("click", () => {
    pageTitle.innerText = "Today tasks";
    const todayTasks = tasks.getTodayTasks()

    if(todayTasks.length > 0) {
      renderTasks(todayTasks, tasksList, handleDeleteTask);
    } else {
      tasksList.innerText = ''
    }

  });

  todayTasksBtn.addEventListener("click", () => {
    pageTitle.innerText = "Today tasks";
  });

  newTaskBtn.style.marginTop = "2rem";
  tasksContent.appendChild(newTaskBtn);

  newTaskBtn.addEventListener("click", () => {
    tasksContent.appendChild(form);
    newTaskBtn.classList.add("hidden");
  });

  const handleCreate = (newTask) => {
    tasks.createTask(newTask)
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    createTask(e, handleCreate)
    allTasks = tasks.getTasks();

    renderTasks(allTasks, tasksList, handleDeleteTask);
    form.reset();

    tasksContent.removeChild(form);
    newTaskBtn.classList.remove("hidden");
  });

  app.appendChild(sidebar.render());
  app.appendChild(tasksContainer);
});
