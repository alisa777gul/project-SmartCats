
        
 function showImage(event) {
        let mainImage = document.getElementById('mainImage');
        let clickedImage = event.target;

        mainImage.src = clickedImage.src;
        mainImage.srcset = clickedImage.srcset;
        mainImage.alt = clickedImage.alt;
    }

    // Ensure the function is accessible in the global namespace
    window.showImage = showImage;
