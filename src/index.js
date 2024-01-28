import Tooltip from "./js/tooltip";
import "./css/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const tooltip = new Tooltip(container);
  tooltip.bindToDOM();
});
