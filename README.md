# Inducción Inventario · Personal

Inducción para técnicos e instructores de Alto Sur sobre el uso de la vista Personal de **inventario.altosur.com.ar**: retirar, devolver, inspeccionar, reportar, materiales, bolsos y uso sin señal. Termina con un test de 10 preguntas (se aprueba con 8) cuyo resultado se guarda en una planilla de Google.

## Contenido

```
index.html            la página completa
img/                  logo y capturas de la app
apps-script/Codigo.gs script que guarda los resultados en Google Sheets
```

## 1. Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `induccion-inventario`).
2. Subí todo el contenido de esta carpeta a la raíz del repositorio (botón **Add file → Upload files**, arrastrá `index.html`, la carpeta `img` y la carpeta `apps-script`).
3. Andá a **Settings → Pages**.
4. En **Source** elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)` y tocá **Save**.
5. En uno o dos minutos la página queda en `https://TU-USUARIO.github.io/induccion-inventario/`.

> En el plan gratuito de GitHub, Pages solo funciona con repositorios **públicos**: cualquiera con el enlace puede ver la inducción. Los resultados del test no quedan en GitHub, quedan en tu planilla privada.

## 2. Conectar el registro (Google Sheets)

1. Creá una planilla nueva en Google Sheets (por ejemplo "Registro inducción inventario").
2. Menú **Extensiones → Apps Script**.
3. Borrá lo que aparece y pegá el contenido de `apps-script/Codigo.gs`. Guardá.
4. Tocá **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
5. Tocá **Implementar**, autorizá los permisos y copiá la **URL de la aplicación web** (termina en `/exec`).
6. En `index.html`, buscá la línea

   ```js
   const REGISTRO_URL='';
   ```

   y pegá la URL entre las comillas. Guardá el cambio en GitHub (editá el archivo con el lápiz y tocá **Commit changes**).

Cada vez que alguien corrige el test con todas las respuestas completas, se agrega una fila en la hoja **Resultados** con fecha, nombre, sector, puntaje, si aprobó y las opciones que eligió.

## 3. Probarlo

Abrí la página, completá nombre y sector, respondé el test y tocá **Corregir**. Tiene que aparecer "Resultado registrado" y una fila nueva en la planilla.

## Notas

- Cada intento es una fila nueva. Para ver el mejor resultado por persona, usá una tabla dinámica o un filtro en la planilla.
- El nombre lo escribe cada persona: no hay inicio de sesión. Si necesitás identificar a alguien con certeza, agregá su legajo o DNI al formulario.
- Si cambiás el script, hacé **Implementar → Gestionar implementaciones → Editar → Nueva versión** para que tome los cambios sin cambiar la URL.
