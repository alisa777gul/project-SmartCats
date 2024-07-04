 function showImage(clickedImage) {
        let mainImage = document.getElementById('mainImage');
        
        mainImage.src = clickedImage.src;
        mainImage.srcset = clickedImage.srcset;
        mainImage.alt = clickedImage.alt;
   mainImage.style.display = 'block';
   
        // Добавляем класс для увеличения картинки
        mainImage.classList.add('zoom-in');
    }

    // Ensure the function is accessible in the global namespace
    window.showImage = showImage;