import { IonDropdown } from "./ion-dropdown.js";

describe("IonDropdown", () => {
  let dropdown;

  beforeEach(() => {
    dropdown = new IonDropdown();
  });

  it("should render the dropdown component", () => {
    expect(dropdown).toBeDefined();
  });

  it("should have the correct default attributes", () => {
    expect(dropdown.getAttribute("data-selected")).toBeNull();
    expect(dropdown.getAttribute("data-options")).toBeNull();
  });

  it("should update the selected option when an option is clicked", () => {
    const option1 = {
      label: "Option 1",
      key: "option1",
      selected: false,
    };
    const options = [option1];
    dropdown.setAttribute("options", JSON.stringify(options));
    expect(dropdown.getAttribute("options")).toBe(JSON.stringify(options));
    const spyHandleClick = jest.spyOn(dropdown, "optionClicked");

    const optionElements = dropdown.querySelector(".item-0");
    dropdown.optionClicked(option1, 0);
    expect(option1.selected).toBe(true);
  });

  it("should update the selected option when an option is clicked", () => {
    const option1 = {
      label: "Option 1",
      key: "option1",
      selected: true,
    };
    const options = [option1];
    dropdown.setAttribute("options", JSON.stringify(options));
    expect(dropdown.getAttribute("options")).toBe(JSON.stringify(options));
    const spyHandleClick = jest.spyOn(dropdown, "optionClicked");

    const optionElements = dropdown.querySelector(".item-0");
    dropdown.optionClicked(option1, 0);
    expect(option1.selected).toBe(false);
  });

  it("should initialize dropdown when connected to the DOM", () => {
    dropdown._options = ["option1", "option2", "option3"];


    dropdown.connectedCallback();


    expect(dropdown.shadowRoot.getElementById("item-0").onclick).toBeDefined();
    expect(dropdown.shadowRoot.getElementById("item-1").onclick).toBeDefined();
    expect(dropdown.shadowRoot.getElementById("item-2").onclick).toBeDefined();
  });

});
