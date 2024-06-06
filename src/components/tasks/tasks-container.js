export class TasksContainer {
  constructor() {
    this.tasksContainer = document.createElement("div");
    this.tasksContainer.classList.add("tasks-container");
  }

  addElement(element) {
    this.tasksContainer.appendChild(element);
  }

  render() {
    return this.tasksContainer;
  }
}
