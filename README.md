# Portafolio — Carlos Constantino

Portafolio personal con estética de escritorio macOS. Incluye proyectos, trayectoria, habilidades, visor de CV, búsqueda rápida y contenido bilingüe español/inglés.

## Stack

- React 18
- Vite 7
- CSS sin framework (dos archivos: base y layout)

## Estructura

```
src/
  main.jsx          entrada de React
  App.jsx           composición de la página
  i18n.jsx          contexto de idioma y helper bi()
  content.js        perfil, textos, experiencia, educación y habilidades
  projects.js       datos de los proyectos
  asset.js          helper para rutas con la base de Vite
  components/
    ui.jsx          Reveal, WindowPane, carrusel y placeholder
    Chrome.jsx      barra de menú, progreso de scroll y dock
    Overlays.jsx    Spotlight y visor de CV
    Terminal.jsx    terminal animada
    Sections.jsx    hero, about, journey, skills y contacto
    Projects.jsx    tarjetas y marcos de proyectos
  styles/
    index.css       punto de entrada
    base.css        reset, tokens y chrome macOS
    layout.css      secciones, proyectos y responsive
public/
  cv/               PDFs del currículum
  images/projects/  capturas por proyecto
```

## Desarrollo

```bash
npm install
npm run dev
```

## Contenido

- Los textos y datos personales están en `src/content.js`.
- Los proyectos, enlaces, stacks e imágenes están en `src/projects.js`.
- Cada proyecto marcado con `featured: true` aparece en la sección destacada; los demás se muestran en “Otros proyectos”. `order` controla su número en pantalla.
- Las capturas van en `public/images/projects/<id-del-proyecto>/`.
- Los CV están en `public/cv/`.

Cada texto bilingüe usa `bi('español', 'inglés')`. No hay que tocar los componentes para cambiar el contenido.

Para agregar un proyecto, crea su carpeta de imágenes, añade sus datos en `src/projects.js` y marca `featured: true` si debe aparecer entre los destacados.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

El proyecto está pensado para publicarse en `https://frannnkkyy.github.io/portafolio/`. La base de Vite cambia cuando existe `GITHUB_PAGES`:

```powershell
$env:GITHUB_PAGES="true"; npm run build
```

Si el repositorio cambia de nombre, actualiza la base en `vite.config.js`.
