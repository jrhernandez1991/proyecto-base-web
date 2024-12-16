class MenuElement extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML del Menu
        const nav = document.createElement('nav');
        nav.innerHTML = `
            <style>
                nav {
                    display: flex;
                    justify-content: center;
                    background-color:rgba(187, 7, 7, 0.61);
                    padding: 1rem;
                }
                a {
                    color: white;
                    text-decoration: none;
                    margin: 0 1rem;
                    font-size: 1.2rem;
                    font-family: Arial, sans-serif;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
            <a href="#" data-page="home">Inicio</a>
            <a href="#" data-page="profile">Perfil</a>
            <a href="#" data-page="gallery">Galería</a>
            <a href="#" data-page="table">Tabla</a>
        `;

        // Adjuntar contenido al Shadow DOM
        shadow.appendChild(nav);

        // Agregar eventos de navegación
        this.setupNavigation(nav);
    }

    setupNavigation(nav) {
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const page = event.target.getAttribute('data-page');
                this.navigate(page);
            });
        });
    }

    navigate(page) {
        const mainElement = document.querySelector('main-element');
        if (!mainElement) return;

        switch (page) {
            case 'home':
                mainElement.innerHTML = '<h2>Página de Inicio</h2><p>Bienvenido a la página principal.</p>';
                break;
            case 'profile':
                mainElement.innerHTML = '<social-profile></social-profile>';
                break;
            case 'gallery':
                mainElement.innerHTML = '<gallery-element></gallery-element>';
                break;
            case 'table':
                mainElement.innerHTML = '<custom-table></custom-table>';
                break;
        }
    }
}

// Definir el Custom Element
customElements.define('menu-element', MenuElement);
