document.addEventListener("DOMContentLoaded", function() {
    function adjustImageSize() {
        const imageContainer = document.querySelector('.image-container img');
        if (window.innerWidth < 768) { // Cambia el tamaño para pantallas pequeñas
            imageContainer.style.width = '100%';
            imageContainer.style.height = 'auto'; // Mantiene la proporción
        } else {
            imageContainer.style.width = 'auto';
            imageContainer.style.height = '200px'; // Altura original
        }
    }

    adjustImageSize(); // Ajustar el tamaño al cargar

    window.addEventListener('resize', adjustImageSize); // Ajustar en cambio de tamaño de ventana
});
