function cambiarIdioma(checked) {
    const elements = document.querySelectorAll('[data-es], [data-en]');

    elements.forEach(element => {
        if (checked) {
            // Cambiar al inglés
            if (element.getAttribute('data-en')) {
                element.textContent = element.getAttribute('data-en');
            }
        } else {
            // Cambiar al español
            if (element.getAttribute('data-es')) {
                element.textContent = element.getAttribute('data-es');
            }
        }
    });
}