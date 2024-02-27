let traducciones = {};
let idiomaActual = localStorage.getItem('idioma') || 'es'; // Obtener el idioma almacenado o establecer 'en' como predeterminado si no hay ninguno guardado

// Cargar traducciones del JSON 
function cargarTraducciones(lang) {
    fetch(`/languages/traducciones_${lang}.json`)
        .then(response => response.json())
        .then(data => {
            traducciones = data;
            aplicarTraducciones();
        })
        .catch(error => console.error('Error al cargar traducciones!', error));
}

// Aplicar traducciones a los elementos del HTML
function aplicarTraducciones() {
    // Selecciona todos los elementos que tienen el atributo data-i18n
    let elementosATraducir = document.querySelectorAll('[data-i18n]');

    // Itera sobre los elementos y aplica las traducciones
    elementosATraducir.forEach(elemento => {
        let clave = elemento.getAttribute('data-i18n');
        // Verifica si la clave está definida en las traducciones
        if (traducciones[clave]) {
            elemento.innerText = traducciones[clave];
        }
    });
}

// Cambiar idioma y almacenar en el almacenamiento local
function cambiarIdioma(lang) {
    cargarTraducciones(lang);
    localStorage.setItem('idioma', lang); // Almacena el idioma seleccionado en el almacenamiento local
}

// Inicializar con el idioma almacenado o con el idioma predeterminado
window.onload = function() {
    cargarTraducciones(idiomaActual);
};
