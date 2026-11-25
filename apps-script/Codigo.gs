/**
 * Registro de la Inducción Inventario · Alto Sur
 * Recibe los resultados del test desde la página y los agrega como filas
 * en la hoja "Resultados" de esta planilla.
 *
 * Instalación: ver README.md del repositorio (paso 2).
 */
// Cada inducción guarda en su propia hoja de la planilla.
const HOJAS = { Personal: 'Personal', Encargado: 'Encargados' };
const HOJA_PERSONAL = 'Personal';
const COLUMNAS = ['Fecha', 'Nombre', 'Sector', 'Puntaje', 'Total', 'Aprobado', 'Respuestas'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameter) || {};
    const hoja = obtenerHoja_(HOJAS[p.perfil] || HOJA_PERSONAL);
    hoja.appendRow([
      new Date(),
      limpiar_(p.nombre, 80),
      limpiar_(p.sector, 30),
      Number(p.puntaje) || 0,
      Number(p.total) || 0,
      limpiar_(p.aprobado, 2),
      limpiar_(p.respuestas, 60),
    ]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

function obtenerHoja_(nombre) {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  let hoja = libro.getSheetByName(nombre);
  if (!hoja) {
    hoja = libro.insertSheet(nombre);
    hoja.appendRow(COLUMNAS);
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, COLUMNAS.length).setFontWeight('bold');
  }
  return hoja;
}

// Evita que un texto se interprete como fórmula en la planilla.
function limpiar_(v, max) {
  let s = String(v || '').slice(0, max).trim();
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
