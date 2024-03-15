// import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";

describe("IonButton", () => {
  let button;

  beforeEach(() => {
    button = document.createElement("ion-button");
    document.body.appendChild(button);
  });

  afterEach(() => {
    document.body.removeChild(button);
  });

  test("should be rendered", () => {
    expect(document.body.contains(button)).toBe(true);
  });

  test("should render with the correct text", () => {
    const componente = document.getElementsByClassName("ion-btn");
    componente.textContent = "Clique aqui";
    expect(componente.textContent).toBe("Clique aqui");
  });
});
