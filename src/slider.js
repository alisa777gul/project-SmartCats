
    function showImage(clickedImage) {
        let mainImage = document.getElementById('mainImage');
        
        mainImage.src = clickedImage.src;
        mainImage.srcset = clickedImage.srcset;
        mainImage.alt = clickedImage.alt;
    }

    // Ensure the function is accessible in the global namespace
    window.showImage = showImage;