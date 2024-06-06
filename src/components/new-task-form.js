import { DOMUtils } from "../utils/dom-utils";

export function NewTaskForm() {
  const form = DOMUtils.createElement("form", ["task-form__container"]);
  const fieldsContainer = DOMUtils.createElement('section',['task-form__fields-container'])

  const titleInput = DOMUtils.createElement("input", [
    "task-form__field",
    "font-inter-tight",
  ]);
  titleInput.placeholder = "Task title";
  const descriptionInput = DOMUtils.createElement("textarea", [
    "task-form__field",
    "font-inter-tight",
  ]);
  descriptionInput.placeholder = "Task description";

  fieldsContainer.appendChild(titleInput);
  fieldsContainer.appendChild(descriptionInput);

  form.appendChild(fieldsContainer);

  return form;
}
