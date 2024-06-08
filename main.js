/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/icons/burger.svg":
/*!********************************************!*\
  !*** ./src/assets/images/icons/burger.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/2788165d80a7c817cf59b4ab3fd3b7f2.svg");

/***/ }),

/***/ "./src/assets/images/icons/calendar.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/calendar.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/b2e849230327734316d5f156f6e0eb5e.svg");

/***/ }),

/***/ "./src/assets/images/icons/trash.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/trash.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/e9eed7418b0527755c1aedd18e26f611.svg");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/6c75310be62be1a269ad22d263cd2850.svg");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logo: () => (/* binding */ Logo),
/* harmony export */   logo: () => (/* binding */ logo)
/* harmony export */ });
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo.svg */ "./src/assets/images/logo.svg");

function Logo() {
  const logo = document.createElement("img");
  logo.src = _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  logo.style.width = "100px";
  return logo
}

const logo = Logo()


/***/ }),

/***/ "./src/components/new-task-btn.js":
/*!****************************************!*\
  !*** ./src/components/new-task-btn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newTaskBtn: () => (/* binding */ newTaskBtn)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/utils/createElement.js");


function NewTaskBtn() {
  const newTaskBtn = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "task-btn__create");
    newTaskBtn.innerText = "+ Create new task";
    return newTaskBtn;
}

const newTaskBtn = NewTaskBtn();

/***/ }),

/***/ "./src/components/new-task-form.js":
/*!*****************************************!*\
  !*** ./src/components/new-task-form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewTaskForm: () => (/* binding */ NewTaskForm)
/* harmony export */ });
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom-utils */ "./src/utils/dom-utils.js");
/* harmony import */ var _new_task_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-task-btn */ "./src/components/new-task-btn.js");



const Container = () => {
  return _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createElement("section", ["task-form__group"]);
};

const Field = (tag, name, placeholder = "") => {
  const field = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createElement(tag, [
    "task-form__field",
    "font-inter-tight",
  ]);
  field.name = name;
  if (placeholder) field.placeholder = placeholder;
  return field;
};

const submitBtn = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createButton({ text: "Add task" });
submitBtn.style.fontSize = "12px";
submitBtn.type = "submit";

const cancelBtn = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createButton({
  text: "Cancel",
  variant: "secondary",
});

const titleInput = Field("input", "title", "Task title");

const descriptionInput = Field("textarea", "description", "Task description");

const selectPriority = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createSelect("priority", [
  "low",
  "medium",
  "hight",
]);

const taskDateField = Field("input", "due-date", "Select task date");
taskDateField.classList.add("input-date");
taskDateField.type = "date";

function NewTaskForm() {
  const form = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createElement("form", ["task-form__container"]);
  const fieldsContainer = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createElement("section", [
    "task-form__fields-container",
  ]);

  fieldsContainer.appendChild(titleInput);
  fieldsContainer.appendChild(descriptionInput);

  const formFooter = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createElement("section", ["task-form__footer"]);
  const priorityAndDateContainer = Container();

  priorityAndDateContainer.appendChild(taskDateField);
  priorityAndDateContainer.appendChild(selectPriority);

  const buttonsContainer = Container();

  cancelBtn.type = "button";
  cancelBtn.style.fontSize = "12px";

  cancelBtn.addEventListener("click", () => {
    form.remove();
    _new_task_btn__WEBPACK_IMPORTED_MODULE_1__.newTaskBtn.classList.remove("hidden");
  });

  buttonsContainer.appendChild(cancelBtn);
  buttonsContainer.appendChild(submitBtn);

  formFooter.appendChild(priorityAndDateContainer);
  formFooter.appendChild(buttonsContainer);

  form.appendChild(fieldsContainer);
  form.appendChild(formFooter);

  return form;
}


/***/ }),

/***/ "./src/components/render-tasks.js":
/*!****************************************!*\
  !*** ./src/components/render-tasks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _task_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-row */ "./src/components/task-row.js");


const renderTasks = (tasks, element, handleDelete) => {
  element.innerHTML = "";

  if (tasks.length > 0) {
    for (let task of tasks) {
      const taskCard = (0,_task_row__WEBPACK_IMPORTED_MODULE_0__.TaskRow)(task, () => handleDelete(task.id, taskCard));
      taskCard.id = task.id;
      element.appendChild(taskCard);
    }
  }
};

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/utils/createElement.js");


class Sidebar {
  constructor() {
    this.sidebar = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", 'sidebar');
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

/***/ }),

/***/ "./src/components/task-row.js":
/*!************************************!*\
  !*** ./src/components/task-row.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskRow: () => (/* binding */ TaskRow)
/* harmony export */ });
/* harmony import */ var _assets_images_icons_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/icons/calendar.svg */ "./src/assets/images/icons/calendar.svg");
/* harmony import */ var _assets_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/icons/trash.svg */ "./src/assets/images/icons/trash.svg");
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom-utils */ "./src/utils/dom-utils.js");




function TaskRow(task, deleteTask) {
  const taskCardEl = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("div", ["task-content__row"]);
  const taskBody = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("article");

  const taskTitleEl = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("h4");
  taskTitleEl.innerText = task.title;
  taskBody.appendChild(taskTitleEl);

  if (task.description) {
    const taskDescEl = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("p");
    taskDescEl.innerText = task.description;
    taskBody.appendChild(taskDescEl);
  }

  const deleteTaskBtn = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("button", ["task-btn__delete"]);
  const trashIcon = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createIcon(_assets_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
  deleteTaskBtn.appendChild(trashIcon);

  deleteTaskBtn.addEventListener("click", () => {
    deleteTask(task.id)
  });

  _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.appendElements(taskCardEl, [taskBody,deleteTaskBtn])

  const footer = Footer(task.date, task.priority)
  taskBody.appendChild(footer);

  return taskCardEl;
}

const Footer = (taskDate, priority) => {
  const footer = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("footer");

  const dateEl = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("div", ["task-row__date"]);

  const calendarIcon = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createIcon(_assets_images_icons_calendar_svg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  calendarIcon.style.width = "1rem";

  const date = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("span");
  const dueDate = new Date(taskDate);

  const day = dueDate.getUTCDate().toString().padStart(2, 0);
  const month = dueDate.getUTCMonth().toString().padStart(2, 0);
  const year = dueDate.getUTCFullYear().toString().padStart(2, 0);
 
  date.innerText = `${day}/${month}/${year}`;

  dateEl.appendChild(calendarIcon);
  dateEl.appendChild(date);

  const priorityEl = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.createElement("span", [
    "task-priority",
    `task-priority__${priority}`,
  ]);
  priorityEl.innerText = priority;

  _utils_dom_utils__WEBPACK_IMPORTED_MODULE_2__.DOMUtils.appendElements(footer, [dateEl,priorityEl])

  return footer
}

/***/ }),

/***/ "./src/controllers/Task.js":
/*!*********************************!*\
  !*** ./src/controllers/Task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _utils_compare_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/compare-dates */ "./src/utils/compare-dates.js");


class Task {
  #localStorageId = "@todo-hero:tasks";

  constructor(tasks = []) {
    this.tasks = tasks;
  }

  getTasks() {
    const tasksJSON = localStorage.getItem(this.#localStorageId);
    this.tasks = JSON.parse(tasksJSON) ?? [];
    return this.tasks;
  }

  #saveTasks() {
    localStorage.setItem(this.#localStorageId, JSON.stringify(this.tasks));
  }

  createTask(task) {
    const newTask = {
      id: new Date().getTime(),
      title: task.title,
      description: task.description ?? null,
      priority: task.priority ?? "low",
      date: task.date,
      completed: false,
      projectId: task.projectId ?? null,
    };

    this.tasks.push(newTask);

    this.#saveTasks();
  }

  getTodayTasks() {
    const todayTasks = this.tasks.filter(t => (0,_utils_compare_dates__WEBPACK_IMPORTED_MODULE_0__.compareDates)(new Date(t.date), new Date()))

    return todayTasks ?? [];
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    localStorage.setItem(this.#localStorageId, JSON.stringify(this.tasks));
  }
}


/***/ }),

/***/ "./src/utils/compare-dates.js":
/*!************************************!*\
  !*** ./src/utils/compare-dates.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareDates: () => (/* binding */ compareDates)
/* harmony export */ });
/**
 * 
 * @param {Date} d1 - The first Date object to compare.
 * @param {Date} d2 - The second Date object to compare.
 * @returns - Returns true if the dates are the same, false otherwise.
 */
function compareDates(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth()
  );
}


/***/ }),

/***/ "./src/utils/create-task.js":
/*!**********************************!*\
  !*** ./src/utils/create-task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
function createTask(evt, createTask) {
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


/***/ }),

/***/ "./src/utils/createElement.js":
/*!************************************!*\
  !*** ./src/utils/createElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
/**
* Creates a new HTML element with an optional class name.
* 
* @param {string} tag - The HTML tag name of the element to create.
* @param {string} [className=""] - The optional class name to add to the element.
* @returns {HTMLElement} - The newly created HTML element.
*/
const createElement = (tag, className = "") => {
 const element = document.createElement(tag);
 if (className) element.classList.add(className);
 return element;
};

/***/ }),

/***/ "./src/utils/dom-utils.js":
/*!********************************!*\
  !*** ./src/utils/dom-utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMUtils: () => (/* binding */ DOMUtils)
/* harmony export */ });
class DOMUtils {
  /**
   * Creates a new HTML element with optional class names.
   *
   * @param {string} tag - The HTML tag name of the element to create.
   * @param {string[]} [classNames=[]] - An array of class names to add to the element.
   * @returns {HTMLElement} - The newly created HTML element.
   */
  static createElement(tag, classNames = []) {
    const element = document.createElement(tag);
    if (classNames.length > 0) {
      classNames.forEach((className) => element.classList.add(className));
    }

    return element;
  }

  /**
   * Creates a new HTML element with optional class names.
   *
   * @param {string} tag - The HTML tag name of the element to create.
   * @param {string[]} [classNames=[]] - An array of class names to add to the element.
   * @returns {HTMLElement} - The newly created HTML element.
   */
  static createIcon(src, classNames = []) {
    const icon = document.createElement("img");
    icon.src = src;

    if (classNames.length > 0) {
      classNames.forEach((className) => element.classList.add(className));
    }

    return icon;
  }

  /**
   * Creates a new HTML button element with optional class names.
   *
   * @param {Object} options - The options for creating the button.
   * @param {string} options.text - The text content of the button.
   * @param {("primary"|"secondary")} [options.variant="primary"] - The variant of the button.
   * @param {string[]} [options.classNames=[]] - An array of class names to add to the button.
   * @returns {HTMLButtonElement} - The newly created HTML button element.
   */
  static createButton({ text, variant = "primary", classNames = [] }) {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add("btn", "font-inter-bold", `btn__${variant}`);

    if (classNames.length > 0) {
      classNames.forEach((className) => element.classList.add(className));
    }

    return button;
  }

  /**
   * 
   * @param {HTMLElement} element - the element to set chields
   * @param {HTMLElement[]} chields - list of elements
   */
  static appendElements(element, chields) {
    chields.forEach((child) => element.appendChild(child));
  }

  /**
   * Creates a new HTML select element with options.
   *
   * @param {string} name - The name attribute of the select element.
   * @param {string[]} [options=[]] - An array of options to populate the select element.
   * @returns {HTMLSelectElement} - The newly created HTML select element.
   */
  static createSelect(name, options = []) {
    const select = document.createElement("select");
    select.classList.add("select");
    select.name = name;

    for (let option of options) {
      const optionEl = DOMUtils.createElement("option");
      optionEl.classList.add("option");
      optionEl.value = option;
      optionEl.innerText = option;
      select.appendChild(optionEl);
    }

    return select;
  }

  /**
   * Toggles one or more class names on an element.
   *
   * @param {HTMLElement} element - The element to toggle class names on.
   * @param {string[]} classNames - An array of class names to toggle.
   */
  static toggleClass(element, classNames) {
    classNames.forEach((className) => element.classList.toggle(className));
  }
}


/***/ }),

/***/ "./src/utils/url-params.js":
/*!*********************************!*\
  !*** ./src/utils/url-params.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   URLParams: () => (/* binding */ URLParams)
/* harmony export */ });
class URLParams {
  constructor(url = window.location.href) {
    this.url = new URL(url);
  }

  setParam(paramName, paramValue) {
    this.url.searchParams.set(paramName, paramValue);
    window.history.pushState({}, '', this.url);
  }

  getParam(paramName) {
    return this.url.searchParams.get(paramName);
  }

  getAllParams() {
    const params = {};
    for (const [key, value] of this.url.searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }

  removeParam(paramName) {
    this.url.searchParams.delete(paramName);
    window.history.pushState({}, '', this.url);
  }

  clearParams() {
    this.url.search = ''
    window.history.pushState({}, '', this.url);
  }

  toString() {
    return this.url.toString();
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_icons_burger_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/icons/burger.svg */ "./src/assets/images/icons/burger.svg");
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/logo */ "./src/components/logo.js");
/* harmony import */ var _components_new_task_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-task-btn */ "./src/components/new-task-btn.js");
/* harmony import */ var _components_new_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-task-form */ "./src/components/new-task-form.js");
/* harmony import */ var _components_render_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/render-tasks */ "./src/components/render-tasks.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _controllers_Task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/Task */ "./src/controllers/Task.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _utils_create_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/create-task */ "./src/utils/create-task.js");
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/dom-utils */ "./src/utils/dom-utils.js");
/* harmony import */ var _utils_url_params__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/url-params */ "./src/utils/url-params.js");












const app = document.getElementById("app");
const urlParams = new _utils_url_params__WEBPACK_IMPORTED_MODULE_10__.URLParams();
const tasks = new _controllers_Task__WEBPACK_IMPORTED_MODULE_6__.Task();
let allTasks = tasks.getTasks();

const handleDeleteTask = (id, element) => {
  tasks.deleteTask(id);
  tasksList.removeChild(element);
  allTasks = tasks.getTasks();
};


const tasksList = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("div", ["tasks-content__list"]);
const pageTitle = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("h2");

const createSidebar = () => {
  const sidebar = new _components_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar();

  const allTasksBtn = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("button", ["sidebar-item"]);
  allTasksBtn.style.marginTop = "3rem";
  allTasksBtn.innerText = "All";

  const todayTasksBtn = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("button", ["sidebar-item"]);
  todayTasksBtn.innerText = "Today";

  const projectsBtn = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("button", ["sidebar-item"]);
  projectsBtn.style.marginTop = "2rem";
  projectsBtn.innerText = "Projects";

  const sidebarHeader = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("div", ["sidebar-header"]);
  const burgerIcon = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createIcon(_assets_images_icons_burger_svg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  burgerIcon.style.width = "24px";

  _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.appendElements(sidebarHeader, [_components_logo__WEBPACK_IMPORTED_MODULE_1__.logo, burgerIcon]);
  sidebar.addElements([sidebarHeader, allTasksBtn, todayTasksBtn, projectsBtn]);

  allTasksBtn.addEventListener("click", () => {
    pageTitle.innerText = "Tasks";
    urlParams.setParam("select", "all");
    (0,_components_render_tasks__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(allTasks, tasksList, handleDeleteTask);
  });

  todayTasksBtn.addEventListener("click", () => {
    pageTitle.innerText = "Today tasks";
    const todayTasks = tasks.getTodayTasks();

    if (todayTasks.length > 0) {
      (0,_components_render_tasks__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(todayTasks, tasksList, handleDeleteTask);
    } else {
      tasksList.innerText = "";
    }
  });

  projectsBtn.addEventListener("click", () => {
    pageTitle.innerText = "Projects";
    urlParams.setParam("select", "projects");
  });

  return sidebar;
};


const createTasksContainer = () => {
  const tasksContainer = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("section", ["tasks-container"]);
  const tasksContent = _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.createElement("div", ["tasks-content"]);
  
  pageTitle.innerText = "Tasks";

  _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.appendElements(tasksContent, [pageTitle, tasksList]);
  tasksContainer.appendChild(tasksContent);

  return { tasksContainer, tasksContent, pageTitle };
};

const initializeForm = (form, tasksContent) => {
  form.style.marginTop = "1rem";

  _components_new_task_btn__WEBPACK_IMPORTED_MODULE_2__.newTaskBtn.style.marginTop = "2rem";
  tasksContent.appendChild(_components_new_task_btn__WEBPACK_IMPORTED_MODULE_2__.newTaskBtn);

  _components_new_task_btn__WEBPACK_IMPORTED_MODULE_2__.newTaskBtn.addEventListener("click", () => {
    tasksContent.appendChild(form);
    _components_new_task_btn__WEBPACK_IMPORTED_MODULE_2__.newTaskBtn.classList.add("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    (0,_utils_create_task__WEBPACK_IMPORTED_MODULE_8__.createTask)(e, (newTask) => {
      tasks.createTask(newTask);
    });

    allTasks = tasks.getTasks();
    (0,_components_render_tasks__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(allTasks, tasksList, handleDeleteTask);
    form.reset();

    tasksContent.removeChild(form);
    _components_new_task_btn__WEBPACK_IMPORTED_MODULE_2__.newTaskBtn.classList.remove("hidden");
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const sidebar = createSidebar();
  const { tasksContainer, tasksContent, pageTitle } = createTasksContainer();
  const form = (0,_components_new_task_form__WEBPACK_IMPORTED_MODULE_3__.NewTaskForm)();

  (0,_components_render_tasks__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(allTasks, tasksList, handleDeleteTask);
  initializeForm(form, tasksContent);

  _utils_dom_utils__WEBPACK_IMPORTED_MODULE_9__.DOMUtils.appendElements(app, [sidebar.render(), tasksContainer])
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map