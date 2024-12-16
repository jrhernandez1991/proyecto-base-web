class GalleryElement extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML inicial
        const container = document.createElement('div');
        container.innerHTML = `
            <style>
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    padding: 2rem;
                    background-color: #f9f9f9;
                }
                .gallery-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    background-color: white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .gallery-item img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                }
                .gallery-item h4 {
                    margin: 0.5rem 0;
                    font-size: 1rem;
                    text-align: center;
                    color: #333;
                }
                .loading {
                    text-align: center;
                    font-size: 1.2rem;
                    color: #666;
                    margin-top: 2rem;
                }
            </style>
            <div class="loading">Cargando imágenes...</div>
            <div class="gallery" hidden></div>
        `;

        // Adjuntar contenido al Shadow DOM
        shadow.appendChild(container);

        // Referencias a elementos
        this.loadingDiv = container.querySelector('.loading');
        this.galleryDiv = container.querySelector('.gallery');
    }

    connectedCallback() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
            const data = await response.json();
            const pokemonList = data.results;
            this.populateGallery(pokemonList);
        } catch (error) {
            console.error('Error al cargar las imágenes:', error);
            this.loadingDiv.textContent = 'Error al cargar las imágenes.';
        }
    }

    async populateGallery(pokemonList) {
        for (const pokemon of pokemonList) {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();

            const item = document.createElement('div');
            item.classList.add('gallery-item');
            item.innerHTML = `
                <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                <h4>${pokemon.name}</h4>
            `;
            this.galleryDiv.appendChild(item);
        }

        this.loadingDiv.hidden = true;
        this.galleryDiv.hidden = false;
    }
}

// Definir el Custom Element
customElements.define('gallery-element', GalleryElement);
