import HTML from "../CLASS/html.js";
import { numeroAleatorio, getCSSVariableValue, calculoContedor } from './FN-generales.js';

// Instancia de la clase  que contiene los elementos del HTML
let 
    htmlElement = new HTML(),
    topDiv = 0,
    leftDiv = 0
;

// Crea el fondo del Hero-Banner
function crearFondo() {
    htmlElement.etiqueta({
        etiqueta: 'section',
        clase:'banner',
        seleccion:'#root > main',
    });
};

// Crea el icono del Hero-Banner
function crearIcono(n,color) {
    const top = numeroAleatorio(350), left = numeroAleatorio(1550), seleccion = '#root > main > .banner';
   
    // Validación de posición del Icono
    topDiv = top < calculoContedor(seleccion).alto ? top : topDiv;
    leftDiv = left < calculoContedor(seleccion).largo ? left : leftDiv;


    // Crea la etiqueta DIV que contiene el todos los elementos del Icono
    htmlElement.etiqueta({
        etiqueta: 'div',
        seleccion: seleccion,
        clase:'icono',
        id: `icon-${n}`,
        backgroundColor: getCSSVariableValue(color),
        top: `${topDiv}rem`,
        left: `${leftDiv}rem`,
    });

    // Crea la etiqueta IMG que contiene la imagen del icono
    htmlElement.etiqueta({
        etiqueta: 'img',
        seleccion: `${htmlElement.elemento.seleccion} #${htmlElement.elemento.id}`,
        src:'../../../assets/images/Logo blanco 32.png',
        alt:'Img-mega',
    });
};

// Experta las funciones del modulo Hero-Banner
export {
    crearFondo,
    crearIcono,
};