/**
* Creates a new HTML element with an optional class name.
* 
* @param {string} tag - The HTML tag name of the element to create.
* @param {string} [className=""] - The optional class name to add to the element.
* @returns {HTMLElement} - The newly created HTML element.
*/
export const createElement = (tag, className = "") => {
 const element = document.createElement(tag);
 if (className) element.classList.add(className);
 return element;
};