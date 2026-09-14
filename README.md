# Portafolio de Leandro Miranda

Portafolio profesional en español, actualizado con el CV de 2026. Incluye experiencia, resultados, proyectos, tecnologías, contacto y descarga del currículum.

## Desarrollo

Requisitos: Node.js 22 y npm.

```sh
npm ci
npm run dev
```

`npm start` también inicia el servidor. El proyecto usa React 17 y Create React App 4; los comandos de inicio y build incluyen la compatibilidad OpenSSL necesaria para este Webpack antiguo.

## Validación y publicación

```sh
CI=true npm run build
```

En Vercel, importar `Brocoleo/Portafolio`, usar la raíz del repositorio, preset **Create React App**, comando `npm run build` y salida `build`. La configuración está en `vercel.json`. Los pushes a la rama de producción conectada generan despliegues automáticos.

La web es estática: no necesita desplegar la carpeta histórica `Server/`, ni configurar secretos o una base de datos.

## Contenido

- `src/App.js`: contenido y secciones; datos de experiencia y proyectos.
- `src/App.css` y `src/index.css`: diseño adaptable, navegación y movimiento reducido.
- `public/CV_Leandro_Miranda_2026.pdf`: CV original facilitado por Leandro.
- `src/Assets/Projects/*.webp`: capturas optimizadas; originales conservados.

Las métricas profesionales provienen del CV. Los proyectos personales son históricos; sus servicios externos pueden cambiar o dejar de estar disponibles.

Se eliminaron de la página activa el retraso artificial de carga, los canvas de partículas y los listeners de scroll duplicados. Se utiliza IntersectionObserver con limpieza, imágenes diferidas y respeto a `prefers-reduced-motion`.
