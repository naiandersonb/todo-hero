
const defaultPages = {
  all: "All tasks",
  today: "Today tasks",
  projects: "Projects",
};

const getPageTitle = (param) => {
  if (!param) return defaultPages.all;
  return defaultPages[param] ?? param;
};

function TaskContent() {
  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  const titleEl = document.createElement("h2");
  titleEl.classList.add("task-content__title"); 
  titleEl.innerText = 'tasks';
  taskContent.appendChild(titleEl);

  return taskContent;
}

export const taskContent = TaskContent();
