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
2. Abre `src/projects.js` y agrega el archivo al arreglo `images` del proyecto:

```js
images: [
  { file: 'dashboard.png', alt: bi('Panel principal', 'Main dashboard') },
],
```

3. Si el carrusel tiene más de una imagen, agrega las demás al mismo arreglo. La primera se muestra al cargar.

## Notas

- `fitlink/` y `stenovy/` están vacías a propósito. Mientras no tengan capturas, la tarjeta muestra un placeholder diseñado.
- Para que se vean nítidas, usa capturas de al menos 1200 px de ancho y formatos PNG, JPG o WebP.
- Los textos `alt` son bilingües; usa `bi('texto en español', 'text in English')`.
