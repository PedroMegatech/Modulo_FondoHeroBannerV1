const doc = document;

// Funcion para levantar las variables del :root de CSS
function getCSSVariableValue(nombreVAriable) {
    return getComputedStyle(doc.querySelector(':root')).getPropertyValue(nombreVAriable);
};

// Función para crear un numero aleatorio
function numeroAleatorio(num) {
    return Math.floor(Math.random() * Math.floor(num))/16;
};

// Calcular medida del contenedor en REM
function calculoContedor(selector) {
    return {
        largo:(doc.querySelector(`${selector}`).clientWidth)/16,
        alto:(doc.querySelector(`${selector}`).clientHeight)/16
    };
};

// Eliminar todos los hijos de un contenedor ('#root .icono')
function EliminarIconos(selector) {
    // Identificamos todos los Iconos y con el forEach Barremos todos los contenedores para eliminar los icono
    doc.querySelectorAll(`${selector}`).forEach( item => item.parentNode.removeChild(item));
};

// Exportación de Funciones del Modulo Hero-Banner
export {
    numeroAleatorio,
    getCSSVariableValue,
    calculoContedor,
    EliminarIconos
};