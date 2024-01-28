/**
 * Класс, создающий кнопку с всплывающей подсказкой.
 * @class
 */
export default class Tooltip {
  /**
   * Создает экземпляр Tooltip.
   * @param {HTMLElement} container - контейнер, к которому привязывается кнопка.
   */
  constructor(container) {
    this.container = container;
  }

  /**
   * Привязывает кнопку к DOM и устанавливает обработчик события click на нее.
   */
  bindToDOM() {
    this.renderButton();
    this.buttonElement.addEventListener("click", () => {
      this.toggleTooltip();
    });
  }

  /**
   * Создает элемент кнопки.
   *  @static
   * @returns {HTMLButtonElement} - Элемент кнопки.
   */
  static makeupButton() {
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.classList.add("custom-btn");
    buttonElement.textContent = "Click to toggle tooltip";
    return buttonElement;
  }

  /**
   * Создает элемент Tooltip.
   * @static
   * @returns {HTMLDivElement} - Элемент Tooltip.
   */
  static makeupTooltip() {
    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("custom-tooltip", "hidden");
    tooltipElement.textContent =
      "And here's some amazing content. It's very engaging. Right?";
    return tooltipElement;
  }

  /**
   * Рендерит кнопку и подсказку в контейнере.
   * @returns {HTMLElement} - Контейнер с кнопкой и подсказкой.
   * Устанавливается начальная невидимость подсказки.
   */
  renderButton() {
    this.clean();

    this.buttonElement = Tooltip.makeupButton();
    this.tooltipElement = Tooltip.makeupTooltip();

    this.buttonElement.appendChild(this.tooltipElement);
    this.container.appendChild(this.buttonElement);
    return this.container;
  }

  /**
   * Переключает видимость Tooltip.
   */
  toggleTooltip() {
    this.tooltipElement.classList.toggle("hidden");
  }

  /**
   * Очищает содержимое контейнера.
   */
  clean() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}
