export class TasksContainer {
  constructor() {
    this.tasksContainer = document.createElement("div");
    this.tasksContainer.classList.add("tasks-container");
  }

  render() {
    return this.tasksContainer;
  }
}
