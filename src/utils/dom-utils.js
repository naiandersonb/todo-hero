export class DOMUtils {
   /**
   * Creates a new HTML element with optional class names.
   * 
   * @param {string} tag - The HTML tag name of the element to create.
   * @param {string[]} [classNames=[]] - An array of class names to add to the element.
   * @returns {HTMLElement} - The newly created HTML element.
   */
   static createElement(tag, classNames = []) {
    const element = document.createElement(tag);
    if(classNames.length > 0) {
      classNames.forEach(className => element.classList.add(className));
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
    const icon = document.createElement('img');
    icon.src = src;

    if(classNames.length > 0) {
      classNames.forEach(className => element.classList.add(className));
    }
    
    return icon;
  }

  /**
   * Toggles one or more class names on an element.
   * 
   * @param {HTMLElement} element - The element to toggle class names on.
   * @param {string[]} classNames - An array of class names to toggle.
   */
  static toggleClass(element, classNames) {
    classNames.forEach(className => element.classList.toggle(className));
  }
}