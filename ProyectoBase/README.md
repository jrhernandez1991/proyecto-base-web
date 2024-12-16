# Proyecto: Aplicación Web Modular con Web Components

Este proyecto consiste en una aplicación web que utiliza **Web Components** para crear una estructura modular e interactiva. Incluye componentes personalizados con **Shadow DOM**, **slots** y estilos encapsulados. Los datos se cargan dinámicamente desde APIs REST.

## Estructura del Proyecto

```
ProyectoBase/
├── index.html
├── components/
│   ├── header.js
│   ├── footer.js
│   ├── main.js
│   ├── menu.js
│   ├── socialProfile.js
│   ├── customTable.js
│   ├── gallery.js
```

### Descripción de Archivos

1. **`index.html`**
   - Archivo principal que integra todos los componentes personalizados.

2. **`components/`**
   - Carpeta que contiene los scripts de los Web Components.

   - **`header.js`**: Muestra un encabezado con un título estilizado.
   - **`footer.js`**: Pie de página con información de derechos de autor.
   - **`main.js`**: Contenedor principal que utiliza slots para contenido dinámico.
   - **`menu.js`**: Menú de navegación funcional para cambiar entre las páginas.
   - **`socialProfile.js`**: Componente que muestra un perfil de usuario estático.
   - **`customTable.js`**: Tabla que carga datos dinámicos desde la API REST `https://jsonplaceholder.typicode.com/users`.
   - **`gallery.js`**: Galería de imágenes obtenidas dinámicamente desde la API REST `https://pokeapi.co/`.

## Componentes

### 1. Header
- Encabezado con título estilizado.
- **Archivo:** `header.js`

### 2. Footer
- Pie de página con derechos de autor.
- **Archivo:** `footer.js`

### 3. Main
- Contenedor dinámico que utiliza **slots** para insertar contenido.
- **Archivo:** `main.js`

### 4. Menu
- Menú de navegación funcional con enlaces.
- Cambia el contenido dinámico del `<main-element>` según la sección seleccionada.
- **Archivo:** `menu.js`

### 5. SocialProfile
- Perfil de usuario estático con nombre, ocupación y descripción.
- **Archivo:** `socialProfile.js`

### 6. CustomTable
- Tabla personalizada que carga datos desde la API REST `https://jsonplaceholder.typicode.com/users`.
- **Archivo:** `customTable.js`

### 7. Gallery
- Galería que muestra imágenes y nombres de Pokémon obtenidos de la API REST `https://pokeapi.co/`.
- **Archivo:** `gallery.js`

## Instrucciones de Uso

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Abre el archivo `index.html` en un navegador web moderno.

3. Navega entre las diferentes páginas utilizando el menú principal.

4. Verifica el funcionamiento de los componentes:
   - **Inicio:** Muestra un mensaje de bienvenida.
   - **Perfil:** Muestra el perfil estático del usuario.
   - **Tabla:** Muestra datos dinámicos de usuarios.
   - **Galería:** Muestra imágenes dinámicas de Pokémon.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Web Components
- APIs REST

## Notas

- El proyecto requiere un navegador moderno que soporte **Shadow DOM** y **Custom Elements**.
- La conexión a Internet es necesaria para cargar los datos de las APIs REST.

## Autores
- Jonathan Hernandez
