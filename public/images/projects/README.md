# Imágenes de proyectos

Cada proyecto tiene su propia carpeta dentro de `public/images/projects/`:

| Carpeta | Proyecto |
| --- | --- |
| `prologis/` | Prologis — lecturas de servicios |
| `academic-planning/` | Academic Planning Dashboard |
| `fitlink/` | FitLink |
| `yetpaw/` | Yetpaw |
| `stenovy/` | Stenovy |
| `jumpie/` | Jumpie |
| `encinos/` | Encinos Café |

## Cómo agregar una captura

1. Guarda la imagen en la carpeta del proyecto. Usa nombres cortos y sin espacios, por ejemplo `dashboard.png`.
2. Usa un nombre descriptivo y agrega el archivo al arreglo `images` del proyecto en `src/projects.js`:

```js
images: [
  { file: 'dashboard.png', alt: bi('Panel principal', 'Main dashboard') },
],
```

3. Si el carrusel tiene más de una imagen, agrega las demás al mismo arreglo. La primera se muestra al cargar.

## Notas

- FitLink, Yetpaw y Stenovy usan capturas verticales dentro de un marco de celular.
- Para que se vean nítidas, usa capturas de al menos 800 px de ancho y formatos PNG, JPG o WebP.
- Los textos `alt` son bilingües; usa `bi('texto en español', 'text in English')`.
- Guarda las capturas en `public/images/projects/`, no en `dist/`: esa carpeta se genera de nuevo en cada build.
