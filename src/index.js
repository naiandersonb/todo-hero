import BurgerIcon from "./assets/images/icons/burger.svg";
import { logo } from "./components/logo";
import { newTaskBtn } from "./components/new-task-btn";
import { NewTaskForm } from "./components/new-task-form";
import { renderTasks } from "./components/render-tasks";
import { Sidebar } from "./components/sidebar";
import { Task } from "./controllers/Task";
import "./styles/style.css";
import { createTask } from "./utils/create-task";
import { DOMUtils } from "./utils/dom-utils";
import { URLParams } from "./utils/url-params";

const app = document.getElementById("app");
const urlParams = new URLParams();
const tasks = new Task();
let allTasks = tasks.getTasks();

const handleDeleteTask = (id, element) => {
  tasks.deleteTask(id);
  tasksList.removeChild(element);
  allTasks = tasks.getTasks();
};


const tasksList = DOMUtils.createElement("div", ["tasks-content__list"]);
const pageTitle = DOMUtils.createElement("h2");

const createSidebar = () => {
  const sidebar = new Sidebar();

  const allTasksBtn = DOMUtils.createElement("button", ["sidebar-item"]);
  allTasksBtn.style.marginTop = "3rem";
  allTasksBtn.innerText = "All";

  const todayTasksBtn = DOMUtils.createElement("button", ["sidebar-item"]);
  todayTasksBtn.innerText = "Today";

  const projectsBtn = DOMUtils.createElement("button", ["sidebar-item"]);
  projectsBtn.style.marginTop = "2rem";
  projectsBtn.innerText = "Projects";

  const sidebarHeader = DOMUtils.createElement("div", ["sidebar-header"]);
  const burgerIcon = DOMUtils.createIcon(BurgerIcon);
  burgerIcon.style.width = "24px";

  DOMUtils.appendElements(sidebarHeader, [logo, burgerIcon]);
  sidebar.addElements([sidebarHeader, allTasksBtn, todayTasksBtn, projectsBtn]);

  allTasksBtn.addEventListener("click", () => {
    pageTitle.innerText = "Tasks";
    urlParams.setParam("select", "all");
    renderTasks(allTasks, tasksList, handleDeleteTask);
  });

  todayTasksBtn.addEventListener("click", () => {
    pageTitle.innerText = "Today tasks";
    const todayTasks = tasks.getTodayTasks();

    if (todayTasks.length > 0) {
      renderTasks(todayTasks, tasksList, handleDeleteTask);
    } else {
      tasksList.innerText = "";
    }
  });

  projectsBtn.addEventListener("click", () => {
    pageTitle.innerText = "Projects";
    urlParams.setParam("select", "projects");
  });

  return sidebar;
};


const createTasksContainer = () => {
  const tasksContainer = DOMUtils.createElement("section", ["tasks-container"]);
  const tasksContent = DOMUtils.createElement("div", ["tasks-content"]);
  
  pageTitle.innerText = "Tasks";

  DOMUtils.appendElements(tasksContent, [pageTitle, tasksList]);
  tasksContainer.appendChild(tasksContent);

  return { tasksContainer, tasksContent, pageTitle };
};

const initializeForm = (form, tasksContent) => {
  form.style.marginTop = "1rem";

  newTaskBtn.style.marginTop = "2rem";
  tasksContent.appendChild(newTaskBtn);

  newTaskBtn.addEventListener("click", () => {
    tasksContent.appendChild(form);
    newTaskBtn.classList.add("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    createTask(e, (newTask) => {
      tasks.createTask(newTask);
    });

    allTasks = tasks.getTasks();
    renderTasks(allTasks, tasksList, handleDeleteTask);
    form.reset();

    tasksContent.removeChild(form);
    newTaskBtn.classList.remove("hidden");
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const sidebar = createSidebar();
  const { tasksContainer, tasksContent, pageTitle } = createTasksContainer();
  const form = NewTaskForm();

  renderTasks(allTasks, tasksList, handleDeleteTask);
  initializeForm(form, tasksContent);

  DOMUtils.appendElements(app, [sidebar.render(), tasksContainer])
});
