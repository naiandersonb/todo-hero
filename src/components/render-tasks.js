import { TaskRow } from './task-row';


export const renderTasks = (tasks, element, handleDelete) => {
  element.innerHTML = "";

  if (tasks.length > 0) {
    for (let task of tasks) {
      const taskCard = TaskRow(task, () => handleDelete(task.id, taskCard));
      taskCard.id = task.id;
      element.appendChild(taskCard);
    }
  }
};