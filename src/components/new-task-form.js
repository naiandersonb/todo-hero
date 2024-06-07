import { DOMUtils } from "../utils/dom-utils";

const Container = () => {
  return DOMUtils.createElement("section", ["task-form__group"]);
};

const Field = (tag, name, placeholder = "") => {
  const field = DOMUtils.createElement(tag, [
    "task-form__field",
    "font-inter-tight",
  ]);
  field.name = name;
  if (placeholder) field.placeholder = placeholder;
  return field;
};

export function NewTaskForm() {
  const form = DOMUtils.createElement("form", ["task-form__container"]);
  const fieldsContainer = DOMUtils.createElement("section", [
    "task-form__fields-container",
  ]);

  const titleInput = Field("input", "title","Task title");
  const descriptionInput = Field("textarea", "description", "Task description");
  const taskDateField = Field("input", "due-date","Select task date");
  taskDateField.classList.add("input-date")
  taskDateField.type = "date";

  fieldsContainer.appendChild(titleInput);
  fieldsContainer.appendChild(descriptionInput);

  const formFooter = DOMUtils.createElement("section", ["task-form__footer"]);
  const priorityAndDateContainer = Container();

  priorityAndDateContainer.appendChild(taskDateField);

  const buttonsContainer = Container();

  const submitBtn = DOMUtils.createButton({ text: "Add task" });
  submitBtn.style.fontSize = "12px";
  submitBtn.type = "submit";

  const cancelBtn = DOMUtils.createButton({
    text: "Cancel",
    variant: "secondary",
  });

  cancelBtn.type = "button";
  cancelBtn.style.fontSize = "12px";

  buttonsContainer.appendChild(cancelBtn);
  buttonsContainer.appendChild(submitBtn);

  formFooter.appendChild(priorityAndDateContainer);
  formFooter.appendChild(buttonsContainer);

  form.appendChild(fieldsContainer);
  form.appendChild(formFooter);

  return form;
}
