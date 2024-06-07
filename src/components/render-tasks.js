import { TaskRow } from './task-row';


export const renderTasks = (tasks, element, handleDelete) => {
  element.innerHTML = "";

  const allTasks = tasks.getTasks();

  if (allTasks.length > 0) {
    for (let task of allTasks) {
      const taskCard = TaskRow(task, () => handleDelete(task.id, taskCard));
      taskCard.id = task.id;
      element.appendChild(taskCard);
    }
  }
};