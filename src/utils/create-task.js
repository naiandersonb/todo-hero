export function createTask(evt, createTask) {
  const formData = new FormData(evt.target);
  const title = formData.get("title");
  const description = formData.get("description");
  const date = formData.get("due-date");
  const priority = formData.get("priority");

  if (!title) return;

  const newTask = {
    title,
    description,
    priority,
    date: date ? new Date(date) : new Date(),
  };

  createTask(newTask)
}
