class CustomTable extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estructura HTML inicial
        const container = document.createElement('div');
        container.innerHTML = `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2rem 0;
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 0.8rem;
                    text-align: left;
                }
                th {
                    background-color:rgb(175, 76, 76);
                    color: white;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                .loading {
                    text-align: center;
                    font-size: 1.2rem;
                    color: #666;
                    margin-top: 2rem;
                }
            </style>
            <div class="loading">Cargando datos...</div>
            <table hidden>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Compañía</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;

        // Adjuntar contenido al Shadow DOM
        shadow.appendChild(container);

        // Referencias a elementos
        this.loadingDiv = container.querySelector('.loading');
        this.table = container.querySelector('table');
        this.tbody = container.querySelector('tbody');
    }

    connectedCallback() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            this.populateTable(users);
        } catch (error) {
            console.error('Error al cargar los datos:', error);
            this.loadingDiv.textContent = 'Error al cargar los datos.';
        }
    }

    populateTable(users) {
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
            `;
            this.tbody.appendChild(row);
        });

        this.loadingDiv.hidden = true;
        this.table.hidden = false;
    }
}

// Definir el Custom Element
customElements.define('custom-table', CustomTable);
