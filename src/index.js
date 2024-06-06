import "./styles/style.css";

import CalendarIcon from "./assets/images/icons/calendar.svg";
import TrashIcon from "./assets/images/icons/trash.svg";
import { logo } from "./components/logo";
import { newTaskBtn } from "./components/new-task-btn";
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
  if (allTasks.length > 0) {
    for (let task of allTasks) {
      const taskEl = createElement("div", "task-content__row");
      const taskBody = createElement("article");

      const dateEle = createElement("header", "task-row__date");
      const date = createElement("span");
      date.innerText = new Date(task.date).toLocaleDateString();
      const calendarIcon = createElement("img");
      calendarIcon.src = CalendarIcon;
      calendarIcon.style.width = "1rem";
      dateEle.appendChild(calendarIcon);
      dateEle.appendChild(date);

      const taskTitleEl = createElement("h4");
      taskTitleEl.innerText = task.title;
      taskBody.appendChild(taskTitleEl);

      if (task.description) {
        const taskDescEl = createElement("p");
        taskDescEl.innerText = task.description;
        taskBody.appendChild(taskDescEl);
      }

      const deleteTaskBtn = createElement("button", "task-btn__delete");
      const icon = createElement("img");
      icon.src = TrashIcon;
      deleteTaskBtn.appendChild(icon);

      deleteTaskBtn.addEventListener("click", () => {
        tasks.deleteTask(task.id);
        tasksContent.removeChild(taskEl);
      });

      const priorityEl = createElement(
        "span",
        `task-priority__${task.priority}`
      );
      priorityEl.classList.add("task-priority");
      priorityEl.innerText = task.priority;

      const footer = createElement("footer");
      footer.appendChild(dateEle);
      footer.appendChild(priorityEl);

      taskEl.appendChild(taskBody);
      taskEl.appendChild(deleteTaskBtn);
      taskBody.appendChild(footer);
      tasksContent.appendChild(taskEl);
      newTaskBtn.style.marginTop = "2rem";
      tasksContent.appendChild(newTaskBtn);
    }
  } else {
    tasksContent.appendChild(newTaskBtn);
  }

  app.appendChild(sidebar.render());
  app.appendChild(tasksContainer);
});
