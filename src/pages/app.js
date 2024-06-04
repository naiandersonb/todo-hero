import { Sidebar } from "../components/sidebar";

export function App() {
  const app = document.getElementById('app');
  const sidebar = new Sidebar()
  
  app.appendChild(sidebar.render())
}
