class IonButton extends HTMLElement {
    constructor() {
        super()

        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.styles())
    }

    connectedCallback() {
        this.createButton()
    }

    createButton() {
        const button = document.createElement('button');
        button.classList.add('primary');
        button.innerHTML = this.getAttribute('label');
        button.addEventListener('mouseover', this.onHover);
        button.addEventListener('mouseleave', this.onLeave);
        this.shadowRoot.appendChild(button);
    }

    onHover() {
        this.style.backgroundColor = '#146FF5';
    }

    onLeave() {
        this.style.backgroundColor = '#0858CE';
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
        .primary {
            width: 90px;
            height: 24px;
            color: #FCFCFD;
            border-radius: 6px;
            background-color: #0858CE;
            padding: 4px, 12px, 4px, 12px;
            border: none;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            text-align: left;
        }
        `
        return style
    }
}

customElements.define('ion-button', IonButton)