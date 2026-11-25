# Inducción Inventario · Alto Sur

Sitio de inducción para **inventario.altosur.com.ar**, con una página de inicio donde cada persona elige su inducción:

| Inducción | Para quién | Dirección |
|---|---|---|
| Inicio | Todos | `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/` |
| Personal | Técnicos e instructores (vista del celular) | `…/personal/` |
| Encargados | Encargados de sector (consola) | `…/encargados/` |

Cada inducción termina con un test (Personal: 10 preguntas, aprueba con 8; Encargados: 12 preguntas, aprueba con 10). Los resultados se guardan en una planilla de Google.

## Contenido

```
index.html            página de inicio (elegir inducción)
config.js             URL del registro (se configura una sola vez)
img/                  logo
personal/             inducción del personal (index.html + img/)
encargados/           inducción de encargados (index.html + img/)
apps-script/Codigo.gs script que guarda los resultados en Google Sheets
```

## 1. Subir a GitHub

1. En el repositorio, tocá **Add file → Upload files**.
2. Arrastrá **todo el contenido** de esta carpeta: `index.html`, `config.js`, `README.md` y las carpetas `img`, `personal`, `encargados` y `apps-script`.
3. Tocá **Commit changes**. Los archivos con el mismo nombre se reemplazan.
4. GitHub Pages ya está activado (Settings → Pages, rama `main`, carpeta `/ (root)`). En uno o dos minutos se ven los cambios.

## 2. Conectar el registro (Google Sheets)

1. Creá una planilla nueva en Google Sheets (por ejemplo "Registro inducción inventario").
2. Menú **Extensiones → Apps Script**.
3. Borrá lo que aparece y pegá el contenido de `apps-script/Codigo.gs`. Guardá.
4. Tocá **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
5. Tocá **Implementar**, autorizá los permisos y copiá la **URL de la aplicación web** (termina en `/exec`).
6. En GitHub, abrí `config.js`, tocá el lápiz para editarlo y pegá la URL entre las comillas:

   ```js
   registroUrl: 'https://script.google.com/macros/s/…/exec'
   ```

   Tocá **Commit changes**. Las dos inducciones usan esa misma URL.

Los resultados del personal van a la hoja **Personal** y los de encargados a la hoja **Encargados** (se crean solas con el primer resultado). Cada fila tiene fecha, nombre, sector, puntaje, si aprobó y las opciones que eligió.

## 3. Probarlo

Abrí cada inducción, completá nombre y sector, respondé el test y tocá **Corregir**. Tiene que aparecer "Resultado registrado" y una fila nueva en la hoja correspondiente.

## Notas

- Cada intento es una fila nueva. Para ver el mejor resultado por persona, usá una tabla dinámica o un filtro en la planilla.
- El nombre lo escribe cada persona: no hay inicio de sesión. Si necesitás identificar a alguien con certeza, se puede agregar legajo o DNI.
- Si cambiás el script, hacé **Implementar → Gestionar implementaciones → Editar → Nueva versión** para que tome los cambios sin cambiar la URL.
- En el plan gratuito, GitHub Pages solo funciona con repositorios públicos: cualquiera con el enlace puede ver las inducciones. Los resultados quedan solo en tu planilla.
Actualizado.
