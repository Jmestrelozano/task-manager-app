/**
 * Formatea la fecha en el formato "DD-MMM-YYYY"
 * @param {Date} date - La fecha que se va a formatear.
 * @returns {string} La fecha formateada.
 */
export const formatDate = (date: Date) => {
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

/**
 * Formatea una cadena de fecha en formato "YYYY-MM-DD"
 * @param {string} dateString - La fecha en formato de cadena a formatear.
 * @returns {string} La fecha formateada o "Invalid Date" si la fecha es inválida.
 */
export function dateFormatter(dateString: string) {
  const inputDate = new Date(dateString);

  if (isNaN(inputDate.getTime())) {
    return "Invalid Date";
  }

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
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
