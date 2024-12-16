class HeaderElement extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML del Header
        const header = document.createElement('header');
        header.innerHTML = `
            <style>
                header {
                    background-color:rgb(175, 173, 76);
                    color: white;
                    padding: 1rem;
                    text-align: center;
                    font-size: 1.5rem;
                    font-family: Arial, sans-serif;
                }
            </style>
            <h1>Bienvenido a mi Aplicación Web sexto semestre</h1>
        `;

        // Adjuntar contenido al Shadow DOM
        shadow.appendChild(header);
    }
}

// Definir el Custom Element
customElements.define('header-element', HeaderElement);
