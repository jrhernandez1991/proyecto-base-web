class FooterElement extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML del Footer
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <style>
                footer {
                    background-color: #333;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                    font-size: 1rem;
                    font-family: Arial, sans-serif;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
            </style>
            <p>&copy; 2024 Mi Aplicación Web por Jonathan Hernandez. Todos los derechos reservados.</p>
        `;

        // Adjuntar contenido al Shadow DOM
        shadow.appendChild(footer);
    }
}

// Definir el Custom Element
customElements.define('footer-element', FooterElement);
