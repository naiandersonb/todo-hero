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

window.addEventListener("DOMContentLoaded", () => {
  const priority = {
    1: "low",
    2: "medium",
    3: "hight",
  };
  for (let i = 0; i < 3; i++) {
    tasks.createTask({
      priority: priority[i + 1] ?? "low",
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, ad? Quasi ducimus quibusdam, minima autem eaque veniam, inventore obcaecati pariatur nostrum perspiciatis laborum eius repellendus aperiam. Quam adipisci incidunt culpa!",
      date: new Date(),
    });
  }
  const allTasks = tasks.getTasks();

  const handleDeleteTask = (id, element) => {
    tasks.deleteTask(id);
    tasksContent.removeChild(element);
  };

  const form = NewTaskForm()

  if (allTasks.length > 0) {
    for (let task of allTasks) {
      const taskCard = TaskRow(task, () => handleDeleteTask(task.id, taskCard));
      tasksContent.appendChild(taskCard);
    }

    newTaskBtn.style.marginTop = "2rem";
    tasksContent.appendChild(newTaskBtn);
    tasksContent.appendChild(form);
  } else {
    newTaskBtn.style.marginTop = "2rem";
    tasksContent.appendChild(newTaskBtn);
    tasksContent.appendChild(form);
  }

  app.appendChild(sidebar.render());
  app.appendChild(tasksContainer);
});
