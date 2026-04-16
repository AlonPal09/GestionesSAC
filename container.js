document.addEventListener("DOMContentLoaded", function() {
    function adjustImageSize() {
        const imageContainer = document.querySelector('.image-container img');
        if (window.innerWidth < 768) {
            imageContainer.style.width = '100%';
            imageContainer.style.height = 'auto';
        } else {
            imageContainer.style.width = 'auto';
            imageContainer.style.height = '200px';
        }
    }

    adjustImageSize();

    window.addEventListener('resize', adjustImageSize);
});
