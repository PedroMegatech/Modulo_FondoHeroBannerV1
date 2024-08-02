import { configColorIconoBanner,timeBanner } from '../config/config.js';
import { crearFondo, crearIcono } from '../../assets/JS/FN-banner-hero.js';
import { EliminarIconos } from '../../assets/JS/FN-generales.js';

let 
    { interval } = rxjs,
    observador1$ = interval(timeBanner.tiempo),
    subscription1
;

function ActivarObservable() {
    subscription1 = observador1$.subscribe(() => {
        EliminarIconos('#root .icono');                                            // Eliminación de los Iconos
        configColorIconoBanner.map((item,index) => crearIcono(index, item.color)); // Cargamos la generación de Icono
    });
};

// Detenemos el observer
export function DesactivarObservable() {
    subscription1.unsubscribe();
};

export default function() {
    crearFondo();        // Cargamos el Fondo del Hero-Banner
    ActivarObservable(); // Activamos el Contenido de animación
};