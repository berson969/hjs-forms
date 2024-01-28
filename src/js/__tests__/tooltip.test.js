import Tooltip from "../tooltip";
import { expect, test } from "@jest/globals";
import { JSDOM } from "jsdom";
import "@testing-library/jest-dom";

test("tooltip", () => {
  const dom = new JSDOM(`<div class="container"></div>`);
  global.document = dom.window.document;
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector(".container");
  const tooltip = new Tooltip(container);

  tooltip.renderButton();

  const button = container.querySelector("button");
  const tooltipContent = container.querySelector(".custom-tooltip");

  expect(button).toBeInTheDocument();
  expect(tooltipContent).toBeInTheDocument();

  expect(button).toContainElement(tooltipContent);
});
