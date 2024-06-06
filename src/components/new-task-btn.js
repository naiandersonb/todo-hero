import { createElement } from "../utils/createElement";

function NewTaskBtn() {
  const newTaskBtn = createElement("button", "task-btn__create");
    newTaskBtn.innerText = "+ Create new task";
    return newTaskBtn;
}

export const newTaskBtn = NewTaskBtn();