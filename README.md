# Mis Finanzas

App web instalable (PWA) para llevar ingresos, gastos, presupuestos, suscripciones y metas de ahorro.

**Abrir la app:** https://juan66-netizen.github.io/finanzas.GG/

- Funciona sin conexión y se instala en el iPhone desde Safari → Compartir → Agregar a pantalla de inicio.
- Inicio con 12 widgets que puedes ordenar u ocultar (balance, ritmo de gasto, próximos cobros, tendencia mensual…).
- 7 temas y colores de acento a elegir.
- Respaldo en un archivo JSON (Guardar / Restaurar respaldo) y exportación a Excel (CSV).
- Los datos se guardan solo en el dispositivo (opcionalmente cifrados con PIN). Este repositorio contiene únicamente el código.

## Publicar cambios

- Sube `VERSION` en `sw.js` para que los dispositivos tomen la versión nueva.
- Si cambias el ícono, ponle un nombre de archivo nuevo (Safari guarda en caché el anterior) y actualiza las rutas en `index.html`, `manifest.webmanifest` y `sw.js`.
- No cambies el nombre del repositorio ni las claves de `localStorage` (`mis-finanzas`, `mis-finanzas-prefs`): los datos del iPhone dependen de esa dirección y de esas claves, y se perderían.
