export default class HTML {
    // Define el elemento del documento
    doc = document;

    // Define el constructor de la clase
    constructor() {};

    // Define el metodo de la clase
    etiqueta(propiedad) {

        let atrStyle = '';

        this.elemento = {
            etiqueta:propiedad.etiqueta,                // Define el tipo de etiqueta
            seleccion:propiedad.seleccion,              // Define la seleccion de la etiqueta
            clase:propiedad.clase,                      // Defina el nombre de la clase
            texto:propiedad.texto,                      // Define el texto de la etiqueta
            id:propiedad.id,                            // Define el identificador de la etiqueta
            src:propiedad.src,                          // Define la ruta del archivo de la imagen de la etiqueta
            alt:propiedad.alt,                          // Define el nombre de alternativo de la imagen si hay error
            backgroundColor:propiedad.backgroundColor,  // Define el estilo de la etiqueta
            top:propiedad.top,                          
            left:propiedad.left,     
            valor:propiedad.valor,                      // Define el valor de la etiqueta                  
        };

        if (this.elemento.backgroundColor) {
            atrStyle += `background-color: ${this.elemento.backgroundColor}; `;
        };

        if (this.elemento.top) {
            atrStyle += `top: ${this.elemento.top}; `;
        };

        if (this.elemento.left) {
            atrStyle += `left: ${this.elemento.left}; `;
        };

        // Crea la Etiqueta de manera reusable
        this.contenedor = `
            <${this.elemento.etiqueta}
                ${this.elemento.clase ? ` class="${this.elemento.clase}"` : ""}
                ${this.elemento.id ? ` id="${this.elemento.id}"` : ""}
                ${this.elemento.src ? ` src="${this.elemento.src}"` : ""}
                ${this.elemento.alt ? ` src="${this.elemento.alt}"` : ""}
                ${atrStyle ? ` style="${atrStyle}"` : ""}
                ${this.elemento.valor ? ` value="${this.elemento.valor}"` : ""}>
             ${this.elemento.texto ? `${this.elemento.texto}` : ""}
             </${this.elemento.etiqueta}>
        `;
    
        // agrega el html al documento
        this.doc.querySelector(`${this.elemento.seleccion}`).innerHTML += this.contenedor;
    };
};