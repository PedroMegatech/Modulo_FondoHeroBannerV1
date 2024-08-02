import HTML from "../CLASS/html.js";
import fondoEjemplo from '../../src/components/hero-banner.js';

// Creación la instancia de la clase HTML
let html = new HTML();

// Define the properties of the tag
html.etiqueta({
    etiqueta:"main",
    seleccion:"#root",
});

// Activación del Fondo de Ejemplo del Hero Banner
fondoEjemplo();