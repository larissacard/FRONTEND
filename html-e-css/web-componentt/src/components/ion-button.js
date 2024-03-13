class IonButton extends HTMLElement {
  static get observedAttributes() {
    return ["label", "type", "disabled"];
  }

  css = `
    .ion-btn {
        gap: 8px;
        width: 90px;
        height: 24px;

        display: flex;
        align-items: center;
        justify-content: center;
        
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
        border-top-color: red;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }    
    `;
  constructor() {
    super();
    this._label = "";
    this._type = "primary";
    this._disabled = false;
    this.build();
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
    this.render();
  }

  template() {
    const attributeDisabled = this._disabled ? "disabled" : "";
    return `
        <button type="button" class="ion-btn ${this._type}" ${attributeDisabled}>
        ${this._label}
        </button>
    `;
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
}

customElements.define("ion-button", IonButton);
