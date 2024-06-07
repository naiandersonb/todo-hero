import { compareDates } from "../utils/compare-dates";

export class Task {
  #localStorageId = "@todo-hero:tasks";

  constructor(tasks = []) {
    this.tasks = tasks;
  }

  getTasks() {
    const tasksJSON = localStorage.getItem(this.#localStorageId);
    this.tasks = JSON.parse(tasksJSON) ?? [];
    return this.tasks;
  }

  #saveTasks() {
    localStorage.setItem(this.#localStorageId, JSON.stringify(this.tasks));
  }

  createTask(task) {
    const newTask = {
      id: this.tasks.length + 1,
      title: task.title,
      description: task.description ?? null,
      priority: task.priority ?? "low",
      date: task.date,
      completed: false,
      projectId: task.projectId ?? null,
    };

    this.tasks.push(newTask);

    this.#saveTasks();
  }

  getTodayTasks() {
    const todayTasks = this.tasks.filter(t => compareDates(new Date(t.date), new Date()))

    return todayTasks ?? [];
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    localStorage.setItem(this.#localStorageId, JSON.stringify(this.tasks));
  }
}
