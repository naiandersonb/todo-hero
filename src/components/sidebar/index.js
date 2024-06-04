import { Logo } from "../logo";
import { SidebarItem } from "../sidebar-item";
/* import Calendar from '../../assets/images/icons/calendar.svg' */
export class Sidebar {
  constructor(aside = document.createElement("aside")) {
    this.sidebar = aside;
  }

  render() {
    this.sidebar.classList.add("sidebar");
    this.sidebar.appendChild(Logo());

    const allButton = SidebarItem("All");
    allButton.style.marginTop = "4rem";
    this.sidebar.appendChild(allButton);

    const todayButton = SidebarItem("Today");
    this.sidebar.appendChild(todayButton);

    const projectsButton = SidebarItem("Projects");
    projectsButton.style.marginTop = "2rem";
    this.sidebar.appendChild(projectsButton);

    return this.sidebar;
  }
}
