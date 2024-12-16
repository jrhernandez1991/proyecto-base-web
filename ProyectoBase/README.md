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

   - **`header.js`**: 
     - **Funcionalidad**: Muestra un encabezado con un título estilizado.
     - **Explicación**: 
       - Crea un Shadow DOM para encapsular el contenido.
       - Incluye un elemento `<header>` con estilos CSS personalizados.
       - El título se define dentro de un `<h1>` estilizado.

   - **`footer.js`**: 
     - **Funcionalidad**: Pie de página con derechos de autor.
     - **Explicación**: 
       - Usa un Shadow DOM para encapsular un elemento `<footer>`.
       - Incluye estilos para un fondo oscuro, texto blanco y posición fija.

   - **`main.js`**: 
     - **Funcionalidad**: Contenedor dinámico que utiliza **slots** para insertar contenido.
     - **Explicación**: 
       - Crea un Shadow DOM con un `<main>` que define un slot para contenido dinámico.
       - Aplica estilos básicos para el diseño responsivo.

   - **`menu.js`**: 
     - **Funcionalidad**: Menú de navegación funcional con enlaces.
     - **Explicación**: 
       - Implementa enlaces con el atributo `data-page` para identificar secciones.
       - Al hacer clic, cambia dinámicamente el contenido del `<main-element>`.

   - **`socialProfile.js`**: 
     - **Funcionalidad**: Componente que muestra un perfil de usuario estático.
     - **Explicación**: 
       - Usa un Shadow DOM con un diseño estilizado.
       - Contiene una imagen, nombre, ocupación y descripción.

   - **`customTable.js`**: 
     - **Funcionalidad**: Tabla personalizada que carga datos desde la API REST `https://jsonplaceholder.typicode.com/users`.
     - **Explicación**: 
       - Crea un Shadow DOM con un elemento `<table>`.
       - Realiza una solicitud `fetch` para cargar los datos.
       - Rellena la tabla dinámicamente con filas generadas.

   - **`gallery.js`**: 
     - **Funcionalidad**: Galería que muestra imágenes y nombres de Pokémon obtenidos de la API REST `https://pokeapi.co/`.
     - **Explicación**: 
       - Crea un Shadow DOM con una galería responsiva.
       - Usa la API para cargar imágenes y nombres dinámicamente.
       - Cada ítem incluye una imagen y un nombre estilizado.

## Instrucciones de Uso

1. Clona este repositorio:

https://github.com/jrhernandez1991/proyecto-base-web.git

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

## Autor
- Jonathan Hernandez
