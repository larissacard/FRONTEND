class IonButton extends HTMLElement {
  static get observedAttributes() {
    return ["label", "type", "disabled", "loading"];
  }

  get loading() {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.render();
  }

  constructor() {
    super();
    this._label = "";
    this._type = "primary";
    this._disabled = false;
    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${this.css.trim()}</style>
    ${this.template().trim()}
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "label") {
      this._label = newValue;
    }

    if (name === "type") {
      this._type = newValue;
    }

    if (name === "disabled") {
      this._disabled = newValue;
    }

    if (name === "loading") {
      this._loading = newValue;
    }
    this.render();
  }

  template() {
    const attributeDisabled = this._disabled ? "disabled" : "";
    const attribute = this._loading ? "loading" : "";
    return `
        <button type="button" class="ion-btn ${
          this._type
        }" ${attributeDisabled}>
        ${this._loading ? this.loaderTemplate(this._type) : ""}
        ${this._label}
        </button>
    `;
  }

  loaderTemplate(type) {
    return `
        <div class="loader ${type}"></div>
    `;
  }

  css = `
    .ion-btn {
        gap: 8px;
        width: 109px;
        height: 32px;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 16px 6px 16px;
        
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        transition: all 300ms;
        
        color: #FCFCFD;
        
        font-size: 12px;
        font-weight: 600;
        
        text-align: left;
        line-height: 16px;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .primary {
        background-color: #0858CE;
    }
  
    .primary:not(:disabled):hover {
        background-color: #146FF5;
    }
  
    .primary:disabled {
        color:#AEB2BD;
        background-color: #E4E6EB;
        cursor: not-allowed;
    }

    .loader.primary {
        border-top-color: #FCFCFD;
      }
  
    .secondary {
        color: #0858CE;
        background-color: #FCFCFD;
        border: 1px solid #CED2DB;
    }
  
    .secondary:not(:disabled):hover {
        color: #146FF5;
        background-color: #EBF3FE;
        border: 1px solid #84B4FA;
    }
  
    .secondary:disabled {
        color: #AEB2BD;
        background-color: #E4E6EB;
        border: 1px solid #CED2DB;
        cursor: not-allowed;
    }

    .loader.secondary {
        border-top-color: #0858CE;
      }

    .ghost {
        color: #0858CE;
        background-color: #FCFCFD;
        border: none;
    }
  
    .ghost:not(:disabled):hover {
        color: #146FF5;
        background-color: #EBF3FE;
    }
  
    .ghost:disabled {
        color: #AEB2BD;
        cursor: not-allowed;
    }

  
    .dashed {
        color: #0858CE;
        background-color: #FCFCFD;
        border: 1px solid  #CED2DB;
        border-style: dashed;
    }
  
    .dashed:not(:disabled):hover {
        color: #146FF5;
        background-color: #EBF3FE;
        border: 1px solid  #84B4FA;
        border-style: dashed;
    }
  
    .dashed:disabled {
        color: #AEB2BD;
        background-color: #E4E6EB;
        border: 1px solid #AEB2BD;
        cursor: not-allowed;
    }

    .loader {
        border: 2px solid transparent;
        border-top-color: #0858CE;
        border-radius: 50%;
        min-width: 10px;
        min-height: 10px;
        animation: spin 2s linear infinite;
        margin-right: 10px;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }    
    `;
}

customElements.define("ion-button", IonButton);
