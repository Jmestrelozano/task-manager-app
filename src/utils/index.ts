/**
 * Formatea la fecha en el formato "DD-MMM-YYYY".
 * @param {Date} date - La fecha que se va a formatear.
 * @returns {string} La fecha formateada en el formato "DD-MMM-YYYY".
 */
export const formatDate = (date: Date) => {
  if (isNaN(date.getTime())) {
    return ""; // Devuelve una cadena vacía si la fecha es inválida
  }

  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getUTCDate(); // Usar UTC
  const year = date.getUTCFullYear(); // Usar UTC

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

/**
 * Formatea una cadena de fecha en formato "YYYY-MM-DD".
 * @param {string} dateString - La fecha en formato de cadena a formatear.
 * @returns {string | null} La fecha formateada o null si la fecha es inválida.
 */
export function dateFormatter(dateString: string): string | null {
  const [year, month, day] = dateString.split('-').map(Number);
  const inputDate = new Date(Date.UTC(year, month - 1, day));

  if (isNaN(inputDate.getTime())) {
    return null; // Devuelve null si la fecha es inválida
  }

  const formattedYear = inputDate.getUTCFullYear();
  const formattedMonth = String(inputDate.getUTCMonth() + 1).padStart(2, "0");
  const formattedDay = String(inputDate.getUTCDate()).padStart(2, "0");

  const formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;
  return formattedDate;
}

/**
 * Obtiene las iniciales de un nombre completo.
 * @param {string} fullName - El nombre completo.
 * @returns {string} Las iniciales del nombre completo.
 */
export const getInitials = (fullName: string): string => {
  const names = fullName.split(" ");

  const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());

  const initialsStr = initials.join("");
  return initialsStr;
};

/**
 * Capitaliza la primera letra de cada palabra en una cadena.
 * @param {string} str - La cadena de texto a capitalizar.
 * @returns {string} La cadena con la primera letra de cada palabra capitalizada.
 */
export const capitalizeWords = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/**
 * Estilos para los niveles de prioridad.
 * @type {Object.<string, string>}
 */
export const PRIORITY_STYLES = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-blue-600",
};

/**
 * Tipos de tareas con sus respectivas clases de fondo.
 * @type {Object.<string, string>}
 */
export const TASK_TYPE_STYLES = {
  Todo: "bg-blue-600",
  "In Progress": "bg-yellow-600",
  Completed: "bg-green-600",
};
