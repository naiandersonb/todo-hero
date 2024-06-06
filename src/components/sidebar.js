import { createElement } from "../utils/createElement";

export class Sidebar {
  constructor() {
    this.sidebar = createElement("aside", 'sidebar');
  }

  addElements(elements) {
    for(const element of elements) {
      this.sidebar.appendChild(element);
    }
  }

  render() {
    return this.sidebar;
  }
 
}