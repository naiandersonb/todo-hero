import { Sidebar } from "../components/sidebar";
import { TasksContainer } from "../components/tasks/tasks-container";

export function App() {
  const app = document.getElementById('app');
  const sidebar = new Sidebar()
  const tasksContainer = new TasksContainer()
  
  app.appendChild(sidebar.render())
  app.appendChild(tasksContainer.render())
}
