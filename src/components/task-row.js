import CalendarIcon from "../assets/images/icons/calendar.svg";
import TrashIcon from "../assets/images/icons/trash.svg";
import { DOMUtils } from "../utils/dom-utils";

export function TaskRow(task, deleteTask) {
  const taskCardEl = DOMUtils.createElement("div", ["task-content__row"]);
  const taskBody = DOMUtils.createElement("article");

  const taskTitleEl = DOMUtils.createElement("h4");
  taskTitleEl.innerText = task.title;
  taskBody.appendChild(taskTitleEl);

  if (task.description) {
    const taskDescEl = DOMUtils.createElement("p");
    taskDescEl.innerText = task.description;
    taskBody.appendChild(taskDescEl);
  }

  const deleteTaskBtn = DOMUtils.createElement("button", ["task-btn__delete"]);
  const trashIcon = DOMUtils.createIcon(TrashIcon);
  deleteTaskBtn.appendChild(trashIcon);

  deleteTaskBtn.addEventListener("click", () => {
    deleteTask(task.id)
  });

  DOMUtils.appendElements(taskCardEl, [taskBody,deleteTaskBtn])

  const footer = Footer(task.date, task.priority)
  taskBody.appendChild(footer);

  return taskCardEl;
}

const Footer = (taskDate, priority) => {
  const footer = DOMUtils.createElement("footer");

  const dateEl = DOMUtils.createElement("div", ["task-row__date"]);

  const calendarIcon = DOMUtils.createIcon(CalendarIcon);
  calendarIcon.style.width = "1rem";

  const date = DOMUtils.createElement("span");
  const dueDate = new Date(taskDate);

  const day = dueDate.getUTCDate().toString().padStart(2, 0);
  const month = dueDate.getUTCMonth().toString().padStart(2, 0);
  const year = dueDate.getUTCFullYear().toString().padStart(2, 0);
 
  date.innerText = `${day}/${month}/${year}`;

  dateEl.appendChild(calendarIcon);
  dateEl.appendChild(date);

  const priorityEl = DOMUtils.createElement("span", [
    "task-priority",
    `task-priority__${priority}`,
  ]);
  priorityEl.innerText = priority;

  DOMUtils.appendElements(footer, [dateEl,priorityEl])

  return footer
}