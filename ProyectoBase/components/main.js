class MainElement extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML del Main
        const main = document.createElement('main');
        main.innerHTML = `
            <style>
                main {
                    padding: 2rem;
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    min-height: 80vh;
                }
                ::slotted(*) {
                    margin: 1rem 0;
                }
            </style>
            <slot></slot>
        `;

        // Adjuntar contenido al Shadow DOM
        shadow.appendChild(main);
    }
}

// Definir el Custom Element
customElements.define('main-element', MainElement);
