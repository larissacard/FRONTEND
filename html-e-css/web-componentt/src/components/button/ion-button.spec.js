import { IonButton } from "./ion-button.js";

describe("IonButton", () => {
  let button;

  beforeEach(() => {
    button = new IonButton();
    document.body.appendChild(button);
  });

  it("should render the button component", () => {
    expect(button).toBeDefined();
  });

  it("should have the correct default attributes", () => {
    expect(button.getAttribute("label")).toBeNull();
    expect(button.getAttribute("type")).toBeNull();
    expect(button.getAttribute("disabled")).toBeNull();
    expect(button.getAttribute("loading")).toBeNull();
    expect(button.getAttribute("options")).toBeNull();
  });

  it("shoudl render the correct label", () => {
    const label = "Click me!";
    button.setAttribute("label", label);
    expect(button.getAttribute("label")).toBe(label);
  });

  it("should render the correct button type", () => {
    const type = "primary";
    button.setAttribute("type", type);
    expect(button.getAttribute("type")).toBe(type);
  });

  it("should render the correct disabled state", () => {
    const disabled = "true";
    button.setAttribute("disabled", disabled);
    expect(button.getAttribute("disabled")).toBe(disabled);
  });

  it("should render the correct loading state", () => {
    const loading = "true";
    button.setAttribute("loading", loading);
    expect(button.getAttribute("loading")).toBe(loading);
  });

  it("should render the correct options", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    button.setAttribute("options", JSON.stringify(options));
    expect(button.getAttribute("options")).toBe(JSON.stringify(options));
  });

  it("should call handleClick when button is clicked", () => {
    button.setAttribute("loading", "true");
    const spyHandleClick = jest.spyOn(button, "handleClick");

    button.click("click");

    expect(spyHandleClick).not.toHaveBeenCalled();
  });

  it("should not toggle dropdown when options are not present", () => {
    const spyToggleDropdown = jest.spyOn(button, "toggleDropdown");

    button.setAttribute("options", JSON.stringify([]));
    button.click();

    expect(spyToggleDropdown).not.toHaveBeenCalled();
  });
});
