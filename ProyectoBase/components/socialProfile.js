class SocialProfile extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML del perfil
        const container = document.createElement('div');
        container.innerHTML = `
            <style>
                .profile {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    width: 300px;
                    margin: 2rem auto;
                }
                .profile img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin-bottom: 1rem;
                }
                .profile h2 {
                    margin: 0.5rem 0;
                    font-size: 1.5rem;
                }
                .profile p {
                    color: #666;
                    text-align: center;
                }
            </style>
            <div class="profile">
                <img src="https://23demayo.sadcaf.com.ec/imagenes/equipos/SOLO-PANAS-FC/jugadores/jugador_1721306841.jpg?cache=1734143224" alt="Foto de perfil">
                <h2>Jonathan Hernandez</h2>
                <p>Desarrollador Web</p>
                <p>Apasionado por la tecnología y la creación de experiencias digitales a otro nivel.</p>
            </div>
        `;

        // Adjuntar contenido al Shadow DOM
        shadow.appendChild(container);
    }
}

// Definir el Custom Element
customElements.define('social-profile', SocialProfile);
