export class IonDropdown extends HTMLElement {
  static get observedAttributes() {
    return ["options"];
  }

  constructor() {
    super();
    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>${this.css.trim()}</style>
        ${this.templateDropdown().trim()}
    `;
  }

  templateDropdown() {
    return `
        <div class="ion-dropdown">
            <div class="options">
                ${this.templateOption()}
            </div>
        </div>
    `;
  }

  templateOption() {
    let nomes = ["Diego", "Gabriel", "Lucas"];
    return Array.from(nomes)
      .map((nome) => {
        return `
            <span class="option"> ${nome} </span>
        `;
      })
      .join("");
  }
  css = `
    .ion-dropdown {
      display: flex;
      background-color: #FCFCFD;
      box-shadow: 0px 8px 6px -4px rgba(0,0,0,.15), 0px 0px 2px rgba(0,0,0,.15);
      z-index: 10;
      border-radius: 8px;

    }

    .options {
        display: flex;
        flex-direction: column;
        max-height: 244px;
        min-width: 182px;
        gap: 4px;
        overflow-y: auto;
    }

    .option {
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        line-height: 20px;
        background-color: #fcfcfd;
        color: #505566;
    }
  `;
}

customElements.define("ion-dropdown", IonDropdown);
