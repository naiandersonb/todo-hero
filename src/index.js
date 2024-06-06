import "./styles/style.css";

import TodoHeroLogo from "./assets/images/logo.svg";

const app = document.getElementById("app");

const createElement = (tag, className = "") => {
  const element = document.createElement(tag);
  if(className) element.classList.add(className);
  return element;
};

const sidebar = createElement("aside", "sidebar");

const logo = document.createElement("img");
logo.src = TodoHeroLogo;
logo.style.width = "100px";

const allTasksBtn = createElement("button", "sidebar-item");
allTasksBtn.style.marginTop = "3rem";
allTasksBtn.innerText = "All";

const todayTasksBtn = createElement("button", "sidebar-item");
todayTasksBtn.innerText = "Today";

const projectsBtn = createElement("button", "sidebar-item");
projectsBtn.style.marginTop = "2rem";
projectsBtn.innerText = "Projects";

sidebar.appendChild(logo);
sidebar.appendChild(allTasksBtn);
sidebar.appendChild(todayTasksBtn);
sidebar.appendChild(projectsBtn);

const tasksContainer = createElement("section", "tasks-container");
const tasksContent = createElement("div", "tasks-content");

const pageTitle = createElement('h2')
pageTitle.innerText = 'Tasks'
tasksContent.appendChild(pageTitle)

tasksContainer.appendChild(tasksContent);

app.appendChild(sidebar);
app.appendChild(tasksContainer);
