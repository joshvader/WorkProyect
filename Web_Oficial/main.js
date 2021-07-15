// Generar evento Onchange en los cards 
//Codificar las funcionalidades mínimas del simulador. Identificando el flujo de trabajo en el script en términos de captura de entradas y eventos de usuario, funciones de procesos esenciales y notificación de resultados en forma de salida por HTML, modificando el DOM.
import searchFilter from "./assets/js/dom/filtro_busqueda.js";

const d= document;

d.addAEventListener("DOMContentLoaded", e =>{
  searchFilter(".card-filter","card");
});






