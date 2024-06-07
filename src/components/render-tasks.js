import { DOMUtils } from '../utils/dom-utils';
import { TaskRow } from './task-row';

export const tasksList = DOMUtils.createElement("div", ["tasks-content__list"]);

export const renderTasks = (tasks) => {
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