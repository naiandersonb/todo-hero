import { Sidebar } from "../components/sidebar";
import { TasksContainer } from "../components/tasks/tasks-container";
import { taskContent } from "../components/tasks/tasks-content";

export function App() {
  const app = document.getElementById('app');
  const sidebar = new Sidebar()
  const tasksContainer = new TasksContainer()
  tasksContainer.addElement(taskContent)
  
  app.appendChild(sidebar.render())
  app.appendChild(tasksContainer.render())
}
